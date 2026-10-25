import { Row, SectionHeading } from "@/components/row";

const leadershipRoles = [
  {
    title: "Vice President, Data Science and Analytics Society",
    organization: "Baruch College",
    dates: "Feb 2024 – Jan 2026",
    description: "I led communications and member engagement for the society.",
  },
  {
    title: "Zicklin Graduate Student Ambassador",
    organization: "Baruch College",
    dates: "Baruch",
    description: "I represent the MBA program to prospective students through admissions events and orientation.",
  },
  {
    title: "City Tutor Mentor",
    organization: "The City Tutors",
    dates: "The City Tutors",
    description: "I mentor students in STEM subjects and career development.",
  },
];

export function LeadershipSection() {
  return (
    <section>
      <SectionHeading id="leadership" title="Leadership and community" intro="Outside the classroom" />
      {leadershipRoles.map((role) => (
        <Row key={role.title} meta={<span className="whitespace-nowrap">{role.dates}</span>}>
          <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Manrope', sans-serif" }}>{role.title}</h3>
          <p className="text-slate-600">{role.organization}</p>
          <p className="mt-2 text-slate-600">{role.description}</p>
        </Row>
      ))}
    </section>
  );
}
