"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "About Us", href: "#" },
        { name: "MindMap", href: "#" },
        { name: "Caregivers", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Try Memotag", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/company/memotag/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/memotag.in/",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "A-19 Ramesh Nagar, New Delhi 110015",
    },
    { icon: <Mail className="h-5 w-5" />, text: "contact@memotag.io" },
    { icon: <Phone className="h-5 w-5" />, text: "+91 880056622" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gray-50 dark:bg-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                MemoTag
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                An AI-wearable with cognitive health tracking & data analysis
                tool for dementia & elder caregiving.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-gray-400 dark:text-gray-500 mr-3">
                    {item.icon}
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-teal-600 dark:text-gray-500 dark:hover:text-teal-400 transition-colors"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} MemoTag, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Image in Bottom-Right Corner */}
      <img
        src="https://images.unsplash.com/photo-1588776814546-ec7b58f98a4b?auto=format&fit=crop&w=500&q=60"
        alt="Healthcare AI concept"
        className="absolute bottom-4 right-4 w-32 h-auto rounded-lg shadow-lg opacity-20 pointer-events-none hidden md:block"
      />
    </footer>
  );
}
