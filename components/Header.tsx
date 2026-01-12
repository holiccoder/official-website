"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from 'next/image'
import WebsiteLogo from '@/app/assets/logo-cornflower-blue.png'
import WebsiteLightLogo from '@/app/assets/logo-light.png'
import {useTranslations} from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";


const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('home');

  const menuItems = t.raw('navigation');

    return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4 px-4">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/80 backdrop-blur-md rounded-full shadow-lg py-2 px-6 flex items-center w-full max-w-5xl mx-auto justify-between"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        {/* Mobile "K-Means Karan" Text - Centered between the hamburger menu and theme toggle */}
        <div className="flex-1 md:hidden text-center">
          <span className="font-mono text-lg text-gray-800 dark:text-gray-200">K-Means Karan</span>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
            { theme === 'dark' ? <Image src={WebsiteLightLogo} alt={'logo'} width={125} className={'mr-6'} />: <Image src={WebsiteLogo} alt={'logo'} width={125} className={'mr-6'} />}
          <nav className="flex items-center gap-8 text-sm md:text-base">
            {menuItems.map((item:string) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-").trim()}`}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-mono"
              >
                {item}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>


        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 md:ml-2 ml-auto rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-4 right-4 bg-background/90 backdrop-blur-md shadow-lg rounded-lg py-4 flex flex-col items-center space-y-4"
          >
            {menuItems.map((item:string) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-").trim()}`}
                className="text-lg font-mono text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
