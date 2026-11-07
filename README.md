# Gerard Dexter Verzon — Portfolio

A responsive, build-free portfolio using HTML5, CSS3, and vanilla JavaScript. No frameworks, backend, database, dependencies, external fonts, or tracking.

## Local preview

Open `index.html` directly in your browser, or run this command from the project folder:

```powershell
python -m http.server 8000
```

Visit **http://localhost:8000**. On Windows, `py -m http.server 8000` is an alternative if `python` is unavailable. Stop the server with Ctrl+C.

## Files

- `index.html`: semantic sections, metadata, content, reusable project cards.
- `css/style.css`: mobile-first navy/cyan theme, responsive layouts, focus styles, reduced-motion support.
- `js/script.js`: mobile navigation, Escape/outside-click handling, scroll reveals, placeholder notices, current footer year.
- `assets/`: local SVG placeholders, favicon, social preview, downloadable text resume template.

## Customize before publishing

1. Replace project placeholders with completed work. Duplicate a `.project-card` article for more entries. Add the title, description, screenshot, meaningful alt text, technology tags, repository URL, and demo URL. Remove demo actions for projects without demos.
2. Replace each `href="#placeholder-notice"` with its real destination and remove its `data-placeholder` attribute. This covers certification/training verification, GitHub repositories, demos, LinkedIn, GitHub profile, and email. For email use `mailto:YOUR_ACTUAL_ADDRESS`. No real contact information is assumed.
3. Replace editable experience summaries and employer/date placeholders. Roles are listed without asserting a chronology. No achievements or completed projects are invented.
4. Replace `assets/resume-placeholder.txt` with your finished PDF. Update the resume anchor's `href` and `download` filename in `index.html`, then remove the template note. The existing button downloads a clearly labeled text template.
5. Add `og:url` with the final published URL. Export `assets/social-preview.svg` to a 1200×630 PNG/JPEG (many social crawlers do not support SVG) and set `og:image` to that image's absolute HTTPS URL. Optionally add a canonical link using the final URL.

Keep internal asset URLs relative (`css/style.css`, not `/css/style.css`) so GitHub Pages repository sites work.

## GitHub Pages deployment

1. Create a GitHub repository. Upload `index.html`, `css/`, `js/`, `assets/`, and this README to its root, then commit and push to your chosen branch (commonly `main`).
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose your branch and **/(root)**, then **Save**.
4. Wait for the deployment to finish. Open the URL displayed in Settings → Pages, typically `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.
5. A repository named `YOUR_USERNAME.github.io` instead serves at `https://YOUR_USERNAME.github.io/`. Future pushes to the selected branch update the site.

No custom workflow or build command is needed. GitHub account/plan and repository visibility can affect Pages availability. This project does not publish automatically to any hosting provider.

## Firebase Hosting deployment

This project includes `firebase.json` for static Hosting from `dist/`. A predeploy command runs `node scripts/prepare-hosting.js` to copy an explicit allowlist of seven website files into that generated folder. Git metadata, documentation, configuration, and logs are never copied. Node.js is needed for this preparation step; no dependencies, Firebase SDK, backend, or SPA rewrite are needed. Add future public assets to the script's allowlist.

With Firebase CLI installed, run these commands from this folder. On Windows use `firebase.cmd` if PowerShell blocks the `firebase.ps1` launcher; no execution-policy change is needed.

```powershell
firebase.cmd login
firebase.cmd projects:list
firebase.cmd deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

Replace `YOUR_FIREBASE_PROJECT_ID` with the actual ID from your Firebase console or project list. If you have no project yet, create one at https://console.firebase.google.com/ first. The deploy command prints the live Hosting URL. Repeat it after edits to publish updates. It deploys only Hosting and does not configure databases or functions.

Update the Open Graph URLs using the confirmed live URL after deployment. See the [Firebase Hosting quickstart](https://firebase.google.com/docs/hosting/quickstart) for more information.

## Accessibility and review

The site includes semantic landmarks, heading hierarchy, a skip link, visible keyboard focus, image descriptions, and a labeled mobile navigation toggle. The menu closes on selection, Escape, outside clicks, and breakpoint changes. Selecting a mobile menu link moves focus to its section; Escape returns focus to the toggle.

Content and navigation remain available without JavaScript. Scroll reveals enhance below-the-fold sections only and respect reduced-motion settings, including changes during the session. Placeholder links show a live notice; without JavaScript they navigate to the same explanatory notice.

Before sharing, review at 320px, 375px, 768px, and desktop widths. Test Tab/Shift+Tab, Escape, reduced motion, JavaScript disabled, actual contact links, resume download, and final metadata. No completed browser accessibility audit is claimed.
