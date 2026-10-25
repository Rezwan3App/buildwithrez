import { Reveal } from "@/components/reveal";

const steps = [
  ["2018", "B.E. in mechanical engineering, The City College of New York (CCNY)."],
  ["2021 – 2023", "Engineering and project management, including Zachry Nuclear Engineering."],
  ["2024 – May 2027", "MBA at Baruch College, Zicklin School of Business. Shipped the Plaid integration at Rocket Companies; owned QA and analytics at Odynn."],
  ["2026", "Helped launch New York State's AI training program for small businesses at Welcome to Chinatown."],
  ["Sept 2026 – Present", "Product management intern at NBCUniversal."],
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
