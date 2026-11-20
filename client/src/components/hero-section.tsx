import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";
import { HeroHeadline } from "@/components/hero-headline";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { RESUME_URL } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="home" className="band-ink hero-lit relative overflow-hidden">
      <HeroBackdrop />
      <div className="wrap relative pt-6 pb-10 sm:pt-12 sm:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:items-center">
          <div className="lg:order-last lg:justify-self-start">
            <div className="ticks w-[88px] h-[88px] sm:w-72 sm:h-[360px] lg:w-[304px] lg:h-[360px]">
              <picture className="contents">
                <source
                  type="image/webp"
                  srcSet="/attached_assets/profile-headshot-640.webp 640w"
                  sizes="(min-width: 1024px) 304px, (min-width: 640px) 288px, 88px"
                />
                <img
                  src="/attached_assets/profile-headshot.png"
                  alt="Rezwan Islam"
                  width={320}
                  height={420}
                  className="w-full h-full object-cover object-top rounded-[10px]"
                  {...{ fetchpriority: "high" }}
                />
              </picture>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-7">
            <HeroHeadline />

            <p className="text-[1.0625rem] sm:text-lg leading-relaxed max-w-[46ch]">
              I'm a product management intern at NBCUniversal, working on internal commerce tooling for
              Peacock. Baruch MBA, mechanical engineer by training.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
              <a href={RESUME_URL} download="Rezwan_Islam_Resume.pdf" className="btn-cta btn-hero w-full sm:w-auto">
                <Download className="h-5 w-5" aria-hidden="true" />
                See why I'm a fit
              </a>
              <Link
                href="/experience"
                className="group inline-flex items-center gap-2 min-h-[44px] font-bold text-[var(--on-ink)] hover:text-[var(--blue-light)] transition-colors"
              >
                <span className="u-wipe">See my experience</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <p className="flex items-center gap-2.5 label text-[var(--on-ink-2)]">
              <span className="status-light" aria-hidden="true" />
              Open to APM/PM roles &middot; New York
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
