import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { ExternalLink, Car, Rocket, TrendingUp, Database, Utensils, Moon, X, FileText, Download } from "lucide-react";
import { SiTableau } from "react-icons/si";
import { useState } from "react";
import eatTrackImage from "@assets/Team_5_EatTrak_Presentation_WIP_1767748204830.webp";
import sleepWaveImage from "@assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748368521.jpg";
import mcdonaldsImage from "@assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748480441.jpg";

export default function MBA() {
  usePageTitle("MBA & Data Analytics");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const mbaProjects = [
    {
      title: "EatTrack",
      description: "A mobile app concept helping consumers identify ultra-processed foods while grocery shopping. I surveyed 55+ NYC adults, and over 80% wanted the solution.",
      stats: "95% user interest · $13.9M gross revenue projection",
      tags: ["Product Development", "Consumer Research", "Go-to-Market"],
      methods: ["Consumer surveys (55+ respondents)", "Concept & prototype testing", "Go-to-market revenue modeling"],
      accentColor: "text-blue-800",
      icon: Utensils,
      iconBg: "from-blue-800 to-blue-600",
      image: eatTrackImage
    },
    {
      title: "SleepWave GTM Strategy",
      description: "I developed a data-backed go-to-market strategy for a Bose sleep tech product, running primary research with 50+ consumer interviews alongside competitive analysis.",
      stats: "$450K projected first-year revenue · 5% market share target",
      tags: ["Go-to-Market", "Consumer Research", "Strategy"],
      methods: ["50+ consumer interviews", "Competitive analysis", "Pricing & first-year revenue modeling"],
      accentColor: "text-indigo-700",
      icon: Moon,
      iconBg: "from-indigo-500 to-purple-600",
      image: sleepWaveImage,
      pdf: "/attached_assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748370531.pdf"
    },
    {
      title: "McDonald's Financial Analysis",
      description: "I performed a comprehensive 10-K analysis benchmarked against Wendy's and Burger King, built a DCF model with sensitivity analysis, and evaluated ESG initiatives.",
      stats: "3 companies analyzed · Full ratio & DCF analysis",
      tags: ["DCF", "Ratio Analysis", "10-K Analysis"],
      methods: ["10-K financial statement analysis", "Excel DCF with sensitivity tables", "Ratio benchmarking & ESG review"],
      accentColor: "text-amber-700",
      icon: TrendingUp,
      iconBg: "from-yellow-500 to-orange-600",
      image: mcdonaldsImage,
      pdf: "/attached_assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748486018.pdf"
    }
  ];

  const dataProjects = [
    {
      title: "Ford Vehicle Crash Risk Analysis",
      highlights: [
        "I used logistic regression in Python to analyze 64,000+ NYC motor vehicle collisions",
        "Found no significant link between Ford vehicles and fatal crash outcomes",
        "Identified human behavior (speeding, impairment) as primary fatality predictors"
      ],
      stats: "64K+ collisions · p-value 0.203",
      tags: ["Statistics", "Logistic Regression", "Python"],
      accentColor: "text-blue-800",
      icon: Car,
      iconBg: "from-blue-500 to-indigo-600",
      pdf: "/attached_assets/Final_Report-1_1767807752880.pdf"
    },
    {
      title: "Pet Adoption Database",
      highlights: [
        "I designed a relational database with 12+ normalized tables",
        "Created ER diagrams and normalized the schema to BCNF",
        "Implemented complex SQL queries for adoption matching"
      ],
      stats: "12+ tables · BCNF normalized",
      tags: ["SQL", "ER Modeling", "Database Design"],
      accentColor: "text-violet-700",
      icon: Database,
      iconBg: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                MBA & Data Analytics
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Coursework from Baruch's Zicklin School of Business where I got to stress-test product ideas with real analysis: surveys, financial models, SQL, and R.
              </p>
            </div>
          </Reveal>

          <div className="mb-12">
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-800"></span>
                MBA Projects
              </h2>
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
                        <div className={`w-14 h-14 bg-gradient-to-br ${project.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                          <project.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {project.title}
                          </h3>
                          <p className={`text-sm font-semibold ${project.accentColor}`}>
                            {project.stats}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4">{project.description}</p>

                      <div className="mt-4 border-l-2 border-slate-200 pl-4">
                        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">How I built it</p>
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
                          Download Slide Deck
                        </a>
                      )}
                    </div>
                    
                    {project.image && (
                      <div className="lg:w-72 shrink-0">
                        <button
                          onClick={() => setModalImage(project.image!)}
                          className="rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-zoom-in w-full"
                        >
                          <img loading="lazy" decoding="async" 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto hover:scale-105 transition-transform duration-300"
                          />
                        </button>
                        <p className="text-xs text-slate-500 mt-2 text-center">Click to enlarge</p>
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
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-blue-700 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Data Analytics Projects</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {dataProjects.map((project, index) => (
                <Reveal key={index} delay={index * 0.1} className="h-full">
                <div
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300 h-full"
                >
                  <div className="text-center mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-semibold ${project.accentColor} mt-1`}>
                      {project.stats}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 mr-2.5 shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-slate-400 mt-4">{project.tags.join(" · ")}</p>

                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 border border-slate-300 text-slate-800 hover:border-blue-800 hover:text-blue-900 rounded-lg text-sm font-semibold transition-all bg-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
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
              <h3 className="text-2xl font-bold text-slate-900 inline-flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <SiTableau className="h-6 w-6 text-white" />
                </div>
                Featured Tableau Dashboards
              </h3>
              <div className="mt-3">
                <a
                  href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors font-medium group"
                  data-testid="link-tableau-portfolio"
                >
                  View All Dashboards
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
                    alt="Customer Churn Dashboard"
                    className="w-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-slate-900 mt-3 font-medium group-hover/img:text-blue-800 transition-colors">Customer Churn Analysis</p>
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
                    alt="NYC Fire Safety Dashboard"
                    className="w-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-slate-900 mt-3 font-medium group-hover/img:text-blue-800 transition-colors">New York City Fire Safety Analysis</p>
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
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img loading="lazy" decoding="async" 
            src={modalImage}
            alt="Project Image - Full Size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
