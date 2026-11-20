import type { CSSProperties, ReactNode } from "react";
import { House, MapPin, Plane, Tag } from "lucide-react";

/**
 * Hero scene: frosted glass cards of the actual work floating on the right,
 * with depth blur (far cards soft, near cards sharp) and the left kept empty
 * for the headline. Each card points at something real:
 *   travel booking phone  -> Odynn / Awayz booking-flow fixes
 *   barcode scan phone    -> EatTrack (MBA team app)
 *   house + two cards     -> Rocket Homes side-by-side comparison
 *   map pin               -> courthouse lunch guide
 *   promo code message    -> Snag
 *   blueprint sheet       -> Little Falcon, CCNY senior design (top view from the team's drawing)
 *   small chart           -> analytics, kept small on purpose
 * Purely decorative.
 */

type Depth = "far" | "mid" | "near";

function Card({ depth, className = "", style, children }: { depth: Depth; className?: string; style?: CSSProperties; children?: ReactNode }) {
  return (
    <div className={`gl-card gl-${depth} ${className}`} style={style}>
      {children}
    </div>
  );
}

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
      <path d="M8 40h224" className="gl-dim" />
      <path d="M8 36v8M232 36v8" className="gl-dim" />
      <rect x="8" y="62" width="224" height="30" />
      {[30, 52, 74, 96, 144, 166, 188, 210].map((x) => (
        <path key={x} d={`M${x} 62v30`} className="gl-dim" />
      ))}
      <rect x="104" y="52" width="32" height="64" />
      <path d="M104 52l32 64M136 52l-32 64" className="gl-dim" />
      <path d="M108 46h24" strokeWidth="2" />
      <path d="M120 46v6" />
      <path d="M120 116v44" />
      <rect x="84" y="160" width="72" height="18" />
      <path d="M92 164h12v10H92zM114 164h12v10h-12zM136 164h12v10h-12z" className="gl-dim" />
      <path d="M170 182h62v14h-62z" className="gl-dim" />
    </svg>
  );
}

export function HeroBackdrop() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <span className="gl-bokeh" style={{ left: "27%", top: "30%" }} />
      <span className="gl-bokeh gl-bokeh-sm" style={{ left: "40%", top: "8%" }} />

      <Card depth="far" className="gl-chart" style={{ left: "33%", top: "3%" }}>
        <span style={{ height: "35%" }} />
        <span style={{ height: "55%" }} />
        <span style={{ height: "80%" }} />
      </Card>

      <Card depth="mid" className="gl-float" style={{ left: "19%", top: "13%" }}>
        <Phone>
          <Plane className="gl-icon" strokeWidth={1.5} />
          <svg className="gl-arc" viewBox="0 0 60 30" fill="none"><path d="M2 28C14 6 38 2 58 6" strokeDasharray="3 4" /></svg>
          <i className="gl-line" />
          <i className="gl-line gl-short" />
          <i className="gl-pill" />
        </Phone>
      </Card>

      <Card depth="near" className="gl-float gl-float-2" style={{ left: "31%", top: "38%" }}>
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
      </Card>

      <Card depth="near" className="gl-compare" style={{ right: "2%", top: "6%" }}>
        <House className="gl-icon" strokeWidth={1.5} />
        <div className="gl-mini"><i /><i className="gl-short" /><b /></div>
        <div className="gl-mini gl-mini-hl"><i /><i className="gl-short" /><b /></div>
      </Card>

      <Card depth="mid" className="gl-map" style={{ right: "-3%", top: "52%" }}>
        <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 20h120M0 52h120M0 76h120M18 0v90M54 0v90M92 0v90M0 90L70 0" className="gl-dim" />
        </svg>
        <MapPin className="gl-pin" strokeWidth={2} />
      </Card>

      <Card depth="near" className="gl-bubble gl-float gl-float-3" style={{ left: "17%", top: "58%" }}>
        <Tag className="gl-tag" strokeWidth={2} />
        <span>SAVE20</span>
      </Card>

      <Card depth="mid" className="gl-blueprint" style={{ left: "35%", bottom: "6%" }}>
        <LittleFalcon />
      </Card>
    </div>
  );
}
