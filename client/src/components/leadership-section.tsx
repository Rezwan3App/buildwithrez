import { Reveal } from "@/components/reveal";

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "Vice President",
      organization: "Data Science and Analytics Society",
      description: "I lead communications and member engagement for Baruch's data science student organization.",
      logo: "/attached_assets/image_1766520551280.png",
    },
    {
      title: "MBA Student Ambassador",
      organization: "Baruch College",
      description: "I represent the MBA program to prospective students through admissions events and orientation.",
      logo: "/attached_assets/image_1766520608918.png",
    },
    {
      title: "City Tutor Mentor",
      organization: "The City Tutors",
      description: "I mentor students in STEM subjects and career development.",
      logo: "/attached_assets/image_1766520593513.png",
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-3">Outside the classroom</p>
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            Leadership & Community
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {leadershipRoles.map((role, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="flex items-center gap-3 mb-3">
                <img loading="lazy" decoding="async"
                  src={role.logo}
                  alt={role.organization}
                  className="w-9 h-9 object-contain"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-900">
                    {role.title}
                  </h3>
                  <p className="text-slate-500 text-sm truncate">
                    {role.organization}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {role.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
