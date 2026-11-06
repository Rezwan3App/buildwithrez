import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Plain wrapper: sections no longer animate on scroll. The hero gears are the one authored moment. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
