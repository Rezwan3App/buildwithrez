import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rezwan-islam33",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
    },
    {
      href: "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes",
      icon: SiTableau,
      label: "Tableau",
      color: "hover:bg-orange-500/20 hover:border-orange-400/50 hover:text-orange-400 hover:shadow-lg hover:shadow-orange-500/10"
    },
    {
      href: "https://github.com/Rezwan3App",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:bg-violet-500/20 hover:border-violet-400/50 hover:text-violet-400 hover:shadow-lg hover:shadow-violet-500/10"
    },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-professional"
    >
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        {/* Profile Image - modern glow effect */}
        <div className="mb-10 animate-fade-in-up">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-all duration-700"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-800 transition-all duration-500 group-hover:ring-teal-500/50">
              <img 
                src="/attached_assets/profile-image.jpg" 
                alt="Rezwan Islam" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            Rezwan Islam
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Product Analyst | MBA Candidate
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Building user-first products that scale. API integrations, A/B testing, and data-driven decisions.
          </p>
          
          <p className="text-lg sm:text-xl italic text-gray-400 max-w-xl mx-auto mt-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            "The greatest product you will ever work on is yourself."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              asChild
              className={`bg-transparent border-gray-700/50 text-gray-400 transition-all duration-300 text-base px-5 py-2.5 font-medium rounded-xl ${link.color}`}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </a>
            </Button>
          ))}
          
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-gray-900 text-base px-6 py-2.5 font-semibold border-0 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-300"
          >
            <a 
              href="/attached_assets/Rezwan_Islam_Zicklin_1766511999891.pdf" 
              download="Rezwan_Islam_Resume.pdf"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-600 hover:text-teal-400 transition-all duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
