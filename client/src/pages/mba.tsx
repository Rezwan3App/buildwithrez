import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Car, Rocket, TrendingUp, Database, Utensils, Moon, X, FileText, Download } from "lucide-react";
import { SiTableau } from "react-icons/si";
import { useState } from "react";
import eatTrackImage from "@assets/Team_5_EatTrak_Presentation_WIP_1767748204830.png";
import sleepWaveImage from "@assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748368521.jpg";
import mcdonaldsImage from "@assets/Group_B_FSA,_ACC_9110,_Spring_2025_1767748480441.jpg";

export default function MBA() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const mbaProjects = [
    {
      title: "EatTrack",
      description: "A mobile app helping consumers identify ultra-processed foods and find healthier alternatives while grocery shopping. Surveyed 55+ NYC adults, achieving 80%+ interest in solution.",
      stats: "95% user interest | $13.9M gross revenue projection",
      tags: ["Product Development", "Consumer Research", "Go-to-Market"],
      accentColor: "text-green-400",
      icon: Utensils,
      iconBg: "from-green-500 to-emerald-600",
      image: eatTrackImage
    },
    {
      title: "SleepWave GTM Strategy",
      description: "Developed data-backed go-to-market strategy for Bose sleep tech product. Conducted primary research with 50+ consumer interviews and competitive analysis.",
      stats: "$450K projected first-year revenue | 5% market share target",
      tags: ["Go-to-Market", "Consumer Research", "Strategy"],
      accentColor: "text-indigo-400",
      icon: Moon,
      iconBg: "from-indigo-500 to-purple-600",
      image: sleepWaveImage,
      pdf: "/attached_assets/BOSE_SLEEPWAVE_PRESENTATION_GROUP_7_1767748370531.pdf"
    },
    {
      title: "McDonald's Financial Analysis",
      description: "Performed comprehensive 10-K analysis benchmarked against Wendy's and Burger King. Built DCF model with sensitivity analysis and evaluated ESG initiatives.",
      stats: "3 companies analyzed | Full ratio & DCF analysis",
      tags: ["DCF", "Ratio Analysis", "10-K Analysis"],
      accentColor: "text-yellow-400",
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
        "Analyzed 64,000+ NYC motor vehicle collisions using logistic regression",
        "Found no significant link between Ford vehicles and fatal crash outcomes",
        "Identified human behavior (speeding, impairment) as primary fatality predictors"
      ],
      stats: "64K+ collisions | p-value 0.203",
      tags: ["Statistics", "Logistic Regression", "R"],
      accentColor: "text-blue-400",
      icon: Car,
      iconBg: "from-blue-500 to-indigo-600",
      pdf: "/attached_assets/Final_Report-1_1767807752880.pdf"
    },
    {
      title: "Pet Adoption Database",
      highlights: [
        "Designed relational database with 12+ normalized tables",
        "Created ER diagrams and normalized schema to BCNF",
        "Implemented complex SQL queries for adoption matching"
      ],
      stats: "12+ tables | BCNF normalized",
      tags: ["SQL", "ER Modeling", "Database Design"],
      accentColor: "text-violet-400",
      icon: Database,
      iconBg: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              MBA & Data Analytics
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Academic projects from Baruch College's Zicklin School of Business demonstrating analytical and strategic capabilities.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              MBA Projects
            </h2>
            
            <div className="space-y-6">
              {mbaProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-[#12161c] border border-transparent rounded-2xl p-6 hover:border-emerald-500/20 card-glow transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${project.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                          <project.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className={`text-sm font-bold ${project.accentColor}`}>
                            {project.stats}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 font-medium border-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {project.pdf && (
                        <a 
                          href={project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 btn-gradient btn-shine text-white rounded-lg text-sm font-semibold border-0"
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
                          className="rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-zoom-in w-full"
                        >
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto hover:scale-105 transition-transform duration-300"
                          />
                        </button>
                        <p className="text-xs text-gray-500 mt-2 text-center">Click to enlarge</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Data Analytics Projects</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {dataProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-[#12161c] border border-transparent rounded-2xl p-6 hover:border-emerald-500/20 card-glow transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-bold ${project.accentColor} mt-1`}>
                      {project.stats}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2.5 shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800">
                    {project.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-gray-800 text-gray-500 text-xs px-2 py-0.5 font-medium border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.pdf && (
                    <a 
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#12161c] border border-transparent rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white inline-flex items-center gap-3">
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
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium group"
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
                <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover/img:border-blue-500/50 transition-all">
                  <img 
                    src="/attached_assets/image_1756834020456.png" 
                    alt="Customer Churn Dashboard"
                    className="w-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-3 font-medium group-hover/img:text-blue-400 transition-colors">Customer Churn Analysis</p>
              </a>
              <a
                href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="block group/img"
                data-testid="link-tableau-fire"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover/img:border-blue-500/50 transition-all">
                  <img 
                    src="/attached_assets/image_1756834044327.png" 
                    alt="NYC Fire Safety Dashboard"
                    className="w-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-3 font-medium group-hover/img:text-blue-400 transition-colors">New York City Fire Safety Analysis</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:text-emerald-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
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
