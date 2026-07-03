import { GraduationCap, Settings, Download, FileText, ArrowUpRight } from "lucide-react";
import { SiTableau, SiSubstack, SiSpotify } from "react-icons/si";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  const resources = [
    {
      title: "Tableau Portfolio",
      description: "Data visualizations",
      href: "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes",
      icon: SiTableau,
    },
    {
      title: "Substack",
      description: "Writing & insights",
      href: "https://substack.com/inbox/post/169076551",
      icon: SiSubstack,
    },
    {
      title: "Podcast",
      description: "PM journey & Rocket internship",
      href: "https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8",
      icon: SiSpotify,
    }
  ];

  return (
    <section id="about" className="py-12 relative overflow-hidden bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Resources */}
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-800"></span>
              Resources
            </h2>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <resource.icon className="h-5 w-5 text-slate-500 group-hover:text-blue-800 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 font-semibold text-base group-hover:text-blue-900 transition-colors">{resource.title}</h4>
                    <p className="text-slate-500 text-sm">{resource.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-blue-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}

              {/* Unofficial Transcript */}
              <a
                href="/attached_assets/SSR_TSRPT_1766519113256.pdf"
                download="Rezwan_Islam_Unofficial_Transcript.pdf"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <FileText className="h-5 w-5 text-slate-500 group-hover:text-blue-800 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-900 font-semibold text-base group-hover:text-blue-900 transition-colors">Unofficial Transcript</h4>
                  <p className="text-slate-500 text-sm">4.0 GPA - Download PDF</p>
                </div>
                <Download className="h-4 w-4 text-slate-400 group-hover:text-blue-800 transition-all" />
              </a>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-800"></span>
              Education
            </h2>

            <div className="space-y-4">
              <div className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          MBA in Progress
                        </h3>
                        <p className="text-slate-500 text-base">
                          Baruch College, Zicklin School of Business
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 bg-blue-50 text-blue-900 rounded-lg text-base font-bold">
                        4.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 card-glow transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Settings className="h-6 w-6 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          B.E. Mechanical Engineering
                        </h3>
                        <p className="text-slate-500 text-base">
                          City College of New York
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 bg-blue-50 text-blue-900 rounded-lg text-base font-bold">
                        3.83
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
