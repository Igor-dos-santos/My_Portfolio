# Igor Alves Dos Santos: professional portfolio

Live site: https://igorads.com/

This folder contains the static portfolio source. The repository root retains the earlier React project. Recruiter-focused changes are proposed on `feature/recruiter-experience-refresh`; production requires owner approval.

## Preview

From this directory run `python3 -m http.server 8000` and open http://localhost:8000. No installation is required.

## Source

`index.html` contains all content and metadata. `style.css` preserves light/dark themes and responsive layouts. `app.js` handles navigation, filters, theme preference and the decorative globe. Public images, icons and the existing CV are under `assets`.

## Checks and production output

Requires Python 3 and Node.js, with no third-party packages.

- `npm run lint`: JavaScript syntax and lightweight HTML/CSS/content integrity checks.
- `npm test`: seven release checks, including unchanged CV and filter membership.
- `npm run build`: validated static files in `build/`.

Serve the contents of `build/` at a static host's root. GitHub does not automatically publish this folder to the current Sites project. Do not publish or replace the CV without the owner's approval.

See [the implementation and QA record](docs/RECRUITER_REFRESH.md) for requirements, confirmed issues, screenshots, limits and release instructions.
