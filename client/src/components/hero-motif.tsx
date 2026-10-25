import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

// Gears into dots: two meshing gears turn, dissolve, and their tooth tips settle into a dot grid.
const NAVY = "#1e3a8a";
const SLATE = "#94a3b8";
const A = { n: 12, r: 24, cx: 42, cy: 60, turn: 60 }; // gear A turns +60deg
const B = { n: 8, r: 16, cx: 82, cy: 60, turn: -90 }; // 12/8 ratio, opposite direction
const TOOTH = 3.5;

const rad = (d: number) => (d * Math.PI) / 180;
// Tooth centers: A has a tooth at 0deg (toward B), B has a gap there (tooth offset half a pitch).
const phase = (g: typeof A) => (g === A ? 0 : 180 + 180 / g.n);
const tipAngles = (g: typeof A) =>
  Array.from({ length: g.n }, (_, k) => phase(g) + (360 / g.n) * k);

function gearPath(g: typeof A) {
  const half = 180 / g.n;
  const pts: string[] = [];
  for (const c of tipAngles(g)) {
    for (const [da, rr] of [[-half * 0.9, g.r - TOOTH], [-half * 0.4, g.r + TOOTH], [half * 0.4, g.r + TOOTH], [half * 0.9, g.r - TOOTH]] as const) {
      const a = rad(c + da);
      pts.push(`${(rr * Math.cos(a)).toFixed(2)},${(rr * Math.sin(a)).toFixed(2)}`);
    }
  }
  return `M${pts.join("L")}Z`;
}

// Tooth-tip positions after the gears finish turning, in svg coordinates.
const tips = [A, B]
  .flatMap((g) =>
    tipAngles(g).map((a) => ({
      x: g.cx + (g.r + TOOTH) * Math.cos(rad(a + g.turn)),
      y: g.cy + (g.r + TOOTH) * Math.sin(rad(a + g.turn)),
    })),
  )
  .sort((p, q) => p.y - q.y || p.x - q.x);

const dots = tips.map((t, i) => {
  const gx = 60 + ((i % 5) - 2) * 14;
  const gy = 60 + (Math.floor(i / 5) - 1.5) * 14;
  return { gx, gy, dx: t.x - gx, dy: t.y - gy };
});
const HI = 7;

export default function HeroMotif({ className, size = 140 }: { className?: string; size?: number }) {
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);
  const play = !reduce;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      onPointerEnter={() => play && setRun((r) => r + 1)}
    >
      {play &&
        [A, B].map((g) => (
          <g key={`${g.n}-${run}`} transform={`translate(${g.cx} ${g.cy})`}>
            <motion.path
              d={gearPath(g)}
              fill="none"
              stroke={NAVY}
              strokeWidth={1}
              strokeLinejoin="round"
              initial={{ rotate: 0, opacity: 1 }}
              animate={{ rotate: g.turn, opacity: [1, 1, 0] }}
              transition={{
                rotate: { duration: 1.1, ease: EXPO },
                opacity: { duration: 1.3, times: [0, 0.62, 1], ease: EXPO },
              }}
            />
          </g>
        ))}
      <g key={`dots-${run}`}>
        {dots.map((d, i) => (
          <motion.circle
            key={i}
            cx={d.gx}
            cy={d.gy}
            r={i === HI ? 2.2 : 1.6}
            fill={i === HI ? NAVY : SLATE}
            initial={play ? { x: d.dx, y: d.dy, opacity: 0 } : false}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              x: { duration: 0.8, delay: 0.9, ease: EXPO },
              y: { duration: 0.8, delay: 0.9, ease: EXPO },
              opacity: { duration: 0.3, delay: 0.8, ease: EXPO },
            }}
          />
        ))}
      </g>
    </svg>
  );
}
