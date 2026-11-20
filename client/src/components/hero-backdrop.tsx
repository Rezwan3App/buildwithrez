import type { CSSProperties, ReactNode } from "react";
import { House, Navigation, Plane, Play, Tag } from "lucide-react";

/**
 * Hero scene: faint frosted glass cards of the actual work, floating behind
 * and around the photo. Cards are placed from the centre of the page (the
 * same way the centred layout places the photo), so they stay around the
 * photo at any width instead of bunching up on one side.
 *   flight booking phone  -> Odynn / Awayz mobile booking-flow fixes
 *   streaming player      -> NBCUniversal, Peacock commerce tooling
 *   barcode scan phone    -> EatTrack (MBA team app)
 *   promo code tag        -> Snag
 *   house + two cards     -> Rocket Homes side-by-side comparison
 *   nav arrow + pulses    -> haptic navigation work
 *   blueprint sheet       -> Little Falcon, CCNY senior design
 * Only three cards have inner motion (scan line, nav pulse, streaming
 * progress); every card drifts very slowly. Reduced-motion visitors see none.
 */

type Depth = "far" | "mid" | "near";

/** x: px from the page centre (the photo starts about 115px right of it). top: % of the hero. */
function Card({ depth, x, top, delay = 0, className = "", children }: { depth: Depth; x: number; top: string; delay?: number; className?: string; children?: ReactNode }) {
  const style: CSSProperties = { left: `calc(50% + ${x}px)`, top, animationDelay: `${-delay}s` };
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

export function HeroBackdrop() {
  return (
    <div className="hero-scene" aria-hidden="true">
      {/* Left of the photo (tucking slightly behind it): airplane, Snag, navigation */}
      <Card depth="mid" x={40} top="8%" delay={0} className="gl-left">
        <Phone>
          <Plane className="gl-icon" strokeWidth={1.5} />
          <svg className="gl-arc" viewBox="0 0 60 30" fill="none"><path className="gl-route-path" d="M2 28C14 6 38 2 58 6" /></svg>
          <i className="gl-line" />
          <i className="gl-line gl-short" />
          <i className="gl-pill" />
        </Phone>
      </Card>
      <Card depth="near" x={0} top="48%" delay={6} className="gl-bubble gl-left">
        <Tag className="gl-tag" strokeWidth={2} />
        <span>SAVE20</span>
      </Card>
      <Card depth="mid" x={32} top="70%" delay={3} className="gl-haptic gl-left">
        <i className="gl-ring" />
        <i className="gl-ring gl-ring-2" />
        <Navigation className="gl-nav-icon" strokeWidth={1.75} />
      </Card>

      {/* Right of the photo: streaming, scanner, home comparison, blueprint */}
      <Card depth="mid" x={405} top="10%" delay={4} className="gl-stream">
        <div className="gl-stream-screen">
          <Play className="gl-play" strokeWidth={1.5} />
        </div>
        <div className="gl-progress"><i /></div>
        <div className="gl-thumbs"><i /><i /><i /></div>
      </Card>
      <Card depth="near" x={582} top="8%" delay={12} className="gl-scan-card gl-wide">
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
      <Card depth="mid" x={405} top="46%" delay={9} className="gl-compare">
        <House className="gl-icon" strokeWidth={1.5} />
        <div className="gl-mini"><i /><i className="gl-short" /><b /></div>
        <div className="gl-mini gl-mini-hl"><i /><i className="gl-short" /><b /></div>
      </Card>
      <Card depth="mid" x={540} top="68%" delay={7} className="gl-blueprint gl-wide">
        <LittleFalcon />
      </Card>
    </div>
  );
}
