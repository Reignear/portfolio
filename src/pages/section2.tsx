import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerChild,
} from "../lib/animations";
import { useInView } from "../lib/useInView";

const Section2 = () => {
  const { ref, isInView } = useInView();

  // Features data for staggered animation
  const features = [
    {
      title: "Technical Expertise",
      description: "CS background + hands-on troubleshooting skills",
      icon: "🔧",
    },
    {
      title: "AI Powered",
      description: "ChatGPT & Gemini for content & research optimization",
      icon: "🤖",
    },
    {
      title: "Google Workspace Master",
      description: "Expert-level proficiency across all Google tools",
      icon: "☁️",
    },
    {
      title: "Design Ready",
      description: "Canva proficiency for professional visual assets",
      icon: "🎨",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Image Side - Slide in from left */}
        <motion.div
          className="relative shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start"
          variants={fadeInLeft}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Circular background shade with subtle animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full z-0 blur-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />

          <div className="relative z-10">
            {/* Main Image with hover lift */}
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl border border-neutral-200"
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.15)",
              }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/enhanced.jpg"
                alt="About Me"
                className="w-full max-w-sm aspect-4/5 object-cover"
              />
            </motion.div>

            {/* Quote Card - Float in from bottom-right */}
            <motion.div
              className="absolute -bottom-6 -right-8 md:-right-12 bg-neutral-900 text-white p-6 md:p-8 rounded-xl shadow-lg max-w-xs border border-neutral-800"
              initial={{ opacity: 0, y: 40, x: 40 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 0, y: 40, x: 40 }
              }
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p className="text-lg font-semibold mb-3 leading-tight italic text-blue-200">
                "Excellence in every detail."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-blue-500/50"></div>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-wider">
                  Philosophy
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content Side - Slide in from right */}
        <motion.div
          className="w-full lg:w-1/2 text-left z-10"
          variants={fadeInRight}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Label with animation */}
          <motion.span
            className="badge-neutral"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ABOUT ME
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-8 tracking-tight mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Expertise Meets Operational Excellence
          </motion.h2>

          {/* Description paragraph */}
          <motion.p
            className="text-neutral-600 text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With a solid{" "}
            <span className="font-bold text-neutral-900">
              Computer Science background
            </span>
            , I bring a unique technical edge to virtual assistance. I don't
            just manage tasks—I optimize workflows, leverage AI tools, and
            implement strategic solutions that drive real business value.
          </motion.p>

          {/* Features Grid - Staggered animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card"
                variants={staggerChild}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
