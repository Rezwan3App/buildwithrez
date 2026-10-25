import { Footer } from "@/components/footer";
import { ProjectsTabs } from "@/pages/product-management";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { ExternalLink, Car, TrendingUp, Database, Utensils, Moon, X, Download } from "lucide-react";
import { SiTableau } from "react-icons/si";
import { useState, useEffect } from "react";
import eatTrackImage from "@assets/Team_5_EatTrak_Presentation_WIP_1767748204830.webp";
import sleepWaveImage from "@assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748368521.jpg";
import mcdonaldsImage from "@assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748480441.jpg";

export default function MBA() {
  usePageTitle("MBA projects");
  const [modalImage, setModalImage] = useState<string | null>(null);
  useEffect(() => {
    if (!modalImage) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModalImage(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalImage]);

  const mbaProjects = [
    {
      title: "EatTrack",
      description: "A mobile app concept that flags ultra-processed foods while you shop. Our team ran a 55-person consumer survey, built a clickable Figma prototype, and tested it in 7 rounds with 13 users.",
      stats: "55-person survey · 7 test rounds with 13 users",
      methods: ["55-person consumer survey", "Figma prototype, 7 rounds of user testing", "Pricing: free tier plus a $7.99 one-time premium"],
      accentColor: "text-blue-800",
      icon: Utensils,
      image: eatTrackImage
    },
    {
      title: "SleepWave go-to-market plan",
      description: "Our team wrote a go-to-market plan for SleepWave, a Bose sleep product. We ran 50+ consumer interviews and a competitive analysis, then set pricing and a first-year revenue model.",
      stats: "50+ consumer interviews · Pricing and first-year revenue model",
      methods: ["50+ consumer interviews", "Competitive analysis", "Pricing and first-year revenue model"],
      accentColor: "text-blue-800",
      icon: Moon,
      image: sleepWaveImage,
      pdf: "/attached_assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748370531.pdf"
    },
    {
      title: "McDonald's financial analysis",
      description: "Our team analyzed McDonald's 10-K against Wendy's and Burger King, built a DCF valuation with sensitivity tables, and reviewed its ESG commitments.",
      stats: "3 companies compared · Ratio analysis and DCF",
      methods: ["10-K financial statement analysis", "Excel DCF with sensitivity tables", "Ratio benchmarking and ESG review"],
      accentColor: "text-blue-800",
      icon: TrendingUp,
      image: mcdonaldsImage,
      pdf: "/attached_assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748486018.pdf"
    }
  ];

  const dataProjects = [
    {
      title: "Ford crash risk analysis",
      highlights: [
        "I ran a logistic regression in Python on 64,785 NYC motor vehicle collisions",
        "Found no significant link between Ford vehicles and fatal crash outcomes (p = 0.203)",
        "Found human behavior, such as speeding and impairment, to be the main predictor of fatal crashes"
      ],
      stats: "64,785 collisions · No significant Ford effect",
      tags: ["Statistics", "Logistic Regression", "Python"],
      accentColor: "text-blue-800",
      icon: Car,
      pdf: "/attached_assets/Final_Report-1_1767807752880.pdf"
    },
    {
      title: "Pet adoption database",
      highlights: [
        "I designed a relational database with 12+ normalized tables",
        "Created ER diagrams and normalized the schema to BCNF",
        "Wrote SQL queries for adoption matching"
      ],
      stats: "12+ tables · BCNF",
      tags: ["SQL", "ER Modeling", "Database Design"],
      accentColor: "text-blue-800",
      icon: Database,
    }
  ];

  return (
    <div className="min-h-screen">
      
      <section className="pt-24 sm:pt-28 pb-14 md:pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900 mb-4">
                MBA projects
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Class projects from my MBA at Baruch's Zicklin School of Business: consumer research, go-to-market plans, financial models, and data analysis in SQL, Python, and Tableau. I led most of the team projects below.
              </p>
            </div>
          </Reveal>

          <ProjectsTabs active="mba" />

          <div className="mb-12">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Team projects</h2>
            </Reveal>

            <div className="space-y-6">
              {mbaProjects.map((project, index) => (
                <Reveal key={index} delay={index * 0.05}>
                <div
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                          <project.icon className="h-7 w-7 text-blue-800" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-1">
                            {project.title}
                          </h3>
                          <p className={`text-sm font-semibold ${project.accentColor}`}>
                            {project.stats}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4">{project.description}</p>

                      <div className="mt-4 border-l-2 border-slate-200 pl-4">
                        <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-2">Methods</p>
                        <ul className="space-y-1">
                          {project.methods.map((m, i) => (
                            <li key={i} className="text-sm text-slate-600">{m}</li>
                          ))}
                        </ul>
                      </div>

                      {project.pdf && (
                        <a
                          href={project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-4 px-4 py-2 border border-slate-300 text-slate-800 hover:border-blue-800 hover:text-blue-900 rounded-lg text-sm font-semibold transition-all bg-white"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download slide deck
                        </a>
                      )}
                    </div>
                    
                    {project.image && (
                      <div className="lg:w-72 shrink-0">
                        <button
                          onClick={() => setModalImage(project.image!)}
                          className="rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/10 transition-all cursor-zoom-in w-full"
                        >
                          <img loading="lazy" decoding="async" 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto hover:scale-105 transition-transform duration-300"
                          />
                        </button>
                        <p className="text-[13px] text-slate-500 mt-2 text-center">Click to enlarge</p>
                      </div>
                    )}
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Data and analytics</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {dataProjects.map((project, index) => (
                <Reveal key={index} delay={index * 0.1} className="h-full">
                <div
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300 h-full"
                >
                  <div className="text-center mb-4">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <project.icon className="h-7 w-7 text-blue-800" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-semibold ${project.accentColor} mt-1`}>
                      {project.stats}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 mr-2.5 shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <p className="text-[0.9375rem] font-semibold text-slate-600 mt-4">{project.tags.join(" · ")}</p>

                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 border border-slate-300 text-slate-800 hover:border-blue-800 hover:text-blue-900 rounded-lg text-sm font-semibold transition-all bg-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download report
                    </a>
                  )}
                </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
          <div className="bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-300 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 inline-flex items-center gap-3">
                <span className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <SiTableau aria-hidden="true" className="h-6 w-6 text-white" />
                </span>
                Tableau dashboards
              </h2>
              <p className="mt-2 mx-auto text-sm text-slate-600">Built for MBA data visualization coursework.</p>
              <div className="mt-3">
                <a
                  href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors font-medium group"
                  data-testid="link-tableau-portfolio"
                >
                  View all dashboards
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://public.tableau.com/app/profile/rezwan.islam4698/viz/BankChurtProject/Dashboard1"
                target="_blank"
                rel="noopener noreferrer"
                className="block group/img"
                data-testid="link-tableau-churn"
              >
                <div className="relative overflow-hidden rounded-xl border border-slate-200 group-hover/img:border-blue-300 transition-all">
                  <img loading="lazy" decoding="async" 
                    src="/attached_assets/image_1756834020456.webp" 
                    alt="Customer churn dashboard"
                    className="w-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-slate-900 mt-3 font-medium group-hover/img:text-blue-800 transition-colors">Customer churn analysis</p>
                <p className="text-sm text-slate-500 mt-1">I analyzed bank customer churn to find which segments leave and why, breaking retention down by geography, product mix, and account activity.</p>
              </a>
              <a
                href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="block group/img"
                data-testid="link-tableau-fire"
              >
                <div className="relative overflow-hidden rounded-xl border border-slate-200 group-hover/img:border-blue-300 transition-all">
                  <img loading="lazy" decoding="async" 
                    src="/attached_assets/image_1756834044327.webp" 
                    alt="NYC fire safety dashboard"
                    className="w-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-slate-900 mt-3 font-medium group-hover/img:text-blue-800 transition-colors">NYC fire safety analysis</p>
                <p className="text-sm text-slate-500 mt-1">I mapped NYC fire-inspection outcomes across boroughs: pass and fail rates, the most common causes of failed inspections, and where risk concentrates.</p>
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

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

      <Footer />
    </div>
  );
}
