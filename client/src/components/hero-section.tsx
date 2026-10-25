import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { EXPO } from "@/lib/motion";
import { HeroHeadline } from "@/components/hero-headline";
import HeroMotif from "@/components/hero-motif";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 80, damping: 30, mass: 1 });
  const sy = useSpring(py, { stiffness: 80, damping: 30, mass: 1 });

  // Pointer-follow on the headshot: desktop (fine pointer) only, max 6px.
  useEffect(() => {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const el = heroRef.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px.set(((e.clientX - r.left) / r.width - 0.5) * 12);
      py.set(((e.clientY - r.top) / r.height - 0.5) * 12);
    };
    const leave = () => { px.set(0); py.set(0); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, [prefersReducedMotion, px, py]);

  const still = prefersReducedMotion;
  const entrance = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EXPO },
        };

  return (
    <section id="home" ref={heroRef} className="relative hero-grid">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-36 pb-14 sm:pb-20 w-full">
        <motion.div style={still ? undefined : { opacity: fade }} className="grid lg:grid-cols-[1.4fr_1fr] gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div style={still ? undefined : { y: textY }}>
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
              PM Intern, NBCUniversal &middot; Baruch MBA, May 2027 &middot; Mechanical Engineer
            </p>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-[65ch]">
              <p>
                I started out as a mechanical engineer, went back for an MBA at Baruch's
                Zicklin School of Business, and found my way to product, where engineering
                rigor, business strategy, and user empathy pull in the same direction.
              </p>
              <p>
                I've shipped product work at Rocket Companies and Odynn, and helped launch
                New York State's first AI training program for small businesses at Welcome to Chinatown.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:pt-2">
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

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 px-5 py-3 font-semibold rounded-lg transition-all"
              >
                <a href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 px-5 py-3 font-semibold rounded-lg transition-all"
              >
                <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Recommendation letter */}
            <div className="pull-quote max-w-[65ch]">
              <p className="eyebrow mb-2">Recommendation</p>
              <p className="text-slate-600 leading-relaxed">
                "His curiosity and comfort with ambiguity are the exact sort of intangible,
                table stakes qualities that will continue to make him a great asset to any team."
              </p>
              <footer className="mt-3 text-sm">
                <span className="text-slate-900 font-medium">Barry Biggs</span>
                <span className="text-slate-600">, my mentor at Rocket Companies</span>
                <span className="text-slate-500"> · </span>
                <a
                  href="/attached_assets/Rezwan_Islam_Recommendation_Letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
                >
                  Read the full letter
                </a>
              </footer>
            </div>
          </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div className="order-first lg:order-none" style={still ? undefined : { y: imgY }}>
          <motion.div className="flex justify-start sm:justify-center lg:justify-end" {...entrance(0.1)}>
            <motion.div style={still ? undefined : { x: sx, y: sy }} className="relative w-20 h-20 rounded-full sm:w-80 sm:h-[420px] sm:rounded-xl overflow-hidden">
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
            </motion.div>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
