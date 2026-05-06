import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../lib/animations";
import { useInView } from "../../lib/useInView";
import { useNavigate } from "react-router-dom";

const SampleWebsite = () => {
  const { ref, isInView } = useInView();

  const projects = [
    {
      id: 1,
      title: "Celestial Bloom Online Gift & Flower Shop",
      description: `Celestial Bloom is an online gift and flower shop that specializes in beautifully curated bouquets and gift arrangements designed for meaningful occasions. The brand focuses on delivering high-quality, visually striking floral products that carry emotional value — whether for a partner, friend, or family member.`,

      image: "/img/website/web-1.svg",
      platform: "Website",
      featured: true,
      link: "https://flower-shop-website-fmet.onrender.com",
    },
    {
      id: 2,
      title: "Physics E-Portfolio Website",
      description: `This is a student-made physics e-portfolio website titled "The Big 4", designed as a digital school project centered around the topic of electricity. The main focus of the site, as stated in its subtitle, is "Devices for Measuring Current and Voltage & Electrical Safety," meaning it explores the tools used to measure electrical quantities like ammeters and voltmeters, as well as safe practices when working with electrical equipment.`,

      image: "/img/website/web-2.svg",
      platform: "Website",
      featured: true,
      link: "https://sites.google.com/view/the-big-fours/home",
    },
    {
      id: 3,
      title:
        "Transparency Website for Sangguniang Kabataan of Barangay Balagunan",
      description: `Official website of the Sangguniang Kabataan (SK) of Barangay Balagunan, Sto. Tomas, Davao del Norte (DDN), in the Republic of the Philippines. The Sangguniang Kabataan is the youth legislative body at the barangay level in the Philippines, composed of elected young officials who represent and serve the interests of the youth in their community. The website serves as a digital transparency and information platform for the SK of Barangay Balagunan. This is evident through its navigation menu, which includes sections for Officials, News, Announcements, Full Disclosure, Budget, PPA (Programs, Projects, and Activities), About Us, and Contact Us. These sections suggest that the site is designed to keep community members — particularly the youth — informed about their local government's activities, financial matters, and ongoing programs.`,

      image: "/img/website/web-3.svg",
      platform: "Website",
      featured: true,
      link: "#",
    },
    {
      id: 4,
      title: "Barangay Census System",
      description: `A barangay management information system built specifically for Philippine barangay officials to digitally manage and monitor community data. It serves as a centralized platform where barangay administrators can track residents, households, and local government services efficiently in one place.`,

      image: "/img/website/web-4.svg",
      platform: "Website",
      featured: true,
      link: "#",
    },
    {
      id: 5,
      title: "I-Link College of Science & Technology Official Website",
      description: `This is the official website of i-Link College of Science & Technology, a higher education institution in the Philippines. The website is a full institutional portal designed to serve students, faculty, and prospective enrollees. `,

      image: "/img/website/web-5.svg",
      platform: "Website",
      featured: true,
      link: "#",
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
              WEBSITE
              <span className="text-blue-500 ml-3">DEVELOPMENT</span> AND
              <span className="text-blue-500 ml-3">MANAGEMENT</span>
            </h3>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Creating impactful websites and managing online presence to drive
            engagement and growth.
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

export default SampleWebsite;
