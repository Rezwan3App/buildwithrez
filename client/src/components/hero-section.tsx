import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="eyebrow">Rezwan Islam &middot; Product Manager &middot; New York</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900">
              From mechanical systems to digital products.
            </h1>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
              <p>
                I started out as a mechanical engineer, went back for an MBA at Baruch's
                Zicklin School of Business, and found my way to product — where engineering
                rigor, business strategy, and user empathy finally pull in the same direction.
              </p>
              <p>
                I've shipped product work at Rocket Mortgage and Odynn, and right now I'm
                helping launch New York State's first AI training program for small
                businesses at Welcome to Chinatown.
              </p>
            </div>

            {/* Testimonial */}
            <blockquote className="animated-border max-w-2xl">
              <p className="text-slate-600 leading-relaxed">
                "I think Rez is naturally curious which is perhaps his greatest trait, and
                one of the most critical for product management as he furthers his career."
              </p>
              <footer className="mt-3 text-sm">
                <span className="text-slate-900 font-medium">Cody Chin</span>
                <span className="text-slate-500"> — Director of Digital PM, Rocket Mortgage</span>
              </footer>
            </blockquote>

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
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
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
