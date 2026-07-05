import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-blue-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Let's talk.
            </h2>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              I'm looking for APM/PM roles where I can put engineering rigor and
              business strategy to work. If that sounds like your team, I'd love
              to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-blue-900 hover:bg-blue-50 px-6 font-semibold rounded-lg border-0"
              >
                <a href="mailto:rezwan@welcometochinatown.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-transparent border-blue-300 text-white hover:bg-blue-800 hover:border-blue-200 px-6 font-semibold rounded-lg"
              >
                <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-transparent border-blue-300 text-white hover:bg-blue-800 hover:border-blue-200 px-6 font-semibold rounded-lg"
              >
                <a
                  href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf"
                  download="Rezwan_Islam_Resume.pdf"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
