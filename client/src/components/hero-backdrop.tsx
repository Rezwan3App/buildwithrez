import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { Check, House, Landmark, MapPin, Navigation, Plane, Play, UtensilsCrossed } from "lucide-react";
import { HERO_LABELS, HERO_LAYOUT, type HeroItem, type HeroItemId } from "@/components/hero-layout";

/**
 * Hero scene: faint frosted glass cards of the actual work, floating behind
 * and around the photo. Positions live in hero-layout.ts and are measured
 * from the page centre, so they stay around the centred photo at any width.
 *
 * Arrange mode (?arrange in the URL): every element can be dragged and
 * toggled; the layout saves to this browser and can be copied as JSON.
 * Purely decorative otherwise; reduced-motion visitors see no motion.
 */

const STORAGE_KEY = "hero-layout-draft";

type Depth = "far" | "mid" | "near";

function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="gl-phone">
      <span className="gl-notch" />
      {children}
    </div>
  );
}

/** Little Falcon, top view, simplified from the 2018 assembly drawing. */
function LittleFalcon() {
  return (
    <svg viewBox="0 0 240 200" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M8 40h224M8 36v8M232 36v8" className="gl-dim" />
      <rect x="8" y="62" width="224" height="30" />
      {[30, 52, 74, 96, 144, 166, 188, 210].map((x) => (
        <path key={x} d={`M${x} 62v30`} className="gl-dim" />
      ))}
      <rect x="104" y="52" width="32" height="64" />
      <path d="M104 52l32 64M136 52l-32 64" className="gl-dim" />
      <path d="M108 46h24" strokeWidth="2" />
      <path d="M120 46v6M120 116v44" />
      <rect x="84" y="160" width="72" height="18" />
      <path d="M170 182h62v14h-62z" className="gl-dim" />
    </svg>
  );
}

/** What each element looks like: its depth, extra class, and contents. "bare" items are plain text, not glass cards. */
const ITEMS: Record<HeroItemId, { depth: Depth; className?: string; bare?: boolean; body: ReactNode }> = {
  booking: {
    depth: "mid",
    className: "gl-booking",
    body: (
      <Phone>
        <Plane className="gl-icon" strokeWidth={1.5} />
        <svg className="gl-arc" viewBox="0 0 60 30" fill="none"><path className="gl-route-path" d="M2 28C14 6 38 2 58 6" /></svg>
        <i className="gl-line" />
        <i className="gl-line gl-short" />
        <i className="gl-pill" />
      </Phone>
    ),
  },
  plaid: {
    depth: "mid",
    className: "gl-plaid",
    body: (
      <>
        <Landmark className="gl-icon" strokeWidth={1.5} />
        <svg className="gl-link" viewBox="0 0 60 12" fill="none">
          <path d="M2 6h56" strokeDasharray="2 4" />
          <circle className="gl-packet" cx="30" cy="6" r="3" />
        </svg>
        <House className="gl-icon" strokeWidth={1.5} />
        <span className="gl-check"><Check strokeWidth={3} /></span>
      </>
    ),
  },
  haptic: {
    depth: "mid",
    className: "gl-haptic",
    body: (
      <>
        <i className="gl-ring" />
        <i className="gl-ring gl-ring-2" />
        <Navigation className="gl-nav-icon" strokeWidth={1.75} />
      </>
    ),
  },
  stream: {
    depth: "mid",
    className: "gl-stream",
    body: (
      <>
        <div className="gl-stream-screen">
          <Play className="gl-play" strokeWidth={1.5} />
        </div>
        <div className="gl-progress"><i /></div>
        <div className="gl-thumbs"><i /><i /><i /></div>
      </>
    ),
  },
  scan: {
    depth: "near",
    className: "gl-scan-card",
    body: (
      <Phone>
        <div className="gl-scan">
          <svg viewBox="0 0 40 24" fill="none" stroke="currentColor">
            {[2, 5, 7, 11, 13, 16, 20, 22, 25, 29, 31, 34, 37].map((x, i) => (
              <path key={x} d={`M${x} 2v20`} strokeWidth={i % 3 === 0 ? 2 : 1} />
            ))}
          </svg>
          <i className="gl-scanline" />
        </div>
      </Phone>
    ),
  },
  compare: {
    depth: "mid",
    className: "gl-compare",
    body: (
      <>
        <House className="gl-icon" strokeWidth={1.5} />
        <div className="gl-mini"><i /><i className="gl-short" /><b /></div>
        <div className="gl-mini gl-mini-hl"><i /><i className="gl-short" /><b /></div>
      </>
    ),
  },
  blueprint: { depth: "mid", className: "gl-blueprint", body: <LittleFalcon /> },
  lunch: {
    depth: "mid",
    className: "gl-web",
    body: (
      <>
        <div className="gl-chrome"><i /><i /><i /></div>
        <svg className="gl-map-lines" viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 18h120M0 46h120M22 0v70M60 0v70M96 0v70M0 70L80 0" className="gl-dim" />
        </svg>
        <MapPin className="gl-pin" strokeWidth={2} />
        <UtensilsCrossed className="gl-fork" strokeWidth={1.5} />
      </>
    ),
  },
  events: {
    depth: "mid",
    className: "gl-events",
    body: (
      <>
        <Plane className="gl-icon gl-icon-sm" strokeWidth={1.5} />
        <svg className="gl-trace-svg" viewBox="0 0 100 40" fill="none">
          <path d="M2 34L18 30L34 32L50 20L66 22L82 10L98 6" />
        </svg>
      </>
    ),
  },
  chart: {
    depth: "far",
    className: "gl-chart",
    body: (
      <>
        <span style={{ height: "35%" }} />
        <span style={{ height: "55%" }} />
        <span style={{ height: "80%" }} />
      </>
    ),
  },
  swot: {
    depth: "mid",
    className: "gl-swot-card",
    body: (
      <div className="gl-swot">
        {["S", "W", "O", "T"].map((q) => (
          <span key={q}>{q}</span>
        ))}
      </div>
    ),
  },
  supplyDemand: {
    depth: "mid",
    className: "gl-mba",
    body: (
      <svg className="gl-sd" viewBox="0 0 48 48" fill="none">
        <path d="M4 4v40h40" className="gl-dim" />
        <path d="M8 10C20 26 30 34 42 40" />
        <path d="M8 40C20 30 30 20 42 8" />
        <circle cx="25" cy="27" r="2.6" className="gl-eq" />
      </svg>
    ),
  },
  nameRocket: { depth: "far", bare: true, body: "Rocket Companies" },
  nameNbcu: { depth: "far", bare: true, body: "NBCUniversal" },
  nameOdynn: { depth: "far", bare: true, body: "Odynn" },
  nameBlackstone: { depth: "far", bare: true, body: "Blackstone LaunchPad" },
};

