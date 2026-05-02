import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../lib/animations";
import { useInView } from "../lib/useInView";

const Section3 = () => {
  const { ref, isInView } = useInView();

  const services = [
    {
      title: "Email Management",
      description:
        "Inbox zero strategies, priority filtering, and professional correspondence handling.",
      emoji: "✉️",
    },
    {
      title: "Calendar Management",
      description:
        "Seamless scheduling, meeting coordination, and time-block optimization.",
      emoji: "📅",
    },
    {
      title: "Data Entry",
      description:
        "High-accuracy data processing, CRM updates, and database maintenance.",
      emoji: "📊",
    },
    {
      title: "Social Media",
      description:
        "Engagement, post scheduling, and basic content creation using Canva.",
      emoji: "📱",
    },
    {
      title: "Research & Analysis",
      description:
        "Market research, competitor analysis, and AI-assisted data gathering.",
      emoji: "🔍",
    },
    {
      title: "File Organization",
      description:
        "Digital asset management, cloud storage cleanup, and system documentation.",
      emoji: "📁",
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="bg-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Animated entrance */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="badge-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SERVICES
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive Administrative Solutions
          </motion.h2>
          <motion.p
            className="text-neutral-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Tailored services designed to streamline operations and let you
            focus on strategic growth.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid - Staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card group relative overflow-hidden"
              variants={staggerChild}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-xl transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-6"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {service.emoji}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
