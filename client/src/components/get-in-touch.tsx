import { ArrowUpRight } from "lucide-react";
import { EMAIL } from "@/lib/site";

const LABEL = "Get in touch";

/** The red email action: on hover the label rolls up and the arrow slides through its chip. */
export function GetInTouch() {
  return (
    <a href={`mailto:${EMAIL}`} className="btn-cta btn-touch w-full sm:w-auto" aria-label={`${LABEL} by email`}>
      <span className="roll" aria-hidden="true">
        <span data-text={LABEL}>{LABEL}</span>
      </span>
      <span className="chip" aria-hidden="true">
        <ArrowUpRight className="chip-out h-4 w-4" />
        <ArrowUpRight className="chip-in h-4 w-4" />
      </span>
    </a>
  );
}
