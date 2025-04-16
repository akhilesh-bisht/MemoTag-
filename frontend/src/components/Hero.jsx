"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BrainAnimation from "./Brain-Animation";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4 sm:px-6 lg:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              AI for{" "}
              <span className="text-teal-600 dark:text-teal-400">
                Dementia Care
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              MemoTag uses advanced AI to detect early cognitive decline and
              deliver personalized care for dementia patients and caregivers.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button
                aria-label="Join the waitlist"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative">
                  <span
                    className={`transition-transform duration-300 inline-block ${
                      isHovered ? "translate-x-[-8px]" : ""
                    }`}
                  >
                    Join Waitlist
                  </span>
                  <span
                    className={`absolute transition-all duration-300 inline-block ${
                      isHovered
                        ? "opacity-100 translate-x-2"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    →
                  </span>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT - ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <BrainAnimation />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            Scroll to learn more
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
