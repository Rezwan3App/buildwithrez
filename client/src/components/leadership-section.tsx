import { Reveal } from "@/components/reveal";

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "Vice President",
      organization: "Data Science and Analytics Society (DSAS)",
      description: "Leading strategic communications and member engagement initiatives for the premier data science student organization.",
      logo: "/attached_assets/image_1766520551280.png",
    },
    {
      title: "MBA Student Ambassador",
      organization: "Baruch College",
      description: "Representing the MBA program and supporting prospective students through admissions and orientation processes.",
      logo: "/attached_assets/image_1766520608918.png",
    },
    {
      title: "City Tutor Mentor",
      organization: "The City Tutors",
      description: "Providing academic mentorship and tutoring support to students in STEM subjects and career development.",
      logo: "/attached_assets/image_1766520593513.png",
    }
  ];

  return (
    <section id="leadership" className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-800"></span>
            Leadership & Community
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leadershipRoles.map((role, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group h-full p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0 p-2">
                    <img
                      src={role.logo}
                      alt={role.organization}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900">
                      {role.title}
                    </h3>
                    <p className="text-blue-800 text-sm font-medium truncate">
                      {role.organization}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
