import { Footer } from "@/components/footer";
import { PageClose } from "@/components/page-close";
import { ProjectsTabs, ImageModal } from "@/pages/product-management";
import { usePageTitle } from "@/hooks/use-page-title";
import { Download, ExternalLink, Maximize2 } from "lucide-react";
import { useState, useCallback } from "react";
import eatTrackImage from "@assets/Team_5_EatTrak_Presentation_WIP_1767748204830.webp";
import sleepWaveImage from "@assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748368521.jpg";
import mcdonaldsImage from "@assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748480441.jpg";

const mbaProjects = [
  {
    title: "EatTrack",
    description: "A mobile app concept that flags ultra-processed foods while you shop.",
    methods: ["55-person consumer survey", "Figma prototype tested in 7 rounds with 13 users", "Free tier plus a $7.99 one-time premium"],
    image: eatTrackImage,
  },
  {
    title: "SleepWave go-to-market plan",
    description: "A go-to-market plan for SleepWave, a Bose sleep product.",
    methods: ["50+ consumer interviews", "Competitive analysis", "Pricing and first-year revenue model"],
    image: sleepWaveImage,
    pdf: "/attached_assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748370531.pdf",
  },
  {
    title: "McDonald's financial analysis",
    description: "A financial analysis of McDonald's, benchmarked against Wendy's and Burger King.",
    methods: ["10-K financial statement analysis", "Excel DCF with sensitivity tables", "Ratio benchmarking and ESG review"],
    image: mcdonaldsImage,
    pdf: "/attached_assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748486018.pdf",
  },
];

const dataProjects = [
  {
    title: "Ford crash risk analysis",
    highlights: [
      "I ran a logistic regression in Python on 64,785 NYC motor vehicle collisions",
      "Found no significant link between Ford vehicles and fatal crash outcomes (p\u00a0=\u00a00.203)",
      "Found human behavior, such as speeding and impairment, to be the main predictor of fatal crashes",
    ],
    tags: ["Statistics", "Logistic Regression", "Python"],
    pdf: "/attached_assets/Final_Report-1_1767807752880.pdf",
  },
  {
    title: "Pet adoption database",
    highlights: [
      "I designed a relational database with 12+ normalized tables",
      "Created ER diagrams and normalized the schema to BCNF",
      "Wrote SQL queries for adoption matching",
    ],
    tags: ["SQL", "ER Modeling", "Database Design"],
  },
];

const dashboards = [
  {
    href: "https://public.tableau.com/app/profile/rezwan.islam4698/viz/BankChurtProject/Dashboard1",
    testId: "link-tableau-churn",
    src: "/attached_assets/image_1756834020456.webp",
    alt: "Tableau dashboard of bank customer churn by segment",
    width: 1400,
    height: 759,
    title: "Customer churn analysis",
    caption: "Which bank customer segments leave, by geography, product mix, and account activity.",
  },
  {
    href: "https://public.tableau.com/app/profile/rezwan.islam4698/viz/NewYorkCityFireSafetyAnalysisDashboard/Dashboard3",
    testId: "link-tableau-fire",
    src: "/attached_assets/image_1756834044327.webp",
    alt: "Tableau dashboard of NYC fire inspection outcomes by borough",
    width: 1400,
    height: 802,
    title: "NYC fire safety analysis",
    caption: "NYC fire-inspection pass and fail rates by borough, and the most common causes of failure.",
  },
];

const h3Size = "text-[1.1875rem] sm:text-xl font-bold";

function Marked({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-snug text-slate-700">
          <span aria-hidden="true" className="mt-[0.65em] h-0.5 w-3 shrink-0 bg-blue-900" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PdfLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-line mt-6 w-full sm:w-auto">
      <Download aria-hidden="true" className="h-5 w-5" />
      {label}
    </a>
  );
}

