"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist", "public");

if (!fs.existsSync(dist)) {
  console.error("Run 'npm run build:static' first. dist/public not found.");
  process.exit(1);
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Remove existing built outputs so we don't keep stale assets
const toReplace = ["index.html", "404.html", "assets", "attached_assets"];
for (const name of toReplace) {
  const p = path.join(root, name);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
  }
}

// Copy dist/public contents to root
for (const name of fs.readdirSync(dist)) {
  copyRecursive(path.join(dist, name), path.join(root, name));
}

// Ensure CNAME and 404.html
fs.writeFileSync(path.join(root, "CNAME"), "www.buildwithrez.com\n");
if (fs.existsSync(path.join(root, "index.html"))) {
  fs.copyFileSync(path.join(root, "index.html"), path.join(root, "404.html"));
}

console.log("Deploy files copied to repo root. Commit and push to update live site.");
