# Roadmap

The order to actually follow after you unzip or clone this repo. Each step has a check at the end — don't move to the next step until the check passes.

---

## Step 1 — Install and confirm the code runs

```bash
npm install
npx tsc --noEmit
```

**Check:** `tsc` should print nothing and exit with no errors. If it errors here, stop — something got corrupted in transfer before you touch any content.

```bash
npx next lint
```

**Check:** should print `✔ No ESLint warnings or errors`.

```bash
npm run build
```

**Check:** should end with a route table (`┌ ○ /`, etc.) and no red error output. This confirms the project compiles for production exactly as delivered, before you've changed a single file.

---

## Step 2 — Run it locally

```bash
npm run dev
```

Open `http://localhost:3000`.

**Check:**
- Page loads, hero text is visible
- Hero shows a monogram icon where your photo will go (this is correct — it's the fallback, not a bug)
- Scrolling through all sections works, each fades in once
- Resizing the window narrow collapses the nav into a hamburger menu

---

## Step 3 — Fill in your real content

Do these in order — each unlocks a piece of UI that's currently hidden or showing a fallback:

1. **Photo** → save as `public/images/portrait.jpg`. Refresh — monogram should be replaced by your photo.
2. **Email** → set `email` in `src/data/profile.ts`. Scroll to Contact — a working mailto button should now appear instead of the placeholder note.
3. **Socials** (optional) → set `social.github` / `social.linkedin` in the same file. Icons appear next to the email button.
4. **Resume** → add `public/resume.pdf`, then set `resumeUrl: "/resume.pdf"` in `src/data/profile.ts`. A "Resume" button should appear in the nav bar.
5. **Project links** → in `src/data/projects.ts`, fill in `repoUrl` / `demoUrl` per project. GitHub/external-link icons should appear on that project's card only.
6. **Dev setup RAM/storage** (optional) → add a spec entry in `src/data/dev-setup.ts` if you want it shown.

**Check:** after each edit, refresh the browser and confirm the specific UI element described actually appeared. If it didn't, you likely mistyped the field name — compare against the original file, don't guess at the structure.

---

## Step 4 — Re-run the automated checks

```bash
npx tsc --noEmit && npx next lint && npm run build
```

**Check:** all three still pass after your edits. Content edits shouldn't break types or lint, but this catches typos (e.g. a missing comma in a data file) before they become a broken deploy.

---

## Step 5 — Manual QA pass

With `npm run dev` running, go through this by hand:

- [ ] Tab through the page using only the keyboard — focus rings are visible, a "Skip to content" link appears on the first Tab press
- [ ] Click the mailto button and the "Copy" button in Contact — copy feedback shows and reverts after ~2 seconds
- [ ] Open the mobile menu, click each link, confirm it scrolls to the right section and the menu closes
- [ ] Resize from mobile width to desktop width and back — no layout breaks, hero photo stacks correctly on mobile
- [ ] Move your mouse across the page — particle field reacts, hero 3D sphere parallaxes toward the cursor
- [ ] Hover a featured project card — 3D tilt follows the cursor
- [ ] Hover the primary buttons — they pull slightly toward the cursor (magnetic effect)
- [ ] Visit `localhost:3000/robots.txt` and `localhost:3000/sitemap.xml` — both load
- [ ] In your OS accessibility settings, enable "reduce motion," reload the page — animations should be minimal/instant, particle field and 3D scene should not render

---

## Step 6 — Before you deploy

- [ ] Replace the placeholder domain in `src/app/layout.tsx` (`metadataBase`), `src/app/sitemap.ts`, and `src/app/robots.ts` with your real domain or Vercel URL
- [ ] Decide on a license (or leave the repo without one — see README caution) — add a `LICENSE` file if you want one
- [ ] Re-read the **Caution** section in `README.md` and confirm every item there is actually resolved, not just partially filled in

---

## Step 7 — Deploy

```bash
git push origin main
```

Import the repo at [vercel.com/new](https://vercel.com/new). No environment variables needed. Vercel auto-detects Next.js.

**Check, after deploy:**
- [ ] Visit the live URL — hero photo, resume button, and contact button all work exactly like they did locally
- [ ] `your-domain.com/robots.txt` and `your-domain.com/sitemap.xml` both resolve
- [ ] Share the live link in a chat app (Slack/WhatsApp/iMessage) and confirm the Open Graph preview card shows correctly — this is the first real test that `metadataBase` was actually updated

---

## After that

Add a real screenshot or short screen-recording GIF to the top of `README.md` once the live site looks the way you want. A README with an actual image of the real site converts far better than one without.
