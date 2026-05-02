import canvaIcon from "../../public/canva-wordmark-2.svg";
import capcutIcon from "../../public/capcut-3.svg";
import claudeIcon from "../../public/claude-logo.svg";
import geminiIcon from "../../public/gemini-icon-logo.svg";
import googleMeetIcon from "../../public/google-meet-icon-2020-.svg";
import googleWorkspaceIcon from "../../public/logo-google-workspace.svg";
import notionIcon from "../../public/notion-2.svg";
import slackIcon from "../../public/slack-new-logo.svg";
import zoomIcon from "../../public/zoom-app.svg";
import microsoft365Icon from "../../public/Microsoft-365.svg";
import chatgptIcon from "../../public/chatgpt-6.svg";
import metabusinesssuiteIcon from "../../public/facebook-2020-1-1.svg";
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
];
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
            <div className="flex flex-wrap gap-10 justify-center">
              {data.map((tool) => (
                <div
                  key={tool.title}
                  className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                >
                  <img src={tool.icon} alt={tool.title} className="h-15 w-15" />
                  <p className="text-xs font-medium text-gray-700 text-center max-w-15">
                    {tool.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
