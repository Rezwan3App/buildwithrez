import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import odynnImage from "@assets/image_1767746624854.webp";
import rocketImage from "@assets/image_1767746681686.webp";
import odynnLogo from "@assets/image_1767747315335.png";
import rocketLogo from "@assets/image_1767747337636.png";
import megaplantsLogo from "@assets/image_1767747435421.png";
import wtcLogo from "@assets/wtc-logo.png";

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
      title: "AI Strategy and Operations Intern",
      company: "Welcome to Chinatown",
      location: "New York, NY",
      period: "Jun 2026 - Aug 2026",
      scope: "Built and taught AI enablement for immigrant-owned small businesses, and shipped civic-tech tools, at a 501(c)(3) economic-development nonprofit.",
      metrics: [
        { num: "5", cap: "Pilot Entrepreneur Assistance Centers I trained to run the AI curriculum, ahead of a statewide rollout." },
        { num: "1,500+", cap: "Daily jurors guided to 40+ nearby lunch spots by Justice is Served, a courthouse lunch-finder web app I designed and shipped." },
        { num: "$0", cap: "Operating cost of the automated air-quality monitoring system I built in Python." }
      ],
      tools: ["Claude Code", "Python", "PurpleAir Air-Quality API", "Accessibility"],
      logo: "wtc",
      logoBg: ""
    },
    {
      title: "Product Manager Intern",
      company: "Odynn",
      location: "New York, NY",
      period: "June 2025 - Aug 2025",
      scope: "Owned QA and analytics instrumentation for Awayz, a white-labeled travel and loyalty platform serving roughly 15 fintech and travel clients.",
      metrics: [
        { num: "20%", cap: "More completed bookings after I prioritized defect fixes by client impact." },
        { num: "150+", cap: "User events I instrumented into the platform's first event taxonomy, validated in SQL." },
        { num: "5", cap: "New clients supported after I rebuilt the platform's client-data view from scratch." }
      ],
      tools: ["Jira", "Amplitude", "SQL", "Postman", "Agile"],
      logo: "odynn",
      logoBg: "bg-slate-900",
      image: odynnImage,
      imageCaption: "Led a Tableau workshop for fellow interns"
    },
    {
      title: "Product Manager Intern",
      company: "Rocket Mortgage",
      location: "Detroit, MI",
      period: "May 2024 - Dec 2024",
      scope: "Shipped features on the Rocket Mortgage app, leading design and engineering from requirements through launch.",
      metrics: [
        { num: "500%", cap: "Growth in direct account connections from the Plaid integration I led." },
        { num: "~1M", cap: "Clients a month on the Rocket Mortgage app I shipped features on." },
        { num: "20%", cap: "Engagement lift from the Rocket Homes feature that won the June 2024 Tech Demo Award." }
      ],
      tools: ["Plaid API", "Azure DevOps", "Adobe Analytics", "Figma", "A/B Testing"],
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
      scope: "Ran market and trend analysis to shape an early-stage e-commerce wellness product portfolio.",
      metrics: [
        { num: "200+", cap: "Product concepts I screened through quantitative trend analysis." },
        { num: "3", cap: "High-potential product lines shortlisted for development." },
        { num: "25%", cap: "Portfolio expansion from white space I identified across 300+ SKUs." }
      ],
      tools: ["Google Analytics", "Google Trends", "Jungle Scout", "Market Research"],
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
                A snapshot of what I delivered at each internship. The full detail is in my resume; here, the impact reads at a glance.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="group p-6 sm:p-8 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
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

                      <p className="text-slate-600 mb-4 max-w-2xl">{exp.scope}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-slate-100">
                        {exp.metrics.map((m, idx) => (
                          <div key={idx}>
                            <div
                              className="text-3xl sm:text-4xl font-bold text-blue-800 tracking-tight"
                              style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                              <CountUp value={m.num} />
                            </div>
                            <p className="mt-2 text-sm text-slate-600 leading-snug">{m.cap}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {exp.image && (
                      <div className="lg:w-60 shrink-0">
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
