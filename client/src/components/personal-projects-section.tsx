import { ExternalLink, Github, Play, Lightbulb, Chrome, Bike, Moon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PersonalProjectsSection() {
  const projects = [
    {
      title: "Tracktern",
      subtitle: "Chrome Extension",
      description: "Browser-native job tracking tool that captures job postings with one click and exports to Excel.",
      highlights: [
        "Reduced tracking time from 15 min to 30 seconds per application",
        "One-click capture from LinkedIn, Indeed, and other job boards",
        "Local storage for complete privacy of job search data"
      ],
      techStack: ["Chrome Extension API", "JavaScript", "Local Storage"],
      links: {
        demo: "https://www.youtube.com/watch?v=d-8lxQcXRPk&ab_channel=RezwanIslam",
        github: "https://github.com/Rezwan3App"
      },
      icon: Chrome,
      iconBg: "from-emerald-500 to-teal-600",
      accentColor: "bg-emerald-500"
    },
    {
      title: "CLIP Bike",
      subtitle: "Innovation Consulting",
      description: "Assessed $50B micromobility market and delivered 8 growth strategies for an early-stage hardware startup.",
      highlights: [
        "Market sizing and competitive analysis",
        "8 actionable growth strategies delivered",
        "Partnership and distribution recommendations"
      ],
      techStack: ["Market Research", "Strategy", "Consulting"],
      links: {},
      icon: Bike,
      iconBg: "from-blue-500 to-indigo-600",
      accentColor: "bg-blue-500"
    },
    {
      title: "SleepWave by Bose",
      subtitle: "GTM Strategy",
      description: "Led go-to-market strategy for a concept sleep tech product, targeting 5% market share in the $2B U.S. sleep aid space.",
      highlights: [
        "Projected $450K first-year revenue",
        "Consumer research and competitive positioning",
        "Premium product positioning strategy"
      ],
      techStack: ["Go-to-Market", "Consumer Research", "Financial Modeling"],
      links: {},
      icon: Moon,
      iconBg: "from-violet-500 to-purple-600",
      accentColor: "bg-violet-500"
    }
  ];

  return (
    <section id="personal-projects" className="py-16 relative overflow-hidden bg-professional">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative">
            Projects
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
          </h2>
        </div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#161b22] border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-blue-500/30 transition-all duration-300 hover-lift"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${project.iconBg} rounded-lg flex items-center justify-center shrink-0`}>
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-blue-400">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                
                {(project.links.demo || project.links.github) && (
                  <div className="flex gap-2 mt-3 lg:mt-0">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg text-sm font-medium transition-all"
                      >
                        <Play className="mr-1.5 h-3.5 w-3.5" />
                        Demo
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 text-gray-900 rounded-lg text-sm font-medium transition-all"
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="text-base text-gray-400 mb-4">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor} mt-1.5 mr-2.5 shrink-0`}></span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 font-medium border-0"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
