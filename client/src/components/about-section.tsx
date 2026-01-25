import { Badge } from "@/components/ui/badge";
import { GraduationCap, Settings, ExternalLink, Download, Linkedin, Zap, Award, FileText } from "lucide-react";
import { SiTableau, SiSubstack, SiSpotify } from "react-icons/si";

interface Skill {
  id: number;
  name: string;
  category: string;
}

export function AboutSection() {
  const skills: Skill[] = [
    { id: 1, name: "Jira", category: "product" },
    { id: 2, name: "Confluence", category: "product" },
    { id: 3, name: "Azure DevOps", category: "product" },
    { id: 4, name: "Asana", category: "product" },
    { id: 5, name: "Notion", category: "product" },
    { id: 6, name: "OKRs/KPIs", category: "product" },
    { id: 7, name: "Kanban", category: "product" },
    { id: 8, name: "Scrum", category: "product" },
    { id: 9, name: "Roadmapping", category: "product" },
    { id: 10, name: "Figma", category: "design" },
    { id: 11, name: "Miro", category: "design" },
    { id: 12, name: "Lucidchart", category: "design" },
    { id: 13, name: "Wireframing", category: "design" },
    { id: 14, name: "Amplitude", category: "analytics" },
    { id: 15, name: "Adobe Analytics", category: "analytics" },
    { id: 16, name: "Tableau", category: "analytics" },
    { id: 17, name: "SQL", category: "analytics" },
    { id: 18, name: "NoSQL", category: "analytics" },
    { id: 19, name: "Python", category: "analytics" },
    { id: 20, name: "Zendesk", category: "analytics" },
    { id: 21, name: "Microsoft Excel", category: "technical" },
    { id: 22, name: "PowerPoint", category: "technical" },
    { id: 23, name: "Google Suite", category: "technical" },
    { id: 24, name: "Leadership", category: "soft" },
    { id: 25, name: "Communication", category: "soft" },
    { id: 26, name: "Problem Solving", category: "soft" },
    { id: 27, name: "Team Collaboration", category: "soft" },
    { id: 28, name: "Strategic Thinking", category: "soft" }
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
    product: { label: "Product & Project Management", color: "text-teal-400", bg: "bg-teal-500/10 text-teal-300 border-teal-500/20 hover:border-teal-500/40" },
    design: { label: "Design & Prototyping", color: "text-violet-400", bg: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-500/40" },
    analytics: { label: "Analytics & Data", color: "text-cyan-400", bg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-500/40" },
    technical: { label: "Technical Tools", color: "text-emerald-400", bg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40" },
    soft: { label: "Core Competencies", color: "text-pink-400", bg: "bg-pink-500/10 text-pink-300 border-pink-500/20 hover:border-pink-500/40" }
  };

  const resources = [
    {
      title: "Tableau Portfolio",
      description: "Data visualizations",
      href: "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes",
      icon: SiTableau,
      iconColor: "text-blue-400"
    },
    {
      title: "Resume",
      description: "Download PDF",
      href: "/attached_assets/Rezwan_Islam_Zicklin_1766511999891.pdf",
      icon: Download,
      iconColor: "text-emerald-400",
      download: true
    },
    {
      title: "Substack",
      description: "Writing & insights",
      href: "https://substack.com/inbox/post/169076551",
      icon: SiSubstack,
      iconColor: "text-orange-400"
    },
    {
      title: "LinkedIn",
      description: "Connect with me",
      href: "https://www.linkedin.com/in/rezwan-islam33",
      icon: Linkedin,
      iconColor: "text-blue-500"
    },
    {
      title: "Podcast",
      description: "PM journey & Rocket internship",
      href: "https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8",
      icon: SiSpotify,
      iconColor: "text-green-400"
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-professional-alt">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Education */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
                  Education
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
                </h2>
              </div>
              
              <div className="grid gap-4">
                <div className="group bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-teal-500/30 transition-all duration-500 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/20">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        MBA in Progress
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        Baruch College, Zicklin School of Business
                      </p>
                      <span className="inline-block px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm font-medium border border-teal-500/20">
                        GPA: 4.0
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-500 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/20">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        B.E. Mechanical Engineering
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        City College of New York
                      </p>
                      <span className="inline-block px-3 py-1 bg-violet-500/15 text-violet-300 rounded-full text-sm font-medium border border-violet-500/20">
                        GPA: 3.83
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
                  Skills
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                </h2>
              </div>
              
              <div className="bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5">
                <div className="space-y-5">
                  {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                    <div key={category}>
                      <h4 className={`text-base font-semibold ${categoryConfig[category]?.color} mb-3`}>
                        {categoryConfig[category]?.label || category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <span 
                            key={skill.id}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 cursor-default hover:scale-105 ${categoryConfig[category]?.bg}`}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
                Resources
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
              </h2>
            </div>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  target={resource.download ? undefined : "_blank"}
                  rel={resource.download ? undefined : "noopener noreferrer"}
                  download={resource.download ? "Rezwan_Islam_Resume.pdf" : undefined}
                  className="group block"
                >
                  <div className="bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 hover:border-teal-500/30 transition-all duration-500 hover-lift">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gray-800/30 rounded-xl flex items-center justify-center group-hover:bg-teal-500/10 transition-all duration-300">
                        <resource.icon className={`h-5 w-5 ${resource.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base">{resource.title}</h4>
                        <p className="text-gray-500 text-sm">{resource.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-600 group-hover:text-teal-400 transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
              
              {/* Unofficial Transcript */}
              <a
                href="/attached_assets/SSR_TSRPT_1766519113256.pdf"
                download="Rezwan_Islam_Unofficial_Transcript.pdf"
                className="group block"
              >
                <div className="bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 hover:border-violet-500/30 transition-all duration-500 hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gray-800/30 rounded-xl flex items-center justify-center group-hover:bg-violet-500/10 transition-all duration-300">
                      <FileText className="h-5 w-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-base">Unofficial Transcript</h4>
                      <p className="text-gray-500 text-sm">4.0 GPA - Download PDF</p>
                    </div>
                    <Download className="h-4 w-4 text-gray-600 group-hover:text-violet-400 transition-colors" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
