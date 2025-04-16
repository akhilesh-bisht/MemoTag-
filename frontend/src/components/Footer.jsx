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
  // Reference for footer element to track its visibility
  const footerRef = useRef(null);

  // Check if footer is in view, to trigger animation when scrolled into view
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  // Get the current year for the copyright section
  const currentYear = new Date().getFullYear();

  // Footer links data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Resources", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "HIPAA Compliance", href: "#" },
      ],
    },
  ];

  // Social media links and icons
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  // Contact information (email, phone, address)
  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "contact@memotag.ai" },
    { icon: <Phone className="h-5 w-5" />, text: "+1 (800) 123-4567" },
    { icon: <MapPin className="h-5 w-5" />, text: "San Francisco, CA" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Footer left column: brand info and contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Brand description */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                MemoTag
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Revolutionizing dementia care through AI-powered early detection
                and continuous monitoring.
              </p>
            </div>

            {/* Contact details */}
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

            {/* Social media icons */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-teal-600 dark:text-gray-500 dark:hover:text-teal-400 transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer columns for links (Product, Company, Legal) */}
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

        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright text */}
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} MemoTag, Inc. All rights reserved.
            </p>
            {/* Footer navigation links (Privacy, Terms, Cookies) */}
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
    </footer>
  );
}
