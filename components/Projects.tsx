"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import {useTranslations} from "next-intl";

import lingyuevision from "@/app/assets/projects/lingyuevision.png";
import lalicat from "@/app/assets/projects/lalicat-homepage-ja.png";
import woocommerce from "@/app/assets/projects/woocommerce-payment-ja.png";
import luxdrape from "@/app/assets/projects/luxdrape-home-ja.png";
import salesea from "@/app/assets/projects/salesea-home-ja.png";

const projects = [
  {
    title: "AI Powered WordPress Automatic Posting content Plugin",
    description: "This is a wordpress plugin to automatically post contents to wordpress CMS from a AI powered resting api.",
    tags: ["PHP", "wordpress plugin", "AI", "content posting", "REST API"],
    image: salesea,
    github: "https://github.com/tycooninc/AI-Powered-WordPress-Automatic-Posting-content-Plugin",
    link: "https://nyaynidhi.com/",
    technologies: ["PHP", "Wordpress", "REST API", "HTML", "CSS", "Javascript"],
  },
  {
    title: "A Factory Wordpress Theme",
    description: "This theme is dedicated to a factory, it is highly customizable, user can enter products and news, clients can submit inquiries and quotes through wordpress rest API",
    tags: ["PHP", "wordpress theme", "factory", "wordpress theme"],
    image: lingyuevision,
    github: "https://github.com/tycooninc/A-highly-customizable-factory-wordpress-theme",
      link: "https://finohub.com/",
      technologies: ["PHP", "Wordpress", "REST API", "HTML", "CSS", "Javascript"],
  },
    {
        title: "A Fingerprint browser official website using wordpress and NextJS",
        description: "This is a fingerprint browser official website using wordpress and NextJS. It is SEO optimized and multilingual, frontend is using NextJS, backend is using wordpress RestAPI.",
        tags: ["PHP", "NextJS", "fingerprint browser", "product website"],
        image: lalicat,
        github: "https://github.com/tycooninc/A-Fingerprint-browser-official-website-using-wordpress-and-NextJS",
        link: "https://www.lalicat.com",
        technologies: ["PHP", "NextJS", "Wordpress", "REST API", "HTML", "CSS", "Javascript"],
    },
    {
        title: "A woocommerce custom payment gateway plugin",
        description: "This is a woocommerce custom payment gateway plugin. It is a plugin for woocommerce, it is used to accept payments from customers.",
        tags: ["PHP", "wordpress", "woocommerce", "payment gateway", "product"],
        image: woocommerce,
        link: "https://finohub.com/",
        github: "https://github.com/tycooninc/A-Woocommerce-Payment-Extension",
        technologies: ["PHP", "WooCommerce", "Wordpress", "REST API", "HTML", "CSS", "Javascript"],
    },
    {
        title: "Shopify Breeze Theme custom development",
        description: "This is a fingerprint browser official website using wordpress and NextJS. It is SEO optimized and multilingual, frontend is using NextJS, backend is using wordpress RestAPI.",
        tags: ["PHP", "NextJS", "fingerprint browser", "product website"],
        image: luxdrape,
        link: "https://finohub.com/",
        github: "https://github.com/tycooninc/Shopify-Breeze-Theme-custom-development",
        technologies: ["PHP", "NextJS", "Wordpress", "REST API", "HTML",]
    },
]

const Projects = () => {

    const t = useTranslations('home');
    const projects = t.raw('projects.projects');

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.raw('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black border border-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end items-center">
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
