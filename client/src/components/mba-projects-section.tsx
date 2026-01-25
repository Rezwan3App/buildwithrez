import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Brain, Rocket, TrendingUp, Database, Award, FileText, Car } from "lucide-react";
import { SiTableau } from "react-icons/si";

export function MBAProjectsSection() {
  const projects = [
    {
      title: "Ford Vehicle Crash Risk Analysis",
      highlights: [
        "Analyzed 64,000+ NYC motor vehicle collisions using logistic regression",
        "Found no significant link between Ford vehicles and fatal crash outcomes",
        "Identified human behavior (speeding, impairment) as primary fatality predictors"
      ],
      topicsLearned: ["Logistic Regression", "Odds Ratios", "Hypothesis Testing", "Data Cleaning"],
      stats: "64K+ collisions | p-value 0.203",
      tags: ["Statistics", "Logistic Regression", "R"],
      accentColor: "text-blue-400",
      icon: Car,
      iconBg: "from-blue-500 to-indigo-600"
    },
    {
      title: "SleepWave GTM Strategy",
      highlights: [
        "Developed data-backed go-to-market strategy for Bose sleep tech",
        "Conducted primary research with 50+ consumer interviews",
        "Projected $450K first-year revenue targeting 5% market share"
      ],
      topicsLearned: ["Market Sizing", "Competitive Analysis", "Pricing Strategy", "Product Positioning"],
      stats: "$450K projected revenue",
      tags: ["Go-to-Market", "Consumer Research", "Strategy"],
      accentColor: "text-emerald-400",
      icon: Rocket,
      iconBg: "from-emerald-500 to-teal-600"
    },
    {
      title: "McDonald's Financial Analysis",
      highlights: [
        "Performed comprehensive 10-K analysis benchmarked against competitors",
        "Built DCF model with sensitivity analysis for valuation",
        "Evaluated ESG initiatives and their financial impact"
      ],
      topicsLearned: ["DCF Valuation", "Ratio Analysis", "Financial Modeling", "ESG Assessment"],
      stats: "3 companies analyzed",
      tags: ["DCF", "Ratio Analysis", "10-K Analysis"],
      accentColor: "text-orange-400",
      icon: TrendingUp,
      iconBg: "from-orange-500 to-red-600"
    },
    {
      title: "Pet Adoption Database",
      highlights: [
        "Designed relational database with 12+ normalized tables",
        "Created ER diagrams and normalized schema to BCNF",
        "Implemented complex SQL queries for adoption matching"
      ],
      topicsLearned: ["ER Modeling", "Database Normalization", "SQL Joins", "Query Optimization"],
      stats: "12+ tables | BCNF normalized",
      tags: ["SQL", "ER Modeling", "Database Design"],
      accentColor: "text-violet-400",
      icon: Database,
      iconBg: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="mba-projects" className="py-16 relative overflow-hidden bg-professional">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
            MBA Course Projects
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#161b22] border border-gray-800 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 hover-lift"
            >
              <div className="text-center mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${project.iconBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <project.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className={`text-xs font-bold ${project.accentColor} mt-1`}>
                  {project.stats}
                </p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start">
                    <span className={`w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2.5 shrink-0`}></span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2 font-medium">Topics Learned:</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.topicsLearned.map((topic, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800">
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
            </div>
          ))}
        </div>

        {/* Tableau Section */}
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <SiTableau className="h-5 w-5 text-white" />
              </div>
              Featured Tableau Dashboards
            </h3>
            <div className="mt-3">
              <a
                href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group"
              >
                View All
                <ExternalLink className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <a
              href="https://public.tableau.com/app/profile/rezwan.islam4698/viz/BankChurtProject/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="block group/img"
            >
              <div className="relative overflow-hidden rounded-lg border border-gray-700 group-hover/img:border-blue-500/50 transition-all">
                <img 
                  src="/attached_assets/image_1756834020456.png" 
                  alt="Customer Churn Dashboard"
                  className="w-full group-hover/img:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 font-medium group-hover/img:text-blue-400 transition-colors">Customer Churn Analysis</p>
            </a>
            <a
              href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"
              target="_blank"
              rel="noopener noreferrer"
              className="block group/img"
            >
              <div className="relative overflow-hidden rounded-lg border border-gray-700 group-hover/img:border-blue-500/50 transition-all">
                <img 
                  src="/attached_assets/image_1756834044327.png" 
                  alt="NYC Fire Safety Dashboard"
                  className="w-full group-hover/img:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 font-medium group-hover/img:text-blue-400 transition-colors">New York City Fire Safety Analysis</p>
            </a>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
              Certifications
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="group bg-[#161b22] border border-gray-800 rounded-xl p-5 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Management Consulting Simulation</h3>
                  <p className="text-gray-400 text-sm">PwC via Forage</p>
                </div>
              </div>
            </div>
            <div className="group bg-[#161b22] border border-gray-800 rounded-xl p-5 hover:border-gray-500/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Notion Academy: Essentials</h3>
                  <p className="text-gray-400 text-sm">Notion Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
              Case Studies
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </h2>
          </div>
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Detailed case studies showcasing product strategy, data analysis, and business impact are currently in development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
