import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { supabase } from "@/lib/supabase";

const OWNER = "rezwan99@gmail.com";
const NAVY = "#1e3a8a";
const INK = "#0b1220";
const RED = "#d7192b";
const GRID = "#e2e8f0";
const PAGE_SIZE = 1000;
const MAX_ROWS = 10000;

type Ev = { created_at: string; type: string; path: string | null; referrer: string | null };
type Msg = { id: number; created_at: string; name: string; body: string };
type Range = 7 | 30 | 0;

const RANGES: { v: Range; label: string }[] = [
  { v: 7, label: "7 days" },
  { v: 30, label: "30 days" },
  { v: 0, label: "All time" },
];
const KEY_EVENTS: [string, string][] = [
  ["resume_download", "Resume"],
  ["snag_open", "Snag"],
  ["email_click", "Email"],
  ["linkedin_click", "LinkedIn"],
  ["contact_sent", "Notes"],
];

const nyDay = (d: Date | string) =>
  new Date(d).toLocaleDateString("en-CA", { timeZone: "America/New_York" }); // YYYY-MM-DD
const nyWhen = (d: string) =>
  new Date(d).toLocaleString("en-US", { timeZone: "America/New_York", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
const PAGE_NAMES: Record<string, string> = { "/": "Home", "/experience": "Experience", "/projects": "Projects", "/education": "Education", "/projects/mba": "MBA projects" };
const pageName = (p: string | null) => PAGE_NAMES[p || "/"] ?? (p || "/");
const TYPE_NAMES: Record<string, string> = { page_view: "Page view", resume_download: "Resume download", snag_open: "Opened Snag", email_click: "Email click", linkedin_click: "LinkedIn click", contact_sent: "Contact note" };
const refHost = (r: string | null) => { try { return r ? new URL(r).hostname.replace(/^www\./, "") : "Direct"; } catch { return "Direct"; } };

const card = "border border-slate-200 bg-white p-4 sm:p-5";
const btn =
  "min-h-[44px] px-4 font-semibold text-sm border border-slate-300 bg-white text-blue-900 hover:border-blue-900 transition-colors";

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`${card} min-w-0 ${className}`}>
      <h2 className="text-base font-semibold" style={{ color: INK }}>{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Chart({ data, horizontal, highlight }: { data: { name: string; n: number }[]; horizontal?: boolean; highlight?: number }) {
  const h = horizontal ? Math.min(260, Math.max(220, data.length * 32)) : 240;
  return (
    <div style={{ height: h }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout={horizontal ? "vertical" : "horizontal"} margin={{ left: 0, right: 8, top: 4, bottom: 0 }}>
          <CartesianGrid stroke={GRID} vertical={!!horizontal} horizontal={!horizontal} />
          {horizontal ? (
            <>
              <XAxis type="number" allowDecimals={false} tick={{ fill: INK, fontSize: 12 }} stroke={GRID} />
              <YAxis type="category" dataKey="name" width={88} tick={{ fill: INK, fontSize: 12 }} stroke={GRID} />
            </>
          ) : (
            <>
              <XAxis dataKey="name" tick={{ fill: INK, fontSize: 12 }} stroke={GRID} minTickGap={16} />
              <YAxis allowDecimals={false} width={32} tick={{ fill: INK, fontSize: 12 }} stroke={GRID} />
            </>
          )}
          <Tooltip cursor={{ fill: "#f1f5f9" }} contentStyle={{ borderRadius: 0, borderColor: GRID, color: INK }} />
          <Bar dataKey="n" name="Count" fill={NAVY} isAnimationActive={false}>
            {data.map((_, i) => <Cell key={i} fill={i === highlight ? RED : NAVY} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (email.trim().toLowerCase() === OWNER) {
      await supabase.auth
        .signInWithOtp({ email: OWNER, options: { emailRedirectTo: window.location.origin + "/stats", shouldCreateUser: false } })
        .catch(() => {});
    }
    setBusy(false);
    setSent(true);
  };
  return (
    <form onSubmit={submit} className={`${card} mx-auto max-w-sm`}>
      <label htmlFor="stats-email" className="block text-sm font-semibold" style={{ color: INK }}>Email</label>
      <input
        id="stats-email" type="email" required autoComplete="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 w-full min-h-[44px] border border-slate-300 px-3 text-base"
      />
      <button type="submit" disabled={busy} className={`${btn} mt-3 w-full`}>Send sign-in link</button>
      {sent && <p role="status" className="mt-3 text-sm text-slate-700">Check your email.</p>}
    </form>
  );
}

async function loadEvents(days: Range): Promise<Ev[]> {
  const since = days ? new Date(Date.now() - days * 864e5).toISOString() : null;
  const rows: Ev[] = [];
  while (rows.length < MAX_ROWS) {
    let q = supabase.from("events").select("created_at,type,path,referrer").order("created_at");
    if (since) q = q.gte("created_at", since);
    const { data, error } = await q.range(rows.length, rows.length + PAGE_SIZE - 1);
    if (error) throw error;
    rows.push(...(data as Ev[]));
    if (data.length < PAGE_SIZE) break;
  }
  return rows;
}

function Dashboard() {
  const [range, setRange] = useState<Range>(30);
  const [events, setEvents] = useState<Ev[] | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [resumes, setResumes] = useState<Ev[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let live = true;
    setEvents(null);
    setError("");
    Promise.all([
      loadEvents(range),
      supabase.from("messages").select("id,created_at,name,body").order("created_at", { ascending: false }).limit(5),
      // All-time, so "last resume download" never depends on the selected range.
      supabase.from("events").select("created_at,type,path,referrer").eq("type", "resume_download").order("created_at", { ascending: false }).limit(10),
    ])
      .then(([ev, m, r]) => {
        if (!live) return;
        setEvents(ev);
        setMsgs((m.data as Msg[]) ?? []);
        setResumes((r.data as Ev[]) ?? []);
      })
      .catch(() => live && setError("Could not load stats. Try again in a moment."));
    return () => { live = false; };
  }, [range]);

  const agg = useMemo(() => {
    const ev = events ?? [];
    const views = ev.filter((e) => e.type === "page_view");
    const count = (m: Map<string, number>, k: string) => m.set(k, (m.get(k) ?? 0) + 1);
    const pages = new Map<string, number>();
    const refs = new Map<string, number>();
    const days = new Map<string, number>();
    views.forEach((e) => {
      count(pages, e.path || "/");
      count(days, nyDay(e.created_at));
      let host = "Direct";
      try { if (e.referrer) host = new URL(e.referrer).hostname.replace(/^www\./, ""); } catch { /* keep Direct */ }
      count(refs, host);
    });
    // Fill missing days with 0.
    const byDay: { name: string; n: number }[] = [];
    const keys = Array.from(days.keys()).sort();
    if (keys.length) {
      const end = nyDay(new Date());
      let d = new Date(range ? Date.now() - (range - 1) * 864e5 : keys[0] + "T12:00:00Z");
      for (let k = nyDay(d); k <= end; d = new Date(d.getTime() + 864e5), k = nyDay(d)) {
        byDay.push({ name: k.slice(5), n: days.get(k) ?? 0 });
      }
    }
    // Every event type per New York day, newest first, with the change in views vs the day before.
    const perDay = new Map<string, Record<string, number>>();
    ev.forEach((e) => {
      const k = nyDay(e.created_at);
      const r = perDay.get(k) ?? {};
      r[e.type] = (r[e.type] ?? 0) + 1;
      perDay.set(k, r);
    });
    const dayKeys: string[] = [];
    if (ev.length) {
      const first = nyDay(ev[0].created_at);
      const start = range ? nyDay(new Date(Date.now() - (range - 1) * 864e5)) : first;
      for (let d = new Date(start + "T12:00:00Z"); nyDay(d) <= nyDay(new Date()); d = new Date(d.getTime() + 864e5)) dayKeys.push(d.toISOString().slice(0, 10));
    }
    const dayRows = dayKeys
      .map((k) => {
        const r = perDay.get(k) ?? {};
        return { day: k, views: r.page_view ?? 0, resume: r.resume_download ?? 0, snag: r.snag_open ?? 0, email: r.email_click ?? 0, linkedin: r.linkedin_click ?? 0, notes: r.contact_sent ?? 0 };
      })
      .map((row, i, all) => ({ ...row, delta: i ? row.views - all[i - 1].views : null }))
      .reverse();
    const today = perDay.get(nyDay(new Date()))?.page_view ?? 0;
    const yesterday = perDay.get(nyDay(new Date(Date.now() - 864e5)))?.page_view ?? 0;
    const top = (m: Map<string, number>, n: number) =>
      Array.from(m.entries()).sort((a, b) => b[1] - a[1]).slice(0, n).map(([name, n]) => ({ name, n }));
    return {
      views: views.length,
      pageCount: pages.size,
      resume: ev.filter((e) => e.type === "resume_download").length,
      notes: ev.filter((e) => e.type === "contact_sent").length,
      byDay,
      topPages: top(pages, 8).map((p) => ({ ...p, name: pageName(p.name) })),
      pageTable: top(pages, 50).map((p) => ({ ...p, share: views.length ? Math.round((p.n / views.length) * 100) : 0 })),
      dayRows,
      today,
      yesterday,
      recent: [...ev].reverse().slice(0, 25),
      topRefs: top(refs, 8),
      keyEvents: KEY_EVENTS.map(([t, name]) => ({ name, n: ev.filter((e) => e.type === t).length })),
    };
  }, [events, range]);

  const diff = agg.today - agg.yesterday;
  const kpis: [string, string, string | undefined][] = [
    ["Views today", String(agg.today), `${diff >= 0 ? "+" : ""}${diff} vs yesterday (${agg.yesterday})`],
    ["Page views", String(agg.views), "in this range"],
    ["Resume downloads", String(agg.resume), "in this range"],
    ["Last resume download", resumes[0] ? nyWhen(resumes[0].created_at) : "None yet", resumes[0] ? `from ${pageName(resumes[0].path)}` : undefined],
  ];
  const th = "py-2 pr-3 text-left font-semibold whitespace-nowrap";
  const td = "py-2 pr-3 tabular-nums whitespace-nowrap";

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Date range">
        {RANGES.map((r) => (
          <button
            key={r.v} onClick={() => setRange(r.v)} aria-pressed={range === r.v}
            className={`${btn} ${range === r.v ? "!bg-blue-900 !text-white !border-blue-900" : ""}`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}
      {!error && !events && <p className="mt-4 text-slate-600">Loading...</p>}
      {events && !events.length && <p className="mt-4 text-slate-600">No events yet.</p>}

      {events && (
        <>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kpis.map(([label, n, sub]) => (
              <div key={label} className={card}>
                <div className="text-sm text-slate-600">{label}</div>
                <div className={`mt-1 font-bold tabular-nums ${n.length > 8 ? "text-lg" : "text-3xl"}`} style={{ color: INK }}>{n}</div>
                {sub && <div className="mt-1 text-xs text-slate-600">{sub}</div>}
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <Card title="Page views by day" className="lg:col-span-2">
              {agg.byDay.length ? <Chart data={agg.byDay} highlight={agg.byDay.length - 1} /> : <p className="text-slate-600">No page views yet.</p>}
            </Card>
            <Card title="Top pages">
              {agg.topPages.length ? <Chart data={agg.topPages} horizontal /> : <p className="text-slate-600">No page views yet.</p>}
            </Card>
            <Card title="Key events"><Chart data={agg.keyEvents} /></Card>
            <Card title="Top referrers">
              {agg.topRefs.length ? (
                <ul className="divide-y divide-slate-200">
                  {agg.topRefs.map((r) => (
                    <li key={r.name} className="flex justify-between gap-3 py-2 text-sm" style={{ color: INK }}>
                      <span className="min-w-0 break-words">{r.name}</span>
                      <span className="tabular-nums font-semibold">{r.n}</span>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-slate-600">No referrers yet.</p>}
            </Card>
            <Card title="Page visits, ranked">
              {agg.pageTable.length ? (
                <table className="w-full text-sm" style={{ color: INK }}>
                  <thead className="border-b border-slate-200">
                    <tr><th className={th}>Page</th><th className={th}>Views</th><th className={th}>Share</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {agg.pageTable.map((p) => (
                      <tr key={p.name}><td className="py-2 pr-3">{pageName(p.name)}</td><td className={td}>{p.n}</td><td className={td}>{p.share}%</td></tr>
                    ))}
                  </tbody>
                </table>
              ) : <p className="text-slate-600">No page views yet.</p>}
            </Card>
            <Card title="Resume downloads (latest 10, all time)">
              {resumes.length ? (
                <ul className="divide-y divide-slate-200">
                  {resumes.map((r) => (
                    <li key={r.created_at} className="flex flex-wrap justify-between gap-x-3 py-2 text-sm" style={{ color: INK }}>
                      <span className="tabular-nums">{nyWhen(r.created_at)}</span>
                      <span className="text-slate-600">{pageName(r.path)} · {refHost(r.referrer)}</span>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-slate-600">No resume downloads yet.</p>}
            </Card>
            <Card title="Day by day" className="lg:col-span-2">
              {agg.dayRows.length ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ color: INK }}>
                    <thead className="border-b border-slate-200">
                      <tr>{["Day", "Views", "Change", "Resume", "Snag", "Email", "LinkedIn", "Notes"].map((h) => <th key={h} className={th}>{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {agg.dayRows.map((r) => (
                        <tr key={r.day}>
                          <td className={td}>{new Date(r.day + "T12:00:00Z").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" })}</td>
                          <td className={`${td} font-semibold`}>{r.views}</td>
                          <td className={`${td} ${r.delta && r.delta > 0 ? "text-green-700" : r.delta && r.delta < 0 ? "text-red-700" : "text-slate-500"}`}>{r.delta === null ? "" : `${r.delta > 0 ? "+" : ""}${r.delta}`}</td>
                          <td className={td}>{r.resume || ""}</td>
                          <td className={td}>{r.snag || ""}</td>
                          <td className={td}>{r.email || ""}</td>
                          <td className={td}>{r.linkedin || ""}</td>
                          <td className={td}>{r.notes || ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : <p className="text-slate-600">No activity yet.</p>}
            </Card>
            <Card title="Recent activity (latest 25)" className="lg:col-span-2">
              {agg.recent.length ? (
                <ul className="divide-y divide-slate-200">
                  {agg.recent.map((e, i) => (
                    <li key={e.created_at + i} className="grid grid-cols-[1fr_auto] gap-x-3 py-2 text-sm sm:grid-cols-[12rem_10rem_1fr]" style={{ color: INK }}>
                      <span className="tabular-nums text-slate-600">{nyWhen(e.created_at)}</span>
                      <span className="font-semibold">{TYPE_NAMES[e.type] ?? e.type}</span>
                      <span className="col-span-2 text-slate-600 sm:col-span-1">{pageName(e.path)} · {refHost(e.referrer)}</span>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-slate-600">No activity yet.</p>}
            </Card>
            <Card title="Latest contact notes">
              {msgs.length ? (
                <ul className="divide-y divide-slate-200">
                  {msgs.map((m) => (
                    <li key={m.id} className="py-2 text-sm" style={{ color: INK }}>
                      <div className="font-semibold">{m.name} <span className="font-normal text-slate-600">{nyDay(m.created_at)}</span></div>
                      <p className="line-clamp-2 break-words">{m.body}</p>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-slate-600">No notes yet.</p>}
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

export default function Stats() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = "Stats";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    return () => { meta.remove(); document.title = prev; };
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); }).catch(() => setReady(true));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  const owner = session?.user.email?.toLowerCase() === OWNER;

  return (
    <div className="min-h-screen">
      <header className="band-ink band-glow">
        <div className="wrap py-8 sm:py-14 flex items-end justify-between gap-4">
          <h1>Stats</h1>
          {session && (
            <button onClick={() => supabase.auth.signOut()} className={`${btn} !bg-transparent !text-white !border-white/40`}>
              Sign out
            </button>
          )}
        </div>
      </header>
      <div className="wrap py-6 sm:py-10">
        {!ready ? <p className="text-slate-600">Loading...</p> : owner ? <Dashboard /> : <SignIn />}
      </div>
    </div>
  );
}
