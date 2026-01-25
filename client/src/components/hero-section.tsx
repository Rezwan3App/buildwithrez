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
      color: "hover:bg-blue-500 hover:border-blue-500"
    },
    {
      href: "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes",
      icon: SiTableau,
      label: "Tableau",
      color: "hover:bg-orange-500 hover:border-orange-500"
    },
    {
      href: "https://github.com/Rezwan3App",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:bg-gray-600 hover:border-gray-600"
    },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-professional"
    >
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        {/* Profile Image - simplified */}
        <div className="mb-10 animate-fade-in-up">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto group">
            <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-gray-700 transition-all duration-500 group-hover:ring-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
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
          
          <p className="text-xl sm:text-2xl font-medium text-blue-400 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
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
              className={`bg-transparent border-gray-700 text-gray-300 hover:text-white transition-all duration-300 text-base px-5 py-2.5 font-medium ${link.color}`}
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
            className="bg-blue-600 hover:bg-blue-500 text-white text-base px-5 py-2.5 font-medium border-0"
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
          className="text-gray-500 hover:text-blue-400 transition-colors"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
