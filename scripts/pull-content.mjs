// Pulls published roles from Supabase into client/src/data/roles.json before each build.
// If the database can't be reached, the last committed JSON is used, so a build never breaks.
import { writeFile } from "node:fs/promises";

const URL = "https://odluoydzbraqdyrccmdi.supabase.co/rest/v1/roles";
const KEY = "sb_publishable_WuWyMoLwvSYxuw_cN2XkNw_AnEMmZua";
const OUT = new globalThis.URL("../client/src/data/roles.json", import.meta.url);

try {
  const res = await fetch(`${URL}?select=title,company,team,location,period,scope,metrics,tools,image_caption&published=eq.true&order=sort`, {
    headers: { apikey: KEY },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const roles = await res.json();
  if (!Array.isArray(roles) || roles.length === 0) throw new Error("no roles returned");
  await writeFile(OUT, JSON.stringify(roles, null, 2) + "\n");
  console.log(`pull-content: ${roles.length} roles`);
} catch (e) {
  console.warn(`pull-content: kept the committed roles.json (${e.message})`);
}