export default function MBA() {
  usePageTitle("MBA projects");
  const [modal, setModal] = useState<{ src: string; title: string } | null>(null);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <div className="min-h-screen">
      <header className="band-ink blueprint">
        <div className="wrap py-8 sm:py-14">
          <h1>MBA projects</h1>
          <p className="mt-4 text-[1.0625rem] sm:text-lg leading-relaxed">
            Class projects from my MBA at Baruch's Zicklin School of Business. I led each of the team projects below.
          </p>
          <ProjectsTabs active="mba" className="mt-6 sm:mt-8" />
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <h2 className="mb-6 sm:mb-8">Team projects</h2>
          <ul className="border-t-2 border-ink">
            {mbaProjects.map((project) => (
              <li
                key={project.title}
                className="border-b border-slate-300 py-7 sm:py-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:grid-rows-[auto_1fr] lg:gap-x-14"
              >
                <div>
                  <h3 className={h3Size}>{project.title}</h3>
                  <p className="mt-1.5 leading-snug text-slate-700">{project.description}</p>
                </div>

                <div className="ticks mt-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-start">
                  <button
                    type="button"
                    aria-label={`Open ${project.title} slide at full size`}
                    onClick={() => setModal({ src: project.image, title: project.title })}
                    className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[6px] border border-slate-300 bg-white transition-colors hover:border-blue-900"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={project.image}
                      alt={`${project.title} presentation slide`}
                      width={960}
                      height={540}
                      className="block h-auto w-full"
                    />
                    <span className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-[6px] bg-[var(--ink)] text-[var(--on-ink)] transition-colors group-hover:bg-blue-900">
                      <Maximize2 aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </button>
                </div>

                <div className="mt-6 lg:col-start-1 lg:mt-5">
                  <p className="mb-2 text-[15px] font-bold text-[var(--ink)]">Methods</p>
                  <Marked items={project.methods} />
                  {project.pdf && <PdfLink href={project.pdf} label="Download slide deck" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-[var(--paper-deep)]">
        <div className="wrap">
          <h2 className="mb-6 sm:mb-8">Data and analytics</h2>
          <ul className="border-t-2 border-ink">
            {dataProjects.map((project) => (
              <li
                key={project.title}
                className="border-b border-slate-300 py-7 sm:py-8 lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-x-14"
              >
                <div>
                  <h3 className={h3Size}>{project.title}</h3>
                  <p className="mt-1.5 text-[15px] font-semibold text-slate-600">{project.tags.join(" · ")}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Marked items={project.highlights} />
                  {project.pdf && <PdfLink href={project.pdf} label="Download report" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Tableau dashboards</h2>
          <p className="mt-3 text-slate-700">Built for MBA data visualization coursework.</p>
          <a
            href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-1 inline-flex min-h-[44px] items-center gap-2 font-semibold text-blue-900 underline decoration-blue-900/30 underline-offset-4 transition-colors hover:decoration-blue-900"
            data-testid="link-tableau-portfolio"
          >
            View all dashboards
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>

          <div className="mt-7 grid gap-10 sm:mt-8 sm:grid-cols-2 sm:gap-x-10">
            {dashboards.map((d) => (
              <a
                key={d.testId}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-testid={d.testId}
              >
                <div className="ticks">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={d.src}
                    alt={d.alt}
                    width={d.width}
                    height={d.height}
                    className="block aspect-[7/4] h-auto w-full rounded-[6px] border border-slate-300 bg-white object-contain transition-colors group-hover:border-blue-900"
                  />
                </div>
                <h3 className={`mt-5 ${h3Size} transition-colors group-hover:text-blue-900`}>{d.title}</h3>
                <p className="mt-1.5 leading-snug text-slate-700">{d.caption}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {modal && (
        <ImageModal src={modal.src} alt={`${modal.title} presentation slide, full size`} label={`${modal.title} image`} onClose={closeModal} />
      )}

      <PageClose />
      <Footer />
    </div>
  );
}
