import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { GetInTouch } from "@/components/get-in-touch";
import { ContactForm } from "@/components/contact-form";
import { EXPO } from "@/lib/motion";
import { EMAIL, RESUME_URL } from "@/lib/site";

const link =
  "font-semibold text-[var(--blue-light)] underline underline-offset-4 decoration-[#52617f] hover:decoration-[var(--blue-light)] transition-colors";

const elsewhere = [
  ["GitHub", "https://github.com/Rezwan3App"],
  ["Substack", "https://nycstartupinternshipprogram.substack.com/p/from-dashboards-to-dms-rezwan-islams"],
  ["Podcast", "https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8"],
  ["Tableau", "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"],
];

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
    <section id="contact" className="band-ink blueprint section">
      <div className="wrap">
        <h2>Let's talk</h2>
        <p className="mt-3 text-lg">Open to APM/PM roles in New York. Email is the best way to reach me.</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <GetInTouch />
          <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer" className="btn-line w-full sm:w-auto">
            Message me on LinkedIn
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-line w-full sm:w-auto">
            Download my resume
          </a>
        </div>

        <p className="mt-6 flex flex-wrap items-center gap-x-1">
          <a ref={emailRef} className={`${link} inline-flex items-center min-h-[44px]`} href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 font-semibold hover:text-[var(--on-ink)] transition-colors"
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
                  {copied && <Check className="h-4 w-4" aria-hidden="true" />}
                  {copied ? "Copied" : "Copy"}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
        </p>

        <ul className="mt-2 flex flex-wrap gap-x-6">
          {elsewhere.map(([label, href]) => (
            <li key={label}>
              <a className={`${link} inline-flex items-center min-h-[44px]`} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ContactForm />
      </div>
    </section>
  );
}
