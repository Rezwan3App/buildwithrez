/** Name and tagline. Static on purpose: the hero cards already carry the motion. */
export function HeroHeadline() {
  return (
    <div className="space-y-3">
      <h1>Rezwan Islam</h1>
      <p className="text-[1.375rem] sm:text-[1.75rem] leading-[1.2] font-bold tracking-tight text-[var(--blue-light)]">
        Engineer by trade. Product manager by choice.
      </p>
    </div>
  );
}
