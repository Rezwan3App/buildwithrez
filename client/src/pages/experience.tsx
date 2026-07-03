import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
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
      title: "Operations Intern",
      company: "Welcome to Chinatown",
      location: "New York, NY",
      period: "Jun 2026 - Present",
      highlights: [
        "Program Launch: Supporting the launch of BuiltSmall's Train-the-Trainer AI bootcamp for Entrepreneur Assistance Center counselors across New York State, funded by Empire State Development.",
        "Training Operations: Helping deliver small-business AI programming — monthly AI Foundations webinars, the AI on Main Street event series, and weekly office hours with small business owners.",
        "Innovation Hub: Supporting day-to-day operations at Chinatown's first Small Business Innovation Hub, serving immigrant-owned and multilingual businesses."
      ],
      tags: ["Program Operations", "Event Programming", "AI Training", "Community Engagement"],
      logo: "wtc",
      logoBg: "bg-gradient-to-br from-blue-800 to-blue-600"
    },
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
      logoBg: "bg-slate-900",
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
      logoBg: "bg-slate-900",
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
      logoBg: "bg-white border border-slate-200"
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
      case "wtc":
        return (
          <span className="text-white text-sm font-bold">WC</span>
        );
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Product Experience
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Product and operations internships across fintech, travel tech, e-commerce, and economic development.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div
                  className="group accent-line p-6 sm:p-8 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 ${exp.logoBg} rounded-lg flex items-center justify-center shrink-0`}>
                            {renderLogo(exp.logo)}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-blue-800 font-medium">
                              {exp.company}
                            </p>
                            <p className="text-sm text-slate-500">{exp.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 mt-3 sm:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-5">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 mr-3 shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                        {exp.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 px-2.5 py-0.5 text-xs font-medium border-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {exp.image && (
                      <div className="lg:w-64 shrink-0">
                        <div className="rounded-lg overflow-hidden border border-slate-200">
                          <img
                            src={exp.image}
                            alt={`${exp.company} experience`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        {exp.imageCaption && (
                          <p className="text-slate-500 text-xs mt-2 text-center">{exp.imageCaption}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
