import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Calendar } from "lucide-react";
import odynnImage from "@assets/image_1767746624854.webp";
import rocketImage from "@assets/image_1767746681686.webp";
import odynnLogo from "@assets/image_1767747315335.png";
import rocketLogo from "@assets/image_1767747337636.png";
import megaplantsLogo from "@assets/image_1767747435421.png";
import wtcLogo from "@assets/wtc-logo.png";

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
  usePageTitle("Experience");
  const experiences: Experience[] = [
    {
      title: "Operations Intern",
      company: "Welcome to Chinatown",
      location: "New York, NY",
      period: "Jun 2026 - Present",
      highlights: [
        "I'm helping launch BuiltSmall's Train-the-Trainer bootcamp, New York State's first AI training program for the counselors who advise small businesses at its 26 Entrepreneur Assistance Centers.",
        "I support our direct-to-business programming: monthly AI Foundations webinars, the AI on Main Street event series, and weekly office hours with small business owners.",
        "Day to day, I help run Chinatown's first Small Business Innovation Hub, with programs built for immigrant-owned, multilingual businesses."
      ],
      tags: ["Program Operations", "Event Programming", "AI Training", "Community Engagement"],
      logo: "wtc",
      logoBg: ""
    },
    {
      title: "Product/Data Analyst Intern",
      company: "Odynn",
      location: "New York, NY",
      period: "May 2025 - Aug 2025",
      highlights: [
        "I owned QA for the booking flow, regression-testing 50+ core features and improving reliability by 20%.",
        "I built Amplitude dashboards covering 150+ user events, using SQL to validate the data behind them.",
        "I ran competitive analysis across 25+ travel platforms to prioritize which feature gaps were worth closing."
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
        "I spearheaded a Plaid API integration that made account creation 4x faster and lifted verification success by 30%.",
        "I reworked the AI chatbot's escalation logic, cutting human handoffs by 40% and boosting form completion by 25%.",
        "A feature I designed won the internal 'Tech Demo' award and drove a 20% increase in user engagement."
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
        "I filtered 200+ product concepts down to 3 high-potential tincture lines using quantitative trend analysis.",
        "I analyzed 300+ Amazon SKUs to find market white space, supporting a 25% expansion of the product portfolio."
      ],
      tags: ["Google Analytics", "Google Trends", "Jungle Scout", "Market Research"],
      logo: "megaplants",
      logoBg: "bg-white border border-slate-200"
    }
  ];

  const renderLogo = (exp: Experience) => {
    if (exp.logo === "wtc") {
      return (
        <div className="h-12 flex items-center shrink-0">
          <img loading="lazy" decoding="async" src={wtcLogo} alt="Welcome to Chinatown" className="h-10 w-auto object-contain" />
        </div>
      );
    }

    const inner = (() => {
      switch (exp.logo) {
        case "rocket":
          return (
            <img loading="lazy" decoding="async" src={rocketLogo} alt="Rocket Mortgage" className="w-12 h-12 object-contain" />
          );
        case "odynn":
          return (
            <img loading="lazy" decoding="async" src={odynnLogo} alt="Odynn" className="w-10 h-10 object-contain" />
          );
        case "megaplants":
          return (
            <img loading="lazy" decoding="async" src={megaplantsLogo} alt="MegaPlants" className="w-12 h-8 object-contain" />
          );
        default:
          return null;
      }
    })();

    return (
      <div className={`w-12 h-12 ${exp.logoBg} rounded-lg flex items-center justify-center shrink-0`}>
        {inner}
      </div>
    );
  };


  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 relative overflow-hidden hero-grid">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Product Experience
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Internships across fintech, travel tech, e-commerce, and economic development. Here's what I actually did at each.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div
                  className="group p-6 sm:p-8 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                        <div className="flex items-start gap-4">
                          {renderLogo(exp)}
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
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-slate-400 mt-4">
                        {exp.tags.join(" · ")}
                      </p>
                    </div>

                    {exp.image && (
                      <div className="lg:w-64 shrink-0">
                        <div className="rounded-lg overflow-hidden border border-slate-200">
                          <img loading="lazy" decoding="async"
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
