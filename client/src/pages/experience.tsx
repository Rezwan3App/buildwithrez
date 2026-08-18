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
  warm: string;
  metrics: Metric[];
  tags: string[];
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
      warm: "I got to build things that helped real neighbors, not users in a funnel.",
      metrics: [
        { num: "26", cap: "Entrepreneur Assistance Centers my AI curriculum can scale to statewide" },
        { num: "1,500+", cap: "daily jurors served by \"Justice is Served,\" the app I shipped" },
        { num: "$0", cap: "to run the air-quality alert system I built and deployed" }
      ],
      tags: ["AI Curriculum", "Python", "Web Apps", "Accessibility"],
      logo: "wtc",
      logoBg: ""
    },
    {
      title: "Product/Data Analyst Intern",
      company: "Odynn",
      location: "New York, NY",
      period: "May 2025 - Aug 2025",
      warm: "My first taste of owning the data a whole roadmap leans on.",
      metrics: [
        { num: "20%", cap: "more completed bookings after I prioritized the fixes that mattered" },
        { num: "150+", cap: "user events I shaped into the platform's first event taxonomy" },
        { num: "5", cap: "new clients supported by the data view I built from scratch" }
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
      warm: "Where product stopped being a theory for me.",
      metrics: [
        { num: "500%", cap: "growth in direct account connections after the Plaid integration I shipped" },
        { num: "~1M", cap: "people a month on the Rocket Mortgage app I shipped features on" },
        { num: "20%", cap: "engagement lift from the Rocket Homes feature that won the Tech Demo Award" }
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
      warm: "Early days: learning to turn messy market data into a shortlist.",
      metrics: [
        { num: "200+", cap: "product concepts I screened with quantitative trend analysis" },
        { num: "3", cap: "high-potential tincture lines I shortlisted from the field" },
        { num: "25%", cap: "portfolio expansion from white space I found across 300+ SKUs" }
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
                A quick look at what I actually moved at each internship. The detail lives in my resume; here, the impact reads at a glance.
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

                      <p className="text-slate-600 mb-6 max-w-2xl">{exp.warm}</p>

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

                      <p className="text-sm text-slate-400 mt-6">
                        {exp.tags.join(" · ")}
                      </p>
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
