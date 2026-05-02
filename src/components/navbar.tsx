import { motion } from "framer-motion";
import { buttonHover } from "../lib/animations";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  // Staggered animation for nav links
  const navLinkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const navLinks = ["About", "Services", "Portfolio", "Contact"];
  const navHrefs = ["#about", "#services", "#portfolio", "#contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-neutral-200/50 shadow-sm py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center ${className}`}
    >
      {/* Brand - Logo with subtle entrance */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 0.1 },
        }}
      >
        <a
          href="/"
          className="text-neutral-900 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors"
        >
          VA Executive
        </a>
      </motion.div>

      <div className="hidden md:flex items-center gap-12">
        <ul className="flex gap-8 text-sm font-medium text-neutral-600">
          {navLinks.map((link, i) => (
            <motion.li
              key={link}
              custom={i}
              variants={navLinkVariants}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href={navHrefs[i]}
                className="relative text-neutral-600 hover:text-neutral-900 transition-colors"
                whileHover={{ color: "#111827" }}
              >
                {link}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.button
        {...buttonHover}
        onClick={() =>
          (window.location.href =
            "mailto:reignearm@gmail.com?subject=Hiring%20Inquiry")
        }
        className="btn-primary text-sm"
      >
        Hire Me
      </motion.button>
    </motion.nav>
  );
};

export default NavBar;
