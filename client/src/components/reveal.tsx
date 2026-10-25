import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EXPO } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Slides content up a few pixels as it enters the viewport. Opacity never
 * drops below 1, so a cold load is never blank. Static under reduced motion.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EXPO }}
    >
      {children}
    </motion.div>
  );
}
