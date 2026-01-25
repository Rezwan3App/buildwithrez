import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  Brain, 
  Code, 
  BarChart3, 
  Palette, 
  MessageSquare, 
  Rocket,
  Search,
  Zap,
  Terminal,
  Activity,
  Monitor
} from "lucide-react";
import { 
  SiGoogle, 
  SiAnthropic, 
  SiGithub, 
  SiTableau, 
  SiSqlite, 
  SiAirtable, 
  SiFigma, 
  SiCanva, 
  SiMiro, 
  SiQualtrics, 
  SiLinear, 
  SiJira, 
  SiAsana 
} from "react-icons/si";

export default function ProductWorkflow() {
  const workflowSections = [
    {
      title: "1. AI-Powered Strategy & Research",
      icon: Brain,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      items: [
        { name: "Gemini", icon: SiGoogle, desc: "For strategic brainstorming, synthesizing market trends, and drafting PRD structures." },
        { name: "Claude", icon: SiAnthropic, desc: "For deep research, analyzing complex documents, and refining product logic." },
        { name: "Google NotebookLM", icon: SiGoogle, desc: "For grounding AI in your own sources—ideal for synthesizing massive amounts of user interview transcripts or technical docs." },
        { name: "Otter.ai", icon: MessageSquare, desc: "For transcribing user interviews and stakeholder meetings to capture the 'voice of the customer.'" }
      ]
    },
    {
      title: "2. Technical Discovery & Development",
      icon: Code,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      items: [
        { name: "Cursor", icon: Terminal, desc: "Your AI-native code editor for high-speed prototyping and building side projects." },
        { name: "Claude Code", icon: SiAnthropic, desc: "For technical research and utilizing agentic AI to assist in complex coding tasks." },
        { name: "VS Code", icon: Monitor, desc: "Your primary environment for technical development and data scripts." },
        { name: "GitHub", icon: SiGithub, desc: "For version control, collaborating with engineers, and managing codebase deployments." }
      ]
    },
    {
      title: "3. Data & Product Analytics",
      icon: BarChart3,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      items: [
        { name: "Amplitude", icon: Activity, desc: "For event tracking, behavioral cohort analysis, and understanding user retention." },
        { name: "Tableau", icon: SiTableau, desc: "For building high-level executive dashboards and visualizing KPI trends." },
        { name: "SQL", icon: SiSqlite, desc: "For direct data extraction and validating problem sizes through raw data." },
        { name: "Airtable", icon: SiAirtable, desc: "For building relational databases, research repositories, and prioritization matrices." }
      ]
    },
    {
      title: "4. Design & Visual Communication",
      icon: Palette,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      items: [
        { name: "Figma", icon: SiFigma, desc: "For high-fidelity UI/UX design and interactive prototyping." },
        { name: "Canva", icon: SiCanva, desc: "For creating polished stakeholder presentations, pitch decks, and visual PRDs." },
        { name: "Miro", icon: SiMiro, desc: "For visual whiteboarding, journey mapping, and brainstorming sessions." }
      ]
    },
    {
      title: "5. Feedback & Community",
      icon: MessageSquare,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      items: [
        { name: "Qualtrics", icon: SiQualtrics, desc: "For rigorous quantitative surveys and concept testing." },
        { name: "Canny", icon: MessageSquare, desc: "For public-facing roadmaps and capturing community feature upvotes." }
      ]
    },
    {
      title: "6. Execution & Delivery",
      icon: Rocket,
      color: "text-coral-500",
      bg: "bg-coral-500/10",
      items: [
        { name: "Linear", icon: SiLinear, desc: "For high-velocity, streamlined issue tracking and modern project management." },
        { name: "Jira", icon: SiJira, desc: "For enterprise-grade Agile management and cross-functional sprint planning." },
        { name: "Asana", icon: SiAsana, desc: "For broad project coordination and non-technical task management." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />
      
      <section className="pt-28 pb-20 relative overflow-hidden bg-professional">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Product Workflow
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My personalized stack of AI and product management tools used for rapid discovery, deep research, and high-velocity delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowSections.map((section, idx) => (
              <div 
                key={idx}
                className="bg-[#161b22]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-coral-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${section.bg}`}>
                    <section.icon className={`h-6 w-6 ${section.color}`} />
                  </div>
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-2 mb-1">
                        {item.icon && <item.icon className="h-4 w-4 text-coral-500" />}
                        <h3 className="text-coral-500 font-semibold text-sm group-hover:text-coral-400 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-coral-500/10 to-blue-500/10 border border-coral-500/20 rounded-2xl p-8 text-center">
            <p className="text-gray-300 italic">
              "To be continued... constantly iterating my workflow with the latest AI and product infrastructure."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
