import { Footer } from "@/components/footer";
import { PageClose } from "@/components/page-close";
import { LeadershipSection } from "@/components/leadership-section";
import { body, logoBox } from "@/lib/ui";
import { usePageTitle } from "@/hooks/use-page-title";
import { useEffect, useRef, useState } from "react";
import odynnImage from "@assets/image_1767746624854.webp";
import rocketImage from "@assets/image_1767746681686.webp";
import odynnLogo from "@assets/image_1767747315335.png";
import rocketLogo from "@assets/image_1767747337636.png";
import megaplantsLogo from "@assets/image_1767747435421.png";
import wtcLogo from "@assets/wtc-logo.png";
import nbcuLogo from "@assets/nbcuniversal-logo.svg";

import roles from "@/data/roles.json";

const MEDIA: Record<string, Pick<Experience, "logo" | "image" | "quote">> = {
  NBCUniversal: { logo: { src: nbcuLogo, alt: "NBCUniversal", eager: true } },
  "Welcome to Chinatown": { logo: { src: wtcLogo, alt: "Welcome to Chinatown" } },
  Odynn: { logo: { src: odynnLogo, alt: "Odynn" }, image: odynnImage },
  // The file has wide transparent margins, so scale it up to fill the box.
  "Rocket Companies": { logo: { src: rocketLogo, alt: "Rocket Companies", className: "scale-[1.45]" }, image: rocketImage, quote: true },
  "MegaPlants LLC | Kosha Botanica": { logo: { src: megaplantsLogo, alt: "MegaPlants" } },
};

interface Metric {
  num: string;
  cap: string;
  /** Long caption: takes the full width on phones. */
  wide?: boolean;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  scope: string;
  metrics: Metric[];
  tools: string[];
  logo: { src: string; alt: string; className?: string; eager?: boolean };
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
  // Words and numbers come from the database (roles.json is refreshed on every build).
  // Logos and photos stay in code, matched by company name.
  const experiences: Experience[] = roles.map((r) => ({
    ...r,
    team: r.team ?? undefined,
    imageCaption: r.image_caption ?? undefined,
    ...(MEDIA[r.company] ?? { logo: { src: "", alt: r.company } }),
  }));

  return (
    <div className="min-h-screen">
      <header className="band-ink blueprint">
        <div className="wrap py-8 sm:py-14">
          <h1>Experience</h1>
          <p className="mt-3 text-lg">My product internships, newest first.</p>
          <nav aria-label="On this page" className="mt-3 flex flex-wrap gap-x-6">
            {[["#roles", "Roles"], ["#leadership", "Leadership"]].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center min-h-[44px] font-semibold text-[var(--blue-light)] underline underline-offset-4 decoration-[#52617f] hover:decoration-[var(--blue-light)] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="py-8 sm:py-20">
        <div className="wrap">
          <h2 id="roles" className="mb-5 sm:mb-8">Roles</h2>
          <ol className="border-t-2 border-ink">
            {experiences.map((exp) => (
              <li
                key={exp.company}
                id={exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="grid gap-y-3 border-b border-slate-300 py-4 sm:gap-y-4 sm:py-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[10rem_minmax(0,1fr)_15rem] lg:gap-x-12"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <div className={logoBox}>
                    <img
                      loading={exp.logo.eager ? "eager" : "lazy"}
                      decoding="async"
                      src={exp.logo.src}
                      alt={exp.logo.alt}
                      width={120}
                      height={52}
                      className={`h-full w-full object-contain ${exp.logo.className ?? ""}`}
                    />
                  </div>
                  <p className="text-[15px] font-semibold leading-snug text-slate-600">
                    <span className="block">{exp.period}</span>
                    <span className="block">{exp.location}</span>
                  </p>
                </div>

                <div className={`min-w-0 ${exp.image ? "" : "lg:col-span-2"}`}>
                  <h3 className="text-[1.1875rem] sm:text-xl font-bold">{exp.title}</h3>
                  <p className={`mt-1 font-semibold text-[var(--ink)] ${body}`}>
                    {exp.company}
                    {exp.team && <span className="font-medium text-slate-600"> · {exp.team}</span>}
                  </p>

                  <p className={`mt-2 text-slate-700 sm:mt-3 ${body}`}>{exp.scope}</p>

                  {exp.metrics.length > 0 && (
                    <div className={`mt-4 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-slate-300 pt-4 sm:mt-5 sm:gap-x-8 sm:gap-y-5 sm:pt-5 ${exp.metrics.some((x) => x.wide) ? "" : "sm:grid-cols-3"}`}>
                      {exp.metrics.map((m) => (
                        <div
                          key={m.cap}
                          className={`min-w-0 ${
                            m.wide ? "col-span-2" : exp.metrics.some((x) => x.wide) ? "" : "last:col-span-2 sm:last:col-span-1"
                          }`}
                        >
                          <div className={`${m.wide ? "text-[2.25rem] sm:text-5xl" : "text-[1.5rem] sm:text-[1.875rem]"} font-extrabold leading-none tracking-tight tabular-nums text-blue-900`}>
                            <CountUp value={m.num} />
                          </div>
                          <p className="mt-1 text-[16px] leading-snug text-slate-700 sm:mt-2 sm:text-base">{m.cap}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.quote && (
                    <div className="pull-quote !pl-7 mt-5 sm:mt-7">
                      <p className={`text-slate-700 ${body}`}>
                        His curiosity and comfort with ambiguity are the exact sort of intangible,
                        table stakes qualities that will continue to make him a great asset to any team.
                      </p>
                      <footer className={`mt-2 ${body}`}>
                        <span className="font-semibold text-[var(--ink)]">Barry Biggs</span>
                        <span className="text-slate-600">, my mentor at Rocket Companies</span>
                        <a
                          href="/attached_assets/Rezwan_Islam_Recommendation_Letter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center min-h-[44px] w-fit font-semibold text-blue-900 underline underline-offset-4 decoration-slate-400 hover:decoration-blue-900 transition-colors"
                        >
                          Read the full letter
                        </a>
                      </footer>
                    </div>
                  )}

                  <p className="mt-3 text-[15px] font-semibold leading-snug text-slate-600 sm:mt-4">{exp.tools.join(" · ")}</p>
                </div>

                {exp.image && (
                  <figure className="mt-1 grid grid-cols-2 items-center gap-x-4 sm:col-start-2 sm:mt-2 sm:block lg:col-start-3 lg:row-start-1 lg:mt-1">
                    <div className="ticks">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={exp.image}
                        alt={exp.imageCaption ?? `${exp.company} experience`}
                        width={800}
                        height={600}
                        className="aspect-[4/3] w-full rounded-[6px] object-cover sm:aspect-auto sm:h-auto"
                      />
                    </div>
                    {exp.imageCaption && (
                      <figcaption className="text-[15px] sm:mt-4 leading-snug text-slate-600">{exp.imageCaption}</figcaption>
                    )}
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LeadershipSection />

      <PageClose />
      <Footer />
    </div>
  );
}
