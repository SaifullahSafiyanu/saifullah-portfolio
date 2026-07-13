# Saifullah Safiyanu — Portfolio

A lightweight static portfolio website for an early-career AI Operations, Workflow Automation, and
Product Operations professional. No framework, no build step, no backend — it runs as plain files on
any static host.

## What's inside

- A concise, scannable home page (`index.html`) with About, Projects, Experience, Skills, Community, and Contact.
- Three project detail pages under `project-details/`.
- A downloadable résumé (`Saifullah_Safiyanu_Resume.pdf`).
- SEO and sharing files (`robots.txt`, `sitemap.xml`, Open Graph and Twitter meta, JSON-LD Person data).
- A custom `404.html`, a favicon, and a social preview image.

## Technologies

- HTML5 (semantic, accessible)
- CSS3 (single stylesheet, responsive, dark theme, reduced-motion aware)
- Minimal vanilla JavaScript (mobile nav + active-link highlighting; the site works fully without JS)
- Google Fonts (Inter, Space Grotesk) with system-font fallbacks

## Folder structure

```
Saifullah_Portfolio_Final/
├── index.html
├── 404.html
├── Saifullah_Safiyanu_Resume.pdf
├── README.md
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── images/og-image.png
│   ├── screenshots/    (add redacted screenshots here)
│   └── diagrams/       (optional exported diagrams)
└── project-details/
    ├── ai-skills-reflector.html
    ├── outreach-automation.html
    └── voice-transcription.html
```

## Preview locally

Any static server works. From inside the `Saifullah_Portfolio_Final` folder:

```
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser (the résumé download and links still work).

## Deploy with GitHub Pages

1. Create a new GitHub repository (public), e.g. `saifullah-portfolio`.
2. Upload the **contents** of this folder to the repository root (so `index.html` is at the top level).
3. In the repo: **Settings → Pages**.
4. Under **Build and deployment**, set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then open the URL GitHub shows (e.g. `https://<username>.github.io/saifullah-portfolio/`).

## Deploy with Cloudflare Pages

**Easiest: Direct Upload (no Git needed).**
1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Upload assets**.
2. Give the project a name (this becomes your address, e.g. `saifullah-safiyanu`).
3. Drag the complete folder (or a ZIP of it) into the upload area and deploy.
4. Cloudflare serves it from `<project-name>.pages.dev`.

**Alternative: Git integration.**
1. Push this folder's contents to a GitHub repository (as above).
2. **Workers & Pages → Create → Pages → Connect to Git**, choose the repo.
3. Build settings for a plain static site (no build step):
   - **Framework preset:** None
   - **Build command:** `exit 0`
   - **Build output directory:** `.`  (the folder that contains `index.html`)
4. Deploy. You get a `<project-name>.pages.dev` URL.

## After deploying: update the URLs

The SEO files use a placeholder domain. Once you know your real URL, update it in:

- `index.html` and each `project-details/*.html` — the `<link rel="canonical">` and `og:*` / `twitter:*` URLs
- `sitemap.xml` — the `<loc>` entries
- `robots.txt` — the `Sitemap:` line

## How to update the résumé

Replace `Saifullah_Safiyanu_Resume.pdf` with your new file, keeping the **same filename** so the
"Download résumé" buttons keep working. If you change the name, update the `href` in `index.html`
(two buttons) and adjust as needed.

## How to add screenshots

1. Put redacted images in `assets/screenshots/` (review each for private data first).
2. Reference one with, for example:
   `<img src="../assets/screenshots/reflector-canvas.png" alt="Redacted n8n canvas for the AI Skills Reflector" />`
   inside the relevant `project-details/*.html` page.
3. Always include descriptive `alt` text.

## Updating the live site safely

- Edit files locally and preview with the local server before deploying.
- For GitHub/Cloudflare, commit changes to the connected branch; the site rebuilds automatically.
- Keep the backup folder (`Saifullah_Portfolio_Backup_2026-07-13`) so you can always roll back.

## Notes on accuracy and privacy

- All titles, dates, and technologies match the corrected résumé.
- No credentials, keys, webhook URLs, internal prompts, prospect data, or confidential business
  information are included. Keep it that way when adding screenshots or code samples.
