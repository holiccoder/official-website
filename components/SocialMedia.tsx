"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram, FaLine } from "react-icons/fa"
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const socialLinks = [
  { name: "Mail", icon: CiMail, url: "mailto:karanshingde@gmail.com" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/karan842" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/karanshingde" },
  { name: "Twitter", icon: FaXTwitter, url: "https://twitter.com/kmeanskaran" },
  { name: "Medium", icon: FaMedium, url: "https://medium.com/@karanshingde" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/kmeanskaran" },
  { name: "Line", icon: FaLine, url: "https://line.me/ti/p/~karan.shingde" }
]

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
        <div className="flex justify-center space-x-6 sm:space-x-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <social.icon />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMedia
