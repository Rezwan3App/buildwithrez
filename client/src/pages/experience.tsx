import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import odynnImage from "@assets/image_1767746624854.png";
import rocketImage from "@assets/image_1767746681686.png";
import odynnLogo from "@assets/image_1767747315335.png";
import rocketLogo from "@assets/image_1767747337636.png";
import megaplantsLogo from "@assets/image_1767747435421.png";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
  logo: string;
  logoBg: string;
  image?: string;
  imageCaption?: string;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: "Product/Data Analyst Intern",
      company: "Odynn",
      location: "New York, NY",
      period: "May 2025 - Aug 2025",
      highlights: [
        "Quality Engineering: Optimized booking flow reliability by 20% through rigorous QA and regression testing on 50+ core features.",
        "Data Orchestration: Built comprehensive Amplitude dashboards for 150+ user events, utilizing SQL for data validation and integrity.",
        "Market Intelligence: Conducted deep-dive competitive analysis across 25+ platforms to identify and prioritize high-impact feature gaps."
      ],
      tags: ["Jira", "Confluence", "Amplitude", "SQL", "Agile"],
      logo: "odynn",
      logoBg: "bg-black",
      image: odynnImage,
      imageCaption: "Led a Tableau workshop for fellow interns"
    },
    {
      title: "Digital Product Management Intern",
      company: "Rocket Mortgage",
      location: "Detroit, MI",
      period: "May 2024 - Dec 2024",
      highlights: [
        "Fintech Integration: Spearheaded Plaid API integration, achieving 4x faster account creation and a 30% increase in verification success.",
        "AI Optimization: Enhanced AI chatbot logic, resulting in a 40% reduction in human escalations and a 25% boost in form completion.",
        "Award-Winning UX: Awarded \"Tech Demo Winner\" for designing a feature that drove a 20% increase in user engagement."
      ],
      tags: ["Plaid API", "Azure DevOps", "Figma", "Jira", "A/B Testing"],
      logo: "rocket",
      logoBg: "bg-black",
      image: rocketImage,
      imageCaption: "Moderated a product roadmap panel for 200+ people"
    },
    {
      title: "Product Development Intern",
      company: "MegaPlants LLC | Kosha Botanica",
      location: "New York, NY",
      period: "Feb 2024 - May 2024",
      highlights: [
        "Data-Driven Prioritization: Filtered 200+ product concepts down to 3 high-potential tincture lines using quantitative trend analysis.",
        "E-commerce Expansion: Analyzed 300+ Amazon SKUs to identify market white space, supporting a 25% expansion of the product portfolio."
      ],
      tags: ["Google Analytics", "Google Trends", "Jungle Scout", "Market Research"],
      logo: "megaplants",
      logoBg: "bg-white"
    }
  ];

  const renderLogo = (logo: string) => {
    switch (logo) {
      case "rocket":
        return (
          <img src={rocketLogo} alt="Rocket Mortgage" className="w-12 h-12 object-contain" />
        );
      case "odynn":
        return (
          <img src={odynnLogo} alt="Odynn" className="w-10 h-10 object-contain" />
        );
      case "megaplants":
        return (
          <img src={megaplantsLogo} alt="MegaPlants" className="w-12 h-8 object-contain" />
        );
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />
      
      <section className="pt-28 pb-20 relative overflow-hidden bg-professional">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Product Experience
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Product internships in fintech, travel tech, and e-commerce.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group bg-[#161b22]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-coral-500/30 hover:shadow-lg hover:shadow-coral-500/5 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 ${exp.logoBg} rounded-xl flex items-center justify-center shrink-0 border border-gray-700`}>
                          {renderLogo(exp.logo)}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium text-coral-500">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500">{exp.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mt-3 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-base text-gray-300 flex items-start">
                          <span className="w-2 h-2 rounded-full bg-coral-500 mt-2 mr-3 shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                      {exp.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="bg-gray-800 text-gray-400 px-3 py-1 font-medium border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {exp.image && (
                    <div className="lg:w-72 shrink-0">
                      <div className="rounded-xl overflow-hidden border border-gray-700 shadow-sm">
                        <img 
                          src={exp.image}
                          alt={`${exp.company} experience`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {exp.imageCaption && (
                        <p className="text-base text-gray-300 mt-3 text-center font-semibold">{exp.imageCaption}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
