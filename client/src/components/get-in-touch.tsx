import { ArrowUpRight } from "lucide-react";
import { EMAIL } from "@/lib/site";

/** The red email action: a label and an arrow chip. Hover only deepens the fill. */
export function GetInTouch() {
  return (
    <a href={`mailto:${EMAIL}`} className="btn-cta btn-touch w-full sm:w-auto" aria-label="Get in touch by email">
      <span aria-hidden="true">Get in touch</span>
      <span className="chip" aria-hidden="true">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
