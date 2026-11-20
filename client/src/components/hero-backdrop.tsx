import type { CSSProperties, ReactNode } from "react";
import { Navigation, Plane, Play, Tag } from "lucide-react";

/**
 * Hero scene: a few faint frosted glass cards of the actual work, behind the
 * photo, each with one small slow loop.
 *   streaming player      -> NBCUniversal, Peacock commerce tooling
 *   flight booking phone  -> Odynn / Awayz mobile booking-flow fixes
 *   promo code tag        -> Snag
 *   barcode scan phone    -> EatTrack (MBA team app)
 *   nav arrow + pulses    -> haptic navigation work
 * Only three cards move (scan line, nav pulse, streaming progress); the rest
 * stay still so the motion never competes. Reduced-motion visitors see none.
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

export function HeroBackdrop() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <span className="gl-bokeh" style={{ left: "29%", top: "26%" }} />

      {/* Odynn / Awayz: mobile flight booking (still) */}
      <Card depth="mid" style={{ left: "17%", top: "12%" }}>
        <Phone>
          <Plane className="gl-icon" strokeWidth={1.5} />
          <svg className="gl-arc" viewBox="0 0 60 30" fill="none"><path className="gl-route-path" d="M2 28C14 6 38 2 58 6" /></svg>
          <i className="gl-line" />
          <i className="gl-line gl-short" />
          <i className="gl-pill" />
        </Phone>
      </Card>

      {/* NBCUniversal / Peacock: a streaming player with a slowly filling progress bar */}
      <Card depth="mid" className="gl-stream" style={{ left: "30%", top: "10%" }}>
        <div className="gl-stream-screen">
          <Play className="gl-play" strokeWidth={1.5} />
        </div>
        <div className="gl-progress"><i /></div>
        <div className="gl-thumbs"><i /><i /><i /></div>
      </Card>

      {/* Snag: promo code alert (still) */}
      <Card depth="near" className="gl-bubble" style={{ left: "15%", top: "70%" }}>
        <Tag className="gl-tag" strokeWidth={2} />
        <span>SAVE20</span>
      </Card>

      {/* Haptic navigation: an arrow sending out soft pulses */}
      <Card depth="mid" className="gl-haptic" style={{ left: "29%", top: "77%" }}>
        <i className="gl-ring" />
        <i className="gl-ring gl-ring-2" />
        <Navigation className="gl-nav-icon" strokeWidth={1.75} />
      </Card>

      {/* EatTrack: barcode scan */}
      <Card depth="near" className="gl-scan-card" style={{ left: "38%", top: "38%" }}>
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
    </div>
  );
}
