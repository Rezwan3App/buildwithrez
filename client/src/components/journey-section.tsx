import { Reveal } from "@/components/reveal";

const steps = [
  {
    period: "2014 – 2018",
    title: "Engineering foundations",
    description:
      "I trained as a mechanical engineer at the City College of New York. Systems thinking, constraints, and root-cause habits: the parts of engineering I never left behind.",
  },
  {
    period: "2021 – 2023",
    title: "Engineering across fields",
    description:
      "I worked as a mechanical engineer at Zachry Nuclear Engineering, then as an assistant project manager in energy. Nuclear taught me how much rigor real systems demand before anything ships.",
  },
  {
    period: "2024",
    title: "Back to school",
    description:
      "I returned for an MBA at Baruch's Zicklin School of Business (4.0 GPA), leaning hard into data with SQL, Python, and Tableau, and serving as VP of the Data Science & Analytics Society.",
  },
  {
    period: "2024 – 2025",
    title: "Product internships",
    description:
      "At Rocket Mortgage I shipped a Plaid integration that grew direct account connections 500%; at Odynn I owned QA and analytics for a travel-fintech booking flow. Product stopped being a theory.",
  },
  {
    period: "2026",
    title: "AI for Main Street",
    description:
      "At Welcome to Chinatown I helped launch New York State's first AI training program for small businesses, bringing AI to immigrant-owned storefronts, not just startups.",
  },
  {
    period: "Next",
    title: "Product at NBCUniversal",
    description:
      "This fall I'm joining NBCUniversal as a product management intern, helping build the publishing tools behind their streaming apps.",
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="py-20 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-3">My Path</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-12 max-w-xl">
            How an engineer ends up in product
          </h2>
        </Reveal>

        <div className="relative">
          {/* vertical rule */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="relative sm:pl-12">
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-blue-800 bg-white hidden sm:block"></span>
                  <p className="text-sm font-medium text-blue-800 mb-1">{step.period}</p>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 max-w-2xl">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
