import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { EXPO } from "@/lib/motion";

const INTERACTIVE = "a, button, [role=button], [data-cursor]";
const SPRING = { stiffness: 700, damping: 60, mass: 0.4 }; // overdamped: no overshoot
const SIZE = 24;

function useEnabled() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setOn(fine.matches && !calm.matches);
    update();
    fine.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);
  return on;
}

export default function CustomCursor() {
  const enabled = useEnabled();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const opts = { passive: true } as const;
    const move = (e: PointerEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
      setVisible(true);
      setHover(!!(e.target as Element | null)?.closest?.(INTERACTIVE));
    };
    const hide = () => setVisible(false);
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) hide();
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener("pointermove", move, opts);
    window.addEventListener("pointerdown", dn, opts);
    window.addEventListener("pointerup", up, opts);
    document.documentElement.addEventListener("mouseleave", hide, opts);
    window.addEventListener("mouseout", onLeave, opts);
    window.addEventListener("blur", hide, opts);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("blur", hide);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
        x: sx,
        y: sy,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: down ? 0.7 : hover ? 1.6 : 1,
          opacity: visible ? (hover ? 0.45 : 0.9) : 0,
          backgroundColor: hover ? "rgba(30,58,138,0.12)" : "rgba(30,58,138,0)",
        }}
        transition={{ duration: 0.35, ease: EXPO }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "1px solid #1e3a8a",
        }}
      />
    </motion.div>
  );
}
