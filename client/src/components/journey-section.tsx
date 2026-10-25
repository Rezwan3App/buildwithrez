import { Reveal } from "@/components/reveal";
import { Row, SectionHeading } from "@/components/row";

const steps = [
  ["2018", "B.E. in mechanical engineering, The City College of New York (CCNY)."],
  ["2021 – 2023", "Engineering and project management, including Zachry Nuclear Engineering."],
  ["2024 – May 2027", "MBA at Baruch College, Zicklin School of Business, with product internships at Rocket Companies and Odynn."],
  ["2026", "Built an AI curriculum for small businesses and trained 5 centers in a New York State pilot, at Welcome to Chinatown."],
  ["Sept 2026 – Present", "Product management intern at NBCUniversal."],
];

export function JourneySection() {
  return (
    <section id="journey" className="pb-16 sm:pb-24">
      <Reveal>
        <SectionHeading title="Path" />
        <div>
          {steps.map(([period, text]) => (
            <Row key={period} meta={period}>
              <p className="text-slate-600 leading-snug">{text}</p>
            </Row>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
