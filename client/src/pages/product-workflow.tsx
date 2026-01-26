import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  Brain, 
  Code, 
  BarChart3, 
  Palette, 
  MessageSquare, 
  Rocket,
  Activity,
  Mic,
  Sparkles,
  Database,
  LayoutGrid,
  ClipboardList,
  Zap
} from "lucide-react";
import { 
  SiGoogle, 
  SiGithub, 
  SiTableau, 
  SiAirtable, 
  SiFigma, 
  SiCanva, 
  SiJira, 
  SiAsana
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function ProductWorkflow() {
  const workflowSections = [
    {
      title: "1. AI-Powered Strategy & Research",
      icon: Brain,
      items: [
        { name: "Gemini", icon: SiGoogle, desc: "For strategic brainstorming, synthesizing market trends, and drafting PRD structures." },
        { name: "Claude", icon: Sparkles, desc: "For deep research, analyzing complex documents, and refining product logic." },
        { name: "Google NotebookLM", icon: SiGoogle, desc: "For grounding AI in your own sources—ideal for synthesizing massive amounts of user interview transcripts or technical docs." },
        { name: "Otter.ai", icon: Mic, desc: "For transcribing user interviews and stakeholder meetings to capture the 'voice of the customer.'" }
      ]
    },
    {
      title: "2. Technical Discovery & Development",
      icon: Code,
      items: [
        { name: "Cursor", icon: VscCode, desc: "Your AI-native code editor for high-speed prototyping and building side projects." },
        { name: "Claude Code", icon: Sparkles, desc: "For technical research and utilizing agentic AI to assist in complex coding tasks." },
        { name: "VS Code", icon: VscCode, desc: "Your primary environment for technical development and data scripts." },
        { name: "GitHub", icon: SiGithub, desc: "For version control, collaborating with engineers, and managing codebase deployments." }
      ]
    },
    {
      title: "3. Data & Product Analytics",
      icon: BarChart3,
      items: [
        { name: "Amplitude", icon: Activity, desc: "For event tracking, behavioral cohort analysis, and understanding user retention." },
        { name: "Tableau", icon: SiTableau, desc: "For building high-level executive dashboards and visualizing KPI trends." },
        { name: "SQL", icon: Database, desc: "For direct data extraction and validating problem sizes through raw data." },
        { name: "Airtable", icon: SiAirtable, desc: "For building relational databases, research repositories, and prioritization matrices." }
      ]
    },
    {
      title: "4. Design & Visual Communication",
      icon: Palette,
      items: [
        { name: "Figma", icon: SiFigma, desc: "For high-fidelity UI/UX design and interactive prototyping." },
        { name: "Canva", icon: SiCanva, desc: "For creating polished stakeholder presentations, pitch decks, and visual PRDs." },
        { name: "Miro", icon: LayoutGrid, desc: "For visual whiteboarding, journey mapping, and brainstorming sessions." }
      ]
    },
    {
      title: "5. Feedback & Community",
      icon: MessageSquare,
      items: [
        { name: "Qualtrics", icon: ClipboardList, desc: "For rigorous quantitative surveys and concept testing." },
        { name: "Canny", icon: MessageSquare, desc: "For public-facing roadmaps and capturing community feature upvotes." }
      ]
    },
    {
      title: "6. Execution & Delivery",
      icon: Rocket,
      items: [
        { name: "Linear", icon: Zap, desc: "For high-velocity, streamlined issue tracking and modern project management." },
        { name: "Jira", icon: SiJira, desc: "For enterprise-grade Agile management and cross-functional sprint planning." },
        { name: "Asana", icon: SiAsana, desc: "For broad project coordination and non-technical task management." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Product Workflow
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              My personalized stack of AI and product management tools used for rapid discovery, deep research, and high-velocity delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflowSections.map((section, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#12161c] border border-transparent hover:border-emerald-500/20 card-glow transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-emerald-500/10">
                    <section.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-2.5 mb-1">
                        {item.icon && <item.icon className="h-5 w-5 text-gray-500 group-hover:text-emerald-400 transition-colors" />}
                        <h3 className="text-white font-medium text-base group-hover:text-emerald-400 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed pl-[30px]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-xl bg-[#12161c] text-center">
            <p className="text-gray-500 italic text-sm">
              Constantly iterating my workflow with the latest AI and product infrastructure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
