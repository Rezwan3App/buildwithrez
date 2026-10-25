import { Reveal } from "@/components/reveal";

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "Vice President",
      organization: "Data Science and Analytics Society",
      description: "I led communications and member engagement for Baruch's data science student organization from 2024 through late 2025.",
    },
    {
      title: "Zicklin Graduate Student Ambassador",
      organization: "Baruch College",
      description: "I represent the MBA program to prospective students through admissions events and orientation.",
    },
    {
      title: "City Tutor Mentor",
      organization: "The City Tutors",
      description: "I mentor students in STEM subjects and career development.",
    }
  ];

  return (
    <section id="leadership" className="py-14 md:py-20 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-3">Outside the classroom</p>
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Leadership & Community
          </h2>
        </Reveal>

        <div className="border-t border-slate-200">
          {leadershipRoles.map((role, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_3fr] gap-x-10 gap-y-1 py-5 border-b border-slate-200">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-900">{role.title}</h3>
                  <p className="text-slate-600 text-sm">{role.organization}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{role.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
