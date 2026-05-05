import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, hoverScale } from "../lib/animations";
import { useInView } from "../lib/useInView";

import canvaIcon from "/canva-wordmark-2.svg";
import capcutIcon from "/capcut-3.svg";
import claudeIcon from "/claude-logo.svg";
import geminiIcon from "/gemini-icon-logo.svg";
import googleMeetIcon from "/google-meet-icon-2020-.svg";
import googleWorkspaceIcon from "/logo-google-workspace.svg";
import notionIcon from "/notion-2.svg";
import slackIcon from "/slack-new-logo.svg";
import zoomIcon from "/zoom-app.svg";
import microsoft365Icon from "/Microsoft-365.svg";
import chatgptIcon from "/chatgpt-6.svg";
import metabusinesssuiteIcon from "/facebook-2020-1-1.svg";
import salesforceIcon from "/salesforce-2.svg";
import adobeIcon from "/adobe-photoshop-2.svg";

const data = [
  {
    title: "Google Workspace",
    icon: googleWorkspaceIcon,
  },
  {
    title: "Microsoft 365",
    icon: microsoft365Icon,
  },
  {
    title: "Canva",
    icon: canvaIcon,
  },
  {
    title: "CapCut",
    icon: capcutIcon,
  },
  {
    title: "ChatGPT",
    icon: chatgptIcon,
  },
  {
    title: "Claude",
    icon: claudeIcon,
  },
  {
    title: "Gemini",
    icon: geminiIcon,
  },
  {
    title: "Notion",
    icon: notionIcon,
  },
  {
    title: "Slack",
    icon: slackIcon,
  },
  {
    title: "Zoom",
    icon: zoomIcon,
  },
  {
    title: "Google Meet",
    icon: googleMeetIcon,
  },
  {
    title: "Meta Business Suite",
    icon: metabusinesssuiteIcon,
  },
  {
    title: "Salesforce",
    icon: salesforceIcon,
  },
  {
    title: "Adobe Photoshop",
    icon: adobeIcon,
  },
];
const Section4 = () => {
  const { ref, isInView } = useInView();

  // Staggered list animations
  const listVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Toolkit icon animations with stagger
  const toolkitContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const toolkitItemVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="expertise"
      className="bg-[#f7f7f7] py-24 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Side: Title & Description - Fade in from left */}
        <motion.div
          className="w-full lg:w-1/3 text-left"
          variants={fadeInLeft}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Label with x-translation */}
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.4em] font-black text-gray-400 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            EXPERTISE
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#111111] leading-[1.15] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reliable Virtual Support & Digital Skills.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-500 text-lg leading-relaxed font-light max-w-[320px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Focused on delivering organized, efficient, and detail-oriented
            support for modern remote teams.
          </motion.p>
        </motion.div>

        {/* Right Side: Skills & Toolkit */}
        <motion.div
          className="w-full lg:w-2/3 flex flex-col gap-8"
          variants={fadeInRight}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Administrative Skills - Staggered list items */}
            <motion.div
              className="bg-white p-10 py-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              {...hoverScale}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-xl font-bold text-[#111111] mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Administrative Skills
              </motion.h3>

              {/* Staggered skill items */}
              <motion.ul
                className="space-y-6"
                variants={listVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Email & Inbox Management
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Calendar Scheduling & Coordination
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Data Entry & Records Organization
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Customer Support & Inquiry Handling
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Technical Skills - Staggered list items */}
            <motion.div
              className="bg-white p-10 py-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              {...hoverScale}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-xl font-bold text-[#111111] mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Technical Skills
              </motion.h3>

              {/* Staggered skill items */}
              <motion.ul
                className="space-y-6"
                variants={listVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Google Workspace (Docs, Sheets, Drive)
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Basic Web & System Management
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Database Handling & Data Tracking
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base"
                  variants={listItemVariants}
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  AI Tools for Productivity (ChatGPT, Gemini)
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          {/* Bottom Row - Toolkit */}
          <motion.div
            className="bg-white p-10 py-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            {...hoverScale}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-xl font-bold text-[#111111] mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              The Core Toolkit
            </motion.h3>

            {/* Staggered toolkit icons */}
            <motion.div
              className="flex flex-wrap gap-10 justify-center"
              variants={toolkitContainerVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {data.map((tool) => (
                <motion.div
                  key={tool.title}
                  className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  variants={toolkitItemVariants}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img src={tool.icon} alt={tool.title} className="h-15 w-15" />
                  <p className="text-xs font-medium text-gray-700 text-center max-w-15">
                    {tool.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section4;
