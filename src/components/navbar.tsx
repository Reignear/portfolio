interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#e0e0e0] border-b border-gray-300 py-3.5 px-6 md:px-12 flex justify-between items-center ${className}`}
    >
      {/* Brand */}
      <div className="flex items-center">
        <a href="/" className="text-[#1a1a1a] font-bold text-lg tracking-tight">
          VA Executive
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8 text-[14px] font-medium text-[#555555]">
          <li>
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-black transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-black transition-colors">
              Portfolio
            </a>
          </li>
          {/* <li><a href="#testimonials" className="hover:text-black transition-colors">Testimonials</a></li> */}
          <li>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Action Button */}
      <button className="px-7 py-2.5 bg-[#5d5d5d] text-white text-[13px] font-bold rounded-lg hover:bg-[#4a4a4a] transition-all cursor-pointer shadow-sm">
        Hire Me
      </button>
    </nav>
  );
};

export default NavBar;
