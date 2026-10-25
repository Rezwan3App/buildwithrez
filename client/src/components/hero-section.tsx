import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { EXPO } from "@/lib/motion";
import { HeroHeadline } from "@/components/hero-headline";
import HeroMotif from "@/components/hero-motif";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const entrance = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EXPO },
        };

  return (
    <section id="home" className="relative hero-grid">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-36 pb-12 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="flex flex-col gap-6 sm:gap-8" {...entrance(0)}>
            <div className="space-y-3">
              <p className="eyebrow">Product &middot; New York</p>
              <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Open to APM/PM roles
                </span>
              </p>
            </div>

            <HeroMotif size={72} className="mb-2" />
            <HeroHeadline />

            <p className="text-xs sm:text-[0.8rem] uppercase tracking-[0.12em] text-slate-600 leading-relaxed">
              PM Intern, NBCUniversal &middot; Baruch MBA, May 2027 &middot; Mechanical engineer
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[65ch]">
              I'm a product management intern at NBCUniversal and a Baruch MBA candidate who
              started as a mechanical engineer, looking for full-time APM and PM roles in New York.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:pt-2">
              <Button
                size="lg"
                asChild
                className="btn-primary text-white px-6 py-3 font-semibold rounded-lg border-0"
              >
                <Link href="/experience">
                  See my work
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

          {/* Right Column - Image */}
          <div className="order-first lg:order-none">
          <motion.div className="flex justify-start sm:justify-center lg:justify-end" {...entrance(0.1)}>
            <div className="relative w-20 h-20 rounded-full sm:w-80 sm:h-[420px] sm:rounded-xl overflow-hidden">
              <picture className="contents">
              <source
                type="image/webp"
                srcSet="/attached_assets/profile-headshot-640.webp 640w, /attached_assets/profile-headshot-960.webp 960w"
                sizes="(min-width: 640px) 320px, 80px"
              />
              <img
                src="/attached_assets/profile-headshot.png"
                alt="Rezwan Islam"
                width={320}
                height={420}
                className="w-full h-full object-cover object-top"
                {...{ fetchpriority: "high" }}
              />
              </picture>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
