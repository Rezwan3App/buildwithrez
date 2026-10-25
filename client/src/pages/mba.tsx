import { Footer } from "@/components/footer";
import { Row, Page, SectionHeading } from "@/components/row";
import { ProjectsTabs, Bullets, linkCls } from "@/pages/product-management";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { ExternalLink, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import eatTrackImage from "@assets/Team_5_EatTrak_Presentation_WIP_1767748204830.webp";
import sleepWaveImage from "@assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748368521.jpg";
import mcdonaldsImage from "@assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748480441.jpg";

const mbaProjects = [
  {
    title: "EatTrack",
    description: "A mobile app concept that flags ultra-processed foods while you shop. Our team ran a 55-person consumer survey, built a clickable Figma prototype, and tested it in 7 rounds with 13 users.",
    stats: "55-person survey · 7 test rounds with 13 users",
    methods: ["55-person consumer survey", "Figma prototype, 7 rounds of user testing", "Pricing: free tier plus a $7.99 one-time premium"],
    image: eatTrackImage,
    pdf: undefined as string | undefined,
  },
  {
    title: "SleepWave go-to-market plan",
    description: "Our team wrote a go-to-market plan for SleepWave, a Bose sleep product. We ran 50+ consumer interviews and a competitive analysis, then set pricing and a first-year revenue model.",
    stats: "50+ consumer interviews · Pricing and first-year revenue model",
    methods: ["50+ consumer interviews", "Competitive analysis", "Pricing and first-year revenue model"],
    image: sleepWaveImage,
    pdf: "/attached_assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748370531.pdf",
  },
  {
    title: "McDonald's financial analysis",
    description: "Our team analyzed McDonald's 10-K against Wendy's and Burger King, built a DCF valuation with sensitivity tables, and reviewed its ESG commitments.",
    stats: "3 companies compared · Ratio analysis and DCF",
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
      "Found no significant link between Ford vehicles and fatal crash outcomes (p = 0.203)",
      "Found human behavior, such as speeding and impairment, to be the main predictor of fatal crashes",
    ],
    stats: "64,785 collisions · No significant Ford effect",
    tags: ["Statistics", "Logistic Regression", "Python"],
    pdf: "/attached_assets/Final_Report-1_1767807752880.pdf" as string | undefined,
  },
  {
    title: "Pet adoption database",
    highlights: [
      "I designed a relational database with 12+ normalized tables",
      "Created ER diagrams and normalized the schema to BCNF",
      "Wrote SQL queries for adoption matching",
    ],
    stats: "12+ tables · BCNF",
    tags: ["SQL", "ER Modeling", "Database Design"],
    pdf: undefined as string | undefined,
  },
];

const imgCls = "w-full max-w-xs h-auto border border-slate-200";

export default function MBA() {
  usePageTitle("MBA projects");
  const [modalImage, setModalImage] = useState<string | null>(null);
  useEffect(() => {
    if (!modalImage) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModalImage(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalImage]);

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
          <Row key={p.title} meta="Team project">
            <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="text-slate-500 mb-3">{p.stats}</p>
            <p className="text-slate-600 mb-3">{p.description}</p>
            <Bullets items={p.methods} />
            <button onClick={() => setModalImage(p.image)} className="block mt-4 cursor-zoom-in hover:opacity-90 transition-opacity w-full max-w-xs" aria-label={`Enlarge ${p.title} image`}>
              <img loading="lazy" decoding="async" src={p.image} alt={p.title} className={imgCls} />
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
            <Row key={p.title} meta="Data">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="text-slate-500 mb-3">{p.stats}</p>
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
          <Row meta="Tableau">
            <a href="https://public.tableau.com/app/profile/rezwan.islam4698/viz/BankChurtProject/Dashboard1" target="_blank" rel="noopener noreferrer" className="block group/img" data-testid="link-tableau-churn">
              <h3 className="text-lg font-semibold text-slate-900 group-hover/img:text-blue-900">Customer churn analysis</h3>
              <p className="text-slate-600 my-2">I analyzed bank customer churn to find which segments leave and why, breaking retention down by geography, product mix, and account activity.</p>
              <img loading="lazy" decoding="async" src="/attached_assets/image_1756834020456.webp" alt="Customer churn dashboard" className={imgCls} />
            </a>
          </Row>
          <Row meta="Tableau">
            <a href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes" target="_blank" rel="noopener noreferrer" className="block group/img" data-testid="link-tableau-fire">
              <h3 className="text-lg font-semibold text-slate-900 group-hover/img:text-blue-900">NYC fire safety analysis</h3>
              <p className="text-slate-600 my-2">I mapped NYC fire-inspection outcomes across boroughs: pass and fail rates, the most common causes of failed inspections, and where risk concentrates.</p>
              <img loading="lazy" decoding="async" src="/attached_assets/image_1756834044327.webp" alt="NYC fire safety dashboard" className={imgCls} />
            </a>
          </Row>
        </div>
        <Footer />
      </Page>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            aria-label="Close image"
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img loading="lazy" decoding="async"
            src={modalImage}
            alt="Project image, full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
