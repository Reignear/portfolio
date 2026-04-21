const Section6 = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#f9f9f9] py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Main Featured Testimonial */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -top-10 -left-6 text-gray-200 opacity-50 z-0">
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.8571 0C10.2857 0 0 10.2857 0 22.8571V60H34.2857V22.8571H11.4286C11.4286 16.5714 16.5714 11.4286 22.8571 11.4286V0ZM68.5714 0C56 0 45.7143 10.2857 45.7143 22.8571V60H80V22.8571H57.1429C57.1429 16.5714 62.2857 11.4286 68.5714 11.4286V0Z" />
            </svg>
          </div>

          <div className="relative z-10">
            <span className="inline-block text-[11px] uppercase tracking-[0.4em] font-black text-gray-400 mb-8">
              CLIENT FEEDBACK
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.3] mb-12 tracking-tight">
              "The level of attention to detail and proactive thinking is
              unmatched. She didn’t just take tasks off my plate; she improved
              how we were doing them."
            </h2>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop"
                  alt="James Arrington"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[#111111] text-base">
                  James Arrington
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  CEO, Arrington Media
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Secondary Testimonials Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-gray-50">
            {/* Testimonial 1 */}
            <div className="mb-14">
              <p className="italic text-[#555555] text-lg leading-relaxed mb-6 font-medium">
                "Her CS background was a game-changer when we were setting up
                our new Slack integrations and Notion workspace. A true
                partner."
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#111111] font-bold text-sm">
                  Sarah Mitchell
                </p>
                <span className="text-gray-400 font-bold text-sm">—</span>
                <p className="text-[#555555] font-medium text-sm">
                  Creative Director
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-14"></div>

            {/* Testimonial 2 */}
            <div>
              <p className="italic text-[#555555] text-lg leading-relaxed mb-6 font-medium">
                "Efficient, communicative, and incredibly reliable. I finally
                feel like my business has the breathing room it needs to grow."
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#111111] font-bold text-sm">Michael Chen</p>
                <span className="text-gray-400 font-bold text-sm">—</span>
                <p className="text-[#555555] font-medium text-sm">
                  E-commerce Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
