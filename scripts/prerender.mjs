// Writes a real HTML file for every route (run after both vite builds), so crawlers get a 200,
// page content and route-specific head tags instead of the SPA 404 fallback.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const SITE = "https://www.buildwithrez.com";

// Titles match usePageTitle in each page.
const ROUTES = [
  { path: "/" },
  {
    path: "/experience",
    title: "Experience | Rezwan Islam",
    description:
      "Product experience at NBCUniversal, Rocket Companies and Odynn, with a mechanical engineering background and a Baruch MBA in progress (May 2027).",
  },
  {
    path: "/projects",
    title: "Projects | Rezwan Islam",
    description: "Product projects by Rezwan Islam, including Snag and RageParser.",
  },
  {
    path: "/education",
    title: "Education | Rezwan Islam",
    description: "Rezwan Islam's education: an MBA at Baruch College (Zicklin) and a B.E. in Mechanical Engineering from CCNY, summa cum laude.",
  },
  {
    path: "/projects/mba",
    title: "MBA projects | Rezwan Islam",
    description: "MBA coursework projects by Rezwan Islam at Baruch College, including data work and Tableau dashboards.",
  },
];

// Old paths. The client handles these too, but only after the server has already answered 404.
const REDIRECTS = {
  "/mba": "/projects/mba",
  "/product-management": "/projects",
};

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "dist/public");
const serverDir = path.join(root, "dist/server");
const { render } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);

const shell = readFileSync(path.join(outDir, "index.html"), "utf8");
if (!shell.includes('<div id="root"></div>')) throw new Error("prerender: #root marker not found");

const escapeAttr = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

function swap(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: head tag not found: ${pattern}`);
  return html.replace(pattern, () => replacement);
}

function withHead(html, route) {
  if (!route.title) return html;
  const url = SITE + route.path;
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);
  const tags = [
    [/<title>.*?<\/title>/, `<title>${title}</title>`],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`],
  ];
  return tags.reduce((result, [pattern, replacement]) => swap(result, pattern, replacement), html);
}

function writePage(routePath, html) {
  if (routePath === "/") {
    writeFileSync(path.join(outDir, "index.html"), html);
    return;
  }
  // GitHub Pages serves /experience from experience.html, and redirects to the folder form when a
  // folder of that name exists (/projects has /projects/mba inside it). Writing both returns 200 either way.
  const file = path.join(outDir, routePath.slice(1));
  mkdirSync(file, { recursive: true });
  writeFileSync(`${file}.html`, html);
  writeFileSync(path.join(file, "index.html"), html);
}

// 404.html (GitHub Pages SPA fallback) keeps the empty shell so unknown paths never flash the home page.
writeFileSync(path.join(outDir, "404.html"), shell);

for (const route of ROUTES) {
  const body = await render(route.path);
  writePage(route.path, withHead(shell, route).replace('<div id="root"></div>', () => `<div id="root">${body}</div>`));
  console.log(`prerender: ${route.path} (${body.length} chars)`);
}

for (const [from, to] of Object.entries(REDIRECTS)) {
  writePage(
    from,
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${SITE}${to}" />
    <meta http-equiv="refresh" content="0; url=${to}" />
  </head>
  <body><a href="${to}">Continue</a></body>
</html>
`,
  );
}

rmSync(serverDir, { recursive: true, force: true });
