import { Link } from "wouter";

const productProjects = [
  {
    number: "01",
    label: "GTM Strategy",
    title: "HapticNav — B2B product one-pagers and partner pipeline",
    description:
      "A lightweight product story around positioning haptic navigation for partners like mobility, mapping, and autonomous vehicle teams.",
  },
  {
    number: "02",
    label: "Product Analytics",
    title: "Odynn — Booking flow QA and product instrumentation",
    description:
      "A simple case study showing how feature validation, event tracking, and competitor analysis improved product clarity.",
  },
  {
    number: "03",
    label: "Mobile Product",
    title: "Rocket Mortgage — Faster account creation and onboarding",
    description:
      "A product breakdown of mobile onboarding, Plaid integration, and AI-assisted support requirements.",
  },
  {
    number: "04",
    label: "Product Strategy",
    title: "MegaPlants — Market research for new wellness products",
    description:
      "A concise view of how SKU research, customer signals, and category analysis shaped product direction.",
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
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Rezwan Islam
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex">
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#resume" className="hover:text-black">
            Resume
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
        <section className="grid min-h-[72vh] content-between border-t border-black/15 py-10 sm:py-14">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Product Manager · Builder
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-9xl">
              Simple products. Clear stories.
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <p className="max-w-xl text-xl leading-snug tracking-[-0.03em] text-neutral-800 sm:text-2xl">
              A light portfolio for product projects, a short about me, and a
              resume people can quickly scan.
            </p>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Focus
              </p>
              <p className="mt-2 text-sm">Product Management</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Projects
              </p>
              <p className="mt-2 text-sm">Mobile, B2B, Analytics</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Tools
              </p>
              <p className="mt-2 text-sm">Figma, Jira, Amplitude, SQL</p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-black/15 py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Product projects
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
              Four quick case-study slots.
            </h2>
          </div>

          <div className="divide-y divide-black/15 border-y border-black/15">
            {productProjects.map((item) => (
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
              Product-minded, technical, and practical.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed tracking-[-0.03em] text-neutral-700">
              I like turning unclear problems into simple next steps. My work
              usually starts with the user, the data, and the business goal,
              then becomes a roadmap, prototype, requirement, or launch plan.
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
          id="resume"
          className="grid gap-10 border-t border-black/15 py-16 lg:grid-cols-[1fr_1.4fr]"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Resume
          </p>
          <div className="rounded-3xl border border-black/15 bg-white/35 p-6 sm:p-8">
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
              Keep the resume easy to find.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              This section can hold a one-line summary, a PDF download, and a
              few quick links. Once the resume file is added, this button can
              point straight to the PDF.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white">
                Resume PDF placeholder
              </span>
              <a
                href="mailto:hello@buildwithrez.com"
                className="rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition hover:bg-black/[0.04]"
              >
                Email ↗
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
