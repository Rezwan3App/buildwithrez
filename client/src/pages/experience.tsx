import { Footer } from "@/components/footer";
import { LeadershipSection } from "@/components/leadership-section";
import EducationSection from "@/components/education-section";
import { usePageTitle } from "@/hooks/use-page-title";
import { Page, Row, SectionHeading } from "@/components/row";
import odynnImage from "@assets/image_1767746624854.webp";
import rocketImage from "@assets/image_1767746681686.webp";
import odynnLogo from "@assets/image_1767747315335.png";
import rocketLogo from "@assets/image_1767747337636.png";
import megaplantsLogo from "@assets/image_1767747435421.png";
import wtcLogo from "@assets/wtc-logo.png";
import nbcuLogo from "@assets/nbcuniversal-logo.svg";

interface Metric {
  num: string;
  cap: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  scope: string;
  metrics: Metric[];
  tools: string[];
  logo: string;
  image?: string;
  imageCaption?: string;
  imageAlt?: string;
  imageSize?: [number, number];
  team?: string;
  quote?: boolean;
}

export default function Experience() {
  usePageTitle("Experience");
  const experiences: Experience[] = [
    {
      title: "Product Management Intern",
      company: "NBCUniversal",
      team: "Publishing Tools",
      location: "New York, NY",
      period: "Sept 2026 – Present",
      scope: "I work on internal commerce tooling for Peacock and NBCUniversal's global streaming platform (GSP): the publishing tool teams use to build the pages that turn visitors into subscribers. I work with engineering and design on testing, the backlog, and feature improvements.",
      metrics: [],
      tools: ["Jira", "Confluence", "Airtable"],
      logo: "nbcu"
    },
    {
      title: "AI Strategy and Operations Intern",
      company: "Welcome to Chinatown",
      location: "New York, NY",
      period: "June 2026 – Aug 2026",
      scope: "At a Chinatown economic development nonprofit, I built an AI curriculum and taught it to immigrant-owned small businesses, and built two public tools: a courthouse lunch guide and an air-quality alert system that runs at no operating cost.",
      metrics: [
        { num: "5", cap: "Entrepreneurship Assistance Centers I trained to run the AI curriculum, ahead of a statewide rollout." },
        { num: "1,500+", cap: "Daily jurors guided to 40+ nearby lunch spots by Justice is Served, a courthouse lunch-finder web app I designed and shipped." }
      ],
      tools: ["Claude Code", "Python", "PurpleAir API", "Airtable"],
      logo: "wtc"
    },
    {
      title: "Product Manager Intern",
      company: "Odynn",
      location: "New York, NY",
      period: "June 2025 – Aug 2025",
      scope: "I tested releases and built event tracking for Awayz, a travel and loyalty platform that roughly 15 fintech and travel companies run under their own brand.",
      metrics: [
        { num: "20%", cap: "More completed flight bookings after I prioritized defect fixes by client impact." },
        { num: "150+", cap: "User events I tracked in Amplitude under the platform's first event taxonomy, validated in SQL." },
        { num: "5", cap: "New clients supported after I rebuilt the platform's client-data view from scratch." }
      ],
      tools: ["Jira", "Amplitude", "SQL", "Postman", "Agile"],
      logo: "odynn",
      image: odynnImage,
      imageCaption: "Led a Tableau workshop for fellow interns",
      imageAlt: "Rezwan presenting a Tableau workshop to fellow interns at Odynn",
      imageSize: [800, 568]
    },
    {
      title: "Digital Product Management Intern",
      company: "Rocket Companies",
      location: "Detroit, MI",
      period: "May 2024 – Dec 2024",
      scope: "I drove features for the Rocket Mortgage app (roughly 1M clients a month) from requirements to launch, working with designers and engineers.",
      metrics: [
        { num: "500%", cap: "Growth in direct account connections from the Plaid integration I led." },
        { num: "40%", cap: "Drop in banker escalations after I designed the use cases and escalation logic for an AI onboarding chatbot." },
        { num: "20%", cap: "Increase in user engagement after the home comparison feature shipped. I led the 5-person intern team behind it, which won the June 2024 Tech Demo Award." }
      ],
      tools: ["Plaid API", "Azure DevOps", "Adobe Analytics", "Figma", "A/B testing"],
      logo: "rocket",
      image: rocketImage,
      imageCaption: "Moderated a product roadmap panel for 200+ people",
      imageAlt: "Rezwan moderating a product roadmap panel at Rocket Companies",
      imageSize: [1400, 1050],
      quote: true
    },
    {
      title: "Product Development Intern",
      company: "MegaPlants LLC (Kosha Botanica)",
      location: "New York, NY",
      period: "Feb 2024 – May 2024",
      scope: "I screened product ideas for an early-stage e-commerce wellness brand using search trends and Amazon sales data, and recommended which lines to build.",
      metrics: [
        { num: "200+", cap: "Product concepts I screened through quantitative trend analysis." },
        { num: "3", cap: "Tincture concepts I recommended to the CEO from that screen." },
        { num: "25%", cap: "Product-line expansion across 2 new lines, supported by my review of 300+ Amazon SKUs and their reviews." }
      ],
      tools: ["Google Analytics", "Google Trends", "Jungle Scout"],
      logo: "megaplants"
    }
  ];

  const slot = "h-7 w-auto max-w-[150px] object-contain";
  const renderLogo = (exp: Experience) => {
    switch (exp.logo) {
      case "nbcu":
        return <img decoding="async" src={nbcuLogo} alt="NBCUniversal" width={2000} height={197} className="h-auto w-[230px] max-w-full object-contain" />;
      case "wtc":
        return <img decoding="async" src={wtcLogo} alt="Welcome to Chinatown" width={500} height={193} className={slot} />;
      case "rocket":
        return <img loading="lazy" decoding="async" src={rocketLogo} alt="Rocket Companies" width={762} height={376} className={slot} />;
      case "odynn":
        return <img loading="lazy" decoding="async" src={odynnLogo} alt="Odynn" width={713} height={713} className={slot} />;
      default:
        return <img loading="lazy" decoding="async" src={megaplantsLogo} alt="MegaPlants" width={300} height={157} className={slot} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Page>
        <h1 className="mb-4">Experience</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          My internships, newest first, with what I worked on and the results I can point to.
        </p>
        <p className="mt-6 mb-16 text-sm text-slate-500">
          <a href="#roles" className="hover:text-blue-800">Roles</a>
          {" · "}
          <a href="#education" className="hover:text-blue-800">Education</a>
          {" · "}
          <a href="#leadership" className="hover:text-blue-800">Leadership</a>
        </p>

        <SectionHeading id="roles" title="Roles" />
        <div>
          {experiences.map((exp) => (
            <Row
              key={exp.company}
              id={exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              meta={
                <>
                  <p className="whitespace-nowrap">{exp.period}</p>
                  <p className="mt-1 font-normal normal-case tracking-normal text-sm">{exp.location}</p>
                </>
              }
            >
              <div className="mb-3 flex h-7 items-center">{renderLogo(exp)}</div>
              <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Manrope', sans-serif" }}>{exp.title}</h3>
              <p className="text-slate-600">
                {exp.company}
                {exp.team && <span> · {exp.team}</span>}
              </p>
              <p className="mt-3 text-slate-600">{exp.scope}</p>

              {exp.metrics.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {exp.metrics.map((m) => (
                    <li key={m.num + m.cap} className="text-[13px] leading-snug text-slate-600">
                      <span className="mr-1.5 text-lg font-semibold text-slate-900 tabular-nums" style={{ fontFamily: "'Manrope', sans-serif" }}>{m.num}</span>
                      {m.cap}
                    </li>
                  ))}
                </ul>
              )}

              <p className="mt-5 text-sm text-slate-500">{exp.tools.join(" · ")}</p>

              {exp.image && (
                <figure className="mt-5 max-w-[11rem]">
                  <img loading="lazy" decoding="async" src={exp.image} alt={exp.imageAlt ?? exp.imageCaption ?? ""} width={exp.imageSize?.[0]} height={exp.imageSize?.[1]} className="w-full h-auto border border-slate-200" />
                  {exp.imageCaption && <figcaption className="mt-1.5 text-xs text-slate-500">{exp.imageCaption}</figcaption>}
                </figure>
              )}

              {exp.quote && (
                <blockquote className="mt-6 ml-4 pl-4 border-l border-slate-300 max-w-[65ch]">
                  <p className="text-slate-600 leading-relaxed">
                    His curiosity and comfort with ambiguity are the exact sort of intangible,
                    table stakes qualities that will continue to make him a great asset to any team.
                  </p>
                  <footer className="mt-2 text-sm">
                    <span className="text-slate-900 font-medium">Barry Biggs</span>
                    <span className="text-slate-600">, my mentor at Rocket Companies</span>
                    <span className="text-slate-500"> · </span>
                    <a
                      href="/attached_assets/Rezwan_Islam_Recommendation_Letter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center min-h-[44px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
                    >
                      Read the full letter
                    </a>
                  </footer>
                </blockquote>
              )}
            </Row>
          ))}
        </div>

        <div className="mt-20"><EducationSection /></div>
        <div className="mt-20"><LeadershipSection /></div>
        <div className="mt-20"><Footer /></div>
      </Page>
    </div>
  );
}
