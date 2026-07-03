import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0f172a]"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none float-animation"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none float-animation-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none float-animation" style={{animationDelay: '-5s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-400 font-medium text-sm tracking-wide">
                Product Manager
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              I'm <span className="gradient-text">Rezwan</span> Islam
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Former mechanical engineer with an MBA background, aligning business strategy, data, and user-centric design to build scalable products.
            </p>

            {/* Testimonial Box */}
            <div className="relative animated-border p-5 max-w-xl">
              <div className="absolute -top-3 left-6">
                <span className="text-4xl text-emerald-500/30">"</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed pl-2">
                I think Rez is naturally curious which is perhaps his greatest trait, and one of the most critical for product management as he furthers his career.
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800/50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold">
                  CC
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Cody Chin</p>
                  <p className="text-gray-500 text-xs">Director of Digital PM, Rocket Mortgage</p>
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
                className="bg-transparent border-gray-700 text-white hover:bg-white/5 hover:border-gray-600 px-6 py-3 font-semibold rounded-xl transition-all"
              >
                <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="profile-ring relative w-80 h-[420px] sm:w-[340px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/attached_assets/profile-headshot.png" 
                  alt="Rezwan Islam" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
