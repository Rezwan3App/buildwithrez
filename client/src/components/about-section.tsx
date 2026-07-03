import { GraduationCap, Settings, Download, FileText, ArrowUpRight } from "lucide-react";
import { SiTableau, SiSubstack, SiSpotify } from "react-icons/si";

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
    <section id="about" className="py-12 relative overflow-hidden bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Resources */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              Resources
            </h2>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-[#12161c] border border-transparent hover:border-emerald-500/20 card-glow transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <resource.icon className="h-5 w-5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-base group-hover:text-emerald-400 transition-colors">{resource.title}</h4>
                    <p className="text-gray-400 text-sm">{resource.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
              
              {/* Unofficial Transcript */}
              <a
                href="/attached_assets/SSR_TSRPT_1766519113256.pdf"
                download="Rezwan_Islam_Unofficial_Transcript.pdf"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#12161c] border border-transparent hover:border-emerald-500/20 card-glow transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <FileText className="h-5 w-5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-base group-hover:text-emerald-400 transition-colors">Unofficial Transcript</h4>
                  <p className="text-gray-400 text-sm">4.0 GPA - Download PDF</p>
                </div>
                <Download className="h-4 w-4 text-gray-600 group-hover:text-emerald-400 transition-all" />
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              Education
            </h2>
            
            <div className="space-y-4">
              <div className="group p-5 rounded-xl bg-[#12161c] border border-transparent hover:border-emerald-500/20 card-glow transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          MBA in Progress
                        </h3>
                        <p className="text-gray-400 text-base">
                          Baruch College, Zicklin School of Business
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-base font-bold">
                        4.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-xl bg-[#12161c] border border-transparent hover:border-emerald-500/20 card-glow transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Settings className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          B.E. Mechanical Engineering
                        </h3>
                        <p className="text-gray-400 text-base">
                          City College of New York
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-base font-bold">
                        3.83
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
