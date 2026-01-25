export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "Vice President",
      organization: "Data Science and Analytics Society (DSAS)",
      description: "Leading strategic communications and member engagement initiatives for the premier data science student organization.",
      logo: "/attached_assets/image_1766520551280.png",
      orgColor: "text-teal-400"
    },
    {
      title: "MBA Student Ambassador",
      organization: "Baruch College",
      description: "Representing the MBA program and supporting prospective students through admissions and orientation processes.",
      logo: "/attached_assets/image_1766520608918.png",
      orgColor: "text-cyan-400"
    },
    {
      title: "City Tutor Mentor",
      organization: "The City Tutors",
      description: "Providing academic mentorship and tutoring support to students in STEM subjects and career development.",
      logo: "/attached_assets/image_1766520593513.png",
      orgColor: "text-violet-400"
    }
  ];

  return (
    <section id="leadership" className="py-16 relative overflow-hidden bg-professional-alt">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
            Leadership & Community
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipRoles.map((role, index) => (
            <div
              key={index}
              className="group bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-500 hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 p-2 shadow-lg">
                  <img 
                    src={role.logo} 
                    alt={role.organization}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {role.title}
                  </h3>
                  <p className={`text-sm font-medium ${role.orgColor}`}>
                    {role.organization}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
