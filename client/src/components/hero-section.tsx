import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";
import { HeroHeadline } from "@/components/hero-headline";
import HeroMotif from "@/components/hero-motif";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const entrance = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: EXPO },
      };

  return (
    <section id="home" className="pb-16 sm:pb-24">
      <motion.div className="flex flex-col gap-6 sm:gap-8" {...entrance}>
        {/* Below lg there is no rail, so keep a compact identity line. */}
        <div className="flex items-center gap-4 lg:hidden">
          <picture className="contents">
            <source
              type="image/webp"
              srcSet="/attached_assets/profile-headshot-640.webp 640w"
              sizes="56px"
            />
            <img
              src="/attached_assets/profile-headshot.png"
              alt="Rezwan Islam"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover object-top shrink-0"
              {...{ fetchpriority: "high" }}
            />
          </picture>
          <div>
            <p className="font-semibold text-slate-900 leading-tight">Rezwan Islam</p>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500 leading-snug mt-1">
              Product Management Intern, NBCUniversal &middot; Baruch MBA, May 2027
            </p>
          </div>
        </div>

        <HeroMotif size={40} />
        <HeroHeadline />

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[60ch]">
          I work on internal commerce tooling for Peacock as a product management intern at
          NBCUniversal. I'm finishing an MBA at Baruch and started out as a mechanical engineer.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Button
            size="lg"
            asChild
            className="btn-primary text-white px-6 py-3 font-semibold rounded-lg border-0"
          >
            <Link href="/experience">
              See my experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <a
            href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[44px] font-semibold text-blue-900 underline underline-offset-4 decoration-slate-300 hover:decoration-blue-900 transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
