"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Traction() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Counter animation states
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // Animate counters when in view
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const interval = 20;

      const steps = Math.floor(duration / interval);

      const increment1 = 10000 / steps;
      const increment2 = 35000 / steps;
      const increment3 = 500 / steps;
      const increment4 = 3 / steps;

      let current1 = 0;
      let current2 = 0;
      let current3 = 0;
      let current4 = 0;

      const timer = setInterval(() => {
        current1 += increment1;
        current2 += increment2;
        current3 += increment3;
        current4 += increment4;

        setCount1(Math.min(Math.floor(current1), 10000));
        setCount2(Math.min(Math.floor(current2), 35000));
        setCount3(Math.min(Math.floor(current3), 500));
        setCount4(Math.min(Math.floor(current4 * 10) / 10, 3));

        if (
          current1 >= 10000 &&
          current2 >= 35000 &&
          current3 >= 500 &&
          current4 >= 3
        ) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="Impact"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MemoTag is already making a difference in dementia care through
            partnerships with leading healthcare organizations and research
            institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {count1.toLocaleString()}+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Insights Collected
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {count2.toLocaleString()}+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Hospitals & Patient Network
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {count3}+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Institutions Supported
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {count4.toFixed(1)}x
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Faster Detection than Traditional Methods
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Trusted by Leading Organizations
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                "5 clinical trials completed",
                "Featured in Journal of Alzheimer's Disease",
                "Endorsed by leading neurologists",
                "HIPAA and GDPR compliant",
                "FDA breakthrough device designation",
                "Integrated with major EHR systems",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 p-6 bg-teal-50 dark:bg-teal-900/30 rounded-lg"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">
                "MemoTag represents a significant advancement in how we approach
                dementia care. The ability to detect subtle cognitive changes
                years before traditional methods could revolutionize early
                intervention strategies."
              </p>
              <div className="mt-3 font-medium text-gray-900 dark:text-white">
                Dr. Sarah Chen, Neurologist
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Stanford Memory Disorders Center
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
