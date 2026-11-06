import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

// Blueprint gears: a meshing pair drawn as line art with centre marks. They turn once on load
// and again on hover, then rest. The turn is the one authored motion moment on the site.
const LINE = "#8fb0ff";
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
      {[A, B].map((g) => (
        <g key={g.n} transform={`translate(${g.cx} ${g.cy})`} stroke={LINE} fill="none" vectorEffect="non-scaling-stroke">
          <circle r={g.r - TOOTH - 4} strokeWidth={0.35} strokeDasharray="1.6 1.6" opacity={0.7} />
          <circle r={3} strokeWidth={0.5} />
          <path d={`M-${g.r + 9} 0H${g.r + 9}M0 -${g.r + 9}V${g.r + 9}`} strokeWidth={0.22} strokeDasharray="4 1 1 1" opacity={0.75} />
          <motion.path
            key={run}
            d={gearPath(g)}
            strokeWidth={0.6}
            strokeLinejoin="round"
            initial={play ? { rotate: -g.turn } : false}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.4, ease: EXPO }}
          />
        </g>
      ))}
    </svg>
  );
}
