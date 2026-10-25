import { Link } from "wouter";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Footer } from "@/components/footer";
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
    { id: "product", href: "/projects", label: "Projects" },
    { id: "mba", href: "/projects/mba", label: "MBA projects" },
  ];
  return (
    <nav aria-label="Project types" className="flex gap-6 border-b border-slate-200 mb-10">
      {tabs.map((t) => (
        <Link
          key={t.id}
          href={t.href}
          aria-current={active === t.id ? "page" : undefined}
          className={`-mb-px py-3 text-base font-semibold border-b-2 transition-colors duration-200 ${
            active === t.id ? "border-[#1e3a8a] text-blue-900" : "border-transparent text-slate-600 hover:text-blue-900"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}

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

  return (
    <div className="min-h-screen">

      <section className="pt-24 sm:pt-28 pb-14 md:pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900 mb-4">
                Projects
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl">
                Personal projects I've built and shipped, plus a concept PRD.
              </p>
            </div>
          </Reveal>

          <ProjectsTabs active="product" />

          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`inline-flex items-center h-8 px-3.5 rounded-full border text-sm font-semibold transition-colors duration-200 ${
                  filter === f.id
                    ? "bg-blue-800 border-blue-800 text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {(show("shipped") || show("progress")) && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
              Personal projects
            </h2>
            <div className="space-y-4">
              {item("shipped", "snag", <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <Youtube className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 id="snag" className="text-xl font-semibold text-slate-900 scroll-mt-24">Snag</h3>
                      <p className="text-blue-800 font-medium">Texts you the promo codes in YouTube sponsor reads</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center h-8 px-3 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">Shipped</span>
                    <a
                      href="https://github.com/Rezwan3App/snag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <SiGithub aria-hidden="true" className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  Promo codes and sponsor deals get buried inside YouTube videos and vanish from your feed within days. I built Snag to watch the channels you follow, read each new video's description through a set of promo-detection rules, and text you the code, sponsor link, and expiry when it finds one.
                </p>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does</h4>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Search for a YouTuber and add their channel to your watchlist.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Snag pulls each channel's RSS feed, no YouTube API key needed, and scans every new upload's description for deals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>You get an SMS when a new code, sponsor link, or expiry date turns up.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-l-2 border-blue-800 pl-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-800 mb-4">Product decisions</p>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">01</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Scoped to one loop</p>
                        <p className="text-slate-600">
                          I cut the first version to one loop: watch a channel, detect a deal, send a text. No accounts, no build step, just JSON files and a background job that re-scans every watched channel on an interval.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">02</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Skipping the official API</p>
                        <p className="text-slate-600">
                          YouTube's Data API means keys, quotas, and approval. I pulled new uploads straight from each channel's public RSS feed instead: zero keys, zero quota, and enough in the video description to find the deal.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">03</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">What I learned</p>
                        <p className="text-slate-600">
                          Skipping the official API made the build simpler and nearly free to run, and the RSS feed had everything the MVP needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mt-6">Bun · Hono · YouTube RSS · Twilio SMS · JSON storage</p>
              </div>
              </Reveal>)}

              {item("progress", "wattfinder", <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <BatteryCharging className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">WattFinder</h3>
                      <p className="text-blue-800 font-medium">Real EV charge times, not sticker kW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center h-8 px-3 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">In progress</span>
                    <a
                      href="https://github.com/Rezwan3App/wattfinder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <SiGithub aria-hidden="true" className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  Public chargers advertise a sticker kilowatt rating that almost no car ever hits. I'm building WattFinder to replace that number with physics-based charge-time predictions, modeling real charging curves so drivers see how long a stop will actually take.
                </p>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does</h4>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Predicts charge time from a battery's real charging curve, not the charger's peak kW.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Models charging behavior across 3 EV platforms so estimates hold across different cars.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-slate-600 mt-6">Next.js · TypeScript · Postgres</p>
              </div>
              </Reveal>)}
            </div>
          </div>
          )}

          {show("prd") && (
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Product requirements doc</h2>
            <div className="space-y-6">
              {item("prd", "alltrails", <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img loading="lazy" decoding="async" src={alltrailsIcon} alt="AllTrails" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">
                          AllTrails Journeys
                        </h3>
                        <p className="text-blue-800 font-medium">
                          Concept PRD: planning a multi-hike day in one app
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">
                      I wrote a PRD for Journeys, a feature that plans a multi-hike day with driving directions, rest stops, and amenities, so hikers stop switching between AllTrails, Google Maps, and travel blogs.
                    </p>

                    <a
                      href="/attached_assets/AllTrails_Journeys_Curated_Hiking_Itineraries_1768253125440.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 btn-primary text-white rounded-lg text-sm font-semibold border-0"
                      data-testid="button-view-alltrails-prd"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View PRD (PDF)
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="lg:w-80 shrink-0">
                    <button
                      onClick={() => setIsImageModalOpen(true)}
                      className="rounded-xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/10 transition-all cursor-zoom-in w-full"
                      data-testid="button-enlarge-wireframe"
                    >
                      <img loading="lazy" decoding="async"
                        src="/attached_assets/image_1768253142355.webp"
                        alt="AllTrails Journeys Figma Wireframe"
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                    <p className="text-[13px] text-slate-500 mt-2 text-center">Click to enlarge</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <AllTrailsPRD />
                </div>
              </div>
              </Reveal>)}
            </div>
          </div>
          )}

        </div>
      </section>

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

      <Footer />
    </div>
  );
}
