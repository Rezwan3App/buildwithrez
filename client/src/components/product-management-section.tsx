import { Badge } from "@/components/ui/badge";
import { Building2, Leaf } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  topSkills: string[];
  tags: string[];
  logo?: string;
  secondaryLogo?: string;
  accentColor: string;
}

export function ProductManagementSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Operations Intern",
      company: "HapticNav",
      location: "New York, NY",
      description: "B2B partnerships and GTM strategy for haptic navigation technology.",
      startDate: "Sep 2025",
      endDate: "Dec 2025",
      highlights: [
        "Accelerated 5 B2B pipelines by 60% with Uber, Waymo, Apple, Meta outreach",
        "Designed 3 product one-pagers enabling active pilot discussions",
        "Managed 40+ CRM-tracked conversations, supported 12 executive calls"
      ],
      topSkills: ["B2B Sales", "GTM Strategy", "Stakeholder Management", "CRM Systems", "Product Collateral"],
      tags: ["B2B Partnerships", "GTM Strategy", "Canva", "CRM"],
      logo: "/attached_assets/image_1766512717843.png",
      secondaryLogo: "/attached_assets/image_1766512739511.png",
      accentColor: "bg-emerald-500"
    },
    {
      id: 2,
      title: "Product/Data Analyst Intern",
      company: "Odynn",
      location: "New York, NY",
      description: "QA testing, analytics instrumentation, and competitive analysis for travel tech platform.",
      startDate: "May 2025",
      endDate: "Aug 2025",
      highlights: [
        "Increased booking flow reliability by 20% via QA across 50+ features",
        "Built Amplitude dashboards for 150+ user events, closed 40+ instrumentation gaps",
        "Enhanced product risk visibility by 15% analyzing 25+ competitors"
      ],
      topSkills: ["Product Analytics", "QA Testing", "SQL", "Competitive Analysis", "Agile/Scrum"],
      tags: ["Amplitude", "SQL", "Jira", "Agile", "QA Testing"],
      logo: "/attached_assets/odynn-logo-no-text_1750561616896.png",
      accentColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "Digital Product Management Intern",
      company: "Rocket Mortgage",
      location: "Detroit, MI",
      description: "Mobile app features, API integrations, and AI-powered onboarding.",
      startDate: "May 2024",
      endDate: "Dec 2024",
      highlights: [
        "Improved account creation speed by 400% via Plaid API integration",
        "Reduced banker escalations by 40% with AI onboarding chatbot",
        "Boosted user engagement by 20%, earned Tech Demo Award"
      ],
      topSkills: ["API Integration", "Product Design", "AI/ML", "A/B Testing", "Cross-functional Leadership"],
      tags: ["Plaid API", "Figma", "Azure DevOps", "AI Integration"],
      logo: "/attached_assets/Rocket-Companies-Symbol_1750562065970.png",
      accentColor: "bg-red-500"
    },
    {
      id: 4,
      title: "Product Development Intern",
      company: "MegaPlants LLC | Kosha Botanica",
      location: "New York, NY",
      description: "Market research and product strategy for wellness brand.",
      startDate: "Feb 2024",
      endDate: "May 2024",
      highlights: [
        "Prioritized 3 tincture concepts from 200+ candidates, 90% efficiency gain",
        "Led 2 new product lines analyzing 300+ Amazon SKUs",
        "Supported 25% product line expansion with data-driven decisions"
      ],
      topSkills: ["Market Research", "Data Analysis", "Product Strategy", "Competitive Intelligence", "E-commerce Analytics"],
      tags: ["Google Trends", "Jungle Scout", "Market Research"],
      logo: "/attached_assets/image_1766520500093.png",
      accentColor: "bg-orange-500"
    }
  ];

  return (
    <section id="product-management" className="py-16 relative overflow-hidden bg-professional">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
            Experience
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="group bg-[#0f1219] border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-blue-500/30 transition-all duration-300 hover-lift"
            >
              {/* Accent line */}
              <div className={`absolute left-0 top-5 bottom-5 w-1 ${exp.accentColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Left side - Main content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    {/* Company with logos */}
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      {exp.logo && (
                        <div className="w-20 h-16 group-hover:scale-110 transition-transform flex items-center justify-center">
                          <img 
                            src={exp.logo} 
                            alt={exp.company} 
                            className="w-full h-full object-contain mix-blend-screen"
                          />
                        </div>
                      )}
                      <span className="text-lg font-medium text-gray-200">{exp.company}</span>
                      {exp.secondaryLogo && (
                        <>
                          <span className="text-gray-600">×</span>
                          <div className="h-10 rounded-md group-hover:scale-110 transition-transform">
                            <img 
                              src={exp.secondaryLogo} 
                              alt="Partner" 
                              className="h-full object-contain"
                            />
                          </div>
                        </>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      {exp.location} | {exp.startDate} – {exp.endDate}
                    </p>
                  </div>

                  <p className="text-base text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className={`w-1.5 h-1.5 rounded-full ${exp.accentColor} mt-1.5 mr-2.5 shrink-0`}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 font-medium border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right side - Top Skills */}
                <div className="w-full lg:w-52 mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-800">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Top Skills</h4>
                  <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-2.5">
                    {exp.topSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${exp.accentColor}`}></span>
                        <span className="text-sm sm:text-base text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
