"use client"

import { motion } from "framer-motion"
import { FaWordpress, FaCode, FaShopify, FaMobile, FaSpider } from "react-icons/fa"
import { TbSeo } from "react-icons/tb"
import { useTranslations } from "next-intl"

const Services = () => {
  const t = useTranslations('home')

  // Ensure your JSON structure has an 'icon' field matching these keys
  const iconMap = {
    FaWordpress: FaWordpress,
    TbSeo: TbSeo,
    FaShopify: FaShopify,
    FaMobile: FaMobile,
    FaSpider: FaSpider,
    FaCode: FaCode,
  }

  const services = t.raw('services.services') as Array<{ icon: string; title: string; description: string }>;

  return (
      <section id="services" className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t('services.title') /* Localize the heading too! */}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => {
              // Dynamically select the component based on the string in your JSON
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || FaCode;

              return (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }} // Suggesting 'y' for a smoother entrance
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} // Prevents animation triggering every time you scroll up/down
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="text-3xl text-blue-500 mr-4" />
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Services