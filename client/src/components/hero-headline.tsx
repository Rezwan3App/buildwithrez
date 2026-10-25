import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";

// Static text. The navy underline under "digital products" scales in once.
export function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl font-semibold text-slate-900 max-w-[22ch]">
      From <span className="border-b-2 border-dashed border-slate-300/80">mechanical systems</span> to{" "}
      <span className="relative inline-block">
        digital products
        <motion.span
          aria-hidden="true"
          className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-blue-900 origin-left"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: EXPO }}
        />
      </span>
      .
    </h1>
  );
}
