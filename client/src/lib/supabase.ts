import { createClient } from "@supabase/supabase-js";
import { DB_KEY } from "@/lib/db";

export const supabase = createClient("https://odluoydzbraqdyrccmdi.supabase.co", DB_KEY, {
  auth: { persistSession: true, detectSessionInUrl: true },
});
