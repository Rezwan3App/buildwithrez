import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Download } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { EXPO } from "@/lib/motion";
import { EMAIL, RESUME_URL } from "@/lib/site";

const link =
  "font-semibold text-[var(--blue-light)] underline underline-offset-4 decoration-[#52617f] hover:decoration-[var(--blue-light)] transition-colors";

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
    <section id="contact" className="band-ink band-glow section">
      <div className="wrap">
        <h2>Let's talk</h2>
        <p className="mt-3 text-lg">Open to APM/PM roles in New York. Email is the best way to reach me.</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={RESUME_URL} download="Rezwan_Islam_Resume.pdf" className="btn-cta btn-hero w-full sm:w-auto">
            <Download className="h-5 w-5" aria-hidden="true" />
            Download my resume
          </a>
          <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer" className="btn-line w-full sm:w-auto">
            Message me on LinkedIn
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

        {/* The form stays one click away so the band leads with three clear options */}
        <details className="note-toggle mt-4 max-w-[36rem] border-t border-[#52617f] pt-4">
          <summary className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-[var(--on-ink)] cursor-pointer">
            Or leave a note here
            <ChevronDown className="note-chevron h-4 w-4" aria-hidden="true" />
          </summary>
          <ContactForm />
        </details>
      </div>
    </section>
  );
}
