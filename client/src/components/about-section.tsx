import { Download, FileText, ArrowUpRight } from "lucide-react";
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
      title: "Substack Feature",
      description: "From Dashboards to DMs: my path to product",
      href: "https://nycstartupinternshipprogram.substack.com/p/from-dashboards-to-dms-rezwan-islams",
      icon: SiSubstack,
    },
    {
      title: "Podcast",
      description: "My PM journey & the Rocket internship",
      href: "https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8",
      icon: SiSpotify,
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#e8ecf2] border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Resources */}
          <Reveal>
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Resources
            </h2>
            <div className="divide-y divide-slate-200">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4"
                >
                  <resource.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-800 transition-colors shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 font-medium group-hover:text-blue-900 transition-colors">{resource.title}</h4>
                    <p className="text-slate-500 text-sm">{resource.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-blue-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}

              {/* Unofficial Transcript */}
              <a
                href="/attached_assets/SSR_TSRPT_1766519113256.pdf"
                download="Rezwan_Islam_Unofficial_Transcript.pdf"
                className="group flex items-center gap-4 py-4"
              >
                <FileText className="h-5 w-5 text-slate-400 group-hover:text-blue-800 transition-colors shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-900 font-medium group-hover:text-blue-900 transition-colors">Unofficial Transcript</h4>
                  <p className="text-slate-500 text-sm">4.0 GPA · PDF</p>
                </div>
                <Download className="h-4 w-4 text-slate-300 group-hover:text-blue-800 transition-all" />
              </a>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Education
            </h2>

            <div className="divide-y divide-slate-200">
              <div className="flex items-start gap-4 py-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0 p-1.5">
                  <img loading="lazy" decoding="async" src="/attached_assets/image_1766520608918.png" alt="Baruch College" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      MBA in Progress
                    </h3>
                    <span className="text-sm font-semibold text-blue-800">4.0 GPA</span>
                  </div>
                  <p className="text-slate-500">
                    Baruch College, Zicklin School of Business
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0 p-1.5">
                  <img loading="lazy" decoding="async" src="/attached_assets/ccny-seal.png" alt="City College of New York" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      B.E. Mechanical Engineering
                    </h3>
                    <span className="text-sm font-semibold text-blue-800">3.83 GPA</span>
                  </div>
                  <p className="text-slate-500">
                    City College of New York
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
