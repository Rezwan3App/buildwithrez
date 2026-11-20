import { RESUME_URL } from "@/lib/site";
import { Download } from "lucide-react";
import { GetInTouch } from "@/components/get-in-touch";

/** Closing band for inner pages: the resume is the one red action on the last screen. */
export function PageClose() {
  return (
    <section className="band-ink band-glow section">
      <div className="wrap">
        <h2>Let's talk</h2>
        <p className="mt-3 text-lg">Open to APM/PM roles in New York. Email is the best way to reach me.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={RESUME_URL} download="Rezwan_Islam_Resume.pdf" className="btn-cta btn-hero w-full sm:w-auto">
            <Download className="h-5 w-5" aria-hidden="true" />
            Download my resume
          </a>
          <GetInTouch />
        </div>
      </div>
    </section>
  );
}
