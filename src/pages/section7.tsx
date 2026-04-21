import React from "react";
import { Mail, Clock } from "lucide-react";

const Section7: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <div
      id="contact"
      className="w-full bg-[#0d0d0d] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 max-w-md">
            Ready to Optimize Your Business?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-12 max-w-100 leading-relaxed">
            Let's discuss how my services can support your goals. I respond to
            all inquiries within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Mail className="w-4 h-4 text-zinc-300" />
              </div>
              <span className="text-sm md:text-base font-medium">
                reignearm@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Clock className="w-4 h-4 text-zinc-300" />
              </div>
              <span className="text-sm md:text-base font-medium">
                Mon - Fri: 9:00 AM - 5:00 PM EST
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Form Card */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 placeholder:text-zinc-800 focus:outline-none focus:border-zinc-700 transition-colors"
                readOnly
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 placeholder:text-zinc-800 focus:outline-none focus:border-zinc-700 transition-colors"
                readOnly
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 placeholder:text-zinc-800 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
                readOnly
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors mt-4 text-sm uppercase tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-base font-black tracking-widest uppercase">
          VA Executive
        </div>

        <div className="flex items-center gap-8 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
          <a
            href="https://www.facebook.com/ReignearM"
            className="hover:text-white transition-colors"
          >
            Facebook
          </a>

          <a
            href="https://www.linkedin.com/in/reignear-magallanes-9015342b1/"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/ebyongggg/?hl=en"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>

        <div className="text-[11px] text-zinc-600 font-medium">
          © {date} VA Executive. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Section7;
