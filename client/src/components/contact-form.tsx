import { useState } from "react";
import { sendMessage } from "@/lib/db";
import { EMAIL } from "@/lib/site";

const field =
  "mt-1 w-full rounded-[10px] border border-[#52617f] bg-transparent px-4 py-3 text-[var(--on-ink)] placeholder:text-[#7d8aa3] focus:border-[var(--blue-light)]";
const label = "block text-[15px] font-semibold text-[var(--on-ink-2)]";

/** Saves a note to the database. A hidden "website" field catches bots: people never fill it. */
export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return setState("sent");
    setState("sending");
    try {
      await sendMessage({
        name: String(f.get("name")).trim(),
        email: String(f.get("email")).trim(),
        body: String(f.get("body")).trim(),
      });
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <p role="status" className="mt-8 max-w-[36rem] border-t border-[#52617f] pt-6 text-lg text-[var(--on-ink)]">
        Thanks, your note reached me. I'll reply by email.
      </p>
    );

  return (
    <form onSubmit={submit} className="mt-8 max-w-[36rem] border-t border-[#52617f] pt-6">
      <h3 className="text-[1.1875rem] font-bold">Or leave a note</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className={`${label} mt-4`}>
        Message
        <textarea name="body" required maxLength={4000} rows={4} className={`${field} resize-y`} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0" />
      <button type="submit" disabled={state === "sending"} className="btn-line mt-5 w-full sm:w-auto disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Send note"}
      </button>
      {state === "error" && (
        <p role="alert" className="mt-3 text-[15px] text-[var(--on-ink)]">
          That didn't send. Please email me at {EMAIL}.
        </p>
      )}
    </form>
  );
}
