# Rezwan Islam – Portfolio

Personal portfolio site for **Rezwan Islam** (Aspiring Product Manager).  
Live at **[www.buildwithrez.com](https://www.buildwithrez.com)**.

## Tech Stack

- **React** + **Vite** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Wouter** for routing

## Local Development

```bash
npm install
npx vite --host
```

Open **http://localhost:5173/**.

## Build

```bash
npm run build
```

Output goes to `dist/public` (HTML, JS, CSS, and assets).

## Deployment (GitHub Pages)

### Update local → GitHub immediately

Run this to push all local changes and update the live site:

```powershell
.\push-to-github.ps1
```

Or manually:

```powershell
cd c:\Users\Rezwan\website\buildwithrez
git add -A
git commit -m "Sync local to GitHub"
git push origin main
```

Then check **Actions** → **Build and Deploy to GitHub Pages** (must be green). Refresh **www.buildwithrez.com** with `Ctrl+Shift+R`.

---

The site is deployed via **GitHub Actions**. On every push to `main`:

1. The workflow runs `npx vite build`
2. The contents of `dist/public` are deployed to GitHub Pages
3. **www.buildwithrez.com** is updated automatically

### One-time setup

1. Open **Settings → Pages** in the repo.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`; the workflow will build and deploy.

### Sync dev server → live (build locally and push)

To make the live site match what you see at **http://localhost:5173/**:

1. **Build and copy** deploy files into the repo root:
   ```bash
   npm run deploy:pages
   ```
2. **Commit and push** the updated `index.html`, `404.html`, `assets/`, and `attached_assets/`:
   ```bash
   git add index.html 404.html assets attached_assets CNAME
   git commit -m "Deploy: sync live site with dev"
   git push
   ```

Use this if you use **Deploy from a branch** (root or `gh-pages`). If you use **GitHub Actions**, pushing source to `main` triggers the workflow and deploys; you don’t need to run `deploy:pages` or commit built files.

### Why “local vs live” can differ

- **Locally:** You run `npx vite --host`, which serves the **source** in `client/src/` with hot reload.
- **Live:** GitHub Pages serves either the **built** output from the `deploy` workflow (Actions) or the built files you committed (branch deploy).

So you always see the latest code locally, but the live site only updates after a successful **build and deploy** (workflow or `deploy:pages` + push).

### Local doesn’t match live?

1. **Check Actions:** Repo → **Actions** → **Build and Deploy to GitHub Pages**. Ensure the latest run is **green**. If it’s red, the live site is still the last successful deploy (often older).
2. **Re-run the workflow:** Open the workflow, click **Run workflow** → **Run workflow**. Wait for it to finish, then reload **www.buildwithrez.com**.
3. **Hard refresh the live site:** `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to bypass cache.
4. **Confirm Pages source:** **Settings** → **Pages** → **Build and deployment** → **Source** must be **GitHub Actions**. If it’s “Deploy from a branch”, the site is built from repo root, not the workflow.

## Project Structure

```
├── client/
│   ├── index.html      # HTML entry (Vite)
│   ├── public/         # Static assets (copied into build)
│   │   └── attached_assets/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
├── .github/workflows/
│   └── deploy.yml      # Build + deploy to GitHub Pages
├── CNAME               # www.buildwithrez.com
├── index.html          # (legacy deploy; workflow uses dist/public)
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## License

MIT
