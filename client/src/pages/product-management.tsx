import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { Footer } from "@/components/footer";
import { PageClose } from "@/components/page-close";
import { ArrowRight, ExternalLink, FileText, X, Youtube, BatteryCharging, Github } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";
import alltrailsIcon from "@assets/image_1768252840170.png";
import AllTrailsPRD from "@/components/alltrails-prd";

type Status = "shipped" | "progress" | "prd";
const FILTERS: { id: "all" | Status; label: string }[] = [
  { id: "all", label: "All" },
  { id: "shipped", label: "Shipped" },
  { id: "progress", label: "In progress" },
  { id: "prd", label: "PRD" },
];
const PROJECT_STATUSES: Status[] = ["shipped", "progress", "prd"];

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

/** Sits on ink or on paper: the inactive tab inherits its colour from the band around it. */
export function ProjectsTabs({ active, className = "mb-10" }: { active: "product" | "mba"; className?: string }) {
  const tabs = [
    { id: "product", href: "/projects", label: "Projects", sub: "Products I built and a PRD I wrote" },
    { id: "mba", href: "/projects/mba", label: "MBA projects", sub: "Team class projects I led at Baruch" },
  ];
  return (
    <nav aria-label="Project types" className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`}>
      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <Link
            key={t.id}
            href={t.href}
            aria-current={on ? "page" : undefined}
            className={`group flex min-h-[44px] items-center justify-between gap-4 rounded-[10px] border px-5 py-4 transition-colors duration-200 ${
              on ? "border-blue-900 bg-white text-slate-700" : "border-slate-400/50 hover:border-[var(--blue-light)]"
            }`}
          >
            <span className="min-w-0">
              <span className={`block text-lg font-bold leading-snug ${on ? "text-blue-900" : ""}`}>{t.label}</span>
              <span className="mt-0.5 block text-[15px] leading-snug">{t.sub}</span>
            </span>
            {on ? (
              <span className="shrink-0 text-[15px] font-semibold text-blue-900">Viewing</span>
            ) : (
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

const metaCls = "text-[15px] font-semibold text-slate-600";
const rowCls = "border-b border-slate-300 py-7 sm:py-9";
const rowGridCls = "grid gap-5 lg:grid-cols-2 lg:gap-12";
const titleCls = "text-[1.1875rem] sm:text-xl font-bold";

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-slate-700">
    {items.map((b) => (
      <li key={b} className="flex items-start gap-3">
        <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
        <span className="min-w-0">{b}</span>
      </li>
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
  const closeModal = useCallback(() => setIsImageModalOpen(false), []);
  const count = PROJECT_STATUSES.filter(show).length;
  const activeLabel = FILTERS.find((f) => f.id === filter)?.label;

  return (
    <div className="min-h-screen">
      <header className="band-ink blueprint">
        <div className="wrap py-8 sm:py-14">
          <h1>Projects</h1>
          <p className="mt-3 text-lg">Products I built on my own, plus a concept PRD.</p>
          <ProjectsTabs active="product" className="mt-6 sm:mt-8" />
        </div>
      </header>

      <div className="wrap pt-8 pb-8 sm:pt-10">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`inline-flex min-h-[44px] flex-1 items-center justify-center whitespace-nowrap rounded-[10px] border px-3 text-[15px] font-semibold sm:flex-none sm:px-4 transition-colors duration-200 ${
                filter === f.id
                  ? "border-blue-900 bg-blue-900 text-white"
                  : "border-slate-300 text-slate-700 hover:border-blue-900 hover:text-blue-900"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          {activeLabel}: {count} {count === 1 ? "project" : "projects"}
        </span>
      </div>

      {(show("shipped") || show("progress")) && (
        <section className="section !pt-0">
          <div className="wrap">
            <h2 className="mb-6 sm:mb-8">Personal projects</h2>
            <div className="border-t-2 border-ink">
              {item("shipped", "snag",
                <article id="snag" className={rowCls}>
                  <div className={rowGridCls}>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <Youtube aria-hidden="true" className="h-6 w-6 shrink-0 text-blue-900" />
                        <h3 className={titleCls}>Snag</h3>
                      </div>
                      <p className="mt-1.5 font-semibold text-blue-900">Texts you the promo codes in YouTube sponsor reads</p>
                      <p className={`mt-2 ${metaCls}`}>Shipped &middot; 2026</p>
                      <p className="mt-4 text-slate-700">
                        Watches the channels you follow and texts you each new code, sponsor link, and expiry.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href="https://snag-2232.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-line flex-1 whitespace-nowrap sm:flex-none"
                        >
                          Try Snag
                          <ExternalLink aria-hidden="true" className="h-4 w-4" />
                        </a>
                        <a
                          href="https://github.com/Rezwan3App/snag"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-line flex-1 whitespace-nowrap sm:flex-none"
                        >
                          <Github aria-hidden="true" className="h-4 w-4" />
                          GitHub
                        </a>
                      </div>
                    </div>

                    <div className="min-w-0">
                      <Bullets
                        items={[
                          "Add a YouTuber's channel to your watchlist.",
                          "Scans every new upload's description for deals.",
                          "Sends an SMS when a code or expiry turns up.",
                        ]}
                      />
                      <h4 className="mt-6 font-bold">Product decisions</h4>
                      <ul className="mt-2 space-y-1 text-slate-700">
                        <li><span className="font-semibold text-ink">One loop:</span> watch, detect, text.</li>
                        <li><span className="font-semibold text-ink">No accounts:</span> just JSON files and a background job.</li>
                      </ul>
                      <p className={`mt-5 ${metaCls}`}>Bun · Hono · YouTube RSS · Twilio SMS · JSON storage</p>
                    </div>
                  </div>
                </article>
              )}

              {item("progress", "wattfinder",
                <article className={rowCls}>
                  <div className={rowGridCls}>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <BatteryCharging aria-hidden="true" className="h-6 w-6 shrink-0 text-blue-900" />
                        <h3 className={titleCls}>WattFinder</h3>
                      </div>
                      <p className="mt-1.5 font-semibold text-blue-900">Real EV charge times, not sticker kW</p>
                      <p className={`mt-2 ${metaCls}`}>In progress</p>
                      <p className="mt-4 text-slate-700">
                        Predicts charge time from a battery's real charging curve, not the charger's peak kW.
                      </p>
                    </div>

                    <div className="min-w-0">
                      <Bullets items={["Models charging behavior across 3 EV platforms."]} />
                      <p className={`mt-5 ${metaCls}`}>Next.js · TypeScript · Postgres</p>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {show("prd") && (
        <section className="section bg-[var(--paper-deep)]">
          <div className="wrap">
            <h2 className="mb-6 sm:mb-8">Product requirements doc</h2>
            {item("prd", "alltrails",
              <article className="grid gap-y-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-x-12">
                <div className="min-w-0 lg:col-start-1 lg:row-start-1">
                  <div className="flex items-start gap-4">
                    <img decoding="async" src={alltrailsIcon} alt="AllTrails logo" width={56} height={56} className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                    <div className="min-w-0">
                      <h3 className={titleCls}>AllTrails Journeys</h3>
                      <p className="mt-1 font-semibold text-blue-900">Plan a multi-hike day in one app</p>
                    </div>
                  </div>
                  <a
                    href="/attached_assets/AllTrails_Journeys_Curated_Hiking_Itineraries_1768253125440.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line mt-5 w-full sm:w-auto"
                    data-testid="button-view-alltrails-prd"
                  >
                    <FileText aria-hidden="true" className="h-4 w-4" />
                    View PRD (PDF)
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>

                <div className="min-w-0 w-full max-w-sm lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
                  <div className="ticks">
                    <button
                      type="button"
                      onClick={() => setIsImageModalOpen(true)}
                      aria-label="Enlarge AllTrails Journeys wireframe"
                      className="block w-full cursor-zoom-in overflow-hidden rounded-[6px]"
                      data-testid="button-enlarge-wireframe"
                    >
                      <img
                        decoding="async"
                        src="/attached_assets/image_1768253142355.webp"
                        alt="AllTrails Journeys Figma wireframe"
                        width={739}
                        height={758}
                        className="h-auto w-full"
                      />
                    </button>
                  </div>
                </div>

                <div className="min-w-0 lg:col-start-1 lg:row-start-2">
                  <AllTrailsPRD />
                </div>
              </article>
            )}
          </div>
        </section>
      )}

      {isImageModalOpen && (
        <ImageModal src="/attached_assets/image_1768253142355.webp" alt="AllTrails Journeys Figma wireframe, full size" label="AllTrails Journeys wireframe" onClose={closeModal} />
      )}

      <PageClose />
      <Footer />
    </div>
  );
}
