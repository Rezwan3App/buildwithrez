import { Reveal } from "@/components/reveal";

const steps = [
  ["2014 – 2023", "Mechanical engineering at CCNY, then engineering and project management, including Zachry Nuclear Engineering."],
  ["2024 – 2025", "MBA at Baruch Zicklin. Shipped the Plaid integration at Rocket Companies; owned QA and analytics at Odynn."],
  ["2026", "Helped launch New York State's first AI training program for small businesses at Welcome to Chinatown."],
  ["Sep 2026 – Present", "Product management intern at NBCUniversal."],
];

export function JourneySection() {
  return (
    <section id="journey" className="py-12 md:py-16 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="eyebrow mb-4">Path</h2>
          <ol className="border-t border-slate-200">
            {steps.map(([period, text]) => (
              <li key={period} className="grid sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-0.5 py-3 border-b border-slate-200">
                <span className="text-sm font-medium text-blue-900">{period}</span>
                <span className="text-sm text-slate-700 leading-snug">{text}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
