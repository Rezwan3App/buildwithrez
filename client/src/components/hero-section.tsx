import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white"
    >
      {/* Soft background shapes */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none float-animation"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] pointer-events-none float-animation-delayed"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="w-2 h-2 bg-blue-700 rounded-full animate-pulse"></span>
              <span className="text-blue-900 font-medium text-sm tracking-wide">
                Product Manager
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              I'm <span className="gradient-text">Rezwan</span> Islam
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Former mechanical engineer with an MBA background, aligning business strategy, data, and user-centric design to build scalable products.
            </p>

            {/* Testimonial Box */}
            <div className="relative animated-border p-5 max-w-xl">
              <p className="text-slate-600 text-sm leading-relaxed">
                "I think Rez is naturally curious which is perhaps his greatest trait, and one of the most critical for product management as he furthers his career."
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  CC
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-medium">Cody Chin</p>
                  <p className="text-slate-500 text-xs">Director of Digital PM, Rocket Mortgage</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="btn-gradient btn-shine text-white px-6 py-3 font-semibold rounded-xl border-0"
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
                className="bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 px-6 py-3 font-semibold rounded-xl transition-all"
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Soft glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 to-slate-200/40 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="profile-ring relative w-80 h-[420px] sm:w-[340px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/attached_assets/profile-headshot.png"
                  alt="Rezwan Islam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
