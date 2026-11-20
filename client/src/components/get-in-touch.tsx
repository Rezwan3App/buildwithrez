import { ArrowUpRight } from "lucide-react";
import { EMAIL } from "@/lib/site";

/** Secondary email action: an outline button with an arrow chip. The resume is the only red call to action. */
export function GetInTouch() {
  return (
    <a href={`mailto:${EMAIL}`} className="btn-line btn-touch w-full sm:w-auto" aria-label="Get in touch by email">
      <span aria-hidden="true">Get in touch</span>
      <span className="chip" aria-hidden="true">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
