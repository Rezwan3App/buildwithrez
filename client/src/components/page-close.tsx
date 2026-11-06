import { Mail } from "lucide-react";
import { EMAIL, RESUME_URL } from "@/lib/site";

/** Closing band for inner pages: the one red action on the last screen. */
export function PageClose() {
  return (
    <section className="band-ink section">
      <div className="wrap">
        <h2>Let's talk</h2>
        <p className="mt-3 text-lg">Open to APM/PM roles in New York. Email is the best way to reach me.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${EMAIL}`} className="btn-cta w-full sm:w-auto">
            <Mail className="h-5 w-5" aria-hidden="true" />
            Email me
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-line w-full sm:w-auto">
            Download my resume
          </a>
        </div>
      </div>
    </section>
  );
}
