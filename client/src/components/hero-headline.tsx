import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

const LINE = "From mechanical systems to digital products.";

// Fixed offsets (not Math.random) so the prerendered HTML and the client agree.
const scatter = (i: number) => ({ x: ((i * 37) % 13) - 6, y: ((i * 53) % 11) - 5 });

/** The subheading's letters drift in from small offsets and settle once, on load. */
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
                  initial={reduce ? false : { opacity: 0, x: o.x * 3, y: o.y * 3 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: EXPO, delay: 0.15 + n * 0.014 }}
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
