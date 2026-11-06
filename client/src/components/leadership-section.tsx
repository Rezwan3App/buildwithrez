import { body } from "@/components/education-section";

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "Vice President",
      organization: "Data Science and Analytics Society, Baruch College",
      dates: "Feb 2024 – Jan 2026",
      description: "I led communications and member engagement for the society.",
    },
    {
      title: "Zicklin Graduate Student Ambassador",
      organization: "Baruch College",
      dates: "",
      description: "I represent the MBA program at admissions events and orientation.",
    },
    {
      title: "City Tutor Mentor",
      organization: "The City Tutors",
      dates: "",
      description: "I mentor students in STEM subjects and career development.",
    }
  ];

  return (
    <section id="leadership" className="py-8 sm:py-20">
      <div className="wrap">
        <h2 className="mb-5 sm:mb-8">Leadership and community</h2>
        <ul className="border-t-2 border-ink">
          {leadershipRoles.map((role) => (
            <li key={role.title} className="grid gap-y-1 border-b border-slate-300 py-4 sm:gap-y-2 sm:py-5 lg:grid-cols-[minmax(0,2fr)_3fr] lg:gap-x-12">
              <div className="min-w-0">
                <h3 className="text-[1.1875rem] sm:text-xl font-bold">{role.title}</h3>
                <p className={`mt-1 font-semibold text-slate-600 ${body}`}>{role.organization}{role.dates && ` · ${role.dates}`}</p>
              </div>
              <p className={`text-slate-700 ${body}`}>{role.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
