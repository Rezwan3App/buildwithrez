import { Link } from "wouter";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Footer } from "@/components/footer";
import { ExternalLink, FileText, X, Youtube, BatteryCharging } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
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

export function ImageModal({ src, alt, label, onClose }: { src: string; alt: string; label: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // the close button is the only focusable element, so Tab stays on it
      if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={label} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image" className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 transition-colors" data-testid="button-close-modal">
        <X aria-hidden="true" className="h-8 w-8" />
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export function ProjectsTabs({ active }: { active: "product" | "mba" }) {
  const tabs = [
    { id: "product", href: "/projects", label: "Projects", sub: "Products I built and a PRD I wrote" },
    { id: "mba", href: "/projects/mba", label: "MBA projects", sub: "Team class projects I led at Baruch" },
  ];
  return (
    <nav aria-label="Project types" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <Link
            key={t.id}
            href={t.href}
            aria-current={on ? "page" : undefined}
            className={`group flex items-center justify-between gap-4 rounded-2xl border-2 px-6 py-5 transition-colors duration-200 ${
              on ? "border-[#1e3a8a] bg-blue-50" : "border-slate-200 bg-white hover:border-blue-300"
            }`}
          >
            <span>
              <span className={`block text-xl font-semibold ${on ? "text-blue-900" : "text-slate-900"}`}>{t.label}</span>
              <span className="block text-sm text-slate-600">{t.sub}</span>
            </span>
            {on ? (
              <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-blue-900">Viewing</span>
            ) : (
              <span aria-hidden="true" className="shrink-0 text-xl text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-900">→</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

const Dot = () => <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>;
const statusCls = "inline-flex items-center h-8 px-3 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200";
const cardCls = "bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300";

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
  const closeModal = useCallback(() => setIsImageModalOpen(false), []);

  return (
    <div className="min-h-screen">

      <section className="pt-24 sm:pt-28 pb-14 md:pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-10">
              <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900 mb-4">
                Projects
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl">
                Products I built on my own, plus a concept PRD.
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
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Personal projects</h2>
            <div className="space-y-4">
              {item("shipped", "snag", <Reveal>
              <div id="snag" className={`${cardCls} scroll-mt-24`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <Youtube aria-hidden="true" className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Snag</h3>
                      <p className="text-blue-800 font-medium">Texts you the promo codes in YouTube sponsor reads</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={statusCls}>Shipped</span>
                    <span className={statusCls}>2026</span>
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

                <p className="text-slate-600 mb-3">
                  Watches the channels you follow and texts you each new code, sponsor link, and expiry.
                </p>

                <ul className="text-slate-600 text-sm space-y-1">
                  {[
                    "Add a YouTuber's channel to your watchlist.",
                    "Scans every new upload's description for deals.",
                    "Sends an SMS when a code or expiry turns up.",
                  ].map((b) => (
                    <li key={b} className="flex items-start"><Dot /><span>{b}</span></li>
                  ))}
                </ul>

                <div className="mt-5 border-l-2 border-blue-800 pl-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-800 mb-2">Product decisions</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li><span className="text-slate-900 font-medium">One loop:</span> watch, detect, text.</li>
                    <li><span className="text-slate-900 font-medium">No accounts:</span> just JSON files and a background job.</li>
                  </ul>
                </div>

                <p className="text-sm text-slate-600 mt-5">Bun · Hono · YouTube RSS · Twilio SMS · JSON storage</p>
              </div>
              </Reveal>)}

              {item("progress", "wattfinder", <Reveal>
              <div className={cardCls}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <BatteryCharging aria-hidden="true" className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">WattFinder</h3>
                      <p className="text-blue-800 font-medium">Real EV charge times, not sticker kW</p>
                    </div>
                  </div>
                  <span className={`${statusCls} self-start`}>In progress</span>
                </div>

                <p className="text-slate-600 mb-3">
                  Predicts charge time from a battery's real charging curve, not the charger's peak kW.
                </p>

                <ul className="text-slate-600 text-sm space-y-1">
                  <li className="flex items-start"><Dot /><span>Models charging behavior across 3 EV platforms.</span></li>
                </ul>

                <p className="text-sm text-slate-600 mt-5">Next.js · TypeScript · Postgres</p>
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
              <div className={cardCls}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img decoding="async" src={alltrailsIcon} alt="AllTrails logo" width={56} height={56} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">
                          AllTrails Journeys
                        </h3>
                        <p className="text-blue-800 font-medium">
                          Plan a multi-hike day in one app
                        </p>
                      </div>
                    </div>

                    <a
                      href="/attached_assets/AllTrails_Journeys_Curated_Hiking_Itineraries_1768253125440.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 btn-primary text-white rounded-lg text-sm font-semibold border-0"
                      data-testid="button-view-alltrails-prd"
                    >
                      <FileText aria-hidden="true" className="mr-2 h-4 w-4" />
                      View PRD (PDF)
                      <ExternalLink aria-hidden="true" className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="lg:w-72 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsImageModalOpen(true)}
                      aria-label="Enlarge AllTrails Journeys wireframe"
                      className="rounded-xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-colors cursor-zoom-in w-full"
                      data-testid="button-enlarge-wireframe"
                    >
                      <img
                        decoding="async"
                        src="/attached_assets/image_1768253142355.webp"
                        alt="AllTrails Journeys Figma wireframe"
                        width={739}
                        height={758}
                        className="w-full h-auto"
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
        <ImageModal src="/attached_assets/image_1768253142355.webp" alt="AllTrails Journeys Figma wireframe, full size" label="AllTrails Journeys wireframe" onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
}