function loadDraft(): HeroItem[] | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as HeroItem[];
    // Keep any element added since the draft was saved.
    return HERO_LAYOUT.map((d) => saved.find((s) => s.id === d.id) ?? d);
  } catch {
    return null;
  }
}

function saveDraft(items: HeroItem[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage blocked: arranging still works, it just won't survive a reload.
  }
}

export function HeroBackdrop() {
  const [items, setItems] = useState<HeroItem[]>(HERO_LAYOUT);
  const [arranging, setArranging] = useState(false);
  const [copied, setCopied] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: HeroItemId; dx: number; dy: number } | null>(null);

  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("arrange")) return;
    setArranging(true);
    const draft = loadDraft();
    if (draft) setItems(draft);
  }, []);

  function update(id: HeroItemId, patch: Partial<HeroItem>) {
    setItems((prev) => {
      const next = prev.map((it) => (it.id === id ? { ...it, ...patch } : it));
      saveDraft(next);
      return next;
    });
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>, id: HeroItemId) {
    if (!arranging) return;
    const card = e.currentTarget.getBoundingClientRect();
    drag.current = { id, dx: e.clientX - card.left, dy: e.clientY - card.top };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const d = drag.current;
    const scene = sceneRef.current?.getBoundingClientRect();
    if (!d || !scene) return;
    const left = e.clientX - d.dx - scene.left;
    const top = e.clientY - d.dy - scene.top;
    update(d.id, {
      x: Math.round(left - scene.width / 2),
      top: Math.round((top / scene.height) * 1000) / 10,
    });
  }

  function onPointerUp() {
    drag.current = null;
  }

  async function copyLayout() {
    const json = JSON.stringify(items, null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      window.prompt("Copy the layout:", json);
    }
  }

  function reset() {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    setItems(HERO_LAYOUT);
  }

  return (
    <>
      <div ref={sceneRef} className={`hero-scene${arranging ? " is-arranging" : ""}`} aria-hidden={!arranging}>
        {items.map((it) => {
          if (!it.show && !arranging) return null;
          const def = ITEMS[it.id];
          const style: CSSProperties = { left: `calc(50% + ${it.x}px)`, top: `${it.top}%` };
          const cls = def.bare
            ? `gl-name gl-item-${it.id}`
            : `gl-card gl-${def.depth} gl-item-${it.id} ${def.className ?? ""}`;
          return (
            <div
              key={it.id}
              data-hero-item={it.id}
              title={arranging ? HERO_LABELS[it.id] : undefined}
              className={`${cls}${arranging && !it.show ? " gl-off" : ""}`}
              style={style}
              onPointerDown={(e) => onPointerDown(e, it.id)}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {def.body}
            </div>
          );
        })}
      </div>

      {arranging && (
        <details className="arrange-panel" open aria-label="Arrange hero background">
          <summary className="arrange-title">Arrange background</summary>
          <p className="arrange-hint">Drag any element. Untick to hide it on the live site. Click the title to fold this panel.</p>
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <label>
                  <input type="checkbox" checked={it.show} onChange={(e) => update(it.id, { show: e.target.checked })} />
                  {HERO_LABELS[it.id]}
                </label>
              </li>
            ))}
          </ul>
          <div className="arrange-actions">
            <button type="button" onClick={copyLayout}>{copied ? "Copied" : "Copy layout"}</button>
            <button type="button" onClick={reset}>Reset</button>
          </div>
        </details>
      )}
    </>
  );
}
