Purpose
-------
This file gives short, actionable guidance for AI coding agents working on the Scoresheet static site.

Quick context
-------------
- Simple static single-page site. Primary files: [index.html](index.html) and [style.css](style.css).
- The page is a scoresheet table (see `<table>` in index.html). There is currently no JavaScript or build system.

Big picture (what to know first)
--------------------------------
- Single responsibility: HTML holds structure and sample data; CSS in `style.css` controls visuals.
- Table structure: header columns are defined in `<thead>` and per-player rows live in `<tbody>`.
- Images are referenced from the repository root (see the `img` tag in `index.html`). Verify paths when changing assets.

Developer workflows (how to test & iterate)
------------------------------------------
- No build step. Open `index.html` in a browser or use the VS Code Live Server extension.
- On macOS: `open index.html` opens the file in the default browser.
- Edit `style.css` and refresh the browser to see styling changes.

Project-specific conventions and patterns
----------------------------------------
- Keep data rows inside `<tbody>` and do not modify `<thead>` column order unless you update dependent code or documentation.
- Prefer adding small external scripts (e.g., `scripts.js`) rather than large inline scripts if you introduce behavior — keep structure and behavior separate.
- Use semantic markup (table caption, scope attributes on `<th>`) as used in `index.html`.

Integration points & gotchas
----------------------------
- No backend or npm scripts — adding them is a design change. Note any PR that introduces tooling.
- Image path in `index.html` points to `/Screenshot_2025-12-30_at_6.59.45_PM-removebg-preview.png` — confirm asset exists or update path to a repo-relative file.

Editing examples (copyable)
--------------------------
- Change the page title in `index.html`:

```html
<title>Scoresheet</title>
```

- Add a new player row (insert in `<tbody>`):

```html
<tr>
  <td>New Player</td>
  <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
  <td>0</td>
</tr>
```

When merging or updating this file
---------------------------------
- If an existing `.github/copilot-instructions.md` exists, preserve any extra project history or offline conventions already present.

What agents should avoid
------------------------
- Do not add a complex toolchain without an explicit request. This repo is intentionally simple.

If something is missing
-----------------------
- Ask: should we add dynamic scoring, persistent storage, or a build tool? Provide trade-offs and a minimal plan.

Next step
---------
- After edits, tell the maintainer what you changed and why (small PR descriptions are helpful).

Feedback
--------
Please tell me if you want this file to include a development checklist (example commands, testing steps) or conventions for adding JavaScript.
