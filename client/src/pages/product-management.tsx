import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { Footer } from "@/components/footer";
import { PageClose } from "@/components/page-close";
import { ArrowRight, ExternalLink, X, Youtube, Github, ListOrdered } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

type Status = "shipped" | "progress";
const FILTERS: { id: "all" | Status; label: string }[] = [
  { id: "all", label: "All" },
  { id: "shipped", label: "Shipped" },
  { id: "progress", label: "In progress" },
];
const PROJECT_STATUSES: Status[] = ["shipped", "progress"];

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
    { id: "product", href: "/projects", label: "Projects", sub: "Products I built on my own" },
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
            className={`group flex min-h-[44px] items-center justify-between gap-4 rounded-[10px] border px-5 py-4 transition-colors duration-150 ease-out ${
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
                className="h-5 w-5 shrink-0"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

type Shot = { src: string; alt: string; label: string; w?: number; h?: number };
const SNAG_SHOTS: Shot[] = [
  { src: "/attached_assets/snag/screenshot.webp", w: 1440, h: 860, label: "Search a YouTuber", alt: "Snag homepage: search a YouTuber, with a promo code card it caught" },
  { src: "/attached_assets/snag/how-it-works.webp", w: 1116, h: 567, label: "How a deal gets caught", alt: "A video description with the deal phrases underlined, next to the sponsor, code and end date Snag pulls out" },
  { src: "/attached_assets/snag/alerts-and-history.webp", w: 1116, h: 685, label: "Alerts and deal history", alt: "Watched channels, text alerts, and a history of saved deals" },
];

const RAGE_SHOTS: Shot[] = [
  { src: "/attached_assets/rageparser/ranked-themes.webp", w: 1440, h: 990, label: "Venmo, ranked by RICE", alt: "RageParser Venmo page: complaint themes ranked by RICE score, each with a product, design and engineering fix" },
  { src: "/attached_assets/rageparser/app-picker.webp", w: 1440, h: 660, label: "Pick one of 50 apps", alt: "RageParser homepage: what users hate about 50 apps, with an app picker grouped by category" },
];

const Gallery = ({ label, shots, onOpen }: { label: string; shots: Shot[]; onOpen: (s: Shot) => void }) => (
  <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3" aria-label={label}>
    {shots.map((shot) => (
      <li key={shot.src}>
        <button
          type="button"
          onClick={() => onOpen(shot)}
          aria-label={`Enlarge screenshot: ${shot.label}`}
          className="block w-full cursor-zoom-in overflow-hidden rounded-[6px] border border-slate-300 transition-colors duration-150 ease-out hover:border-blue-900"
        >
          <img decoding="async" loading="lazy" src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} className="aspect-[16/10] h-auto w-full object-cover object-top" />
        </button>
        <p className="mt-2 text-[15px] text-slate-600">{shot.label}</p>
      </li>
    ))}
  </ul>
);

const SNAG_URL = "https://snag-2232.onrender.com/";
let snagWarmed = false;
// wakes Render's free tier; no-cors since we ignore the response
function warmSnag() {
  if (snagWarmed) return;
  snagWarmed = true;
  fetch(SNAG_URL, { mode: "no-cors", cache: "no-store" }).catch(() => {});
}
const metaCls = "label text-slate-600";
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
  useEffect(() => { snagWarmed = false; warmSnag(); }, []);
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
  const [modal, setModal] = useState<Shot | null>(null);
  const closeModal = useCallback(() => setModal(null), []);
  const count = PROJECT_STATUSES.filter(show).length;
  const activeLabel = FILTERS.find((f) => f.id === filter)?.label;

  return (
    <div className="min-h-screen">
      <header className="band-ink blueprint">
        <div className="wrap py-8 sm:py-14">
          <h1>Projects</h1>
          <p className="mt-3 text-lg">Products I built on my own, from idea to working app.</p>
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
              className={`inline-flex min-h-[44px] flex-1 items-center justify-center whitespace-nowrap rounded-[10px] border px-3 text-[15px] font-semibold sm:flex-none sm:px-4 transition-colors duration-150 ease-out ${
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
                          href={SNAG_URL}
                          onPointerEnter={warmSnag}
                          onFocus={warmSnag}
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
                      <p className="mt-3 text-[15px] font-semibold text-slate-600">Free server: the first load can take about 30 seconds.</p>
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
                        <li><span className="font-semibold text-ink">No accounts:</span> one SQLite file and a background job.</li>
                      </ul>
                      <p className={`mt-5 ${metaCls}`}>Bun · Hono · YouTube RSS · Twilio SMS · SQLite</p>
                    </div>
                  </div>
                  <Gallery label="Snag screenshots" shots={SNAG_SHOTS} onOpen={setModal} />
                </article>
              )}

              {item("progress", "rageparser",
                <article id="rageparser" className={rowCls}>
                  <div className={rowGridCls}>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <ListOrdered aria-hidden="true" className="h-6 w-6 shrink-0 text-blue-900" />
                        <h3 className={titleCls}>RageParser</h3>
                      </div>
                      <p className="mt-1.5 font-semibold text-blue-900">App Store complaints, ranked into a fix list</p>
                      <p className={`mt-2 ${metaCls}`}>In progress &middot; 3 of 50 apps analyzed</p>
                      <p className="mt-4 text-slate-700">
                        Reads 500 recent App Store reviews per app and turns the complaints into a ranked list of fixes.
                      </p>
                    </div>

                    <div className="min-w-0">
                      <Bullets
                        items={[
                          "Groups complaints into themes, each backed by real review quotes.",
                          "Scores every theme with RICE and shows each input.",
                          "Gives one fix each for product, design and engineering, plus a PRD.",
                        ]}
                      />
                      <h4 className="mt-6 font-bold">Product decisions</h4>
                      <ul className="mt-2 space-y-1 text-slate-700">
                        <li><span className="font-semibold text-ink">Code does the math:</span> share and RICE come from the review counts, not the model.</li>
                      </ul>
                      <p className={`mt-5 ${metaCls}`}>Next.js · Claude · App Store review feed</p>
                    </div>
                  </div>
                  <Gallery label="RageParser screenshots" shots={RAGE_SHOTS} onOpen={setModal} />
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {modal && <ImageModal src={modal.src} alt={modal.alt} label={modal.label} onClose={closeModal} />}

      <PageClose />
      <Footer />
    </div>
  );
}
