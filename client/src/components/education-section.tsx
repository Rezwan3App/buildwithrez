import { Reveal } from "@/components/reveal";

const schools = [
  {
    degree: "MBA, Business and Data Analytics focus",
    school: "Baruch College, Zicklin School of Business",
    meta: "4.0 GPA · Exp. May 2027",
    logo: "/attached_assets/image_1766520608918.png",
    alt: "Baruch College logo",
  },
  {
    degree: "B.E. Mechanical Engineering",
    school: "The City College of New York",
    meta: "3.83 GPA",
    logo: "/attached_assets/ccny-seal.png",
    alt: "The City College of New York seal",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-10 md:py-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Education</h2>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {schools.map((s) => (
              <li key={s.degree} className="flex items-center gap-4 py-4">
                <img loading="lazy" decoding="async" width={40} height={40} src={s.logo} alt={s.alt} className="h-10 w-10 object-contain shrink-0" />
                <div className="flex-1 min-w-0 sm:flex sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{s.degree}</h3>
                    <p className="text-slate-600">{s.school}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-1 sm:mt-0 shrink-0">{s.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
