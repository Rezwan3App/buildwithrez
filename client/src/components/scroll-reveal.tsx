import { useEffect } from "react";

/**
 * Scroll reveal for anything marked data-reveal. Items already on screen stay
 * put; items below the fold fade and rise into place as they scroll in. Lazy
 * pages mount after navigation, so a MutationObserver picks up new items.
 * Nothing is hidden in the prerendered HTML or with reduced motion on.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.reveal = "in";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const scan = () => {
      // 'hidden' items are picked up again too, so a re-run effect (hot reload,
      // React dev double-mount) never leaves them stuck invisible.
      document.querySelectorAll<HTMLElement>("[data-reveal=''], [data-reveal='hidden']").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.dataset.reveal = "done";
          return;
        }
        el.dataset.reveal = "hidden";
        io.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
  return null;
}
