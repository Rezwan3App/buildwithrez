import { Link } from "wouter";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Footer } from "@/components/footer";
import { Row, Page } from "@/components/row";
import { ExternalLink, FileText, X, Youtube, BatteryCharging } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";
import { SiGithub } from "react-icons/si";
import alltrailsIcon from "@assets/image_1768252840170.png";
import AllTrailsPRD from "@/components/alltrails-prd";

type Status = "shipped" | "progress" | "prd";
const FILTERS: { id: "all" | Status; label: string }[] = [
  { id: "all", label: "All" },
  { id: "shipped", label: "Shipped" },
  { id: "progress", label: "In progress" },
  { id: "prd", label: "PRD" },
];

export function ProjectsTabs({ active }: { active: "product" | "mba" }) {
  const tabs = [
    { id: "product", href: "/projects", label: "Projects", sub: "Products I built and PRDs I wrote" },
    { id: "mba", href: "/projects/mba", label: "MBA projects", sub: "Team class projects I led at Baruch" },
  ];
  return (
    <nav aria-label="Project types" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-10">
      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <Link
            key={t.id}
            href={t.href}
            aria-current={on ? "page" : undefined}
            className={`group flex items-center justify-between gap-4 rounded-lg border px-5 py-4 transition-colors duration-200 ${
              on ? "border-[#1e3a8a] bg-white" : "border-slate-300 hover:border-[#1e3a8a] hover:bg-white"
            }`}
          >
            <span>
              <span className={`block text-lg font-semibold ${on ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
                {t.label}
              </span>
              <span className="block text-sm text-slate-500">{t.sub}</span>
            </span>
            <span aria-hidden="true" className={`text-xl transition-transform duration-200 ${on ? "text-[#1e3a8a]" : "text-slate-400 group-hover:translate-x-1 group-hover:text-[#1e3a8a]"}`}>
              {on ? "•" : "→"}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export const linkCls = "inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 underline-offset-4 hover:underline";
export const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-1.5 text-[0.9375rem] text-slate-600">
    {items.map((t, i) => (
      <li key={i}>{t}</li>
    ))}
  </ul>
);

export default function ProductManagement() {
  usePageTitle("Projects");
  const [filter, setFilter] = useState<"all" | Status>("all");
  const reduce = useReducedMotion();
  const t = { duration: reduce ? 0 : 0.22, ease: EXPO };
  const show = (s: Status) => filter === "all" || filter === s;
  const item = (s: Status, key: string, children: React.ReactNode) => (
    <AnimatePresence initial={false} key={key}>
      {show(s) && (
        <motion.div
          layout={!reduce}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={t}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  useEffect(() => {
    if (!isImageModalOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsImageModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isImageModalOpen]);

  const strong = "font-semibold text-slate-900";

  return (
    <div className="min-h-screen">
      <Page>
        <Reveal>
          <h1 className="text-slate-900 mb-4">Projects</h1>
          <p className="text-lg text-slate-600">Personal projects I've built and shipped, plus a concept PRD.</p>
        </Reveal>

        <ProjectsTabs active="product" />

        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-5 gap-y-1 mb-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`text-sm font-semibold transition-colors duration-200 ${
                filter === f.id ? "text-slate-900 underline underline-offset-4 decoration-[#1e3a8a]" : "text-slate-500 hover:text-blue-900"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {item("shipped", "snag", <Row id="snag" meta={<>Shipped<br />2026</>}>
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2"><Youtube aria-hidden="true" className="h-4 w-4 text-slate-500" />Snag</h2>
          <p className="text-slate-500 mb-3">Texts you the promo codes in YouTube sponsor reads</p>
          <p className="text-slate-600 mb-4">
            Promo codes and sponsor deals get buried inside YouTube videos and vanish from your feed within days. I built Snag to watch the channels you follow, read each new video's description through a set of promo-detection rules, and text you the code, sponsor link, and expiry when it finds one.
          </p>
          <Bullets items={[
            "Search for a YouTuber and add their channel to your watchlist.",
            "Snag pulls each channel's RSS feed, no YouTube API key needed, and scans every new upload's description for deals.",
            "You get an SMS when a new code, sponsor link, or expiry date turns up.",
          ]} />
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mt-5 mb-2">Product decisions</p>
          <Bullets items={[
            <><b className={strong}>Scoped to one loop.</b> I cut the first version to one loop: watch a channel, detect a deal, send a text. No accounts, no build step, just JSON files and a background job that re-scans every watched channel on an interval.</>,
            <><b className={strong}>Skipping the official API.</b> YouTube's Data API means keys, quotas, and approval. I pulled new uploads straight from each channel's public RSS feed instead: zero keys, zero quota, and enough in the video description to find the deal.</>,
            <><b className={strong}>What I learned.</b> Skipping the official API made the build simpler and nearly free to run, and the RSS feed had everything the MVP needed.</>,
          ]} />
          <p className="text-sm text-slate-500 mt-4">Bun · Hono · YouTube RSS · Twilio SMS · JSON storage</p>
          <p className="mt-3">
            <a href="https://github.com/Rezwan3App/snag" target="_blank" rel="noopener noreferrer" className={linkCls}>
              <SiGithub aria-hidden="true" className="h-3.5 w-3.5" />GitHub
            </a>
          </p>
        </Row>)}

        {item("progress", "wattfinder", <Row meta="In progress">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2"><BatteryCharging aria-hidden="true" className="h-4 w-4 text-slate-500" />WattFinder</h2>
          <p className="text-slate-500 mb-3">Real EV charge times, not sticker kW</p>
          <p className="text-slate-600 mb-4">
            Public chargers advertise a sticker kilowatt rating that almost no car ever hits. I'm building WattFinder to replace that number with physics-based charge-time predictions, modeling real charging curves so drivers see how long a stop will actually take.
          </p>
          <Bullets items={[
            "Predicts charge time from a battery's real charging curve, not the charger's peak kW.",
            "Models charging behavior across 3 EV platforms so estimates hold across different cars.",
          ]} />
          <p className="text-sm text-slate-500 mt-4">Next.js · TypeScript · Postgres</p>
          <p className="mt-3">
            <a href="https://github.com/Rezwan3App/wattfinder" target="_blank" rel="noopener noreferrer" className={linkCls}>
              <SiGithub aria-hidden="true" className="h-3.5 w-3.5" />GitHub
            </a>
          </p>
        </Row>)}

        {item("prd", "alltrails", <Row meta={<>PRD<br />Dec 2025</>}>
          <div className="flex items-center gap-3 mb-1">
            <img loading="lazy" decoding="async" src={alltrailsIcon} alt="AllTrails" className="h-6 w-6 rounded object-cover" />
            <h2 className="text-lg font-semibold text-slate-900">AllTrails Journeys</h2>
          </div>
          <p className="text-slate-500 mb-3">Concept PRD: planning a multi-hike day in one app</p>
          <div className="flex gap-4 items-start mb-4">
            <p className="text-slate-600 flex-1">
              I wrote a PRD for Journeys, a feature that plans a multi-hike day with driving directions, rest stops, and amenities, so hikers stop switching between AllTrails, Google Maps, and travel blogs.
            </p>
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="w-24 shrink-0 border border-slate-200 hover:border-blue-400 transition-colors cursor-zoom-in"
              data-testid="button-enlarge-wireframe"
              aria-label="Enlarge AllTrails Journeys wireframe"
            >
              <img loading="lazy" decoding="async" src="/attached_assets/image_1768253142355.webp" alt="AllTrails Journeys Figma Wireframe" className="w-full h-auto" />
            </button>
          </div>
          <a
            href="/attached_assets/AllTrails_Journeys_Curated_Hiking_Itineraries_1768253125440.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
            data-testid="button-view-alltrails-prd"
          >
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />View PRD (PDF)<ExternalLink aria-hidden="true" className="h-3 w-3" />
          </a>
          <div className="mt-6">
            <AllTrailsPRD />
          </div>
        </Row>)}
        <Footer />
      </Page>

      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            aria-label="Close image"
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 transition-colors"
            data-testid="button-close-modal"
          >
            <X className="h-8 w-8" />
          </button>
          <img loading="lazy" decoding="async"
            src="/attached_assets/image_1768253142355.webp"
            alt="AllTrails Journeys Figma wireframe, full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
