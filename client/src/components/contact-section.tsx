import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/row";
import { EXPO } from "@/lib/motion";

const EMAIL = "rezwan99@gmail.com";

const link =
  "font-semibold text-blue-900 underline underline-offset-4 decoration-slate-300 hover:decoration-blue-900 transition-colors";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const timer = useRef<number>();
  const emailRef = useRef<HTMLAnchorElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard unavailable: select the address so the user can copy it.
      const el = emailRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      return;
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  }

  const fade = reduce
    ? { duration: 0 }
    : { duration: 0.12, ease: EXPO };


  const row = `${link} inline-flex items-center min-h-[44px]`;

  return (
    <section id="contact">
      <Reveal>
        <SectionHeading title="Contact" />
        <p className="text-lg text-slate-600">Looking for full-time APM and PM roles in New York.</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-3">
          <a ref={emailRef} className={`${link} text-2xl sm:text-[1.75rem] break-all`} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center min-h-[44px] px-2 text-sm text-slate-600 hover:text-blue-900 transition-colors"
          >
            <span className="relative inline-grid">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={copied ? "c" : "n"}
                  className="inline-flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={fade}
                >
                  {copied && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  {copied ? "Copied" : "Copy"}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
        </p>
        <p className="mt-1 flex flex-wrap gap-x-6">
          <a className={row} href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={row} href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Elsewhere:{" "}
          <a className={link} href="https://github.com/Rezwan3App" target="_blank" rel="noopener noreferrer">GitHub</a>
          {" · "}
          <a className={link} href="https://nycstartupinternshipprogram.substack.com/p/from-dashboards-to-dms-rezwan-islams" target="_blank" rel="noopener noreferrer">Substack</a>
          {" · "}
          <a className={link} href="https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8" target="_blank" rel="noopener noreferrer">Podcast</a>
          {" · "}
          <a className={link} href="https://public.tableau.com/app/profile/rezwan.islam4698/vizzes" target="_blank" rel="noopener noreferrer">Tableau</a>
        </p>
      </Reveal>
    </section>
  );
}
