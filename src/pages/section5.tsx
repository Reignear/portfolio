const Section5 = () => {
  const projects = [
    {
      title: "SK Website & System Management",
      description:
        "Managed and maintained the Sangguniang Kabataan website, ensuring accurate content updates, system testing, and smooth user experience for youth-related services.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
    {
      title: "Social Media Content & Engagement",
      description:
        "Planned, created, and scheduled Facebook content while monitoring weekly engagement metrics to improve audience interaction and online presence.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
    {
      title: "Email & Inbox Management System",
      description:
        "Organized and responded to 30+ weekly inquiries, prioritizing messages, maintaining professional communication, and improving response turnaround time.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
    {
      title: "Calendar & Task Coordination",
      description:
        "Managed scheduling, task tracking, and meeting coordination using Google Calendar and Notion to ensure timely completion of daily operations.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
    {
      title: "Data Entry & Records Management",
      description:
        "Maintained and updated structured data in Google Sheets, ensuring accuracy, organization, and easy retrieval of student and administrative records.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
    {
      title: "CRM & Workflow Optimization",
      description:
        "Improved internal workflows by organizing digital tools, streamlining repetitive tasks, and supporting efficient communication across teams.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
    {
      title: "Virtual Meeting & Communication Support",
      description:
        "Handled meeting setup, Zoom/Google Meet coordination, and follow-ups to ensure smooth communication between team members and clients.",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2400&auto=format&fit=crop",
      isMac: false,
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="inline-block text-[11px] uppercase tracking-[0.4em] font-black text-gray-400 mb-6">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight tracking-tight">
            Experience in Action.
          </h2>
        </div>
        <p className="text-gray-400 text-lg md:text-xl max-w-sm text-left md:text-right font-light leading-relaxed">
          A selection of high-impact projects where I've delivered
          organizational and technical excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col group">
            {/* Project Image Container */}
            <div
              className={`relative overflow-hidden rounded-2xl mb-8 ${project.isMac ? "bg-[#f5f5f7] p-10 flex items-center justify-center aspect-[1.4/1]" : "aspect-[1.4/1]"}`}
            >
              {project.isMac ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Simplified Laptop Frame */}
                  <div className="relative w-[90%] aspect-16/10 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  {/* Laptop Base */}
                  <div className="w-full h-3 bg-linear-to-b from-[#e0e0e0] to-[#b0b0b0] rounded-b-xl mt-0.5 shadow-md"></div>
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              )}
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-bold text-[#111111] mb-4 tracking-tight">
              {project.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed max-w-md font-medium">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
