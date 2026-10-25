import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

const START = 0.35; // letters begin after the first phrase has settled
const STAGGER = 0.025;

// Plays once on load. Letters are aria-hidden; the h1 carries the full sentence.
export function HeroHeadline() {
  const reduce = useReducedMotion();
  const words = ["digital", "products"];
  let i = 0;

  return (
    <h1
      aria-label="From mechanical systems to digital products."
      className="text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl font-semibold text-slate-900 max-w-[22ch]"
    >
      <span aria-hidden="true">
        From{" "}
        <span className="border-b-2 border-dashed border-slate-300/80">mechanical systems</span>{" "}
        to{" "}
        {words.map((word, w) => (
          <span key={word}>
            <span className="relative inline-block whitespace-nowrap">
              {word.split("").map((ch) => {
                const delay = START + i++ * STAGGER;
                return reduce ? (
                  <span key={i} className="inline-block">{ch}</span>
                ) : (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay, ease: EXPO }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
              <motion.span
                className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-blue-900 origin-left"
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: START + (w ? 0.2 : 0), ease: EXPO }}
              />
            </span>
            {w === 0 ? " " : "."}
          </span>
        ))}
      </span>
    </h1>
  );
}
