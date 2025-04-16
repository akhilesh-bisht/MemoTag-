"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, LineChart, Smartphone, Shield, ArrowRight } from "lucide-react";

export default function Solution() {
  // Reference to the section element for in-view detection
  const sectionRef = useRef(null);

  // Check if the section is in view, triggering animations when scrolled into view
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Define the features of the solution to be displayed in the section
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cognitive Assessment",
      description:
        "AI-powered tests detect subtle changes in memory, speech patterns, and cognitive function that may indicate early dementia.",
      color: "from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Continuous Monitoring",
      description:
        "Track cognitive health over time with personalized baselines and detect changes that might be missed in occasional clinical visits.",
      color: "from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Caregiver Support",
      description:
        "Mobile app provides caregivers with insights, care recommendations, and resources tailored to their loved one's specific needs.",
      color:
        "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Clinical Integration",
      description:
        "Securely share data with healthcare providers to improve diagnosis accuracy and treatment planning.",
      color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
    },
  ];

  // Variants for animations of container and individual items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations with a delay
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Initial state (off-screen and invisible)
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Animation duration for individual items
      },
    },
  };

  return (
    // Main section of the solution description
    <section
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title and description section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How MemoTag Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform combines cognitive assessment, continuous
            monitoring, and caregiver support to revolutionize dementia care.
          </p>
        </motion.div>

        {/* Features grid with individual animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Feature icon with gradient background */}
                <div
                  className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${feature.color} rounded-lg text-white mb-5`}
                >
                  {feature.icon}
                </div>
                {/* Feature title and description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The MemoTag Difference section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Benefits list */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The MemoTag Difference
              </h3>
              <ul className="space-y-4">
                {[
                  "Early detection up to 5 years before traditional methods",
                  "93% accuracy in identifying mild cognitive impairment",
                  "Personalized care plans that adapt as needs change",
                  "HIPAA-compliant and secure data handling",
                  "Reduces caregiver stress by 40% through actionable insights",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ArrowRight className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: AI-Powered Analysis */}
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-white">
                {/* AI Analysis section */}
                <div className="mb-6 text-center">
                  <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
                    <Brain className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    AI-Powered Analysis
                  </h4>
                  <p className="text-teal-50">
                    Our proprietary algorithms analyze over 200 cognitive and
                    behavioral markers to detect subtle changes that indicate
                    potential cognitive decline.
                  </p>
                </div>

                {/* Stats grid */}
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">5x</div>
                      <div className="text-sm text-teal-50">
                        Earlier Detection
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">93%</div>
                      <div className="text-sm text-teal-50">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">40%</div>
                      <div className="text-sm text-teal-50">Reduced Stress</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-teal-50">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
