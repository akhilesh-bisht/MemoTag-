"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CtaSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  // Example function to check if the user is logged in
  const checkLoginStatus = () => {
    // Replace with actual login check (e.g., check if JWT token exists)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in before submitting the form
    checkLoginStatus();
    if (!isLoggedIn) {
      setErrorMessage("You must be logged in to join the waitlist.");
      return; // Stop form submission if not logged in
    }

    setIsSubmitting(true);
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await axios.post("/api/submitForm", formState);

      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          role: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      // Handle error (show a message, etc.)
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Join the Future of{" "}
              <span className="text-teal-600 dark:text-teal-400">
                Dementia Care
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Be among the first to access MemoTag's revolutionary AI platform.
              Whether you're a healthcare provider, caregiver, or researcher,
              we're looking for partners to help shape the future of cognitive
              health.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Early access to our platform",
                "Personalized onboarding and support",
                "Input on feature development",
                "Special pricing for early adopters",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Limited Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're accepting a limited number of partners for our initial
                rollout. Join the waitlist today to secure your spot.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                  Your request has been submitted successfully. We'll be in
                  touch soon with next steps for joining our early access
                  program.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20 py-2 px-4 rounded-md"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Join the Waitlist
                </h3>

                {/* Error Message if not logged in */}
                {errorMessage && (
                  <p className="text-red-500 text-sm text-center mb-4">
                    {errorMessage}
                  </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 dark:text-gray-200"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 dark:text-gray-200"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="role"
                        className="block text-gray-700 dark:text-gray-200"
                      >
                        I am a...
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formState.role}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="" disabled>
                          Select your role
                        </option>
                        <option value="healthcare_provider">
                          Healthcare Provider
                        </option>
                        <option value="caregiver">Caregiver</option>
                        <option value="researcher">Researcher</option>
                        <option value="patient">Patient</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 dark:text-gray-200"
                      >
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your interest in MemoTag..."
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[100px]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 h-auto text-lg font-medium rounded-xl"
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service. We'll never share your information without
                    permission.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
