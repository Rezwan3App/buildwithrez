// Quiet background watermark: faint PM workflow words that drift on scroll and fade in/out as they cross the viewport.
// Swap the words here; layout lives in SLOTS below (paired by index).
const WORDS: string[] = [
  "User Interviews", "Problem Framing", "Competitor Scan", "PRD", "User Stories",
  "Prioritization", "Roadmap", "Sprint Planning", "Agile", "Design Reviews",
  "Definition of Done", "Usability Testing", "A/B Test", "Feature Flags", "Launch Plan",
  "Adoption", "Retention", "KPIs", "Customer Feedback", "Post Launch Review",
];

// side: l/r anchor + x offset, y: % of layer height (layer starts below the first screen, so never behind the hero),
// s: rem size, d: drift (fraction of 2500px, negative = up), o: peak opacity, v: rotated -90deg (max 2), h: sideways drift px.
type Slot = { side: "l" | "r"; x: string; y: number; s: number; d: number; o: number; v?: 1; h?: number };
const SLOTS: Slot[] = [
  { side: "r", x: "-1rem", y: 1, s: 2.5, d: 0.1, o: 0.035 },
  { side: "l", x: "-1rem", y: 6, s: 2.5, d: -0.08, o: 0.03, v: 1 },
  { side: "r", x: "1%", y: 11, s: 2.5, d: 0.14, o: 0.03, h: 24 },
  { side: "l", x: "0.5rem", y: 16, s: 5, d: -0.1, o: 0.035 },
  { side: "r", x: "-2rem", y: 21, s: 3.5, d: 0.18, o: 0.03 },
  { side: "l", x: "-1.5rem", y: 26, s: 2.5, d: 0.12, o: 0.04 },
  { side: "r", x: "2%", y: 31, s: 5, d: -0.12, o: 0.03 },
  { side: "l", x: "1%", y: 36, s: 2.5, d: 0.2, o: 0.03, h: -24 },
  { side: "r", x: "-1rem", y: 41, s: 4.5, d: -0.16, o: 0.035 },
  { side: "l", x: "-2rem", y: 46, s: 3, d: 0.08, o: 0.03 },
  { side: "r", x: "1%", y: 51, s: 2.25, d: 0.16, o: 0.03 },
  { side: "l", x: "2%", y: 56, s: 2.25, d: -0.14, o: 0.035 },
  { side: "r", x: "-3rem", y: 61, s: 4, d: 0.1, o: 0.03, v: 1 },
  { side: "l", x: "-0.5rem", y: 66, s: 3, d: 0.2, o: 0.04 },
  { side: "r", x: "2%", y: 71, s: 3.5, d: -0.1, o: 0.03, h: 20 },
  { side: "l", x: "1.5%", y: 76, s: 4.5, d: -0.18, o: 0.03 },
  { side: "r", x: "-1.5rem", y: 81, s: 4.5, d: 0.14, o: 0.035 },
  { side: "l", x: "-1rem", y: 86, s: 5, d: -0.08, o: 0.03 },
  { side: "r", x: "1rem", y: 91, s: 2.25, d: -0.12, o: 0.035 },
  { side: "l", x: "0.5rem", y: 96, s: 2.25, d: -0.2, o: 0.035 },
];

const CSS = `
html{position:relative}
.fw-root{position:absolute;top:90vh;left:0;width:100%;height:calc(100% - 90vh);overflow:hidden;z-index:-1;pointer-events:none}
.fw-w{position:absolute;white-space:nowrap;font-family:Manrope,system-ui,sans-serif;font-weight:500;line-height:1;color:#1e3a8a;opacity:var(--o);transform-origin:center}
.fw-w.fw-v{transform:rotate(-90deg)}
@media (max-width:767px){.fw-w{display:none}}
@keyframes fw-drift{to{transform:translate3d(var(--h,0px),calc(var(--d)*2500px),0)}}
@keyframes fw-drift-v{from{transform:rotate(-90deg) translate3d(0,0,0)}to{transform:rotate(-90deg) translate3d(calc(var(--d)*-2500px),var(--h,0px),0)}}
@keyframes fw-fade{0%{opacity:0}30%,70%{opacity:var(--o)}100%{opacity:0}}
@supports (animation-timeline: view()){
  @media (prefers-reduced-motion:no-preference){
    .fw-w{animation:fw-drift linear both,fw-fade linear both;animation-timeline:scroll(root),view()}
    .fw-w.fw-v{animation-name:fw-drift-v,fw-fade}
  }
}
`;

export function FloatingWords() {
  return (
    <div className="fw-root select-none" aria-hidden="true">
      <style>{CSS}</style>
      {WORDS.map((t, i) => {
        const w = SLOTS[i];
        return (
          <span
            key={t}
            className={`fw-w${w.v ? " fw-v" : ""}`}
            style={
              {
                [w.side === "l" ? "left" : "right"]: w.x,
                top: `${w.y}%`,
                fontSize: `${w.s}rem`,
                "--o": w.o,
                "--d": w.d,
                "--h": `${w.h ?? 0}px`,
              } as React.CSSProperties
            }
          >
            {t}
          </span>
        );
      })}
    </div>
  );
}
