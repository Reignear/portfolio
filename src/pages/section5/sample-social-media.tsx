import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../lib/animations";
import { useInView } from "../../lib/useInView";
import { useNavigate } from "react-router-dom";

const SampleSocialMedia = () => {
  const { ref, isInView } = useInView();

  const projects = [
    {
      id: 1,
      title: "SK League 2025",
      description:
        "A promotional poster for the SK League 2025 of Sangguniang Kabataan ng Balagunan, Santo Tomas, Davao del Norte.",

      image: "/img/social-media/sm-1.svg",
      platform: "Facebook",
      featured: true,
      link: "https://www.facebook.com/share/p/1BF7HwLDJ5/",
    },
    {
      id: 2,
      title: "Congratulatory Post",
      description: `A congratulatory graduation poster from DMMA College of Southern Philippines celebrating Christ Cyrhel Jay B. Pineda, a Batch 2025 graduate of Bachelor of Science in Marine Transportation.`,
      image: "/img/social-media/sm-2.svg",
      platform: "Facebook",
      featured: true,
      link: "https://www.facebook.com/share/p/18kHpzoN9u/",
    },
    {
      id: 3,
      title: "Publication Material",
      description: `A promotional event poster for the Sangguniang Kabataan of Balagunan's Katipunan ng Kabataan 3rd General Assembly 2025.`,
      image: "/img/social-media/sm-3.svg",
      platform: "Facebook",
      featured: true,
      link: "https://www.facebook.com/share/p/18fMVbMqHi/",
    },
    {
      id: 4,
      title: "Promotional Material",
      description:
        "A promotional poster by Sangguniang Kabataan ng Balagunan announcing open reservations for their Basketball Open League.",
      image: "/img/social-media/sm-4.svg",
      platform: "Facebook",
      featured: true,
      link: "https://www.facebook.com/share/p/18LKiCFTP4/",
    },
    {
      id: 5,
      title: "Congratulatory Post",
      description:
        "A congratulatory poster from Sangguniang Kabataan ng Balagunan, Balagunan, Santo Tomas, Davao del Norte, celebrating four outstanding individuals.",
      image: "/img/social-media/sm-5.svg",
      platform: "Facebook",
      featured: true,
      link: "https://www.facebook.com/share/p/1CLYH36EZi/",
    },
  ];

  const navigate = useNavigate();
  const handleBack = () => {
    navigate({ pathname: "/", hash: "#portfolio" });
  };
  return (
    <section
      ref={ref}
      className="bg-linear-to-b from-slate-950 to-slate-900 py-20 px-6 md:px-12 lg:px-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.a
          onClick={handleBack}
          className="text-white underline underline-offset-4 cursor-pointer"
        >
          Back
        </motion.a>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              SOCIAL MEDIA
              <span className="text-blue-500 ml-3">MANAGEMENT</span>
            </h3>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Creating impactful strategies and content for brands across
            platform.
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              variants={staggerChild}
            >
              <div className="relative overflow-hidden rounded-lg h-64 md:h-72 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h4 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white transition-colors">
                      {project.platform}
                    </span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SampleSocialMedia;
