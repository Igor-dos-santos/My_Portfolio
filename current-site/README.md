# Igor Alves Dos Santos: current portfolio

Live site: https://igorads.com/

This directory contains the complete current static website, including the latest story, travel collection, full-name portrait label, IA brand icon, browser favicons, portrait and downloadable CV. The repository root retains the earlier React portfolio.

## Preview locally

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. No installation or build step is needed.

## Source guide

- `index.html`: content, semantic structure and icon declarations.
- `style.css`: responsive layout, dark/light themes and travel destination chips.
- `app.js`: theme preference, navigation, experience filters, email copy and animated globe.
- `assets/`: public portrait, CV, original brand icon and PNG icon sizes.
- `favicon.ico`: multi-resolution browser icon (16 to 256 pixels).

The browser uses 16px/32px PNG icons or the ICO fallback. Apple bookmarks use the 180px icon. Larger 192px/512px PNGs are included for reuse. The original IA brand artwork is preserved in `assets/igor-brand-icon.png`.

## Travel collection

All 38 user-supplied destinations are grouped by region inside native HTML details. Copy uses countries and destinations because England, Scotland, Wales and Northern Ireland are listed separately within the United Kingdom. Turkey appears under Europe and Asia. Text chips avoid platform-dependent emoji flags.

## Editing and validation

Edit text in `index.html` and styling in `style.css`. Run `node --check app.js` after script edits. Verify relative asset paths and destination counts before publishing. The source mirrors the Sites publication with commit cc57e71ff89718909ec875e13a54fef117e3c27a.

## Deployment

Serve this directory as the root on a static host. Production is currently published through Sites at https://igorads.com/. Committing to GitHub does not automatically publish to Sites. Never commit credentials or private files.
