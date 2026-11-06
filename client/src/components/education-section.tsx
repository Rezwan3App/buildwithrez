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

/** The one logo slot on the Experience page, shared by roles and schools. */
export const logoBox =
  "flex h-[68px] w-[136px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] border border-slate-200 bg-white p-2";

/** Readable copy on this page: 16px and tighter on phones, the 17px base from sm: up. */
export const body = "text-[16px] leading-[1.45] sm:text-base sm:leading-[1.6]";

export default function EducationSection() {
  return (
    <section id="education" className="py-8 sm:py-20 bg-[var(--paper-deep)]">
      <div className="wrap">
        <h2 className="mb-5 sm:mb-8">Education</h2>
        <ul className="border-t-2 border-ink">
          {schools.map((s) => (
            <li
              key={s.degree}
              className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-b border-slate-300 py-4 sm:py-5 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:gap-x-8"
            >
              <div className={logoBox}>
                <img loading="lazy" decoding="async" width={120} height={52} src={s.logo} alt={s.alt} className="h-full w-full object-contain" />
              </div>
              <p className="text-[15px] font-semibold leading-snug text-slate-600 sm:col-start-3 sm:row-start-1">{s.meta}</p>
              <div className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                <h3 className="text-[1.1875rem] sm:text-xl font-bold">{s.degree}</h3>
                <p className={`mt-1 text-slate-700 ${body}`}>{s.school}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
