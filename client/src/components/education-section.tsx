import { Row, SectionHeading } from "@/components/row";

const schools = [
  {
    degree: "MBA, Business and Data Analytics focus",
    school: "Baruch College, Zicklin School of Business",
    meta: "4.0 GPA · Exp. May 2027",
    logo: "/attached_assets/image_1766520608918.png",
    alt: "Baruch College",
  },
  {
    degree: "B.E. Mechanical Engineering",
    school: "City College of New York",
    meta: "3.83 GPA",
    logo: "/attached_assets/ccny-seal.png",
    alt: "City College of New York",
  },
];

export default function EducationSection() {
  return (
    <section>
      <SectionHeading id="education" title="Education" />
      {schools.map((s) => (
        <Row key={s.degree} meta={s.meta}>
          <img loading="lazy" decoding="async" src={s.logo} alt={s.alt} className="mb-3 h-6 w-6 object-contain" />
          <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Manrope', sans-serif" }}>{s.degree}</h3>
          <p className="text-slate-600">{s.school}</p>
        </Row>
      ))}
    </section>
  );
}
