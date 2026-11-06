const steps = [
  ["2018", "B.E. in mechanical engineering, CCNY."],
  ["2021 – 2023", "Engineering and project management, including Zachry Nuclear Engineering."],
  ["2024 – May 2027", "MBA at Baruch, with product roles at Rocket Companies and Odynn."],
  ["2026", "Welcome to Chinatown: AI training for small businesses."],
  ["Sept 2026 – Present", "Product management intern at NBCUniversal."],
];

export function JourneySection() {
  return (
    <section id="journey" className="section bg-[var(--paper-deep)]">
      <div className="wrap">
        <h2 className="mb-6 sm:mb-8">Path</h2>
        <ol className="relative ml-[5px] border-l-2 border-blue-900/25">
          {steps.map(([period, text], i) => (
            <li key={period} className="relative pl-6 pb-6 last:pb-0 sm:grid sm:grid-cols-[12rem_1fr] sm:gap-x-6">
              <span
                aria-hidden="true"
                className={`absolute -left-[7px] top-[7px] h-3 w-3 rounded-full ring-4 ring-[var(--paper-deep)] ${
                  i === steps.length - 1 ? "bg-blue-900" : "bg-[var(--paper-deep)] border-2 border-blue-900"
                }`}
              />
              <span className="block text-[15px] font-bold text-blue-900">{period}</span>
              <span className="mt-0.5 block leading-snug text-slate-800 sm:mt-0">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
