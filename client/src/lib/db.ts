// Supabase REST, no SDK. The publishable key is meant to be public: row-level security
// only lets visitors insert messages and events, and read published roles.
export const DB_URL = "https://odluoydzbraqdyrccmdi.supabase.co/rest/v1";
export const DB_KEY = "sb_publishable_WuWyMoLwvSYxuw_cN2XkNw_AnEMmZua";

const insert = (table: string, row: object) =>
  fetch(`${DB_URL}/${table}`, {
    method: "POST",
    keepalive: true, // survives the page unloading after a download or link click
    headers: { apikey: DB_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(row),
  });

export type EventType = "page_view" | "resume_download" | "snag_open" | "contact_sent" | "email_click" | "linkedin_click";

/** Fire and forget. Only counts the live site, so local testing doesn't skew the numbers. */
export function track(type: EventType, path = location.pathname) {
  if (!import.meta.env.PROD) return;
  insert("events", { type, path, referrer: document.referrer.slice(0, 300) || null }).catch(() => {});
}

export async function sendMessage(msg: { name: string; email: string; body: string }) {
  const res = await insert("messages", msg);
  if (!res.ok) throw new Error(String(res.status));
  track("contact_sent");
}
