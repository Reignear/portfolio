import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../lib/animations";
import { useInView } from "../lib/useInView";

const Section5 = () => {
  const { ref, isInView } = useInView();

  const projects = [
    {
      title: "SK Website & System Management",
      description:
        "Managed and maintained the Sangguniang Kabataan website, ensuring accurate content updates, system testing, and smooth user experience.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
      tag: "Web Management",
      link: "/sample/website",
      show: false,
    },
    {
      title: "Social Media Content & Engagement",
      description:
        "Planned, created, and scheduled Facebook content while monitoring weekly engagement metrics to improve audience interaction.",
      image:
        "https://images.unsplash.com/photo-1663836657800-39ab390d80b9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Social Media",
      link: "/sample/social-media",
      show: true,
    },
    {
      title: "Email & Inbox Management System",
      description:
        "Organized and responded to 30+ weekly inquiries, prioritizing messages, maintaining professional communication.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
      tag: "Communication",
      link: "/sample/email-management",
      show: false,
    },
    {
      title: "Calendar & Task Coordination",
      description:
        "Managed scheduling, task tracking, and meeting coordination using Google Calendar and Notion.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2400&auto=format&fit=crop",
      tag: "Organization",
      link: "/sample/calendar-management",
      show: false,
    },
    {
      title: "Data Entry & Records Management",
      description:
        "Maintained and updated structured data in Google Sheets, ensuring accuracy, organization, and easy retrieval.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
      tag: "Data Management",
      link: "/sample/data-management",
      show: false,
    },
    {
      title: "CRM & Workflow Optimization",
      description:
        "Improved internal workflows by organizing digital tools, streamlining repetitive tasks, and supporting efficient communication.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
      tag: "Process Optimization",
      link: "/sample/crm",
      show: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="portfolio"
      className="bg-linear-to-b from-slate-50 to-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="badge-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            PORTFOLIO
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real Results in Action
          </motion.h2>
          <motion.p
            className="text-neutral-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A showcase of projects where I've delivered organizational
            excellence and tangible business impact.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group flex flex-col"
              variants={staggerChild}
            >
              {/* Project Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl mb-8 aspect-4/3 bg-neutral-100"
                whileHover={{
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1, filter: "brightness(1)" }}
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1.05)",
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />

                {/* Overlay tag */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-blue-600 border border-blue-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.tag}
                </motion.div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-neutral-900 mb-3 leading-tight"
                  whileHover={{ color: "#3b82f6" }}
                >
                  {project.title}
                </motion.h3>
                <motion.p className="text-neutral-600 text-base leading-relaxed">
                  {project.description}
                </motion.p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 text-sm underline underline-offset-5 font-semibold hover:text-blue-400 transition-colors flex gap-1 items-center ${project.show ? "opacity-100" : "hidden"}`}
                >
                  View Sample
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
