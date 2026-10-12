// Quiet background texture: faint PM words that drift at different rates on scroll.
// Pure CSS scroll-driven animation (transform only); static where unsupported or reduced motion.
// x: side anchor (l/r) + offset, y: % of page height, s: rem size, d: drift (fraction of scroll, negative = up),
// m: show on mobile, v: vertical (-90deg), o: opacity, h: sideways drift in px.
type W = { t: string; side: "l" | "r"; x: string; y: number; s: number; d: number; o: number; m?: 1; v?: 1; h?: number };

const WORDS: W[] = [
  { t: "Roadmap", side: "r", x: "-1rem", y: 4, s: 5.5, d: 0.12, o: 0.05, m: 1 },
  { t: "PRD", side: "l", x: "1rem", y: 11, s: 6, d: -0.08, o: 0.06 },
  { t: "Agile", side: "r", x: "2%", y: 19, s: 3.5, d: 0.2, o: 0.05, h: 30 },
  { t: "User Research", side: "l", x: "-0.5rem", y: 27, s: 3.25, d: 0.1, o: 0.045, v: 1, m: 1 },
  { t: "North Star", side: "r", x: "-2rem", y: 35, s: 5, d: -0.15, o: 0.05 },
  { t: "OKRs", side: "l", x: "3%", y: 43, s: 5.5, d: 0.22, o: 0.055, m: 1 },
  { t: "A/B Test", side: "r", x: "1%", y: 52, s: 3, d: 0.07, o: 0.045, h: -30 },
  { t: "Discovery", side: "l", x: "-1.5rem", y: 60, s: 4.5, d: -0.1, o: 0.05 },
  { t: "MVP", side: "r", x: "3%", y: 68, s: 6, d: -0.16, o: 0.06, m: 1 },
  { t: "Backlog", side: "l", x: "2%", y: 76, s: 4, d: -0.22, o: 0.05 },
  { t: "Jobs to be Done", side: "r", x: "-0.5rem", y: 84, s: 2.75, d: -0.09, o: 0.045, v: 1, m: 1 },
  { t: "Retention", side: "l", x: "-2rem", y: 90, s: 5, d: -0.2, o: 0.05 },
];

const CSS = `
html{position:relative}
.fw-root{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:-1;pointer-events:none}
.fw-w{position:absolute;white-space:nowrap;font-family:Manrope,system-ui,sans-serif;font-weight:600;line-height:1;color:#1e3a8a;transform-origin:center}
.fw-w.fw-v{transform:rotate(-90deg)}
@media (max-width:767px){.fw-w{font-size:calc(var(--s)*0.55)!important}.fw-w:not(.fw-m){display:none}}
@keyframes fw-drift{to{transform:translate3d(var(--h,0px),calc(var(--d)*2500px),0)}}
@keyframes fw-drift-v{from{transform:rotate(-90deg) translate3d(0,0,0)}to{transform:rotate(-90deg) translate3d(calc(var(--d)*-2500px),var(--h,0px),0)}}
@supports (animation-timeline: scroll()){
  @media (prefers-reduced-motion:no-preference){
    .fw-w{animation:fw-drift linear both;animation-timeline:scroll(root)}
    .fw-w.fw-v{animation-name:fw-drift-v}
  }
}
`;

export function FloatingWords() {
  return (
    <div className="fw-root select-none" aria-hidden="true">
      <style>{CSS}</style>
      {WORDS.map((w) => (
        <span
          key={w.t}
          className={`fw-w${w.v ? " fw-v" : ""}${w.m ? " fw-m" : ""}`}
          style={
            {
              [w.side === "l" ? "left" : "right"]: w.x,
              top: `${w.y}%`,
              fontSize: `${w.s}rem`,
              opacity: w.o,
              "--s": `${w.s}rem`,
              "--d": w.d,
              "--h": `${w.h ?? 0}px`,
            } as React.CSSProperties
          }
        >
          {w.t}
        </span>
      ))}
    </div>
  );
}
