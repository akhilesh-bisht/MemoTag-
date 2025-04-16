"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Clock, Users, Activity } from "lucide-react";

// Define constants for the statistics to avoid redefining on each render
const stats = [
  {
    icon: <Brain className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    value: "55M+",
    label: "People living with dementia worldwide",
    description: "Expected to rise to 139 million by 2050",
  },
  {
    icon: <Clock className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    value: "30%",
    label: "Of cases go undiagnosed",
    description: "Leading to delayed treatment and care",
  },
  {
    icon: <Users className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    value: "11M+",
    label: "Unpaid caregivers in the US alone",
    description: "Providing 15.3 billion hours of care annually",
  },
  {
    icon: <Activity className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    value: "3-5 Years",
    label: "Average time from symptoms to diagnosis",
    description: "Critical time lost for intervention",
  },
];

// Animation variants for the container (grid of stats)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adds a delay between each child animation
    },
  },
};

// Animation variants for each stat card
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5, // Duration of the animation
    },
  },
};

export default function Problem() {
  // Use the `useRef` hook to reference the section and trigger animation when it comes into view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 }); // Trigger animation once, with 30% of the element in view

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state before animation
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when section is in view
          transition={{ duration: 0.6 }} // Transition duration
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Challenge of Dementia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dementia affects millions worldwide, but diagnosis and care remain
            challenging. Early detection and continuous monitoring are critical
            for better outcomes.
          </p>
        </motion.div>

        {/* Statistics section with animated grid */}
        <motion.div
          variants={containerVariants} // Apply container animation variants
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            // Render each stat card with animation
            <motion.div
              key={index}
              variants={itemVariants} // Apply individual item animation variants
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                  {stat.value}
                </h3>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Information section with gradient background */}
        <motion.div
          initial={{ opacity: 0 }} // Initial state before animation
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Trigger animation when in view
          transition={{ delay: 0.8, duration: 0.6 }} // Delay and duration for the transition
          className="mt-16 bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-500 dark:to-teal-400 rounded-xl p-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">
                Why Early Detection Matters
              </h3>
              <p className="text-teal-50">
                Early intervention can slow progression, improve quality of
                life, and reduce caregiver burden. Yet most cases are diagnosed
                in later stages when intervention is less effective.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-white/10 rounded-lg p-4">
              {/* Progress bar section */}
              <div className="h-6 bg-white/20 rounded-full mb-3 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "30%" }}
                ></div>{" "}
                {/* Progress bar showing early stage */}
              </div>
              <div className="flex justify-between text-sm">
                <span>Early Stage</span>
                <span>30% diagnosed</span>
              </div>

              <div className="h-6 bg-white/20 rounded-full mb-3 mt-4 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "70%" }}
                ></div>{" "}
                {/* Progress bar showing late stage */}
              </div>
              <div className="flex justify-between text-sm">
                <span>Late Stage</span>
                <span>70% diagnosed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
