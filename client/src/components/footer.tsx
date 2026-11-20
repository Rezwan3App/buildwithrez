const elsewhere = [
  ["GitHub", "https://github.com/Rezwan3App"],
  ["Substack", "https://nycstartupinternshipprogram.substack.com/p/from-dashboards-to-dms-rezwan-islams"],
  ["Podcast", "https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8"],
  ["Tableau", "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes"],
];

export function Footer() {
  return (
    <footer className="band-ink border-t border-[var(--ink-line)] pt-6 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:pb-8">
      <div className="wrap flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px]">&copy; 2026 Rezwan Islam &middot; New York</p>
        <ul className="flex flex-wrap gap-x-5 text-[15px]">
          {elsewhere.map(([label, href]) => (
            <li key={label}>
              <a className="inline-flex items-center min-h-[44px] text-[var(--on-ink-2)] hover:text-[var(--on-ink)] transition-colors" href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
