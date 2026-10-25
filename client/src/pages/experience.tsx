import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { LeadershipSection } from "@/components/leadership-section";
import EducationSection from "@/components/education-section";
import { usePageTitle } from "@/hooks/use-page-title";
import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  logoBg: string;
  image?: string;
  imageCaption?: string;
  team?: string;
  quote?: boolean;
}

// Counts a formatted stat (e.g. "1,500+", "~1M", "$0") up from zero when it scrolls into view.
function CountUp({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    if (!match) {
      setText(value);
      return;
    }
    const prefix = match[1];
    const raw = match[2].replace(/,/g, "");
    const target = parseFloat(raw);
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const suffix = match[3];
    const fmt = (n: number) =>
      prefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(fmt(target));
      return;
    }
    done.current = false;
    setText(fmt(0));
    const el = ref.current;
    if (!el) {
      setText(fmt(target));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          io.disconnect();
          const dur = 900;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            setText(fmt(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{text}</span>;
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
      scope: "Internal commerce tooling for Peacock and NBCUniversal's global streaming platform (GSP). I work on the publishing tool teams use to build the pages that turn visitors into subscribers, with engineering and design.",
      metrics: [],
      tools: ["Jira", "Confluence", "Airtable"],
      logo: "nbcu",
      logoBg: "bg-slate-900"
    },
    {
      title: "AI Strategy and Operations Intern",
      company: "Welcome to Chinatown",
      location: "New York, NY",
      period: "June 2026 – Aug 2026",
      scope: "I built an AI curriculum for immigrant-owned small businesses and two public tools: a courthouse lunch guide and an air-quality alert system.",
      metrics: [
        { num: "5", cap: "Assistance Centers trained on the curriculum" },
        { num: "1,500+", cap: "Daily jurors guided to 40+ lunch spots" },
        { num: "$0", cap: "Operating cost of the air-quality alerts" }
      ],
      tools: ["Claude Code", "Python", "PurpleAir API", "Airtable"],
      logo: "wtc",
      logoBg: ""
    },
    {
      title: "Product Manager Intern",
      company: "Odynn",
      location: "New York, NY",
      period: "June 2025 – Aug 2025",
      scope: "I tested releases and built event tracking for Awayz, a travel and loyalty platform run by roughly 15 fintech and travel companies.",
      metrics: [
        { num: "20%", cap: "More completed flight bookings" },
        { num: "150+", cap: "User events tracked in Amplitude" },
        { num: "5", cap: "New clients supported by a rebuilt data view" }
      ],
      tools: ["Jira", "Amplitude", "SQL", "Postman", "Agile"],
      logo: "odynn",
      logoBg: "bg-slate-900",
      image: odynnImage,
      imageCaption: "Led a Tableau workshop for fellow interns"
    },
    {
      title: "Digital Product Management Intern",
      company: "Rocket Companies",
      location: "Detroit, MI",
      period: "May 2024 – Dec 2024",
      scope: "I led designers and engineers from requirements to launch on Rocket Mortgage app features.",
      metrics: [
        { num: "500%", cap: "Growth in direct account connections" },
        { num: "40%", cap: "Fewer banker escalations after the AI onboarding chatbot" },
        { num: "20%", cap: "More engagement from the home comparison feature, a June 2024 Tech Demo Award winner" }
      ],
      tools: ["Plaid API", "Azure DevOps", "Adobe Analytics", "Figma", "A/B testing"],
      logo: "rocket",
      logoBg: "bg-slate-900",
      image: rocketImage,
      imageCaption: "Moderated a product roadmap panel for 200+ people",
      quote: true
    },
    {
      title: "Product Development Intern",
      company: "MegaPlants LLC | Kosha Botanica",
      location: "New York, NY",
      period: "Feb 2024 – May 2024",
      scope: "I screened product ideas for an early-stage wellness brand using search trends and Amazon sales data.",
      metrics: [
        { num: "200+", cap: "Concepts screened" },
        { num: "3", cap: "Tincture concepts recommended" },
        { num: "25%", cap: "Product-line expansion across 2 new lines, from a review of 300+ Amazon SKUs and reviews" }
      ],
      tools: ["Google Analytics", "Google Trends", "Jungle Scout", "Market research"],
      logo: "megaplants",
      logoBg: "bg-white border border-slate-200"
    }
  ];

  const renderLogo = (exp: Experience) => {
    if (exp.logo === "nbcu") {
      return (
        <div className="h-12 flex items-center shrink-0">
          <img loading="eager" decoding="async" src={nbcuLogo} alt="NBCUniversal" width={230} height={23} className="w-[230px] max-w-full h-auto object-contain" />
        </div>
      );
    }
    if (exp.logo === "wtc") {
      return (
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <img loading="lazy" decoding="async" src={wtcLogo} alt="Welcome to Chinatown" width={48} height={48} className="w-12 h-12 object-contain" />
        </div>
      );
    }

    const inner = (() => {
      switch (exp.logo) {
        case "rocket":
          return (
            <img loading="lazy" decoding="async" src={rocketLogo} alt="Rocket Companies" width={48} height={48} className="w-12 h-12 object-contain" />
          );
        case "odynn":
          return (
            <img loading="lazy" decoding="async" src={odynnLogo} alt="Odynn" className="w-12 h-12 object-contain" width={48} height={48} />
          );
        case "megaplants":
          return (
            <img loading="lazy" decoding="async" src={megaplantsLogo} alt="MegaPlants" width={48} height={32} className="w-12 h-8 object-contain" />
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

      <section className="pt-24 sm:pt-28 pb-14 md:pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900 mb-4">
                Experience
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                My product internships, newest first.
              </p>
            </div>
          </Reveal>

          <nav aria-label="On this page" className="flex gap-2 mb-8">
            {[["#roles", "Roles"], ["#education", "Education"], ["#leadership", "Leadership"]].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center h-8 px-3.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-blue-300 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <h2 id="roles" className="text-[28px] leading-tight font-semibold text-slate-900 mb-6 scroll-mt-24" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Roles
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div id={exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-24 group p-6 sm:p-8 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className={`flex gap-4 ${exp.logo === "nbcu" ? "flex-col items-start" : "items-start"}`}>
                          {renderLogo(exp)}
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-blue-800 font-medium">
                              {exp.company}
                              {exp.team && <span className="text-slate-600 font-normal"> · {exp.team}</span>}
                            </p>
                            <p className="text-sm text-slate-500">{exp.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 mt-3 sm:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4 max-w-2xl">{exp.scope}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {exp.metrics.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-slate-100">
                        {exp.metrics.map((m, idx) => (
                          <div key={idx}>
                            <div
                              className="text-3xl sm:text-4xl font-bold text-blue-800 tracking-tight tabular-nums"
                              style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                              <CountUp value={m.num} />
                            </div>
                            <p className="mt-1 text-sm text-slate-600 leading-snug">{m.cap}</p>
                          </div>
                        ))}
                      </div>}

                      {exp.quote && (
                        <div className="pull-quote max-w-[65ch] mt-6">
                          <p className="text-slate-600 leading-relaxed">
                            His curiosity and comfort with ambiguity are the exact sort of intangible,
                            table stakes qualities that will continue to make him a great asset to any team.
                          </p>
                          <footer className="mt-3 text-sm">
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
                        </div>
                      )}
                    </div>

                    {exp.image && (
                      <div className="lg:w-60 shrink-0">
                        <div className="rounded-lg overflow-hidden border border-slate-200">
                          <img loading="lazy" decoding="async"
                            src={exp.image}
                            alt={exp.imageCaption ?? `${exp.company} experience`} width={240} height={180}
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

      <EducationSection />
      <LeadershipSection />

      <Footer />
    </div>
  );
}
