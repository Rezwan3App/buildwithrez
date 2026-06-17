import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  domain: string;
  tools: string[];
  imageUrl?: string | null;
  fileUrl?: string | null;
  externalUrl?: string | null;
  isVisible: boolean;
  createdAt: string;
}

const categories = [
  { value: "all", label: "All" },
  { value: "product", label: "Product" },
  { value: "engineering", label: "Engineering" },
  { value: "analytics", label: "Analytics" },
  { value: "code", label: "Code" },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  // Static projects data
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Data Driven Marketing Final Project",
      description: "Marketing strategy analysis focusing on data-driven decision making, consumer behavior insights, and campaign effectiveness measurement across multiple channels and demographics.",
      category: "analytics",
      domain: "Marketing Analytics",
      tools: ["Excel", "Tableau", "Statistical Analysis", "Market Research"],
      fileUrl: "/attached_assets/Data Driven Marketing Final Project_1750549244369.pdf",
      imageUrl: null,
      externalUrl: null,
      isVisible: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: 2,
      title: "Financial Statement Analysis - Group B FSA",
      description: "Comprehensive financial analysis project for ACC 9110 covering financial statement interpretation, ratio analysis, valuation methods, and investment decision frameworks.",
      category: "analytics",
      domain: "Financial Analysis",
      tools: ["Excel", "Financial Modeling", "Ratio Analysis", "Valuation"],
      fileUrl: "/attached_assets/Group B FSA, ACC 9110, Spring 2025_1750549343051.pdf",
      imageUrl: null,
      externalUrl: null,
      isVisible: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: 3,
      title: "AIAA RC Aircraft Design & Manufacturing",
      description: "Senior design capstone project involving complete radio-controlled aircraft design, aerodynamic optimization, structural analysis, manufacturing processes, and flight testing validation.",
      category: "engineering",
      domain: "Aerospace Engineering",
      tools: ["SolidWorks", "CFD Analysis", "Manufacturing", "Flight Testing"],
      fileUrl: "/attached_assets/Final Report_AIAA_SeniorDesign_2_1750549365432.pdf",
      imageUrl: null,
      externalUrl: null,
      isVisible: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    }
  ];
  
  const projects = allProjects.filter((p: Project) => p.isVisible);

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50/30 dark:from-purple-900/20 dark:via-gray-800 dark:to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float"
            style={{
              left: `${10 + i * 9}%`,
              top: `${15 + (i % 5) * 18}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 dark:from-purple-100 dark:via-pink-100 dark:to-purple-100 bg-clip-text text-transparent mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of academic projects spanning product management, engineering, and analytics
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category.value
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 border border-gray-200/50 dark:border-gray-700/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {false ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl h-80"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mb-4">
                      {project.domain}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.fileUrl && (
                      <a
                        href={project.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105"
                      >
                        <Download className="h-4 w-4" />
                        View
                      </a>
                    )}
                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-purple-500/30 text-purple-600 dark:text-purple-400 bg-transparent hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        External
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}