const Section3 = () => {
  const services = [
    {
      title: "Email Management",
      description: "Inbox zero strategies, priority filtering, and professional correspondence handling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: "Calendar Management",
      description: "Seamless scheduling, meeting coordination, and time-block optimization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
      ),
    },
    {
      title: "Data Entry",
      description: "High-accuracy data processing, CRM updates, and database maintenance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75" />
        </svg>
      ),
    },
    {
      title: "Social Media",
      description: "Engagement, post scheduling, and basic content creation using Canva.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185zm0 10.628a2.25 2.25 0 103.933 2.185 2.25 2.25 0 00-3.933-2.185z" />
        </svg>
      ),
    },
    {
      title: "Research",
      description: "Deep-dive market research, competitor analysis, and AI-assisted data gathering.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196 7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      title: "File Organization",
      description: "Digital asset management, cloud storage cleanup, and system documentation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.625-1.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm5.25 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 18a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm11.25 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM4.5 20.25h15A2.25 2.25 0 0021.75 18v-5.25L12 11.25 2.25 12.75V18A2.25 2.25 0 004.5 20.25zm0-10.5h15A2.25 2.25 0 0121.75 12V6a2.25 2.25 0 00-2.25-2.25H12l-1.5-1.5H4.5A2.25 2.25 0 002.25 4.5v7.5a2.25 2.25 0 012.25-2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-[#fcfcfc] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="inline-block text-[11px] uppercase tracking-[0.4em] font-black text-gray-400 mb-6">
          WHAT I DO
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-8">
          Strategic Administrative Support
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Tailored solutions designed to reclaim your time and scale your focus.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white p-12 rounded-2xl border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start text-left"
          >
            <div className="w-14 h-14 bg-[#f3f4f6] rounded-xl flex items-center justify-center text-[#555555] mb-10 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-5 tracking-tight">
              {service.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
