# AI for Good Challenge

This is a lightweight, GitHub Pages-ready event site for the University at Albany AI for Good Challenge.

## Local preview

From this folder, run a local static server and open the address it prints. The page is plain HTML, CSS, and JavaScript, so no database or build step is required for the first preview.

## Content updates

For routine copy changes, use `CONTENT_TEMPLATE.md` and follow `CONTENT_UPDATE_GUIDE.md`. The template is the handoff format for teammates who do not need GitHub access.

For design or behavior changes:

- Edit page structure and copy in `index.html`.
- Edit colors, spacing, and responsive behavior in `assets/css/style.css`.
- Edit the countdown date in the `data-date` attribute in `index.html`.
- Edit schedule tabs and countdown behavior in `assets/js/site.js`.

## Publishing

This is a plain HTML, CSS, and JavaScript site with no build step or database. GitHub Pages can publish the repository root directly. Relative asset paths are used so the site works at a project URL such as `/ai-for-good-challenge/`.
