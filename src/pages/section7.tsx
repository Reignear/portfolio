import React from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Code } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerChild,
  buttonHover,
} from "../lib/animations";
import { useInView } from "../lib/useInView";

const Section7: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-full bg-neutral-900 text-white pt-24 pb-12 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative gradient orbs */}
      {/* <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-50 -z-10"></div> */}

      <div className="max-w-7xl mx-auto">
        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fadeInLeft}
          >
            <motion.span
              className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get in Touch
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Work Together
            </motion.h2>

            <motion.p
              className="text-neutral-400 text-base md:text-lg mb-12 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project in mind or questions about my services? I'd love to
              hear from you. I respond to all inquiries within 24 hours.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <motion.a
                href="mailto:reignearm@gmail.com"
                className="flex items-center gap-4 group"
                variants={staggerChild}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="font-semibold text-white hover:text-blue-400 transition-colors">
                    reignearm@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4"
                variants={staggerChild}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Clock className="w-5 h-5 text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-neutral-400">Response Time</p>
                  <p className="font-semibold text-white">Within 24 hours</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={staggerChild}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Code className="h-6 w-6 text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-neutral-400">Github Account</p>
                  <a
                    href="https://github.com/Reignear"
                    className="font-semibold text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Reignear
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right CTA Card */}
          <motion.div
            className="bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 rounded-2xl p-10 backdrop-blur-sm"
            variants={fadeInRight}
            whileHover={{
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Click the button below to schedule a consultation call or send
                me an email with your requirements.
              </p>

              <motion.button
                onClick={() =>
                  (window.location.href =
                    "mailto:reignearm@gmail.com?subject=Project%20Inquiry")
                }
                className="btn-primary w-full text-base mb-4"
                {...buttonHover}
              >
                Start a Conversation
              </motion.button>

              <motion.a
                href="https://www.linkedin.com/in/reignear-magallanes-9015342b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-base text-center block"
                whileHover={{ scale: 1.02 }}
              >
                Connect on LinkedIn
              </motion.a>

              <p className="text-xs text-neutral-500 mt-6 text-center">
                Available for full-time and project-based work
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section7;
