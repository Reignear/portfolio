const Section2 = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Image Side */}
        <div className="relative shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
          {/* Circular background shade */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-100 rounded-full z-0"></div>

          <div className="relative z-10">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
                src="/enhanced.jpg"
                alt="About Me"
                className="w-full max-w-105 aspect-4/5 object-cover"
              />
            </div>

            {/* Quote Card */}
            <div className="absolute -bottom-8 -right-8 md:-right-12 bg-[#111111] text-white p-8 md:p-10 rounded-xl shadow-2xl max-w-70">
              <p className=" text-xl md:text-2xl font-semibold mb-4 leading-tight italic">
                "Precision in every task."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-gray-500"></div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-none">
                  Core Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Side */}
        <div className="w-full lg:w-1/2 text-left z-10">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-black text-gray-400 mb-6">
            ABOUT ME
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#111111] leading-[1.1] mb-10 tracking-tight">
            A Technical Foundation with a Focus on Operational Excellence.
          </h2>

          <p className="text-[#666666] text-lg leading-relaxed mb-12">
            With a solid background in{" "}
            <span className="text-black font-bold border-b-2 border-black">
              Computer Science
            </span>
            , I bring a unique technical edge to virtual assistance. I don't
            just manage tasks; I optimize workflows and leverage modern tools
            like ChatGPT and Canva to provide superior results. My approach
            combines strong organization with proactive communication.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-[#111111]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111111] mb-1">
                  Tech Savvy
                </h4>
                <p className="text-[13px] text-gray-500 leading-snug">
                  CS background for seamless troubleshooting and automation.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-[#111111]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111111] mb-1">
                  AI Integrated
                </h4>
                <p className="text-[13px] text-gray-500 leading-snug">
                  Expertise in ChatGPT for content and research optimization.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-[#111111]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111111] mb-1">
                  Google Workspace
                </h4>
                <p className="text-[13px] text-gray-500 leading-snug">
                  Advanced proficiency in the full Google collaborative suite.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-[#111111]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111111] mb-1">
                  Design Capable
                </h4>
                <p className="text-[13px] text-gray-500 leading-snug">
                  Skilled in Canva for high-quality visual assets and decks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
