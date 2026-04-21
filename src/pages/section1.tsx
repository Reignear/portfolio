const HeroSection = () => {
  return (
    <section className="relative bg-[#0d0d0d] text-white pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="z-20 text-left">
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/40 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              STRATEGIC PARTNERSHIP
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold leading-[1.1] mb-8 tracking-tight">
            Reliable Virtual Assistant Helping You Stay Organized and Productive
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-125 mb-12 leading-relaxed font-light">
            Elevating your business efficiency through meticulous administrative
            support and strategic digital management.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-10 py-4.5 bg-white text-black font-extrabold rounded-lg hover:bg-gray-100 transition-all cursor-pointer">
              Work With Me
            </button>
            <button className="px-10 py-4.5 bg-transparent border border-gray-800 text-white font-extrabold rounded-lg hover:bg-gray-900 transition-all cursor-pointer">
              View Services
            </button>
          </div>
        </div>

        {/* Right Image Space */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative">
            {/* Background decorative card */}
            <div className="absolute -top-12 -left-12 w-full h-full bg-[#1a1a1a]/40 rounded-3xl -z-10 -rotate-3 border border-gray-800/20 backdrop-blur-sm"></div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border border-gray-800/30">
              <img
                // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
                src="/enhanced.jpg"
                alt="Professional Virtual Assistant"
                className="w-full max-w-120 aspect-4/5 object-cover grayscale-[0.05]"
              />
            </div>

            {/* Floating Status Badge */}
            <div className="absolute -bottom-10 -left-12 bg-white p-6 pr-10 rounded-2xl shadow-2xl flex items-center gap-5 border border-gray-100 z-30 transform hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#333333] rounded-full flex items-center justify-center text-white shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black tracking-[0.15em] text-gray-500 leading-none mb-2">
                  STATUS
                </span>
                <span className="text-[18px] font-black text-[#111111] leading-none whitespace-nowrap">
                  Currently Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
