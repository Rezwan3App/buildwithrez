import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

const LINE = "From mechanical systems to digital products.";

// Fixed offsets (not Math.random) so the prerendered HTML and the client agree.
const scatter = (i: number) => ({ x: ((i * 37) % 7) - 3, y: ((i * 53) % 7) - 3 });

/** The subheading's letters drift in from small offsets and settle once, on load. Never below 40% opacity, so the line is readable from the first frame. */
export function HeroHeadline() {
  const reduce = useReducedMotion();
  let i = 0;
  return (
    <div className="space-y-3">
      <h1>Rezwan Islam</h1>
      <p
        aria-label={LINE}
        className="assemble text-[1.375rem] sm:text-[1.75rem] leading-[1.2] font-bold tracking-tight text-[var(--blue-light)]"
      >
        {LINE.split(" ").map((word, w, words) => (
          <Fragment key={w}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {word.split("").map((ch) => {
              const n = i++;
              const o = scatter(n);
              return (
                <motion.span
                  key={n}
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0.4, x: o.x, y: o.y }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EXPO, delay: n * 0.004 }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
          {w < words.length - 1 && " "}
          </Fragment>
        ))}
      </p>
    </div>
  );
}
