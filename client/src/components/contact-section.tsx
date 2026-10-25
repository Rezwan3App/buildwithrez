import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
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
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  }

  const fade = reduce
    ? { duration: 0 }
    : { duration: 0.12, ease: EXPO };

  return (
    <section id="contact" className="py-12 md:py-16 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-slate-700 mb-4">Best way to reach me is email.</p>
          <ul className="border-t border-slate-200">
            <li className="py-2 border-b border-slate-200">
              <a ref={emailRef} className={link} href={`mailto:${EMAIL}`}>rezwan99@gmail.com</a>{" "}
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[24px] px-2 -my-3 text-sm text-slate-600 hover:text-blue-900 transition-colors align-baseline"
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
            </li>
            <li className="py-2 border-b border-slate-200">
              <a className={link} href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className="py-2 border-b border-slate-200">
              <a className={link} href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
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
      </div>
    </section>
  );
}
