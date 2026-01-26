import { Mail, Phone, MapPin, Download, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: "rezwan99@gmail.com", href: "mailto:rezwan99@gmail.com" },
    { icon: Phone, label: "(347) 356-5505", href: "tel:+13473565505" },
    { icon: MapPin, label: "New York, NY", href: null }
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rezwan-islam33", color: "bg-blue-600 hover:bg-blue-500" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/Rezwan3App", color: "bg-gray-700 hover:bg-gray-600" },
    { icon: SiTableau, label: "Tableau", href: "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes", color: "bg-orange-600 hover:bg-orange-500" }
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-professional-alt">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative mb-4">
            Get In Touch
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral-500 to-transparent"></span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Open to discussing product opportunities, collaborations, and innovative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-5">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center mr-3 group-hover:bg-coral-500/20 transition-all duration-300">
                    <item.icon className="h-4 w-4 text-gray-400 group-hover:text-coral-400 transition-colors" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-base text-gray-300 hover:text-coral-400 transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-base text-gray-300">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-5">Connect</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center p-3 ${link.color} rounded-lg text-white transition-all duration-300`}
                >
                  <link.icon className="h-5 w-5 mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="w-full bg-gradient-to-r from-coral-500 to-cyan-500 hover:from-coral-400 hover:to-cyan-400 text-gray-900 text-base py-5 font-semibold border-0 rounded-xl shadow-lg shadow-coral-500/20"
            >
              <a 
                href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf" 
                download="Rezwan_Islam_Resume.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
