# Utubaa Village

The public site of **Utubaa Village** — home of the Ethiopia Thanks You Award. A digital village of pillars (*utubaa*: the central pillar of the home), one raised for every verified, unnoticed life that held others up.

- Static multi-page site (no build step, no backend)
- Branding: Medemer colors only — green `#078930`, yellow `#FCDD09`, red `#DA121A` on white/ink neutrals
- Layout rule: boxes and text centered; lists left-aligned
- Deployed on Vercel

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — the vision, the five rules, the three tiers |
| `directory.html` | **The Gratitude Directory** — pillars searchable by field (reads `laureates.js`) |
| `profile.html?id=…` | **A pillar's record** — the full life-stage ledger: contribution (verified), why it went unseen, failures & costs (in their own words), the lesson for humanity, and the belief at each stage's end (verbatim) |
| `nominate.html` | **Registration & nomination** — the criteria + a faithful working intake (validates, assembles a review, stores/sends nothing) |
| `about.html` | **The Criteria** — eligibility, the 12 fields, evidence classes, scoring, the seven-stage pipeline |
| `styles.css` | Shared design system (Medemer palette, centered layout) |
| `laureates.js` | Illustrative composite laureate data — **no real person depicted** |

## Important

- Every laureate shown is an **illustrative composite**, clearly marked. Nominations formally open **2028**; the intake stores and transmits nothing (no consent/data-protection backend yet — Proclamation 1321/2024).
- To add/edit illustrative pillars, edit `laureates.js` (the directory and profiles read from it).

## Local preview

`python -m http.server 8000` then open `http://localhost:8000` — the directory needs to be served (not opened as a file) so `laureates.js` loads.

## Deploy

`vercel deploy --prod --yes` from this folder (GitHub auto-deploy is not connected).

## Status

Founding stage. Nominations are not open. First cohort planned 2028.
