import { Download } from "lucide-react";
import { Link } from "wouter";
import { Footer } from "@/components/footer";
import { PageClose } from "@/components/page-close";
import { usePageTitle } from "@/hooks/use-page-title";
import { body, logoBox } from "@/lib/ui";

const tracks = [
  {
    name: "Analytics",
    courses: [
      "STA 9708 Managerial Statistics",
      "CIS 9650 Programming for Analytics",
      "CIS 9340 Principles of Database Management",
      "CIS 9655 Data Visualization",
      "CIS 9660 Data Mining",
      "CIS 9557 Business Analytics",
      "CIS 9000 Information Technology Strategy (in progress)",
    ],
  },
  {
    name: "Business",
    courses: [
      "ACC 9110 Financial Reporting",
      "FIN 9770 Corporate Finance",
      "ECO 9732 Firms and Markets (in progress)",
      "MKT 9703 Data-Driven Marketing Management",
      "MGT 9600 Strategy and Competitive Advantage",
      "MGT 9301 Leading and Managing People (in progress)",
      "BUS 9558 Strategic Business Communication",
      "ENT 9973 Creative Strategies for Innovation",
    ],
  },
];

const involvement = [
  {
    title: "Zicklin Graduate Student Ambassador",
    detail: "I host sessions for incoming MBA students and share my experience in the program.",
  },
  {
    title: "Vice President, Data Science and Analytics Society",
    detail: "Feb 2024 to Jan 2026. I ran 15+ workshops, panels and events, and active membership doubled in one semester.",
  },
];

const link =
  "inline-flex items-center min-h-[44px] font-semibold text-blue-900 underline underline-offset-4 decoration-slate-400 hover:decoration-blue-900 transition-colors";

function School({
  id,
  logo,
  alt,
  degree,
  school,
  meta,
  children,
  tone,
}: {
  id: string;
  logo: string;
  alt: string;
  degree: string;
  school: string;
  meta: string;
  children: React.ReactNode;
  tone?: string;
}) {
  return (
    <section aria-labelledby={id} className={`py-8 sm:py-20 ${tone ?? ""}`}>
      <div className="wrap">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className={logoBox}>
            <img loading="lazy" decoding="async" width={120} height={52} src={logo} alt={alt} className="h-full w-full object-contain" />
          </div>
          <p className="label text-slate-600">{meta}</p>
        </div>
        <h2 id={id} className="mt-5 sm:mt-6">{degree}</h2>
        <p className={`mt-1 font-semibold text-[var(--ink)] ${body}`}>{school}</p>
        {children}
      </div>
    </section>
  );
}

export default function Education() {
  usePageTitle("Education");

  return (
    <div className="min-h-screen">
      <header className="band-ink blueprint">
        <div className="wrap py-8 sm:py-14">
          <h1>Education</h1>
          <p className="mt-3 text-lg">An MBA in progress and an engineering degree behind it.</p>
        </div>
      </header>

      <School
        id="baruch"
        logo="/attached_assets/image_1766520608918.png"
        alt="Baruch College logo"
        degree="MBA, Business and Data Analytics focus"
        school="Baruch College, Zicklin School of Business"
        meta="Evening program · 4.0 GPA · Exp. May 2027"
      >
        <a
          href="/attached_assets/Rezwan_Islam_Baruch_Transcript.pdf"
          download="Rezwan_Islam_Baruch_Transcript.pdf"
          className="btn-line mt-5 w-full sm:w-auto"
        >
          <Download aria-hidden="true" className="h-5 w-5" />
          Download transcript (unofficial)
        </a>
        <h3 className="mt-6 text-[1.1875rem] sm:mt-8 sm:text-xl font-bold">Coursework</h3>
        <div className="mt-3 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.name}>
              <h4 className="border-b-2 border-ink pb-2 text-base font-bold">{t.name}</h4>
              <ul>
                {t.courses.map((c) => (
                  <li key={c} className={`border-b border-slate-300 py-2 text-slate-700 ${body}`}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-[1.1875rem] sm:text-xl font-bold">Involvement</h3>
        <ul className="mt-3 border-t-2 border-ink">
          {involvement.map((i) => (
            <li key={i.title} className="grid gap-y-1 border-b border-slate-300 py-4 lg:grid-cols-[minmax(0,2fr)_3fr] lg:gap-x-12">
              <h4 className="text-base font-bold">{i.title}</h4>
              <p className={`text-slate-700 ${body}`}>{i.detail}</p>
            </li>
          ))}
        </ul>

        <p className={`mt-6 text-slate-700 ${body}`}>I led every team class project.</p>
        <Link href="/projects/mba" className={link}>
          See the MBA projects
        </Link>
      </School>

      <School
        id="ccny"
        logo="/attached_assets/ccny-seal.png"
        alt="The City College of New York seal"
        degree="B.E. Mechanical Engineering"
        school="The City College of New York"
        meta="3.83 GPA · Summa Cum Laude"
        tone="bg-[var(--paper-deep)]"
      >
        <p className={`mt-4 max-w-[60ch] text-slate-700 ${body}`}>
          I specialized in nuclear engineering and finite element analysis in SolidWorks. I then worked as a mechanical
          engineer at Zachry Nuclear Engineering on heat transfer analysis before moving into product.
        </p>
      </School>

      <PageClose />
      <Footer />
    </div>
  );
}
