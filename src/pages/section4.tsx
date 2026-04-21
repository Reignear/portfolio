const Section4 = () => {
  return (
    <section
      id="expertise"
      className="bg-[#f7f7f7] py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Side: Title & Description */}
        <div className="w-full lg:w-1/3 text-left">
          <span className="inline-block text-[11px] uppercase tracking-[0.4em] font-black text-gray-400 mb-6">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-[1.15] mb-8 tracking-tight">
            Reliable Virtual Support & Digital Skills.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-light max-w-[320px]">
            Focused on delivering organized, efficient, and detail-oriented
            support for modern remote teams.
          </p>
        </div>

        {/* Right Side: Skills & Toolkit */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Administrative Skills */}
            <div className="bg-white p-10 py-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-[#111111] mb-8">
                Administrative Skills
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Email & Inbox Management
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Calendar Scheduling & Coordination
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Data Entry & Records Organization
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Customer Support & Inquiry Handling
                </li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-white p-10 py-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-[#111111] mb-8">
                Technical Skills
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Google Workspace (Docs, Sheets, Drive)
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Basic Web & System Management
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Database Handling & Data Tracking
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-medium text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  AI Tools for Productivity (ChatGPT, Gemini)
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bg-white p-10 py-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-[#111111] mb-10">
              The Core Toolkit
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Google Workspace",
                "Microsoft 365",
                "Canva",
                "CapCut",
                "ChatGPT / Claude / Gemini",
                "Notion",
                "Slack",
                "Zoom / Google Meet",
                "Meta Business Suite",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-6 py-3 bg-[#e8e9eb] text-[#555555] text-[13px] font-bold rounded-lg whitespace-nowrap"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
