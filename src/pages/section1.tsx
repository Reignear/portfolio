import { motion } from "framer-motion";
import {
  fadeInUp,
  badgeSlide,
  buttonHover,
  staggerContainer,
  pulse,
} from "../lib/animations";

const HeroSection = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      x: 60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  // Floating badge animation
  const badgeVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    whileHover: {
      scale: 1.08,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 pt-20 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen flex items-center">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content - Staggered animations */}
        <motion.div
          className="z-20 text-left"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Badge with slide animation */}
          <motion.div className="mb-8" variants={badgeSlide}>
            <span className="badge-neutral">
              ✨ TRUSTED BY ENTREPRENEURS & EXECUTIVES
            </span>
          </motion.div>

          {/* Heading with fade and slide up */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 tracking-tight text-neutral-900"
            variants={fadeInUp}
          >
            Streamline Your Business with Expert Virtual Support
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-neutral-600 max-w-xl mb-10 leading-relaxed font-light"
            variants={fadeInUp}
          >
            I handle the administrative tasks that slow you down, so you can
            focus on strategic growth and what matters most to your business.
          </motion.p>

          {/* CTA Buttons - Staggered entrance */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.button
              {...buttonHover}
              onClick={() =>
                (window.location.href =
                  "mailto:reignearm@gmail.com?subject=Hiring%20Inquiry")
              }
              className="btn-primary text-base"
              variants={fadeInUp}
            >
              Get Started
            </motion.button>
            <motion.a
              href="#portfolio"
              className="btn-secondary text-base text-center"
              variants={fadeInUp}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-neutral-200 flex flex-wrap gap-8"
            variants={fadeInUp}
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-900">
                3+
              </p>
              <p className="text-sm text-neutral-600">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-900">
                2+
              </p>
              <p className="text-sm text-neutral-600">Clients Served</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-neutral-900">
                24/7
              </p>
              <p className="text-sm text-neutral-600">Support Available</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Space - Entrance from right */}
        <motion.div
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-full max-w-md">
            {/* Background decorative card with subtle animation */}
            <motion.div
              className="absolute -top-8 -right-8 w-full h-full bg-linear-to-br from-blue-500/10 to-blue-600/5 rounded-3xl -z-10 rotate-3 border border-blue-200/50 backdrop-blur-sm"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Main Image with hover lift effect */}
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl border border-neutral-200"
              whileHover={{
                y: -12,
                boxShadow: "0 35px 70px -15px rgba(59, 130, 246, 0.15)",
              }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/enhanced.jpg"
                alt="Professional Virtual Assistant"
                className="w-full aspect-4/5 object-cover"
              />
            </motion.div>

            {/* Floating Status Badge - Animated entrance and pulse */}
            <motion.div
              className="absolute -bottom-8 -left-6 bg-white p-5 pr-8 rounded-2xl shadow-lg flex items-center gap-4 border border-neutral-100 z-30"
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-12 h-12 bg-linear-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white shadow-md shrink-0"
                variants={pulse}
                initial="initial"
                animate="animate"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 leading-none mb-1">
                  Availability
                </span>
                <span className="text-base font-bold text-neutral-900 leading-none">
                  Open for Various Roles
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
