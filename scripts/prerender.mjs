// Injects the SSR-rendered home page into dist/public/index.html (run after both vite builds).
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(root, "dist/public/index.html");
const serverDir = path.join(root, "dist/server");
const { render } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);

const html = readFileSync(htmlPath, "utf8");
const body = render();
if (!html.includes('<div id="root"></div>')) throw new Error("prerender: #root marker not found");
// 404.html (GitHub Pages SPA fallback) keeps the empty shell so deep links never flash the home page.
writeFileSync(path.join(root, "dist/public/404.html"), html);
writeFileSync(htmlPath, html.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`));
rmSync(serverDir, { recursive: true, force: true });
console.log(`prerender: injected ${body.length} chars into index.html`);
