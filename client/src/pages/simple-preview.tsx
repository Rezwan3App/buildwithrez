import { Link } from "wouter";

const workItems = [
  {
    number: "01",
    label: "Product Analytics",
    title: "Odynn — Improving booking flow quality across Awayz",
    description:
      "Validated features, mapped product events, and surfaced funnel issues so teams could ship cleaner travel booking experiences.",
  },
  {
    number: "02",
    label: "Product Management",
    title: "Rocket Mortgage — Mobile app account creation",
    description:
      "Defined mobile feature requirements with design and engineering to make onboarding faster and simpler.",
  },
  {
    number: "03",
    label: "Business Strategy",
    title: "SBDC — Customer discovery and startup planning",
    description:
      "Built research, CRM, and financial planning workflows for early-stage businesses preparing to grow.",
  },
  {
    number: "04",
    label: "Engineering",
    title: "Zachry Nuclear — Technical systems and safety analysis",
    description:
      "Applied mechanical engineering judgment to regulated plant modifications, heat transfer, and equipment changes.",
  },
  {
    number: "05",
    label: "MBA Projects",
    title: "Analytics, finance, and market research case work",
    description:
      "Turned class projects into concise proof points across data-driven marketing, financial analysis, and operations.",
  },
];

const capabilities = [
  "Product Thinking",
  "User Research",
  "Analytics",
  "Roadmapping",
  "Technical Systems",
  "Cross-functional Work",
];

export default function SimplePreview() {
  return (
    <div className="min-h-screen bg-[#f4f0e8] text-[#111111]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <Link href="/preview" className="text-sm font-semibold tracking-tight">
          Rezwan Islam
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex">
          <a href="#work" className="hover:text-black">
            Work
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
          <Link href="/" className="hover:text-black">
            Current site
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
        <section className="grid min-h-[72vh] content-between border-t border-black/15 py-10 sm:py-14">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Product Manager · Builder
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-9xl">
              My work begins before the first roadmap.
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <p className="max-w-xl text-xl leading-snug tracking-[-0.03em] text-neutral-800 sm:text-2xl">
              I turn ambiguous ideas into useful products through research,
              analytics, clear execution, and simple customer experiences.
            </p>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Based in
              </p>
              <p className="mt-2 text-sm">New York</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Focus
              </p>
              <p className="mt-2 text-sm">Product & Analytics</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Tools
              </p>
              <p className="mt-2 text-sm">Figma, Jira, Amplitude, SQL</p>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-black/15 py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Selected work
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
              Projects I want people to remember.
            </h2>
          </div>

          <div className="divide-y divide-black/15 border-y border-black/15">
            {workItems.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 py-7 transition-colors hover:bg-black/[0.03] sm:grid-cols-[64px_180px_1fr]"
              >
                <p className="text-sm text-neutral-500">{item.number}</p>
                <p className="text-sm text-neutral-500">{item.label}</p>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-10 border-t border-black/15 py-16 lg:grid-cols-[1fr_1.4fr]"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            About
          </p>
          <div>
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
              I build from the messy middle.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed tracking-[-0.03em] text-neutral-700">
              My background connects product management, mechanical engineering,
              and business strategy. I like the early part of product work:
              understanding the problem, finding the signal, and shaping the
              simplest next step.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="rounded-full border border-black/15 px-4 py-3 text-sm"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-black/15 py-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-[-0.08em] sm:text-7xl">
            Let&apos;s build something useful.
          </h2>
          <a
            href="mailto:hello@buildwithrez.com"
            className="mt-10 inline-flex rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Get in touch ↗
          </a>
        </section>
      </main>
    </div>
  );
}
