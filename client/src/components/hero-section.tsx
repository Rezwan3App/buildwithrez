import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const entrance = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <section id="home" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8" {...entrance(0)}>
            <p className="eyebrow">Rezwan Islam &middot; Product Manager &middot; New York</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900">
              From mechanical systems to digital products.
            </h1>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
              <p>
                I started out as a mechanical engineer, went back for an MBA at Baruch's
                Zicklin School of Business, and found my way to product, where engineering
                rigor, business strategy, and user empathy finally pull in the same direction.
              </p>
              <p>
                I've shipped product work at Rocket Mortgage and Odynn, and right now I'm
                helping launch New York State's first AI training program for small
                businesses at Welcome to Chinatown.
              </p>
            </div>

            {/* Recommendation letter */}
            <div className="animated-border max-w-2xl">
              <p className="eyebrow mb-2">Recommendation</p>
              <p className="text-slate-600 leading-relaxed">
                "His curiosity and comfort with ambiguity are the exact sort of intangible,
                table stakes qualities that will continue to make him a great asset to any team."
              </p>
              <footer className="mt-3 text-sm">
                <span className="text-slate-900 font-medium">Barry Biggs</span>
                <span className="text-slate-500">, my mentor at Rocket Mortgage</span>
                <span className="text-slate-400"> · </span>
                <a
                  href="/attached_assets/Rezwan_Islam_Recommendation_Letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 font-medium hover:text-blue-600 transition-colors"
                >
                  Read the full letter
                </a>
              </footer>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="btn-gradient text-white px-6 py-3 font-semibold rounded-lg border-0"
              >
                <a
                  href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf"
                  download="Rezwan_Islam_Resume.pdf"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 px-6 py-3 font-semibold rounded-lg transition-all"
              >
                <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div className="flex justify-center lg:justify-end" {...entrance(0.1)}>
            <div className="profile-ring relative w-72 h-[380px] sm:w-80 sm:h-[420px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/attached_assets/profile-headshot.png"
                alt="Rezwan Islam"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
