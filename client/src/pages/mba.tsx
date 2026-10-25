import { Footer } from "@/components/footer";
import { Row, Page, SectionHeading } from "@/components/row";
import { ProjectsTabs, Bullets, ImageModal, linkCls } from "@/pages/product-management";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { ExternalLink, Download } from "lucide-react";
import { useState, useCallback } from "react";
import eatTrackImage from "@assets/Team_5_EatTrak_Presentation_WIP_1767748204830.webp";
import sleepWaveImage from "@assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748368521.jpg";
import mcdonaldsImage from "@assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748480441.jpg";

const mbaProjects = [
  {
    title: "EatTrack",
    description: "A mobile app concept that flags ultra-processed foods while you shop.",
    meta: "Product concept",
    methods: ["Ran a 55-person consumer survey", "Built a clickable Figma prototype and ran 7 rounds of testing with 13 users", "Priced it as a free tier plus a $7.99 one-time premium"],
    image: eatTrackImage,
    pdf: undefined as string | undefined,
  },
  {
    title: "SleepWave go-to-market plan",
    description: "Class go-to-market plan for SleepWave, a Bose sleep product.",
    meta: "Marketing",
    methods: ["Ran 50+ consumer interviews", "Completed a competitive analysis", "Set pricing and built a first-year revenue model"],
    image: sleepWaveImage,
    pdf: "/attached_assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748370531.pdf",
  },
  {
    title: "McDonald's financial analysis",
    description: "Financial analysis of McDonald's, benchmarked against Wendy's and Burger King.",
    meta: "ACC 9110, Spring 2025",
    methods: ["Analyzed the 10-K financial statements", "Built an Excel DCF valuation with sensitivity tables", "Benchmarked ratios across the three companies and reviewed ESG commitments"],
    image: mcdonaldsImage,
    pdf: "/attached_assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748486018.pdf",
  },
];

const dataProjects = [
  {
    title: "Ford crash risk analysis",
    highlights: [
      "Ran a logistic regression in Python on 64,785 NYC motor vehicle collisions",
      "Found no significant link between Ford vehicles and fatal crash outcomes (p = 0.203)",
      "Found that human behavior, such as speeding and impairment, was the main predictor of fatal crashes",
    ],
    meta: "Statistics",
    tags: ["Statistics", "Logistic Regression", "Python"],
    pdf: "/attached_assets/Final_Report-1_1767807752880.pdf" as string | undefined,
  },
  {
    title: "Pet adoption database",
    highlights: [
      "Designed a relational database with 12+ tables",
      "Drew ER diagrams and normalized the schema to Boyce-Codd normal form (BCNF)",
      "Wrote SQL queries for adoption matching",
    ],
    meta: "Databases",
    tags: ["SQL", "ER Modeling", "Database Design"],
    pdf: undefined as string | undefined,
  },
];

const imgCls = "w-full max-w-xs h-auto border border-slate-200";
type Modal = { src: string; title: string } | null;

export default function MBA() {
  usePageTitle("MBA projects");
  const [modal, setModal] = useState<Modal>(null);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <div className="min-h-screen">
      <Page>
        <Reveal>
          <h1 className="text-slate-900 mb-4">MBA projects</h1>
          <p className="text-lg text-slate-600">
            Class projects from my MBA at Baruch's Zicklin School of Business: consumer research, go-to-market plans, financial models, and data analysis in SQL, Python, and Tableau. I led each of the team projects below.
          </p>
        </Reveal>

        <ProjectsTabs active="mba" />

        <SectionHeading title="Team projects" />
        {mbaProjects.map((p) => (
          <Row key={p.title} meta={p.meta}>
            <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="text-slate-600 my-2">{p.description}</p>
            <Bullets items={p.methods} />
            <button onClick={() => setModal({ src: p.image, title: p.title })} className="block mt-4 cursor-zoom-in hover:opacity-90 transition-opacity w-full max-w-xs" aria-label={`Enlarge ${p.title} image`}>
              <img loading="lazy" decoding="async" src={p.image} alt={`${p.title} presentation slide`} width={960} height={540} className={imgCls} />
            </button>
            {p.pdf && (
              <p className="mt-3">
                <a href={p.pdf} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <Download aria-hidden="true" className="h-3.5 w-3.5" />Download slide deck
                </a>
              </p>
            )}
          </Row>
        ))}

        <div className="mt-16">
          <SectionHeading title="Data and analytics" />
          {dataProjects.map((p) => (
            <Row key={p.title} meta={p.meta}>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.title}</h3>
              <Bullets items={p.highlights} />
              <p className="text-sm text-slate-500 mt-3">{p.tags.join(" · ")}</p>
              {p.pdf && (
                <p className="mt-3">
                  <a href={p.pdf} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    <Download aria-hidden="true" className="h-3.5 w-3.5" />Download report
                  </a>
                </p>
              )}
            </Row>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading title="Tableau dashboards" intro="Built for MBA data visualization coursework." />
          <p className="mb-2">
            <a
              href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
              data-testid="link-tableau-portfolio"
            >
              View all dashboards
              <ExternalLink aria-hidden="true" className="h-3 w-3" />
            </a>
          </p>
          <Row meta="Retention">
            <a href="https://public.tableau.com/app/profile/rezwan.islam4698/viz/BankChurtProject/Dashboard1" target="_blank" rel="noopener noreferrer" className="block group/img" data-testid="link-tableau-churn">
              <h3 className="text-lg font-semibold text-slate-900 group-hover/img:text-blue-900">Customer churn analysis</h3>
              <p className="text-slate-600 my-2">I analyzed bank customer churn to find which segments leave and why, breaking retention down by geography, product mix, and account activity.</p>
              <img loading="lazy" decoding="async" src="/attached_assets/image_1756834020456.webp" alt="Customer churn dashboard" width={1400} height={759} className={imgCls} />
            </a>
          </Row>
          <Row meta="Public safety">
            <a href="https://public.tableau.com/app/profile/rezwan.islam4698/viz/NewYorkCityFireSafetyAnalysisDashboard/Dashboard3" target="_blank" rel="noopener noreferrer" className="block group/img" data-testid="link-tableau-fire">
              <h3 className="text-lg font-semibold text-slate-900 group-hover/img:text-blue-900">NYC fire safety analysis</h3>
              <p className="text-slate-600 my-2">I mapped NYC fire-inspection outcomes across boroughs: pass and fail rates, the most common causes of failed inspections, and where risk concentrates.</p>
              <img loading="lazy" decoding="async" src="/attached_assets/image_1756834044327.webp" alt="NYC fire safety dashboard" width={1400} height={802} className={imgCls} />
            </a>
          </Row>
        </div>
        <Footer />
      </Page>

      {modal && (
        <ImageModal src={modal.src} alt={`${modal.title} presentation slide, full size`} label={`${modal.title} image`} onClose={closeModal} />
      )}

    </div>
  );
}
