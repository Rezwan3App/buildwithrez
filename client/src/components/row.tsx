import type { ReactNode } from "react";

// The one list pattern used on every page: a hairline-ruled row with a narrow meta column
// (dates, company, status) on the left and the content on the right. Stacks on mobile.
export function Row({ meta, children, id, interactive }: { meta?: ReactNode; children: ReactNode; id?: string; interactive?: boolean }) {
  return (
    <div id={id} className={`scroll-mt-24 lg:scroll-mt-10 grid gap-2 sm:gap-8 sm:grid-cols-[10.5rem_1fr] py-8 border-t border-slate-200${interactive ? " transition-colors motion-reduce:transition-none hover:bg-slate-100/60" : ""}`}>
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:pt-1.5 [&>*:first-child]:whitespace-nowrap">{meta}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

// Section heading + optional one-line intro, same size and spacing everywhere.
export function SectionHeading({ id, title, intro }: { id?: string; title: string; intro?: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 lg:scroll-mt-10 mb-4">
      <h2 className="text-[1.75rem] leading-tight font-semibold text-slate-900">{title}</h2>
      {intro && <p className="mt-2 text-slate-600">{intro}</p>}
    </div>
  );
}

// Page container for the main column (next to the rail on desktop).
export function Page({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 lg:pt-20 pb-20">{children}</div>;
}
