# Recruiter experience refresh: review and release record

Status: proposed changes only. Production has not been changed. No CV replacement is authorised or included.

## Initial assessment

The production project is a dependency-free static HTML/CSS/JavaScript site, with `dist` declared in the Sites hosting manifest. Its inspected source baseline is `92280a55f79b89b90f433f2f78d42b21429f18fb`. GitHub repository `Igor-dos-santos/My_Portfolio`, default branch `portfolio`, holds an older React project at the root and a static copy in `current-site`. The reviewed GitHub base is `94a411c88303a161e42f1c9afb04ba518c75f398`. No `.github/workflows` directory was found. A GitHub merge does not itself establish a Sites deployment.

The implementation source is the full Google Doc, “IgorADS.com | Recruiter-Focused Website Update Playbook | October 2026”, read on 31 October 2026. Existing branding, hero headline, photography, page order, themes, native expandable cards and timeline are retained. All professional wording is present in static HTML for search engines and no-JavaScript readers.

## Confirmed issues

| Severity | Evidence | Resolution |
| --- | --- | --- |
| High, content | Quality card incorrectly linked 7% to 200+ analysts | Correct attribution; programme growth described separately |
| High, credibility | 70% handling-time claim lacks baseline, endpoint, workflow and period in the specification | Use approved 60+ reviewers alternative; suppress 70% in the current role and case study |
| Medium, positioning | Hero and metadata led with AI/technical operations | Operations & Service Delivery positioning |
| Medium, layout | Browser measured 350px scroll width against a 305px narrow content viewport; transformed orbital rings exceeded the page edge | Contain decorative overflow inside the portrait area |
| Medium, accessibility | Some navigation and button targets were shorter than 44px in the source | Minimum 44px control height |
| Medium, discoverability | No canonical, Open Graph, structured Person data, robots or sitemap in inspected source | Add accurate metadata and discovery files |
| Medium, scope clarity | Technical tools did not distinguish professional use from academic knowledge | Explicit professional and academic groups; remove unverified AWS/MySQL/CI/CD claims in scoped copy |

No blank-case-study bug was reproduced. All four original details controls contained text and keyboard expansion worked. Existing filters worked for their original single categories. The new multi-category leadership entry now appears in both relevant filters, as an intentional content change rather than a claimed original bug.

## Requirements mapped to changes

| Playbook | Implemented location and decision |
| --- | --- |
| 3A and hero | `index.html`: approved subtitle, preserved H1 and introductory sentence, added immediately visible leadership scope |
| 3B | `app.js` and initial `#focus-word`: operations leadership and automation, followed by service delivery, technical operations and people development |
| 4 | Four Impact cards: 7%, 60+, approximately 1,000 cases, three developed leaders |
| 5 | All four original titles and teasers retained/replaced as specified; expanded Challenge / My contribution / Result; editorial instruction removed from public prose |
| 6 | All five roles updated, employer/client distinguished, concurrent Mercor retained; title then employer then dates; shared accountability wording |
| 7 | Original three capability headings retained; professional tools separated from academic React/Python/JavaScript; Power BI omitted pending proficiency confirmation |
| 8 | Native details preserved for built-in keyboard and no-JavaScript support; stable IDs, aria-controls and synchronised aria-expanded added; responsive overflow and touch targets corrected |
| 9 | Approved closing invitation; email, LinkedIn and existing CV URLs retained |
| SEO | Title/description, canonical, OG image/alt/locale, Twitter card, accurate Person schema, robots and sitemap |
| Personal scope | Biography, travel collection, language section and unrelated creative content compared byte-for-byte with baseline and unchanged |
| CV | Existing PDF hash locked in release checks; no CV selected, generated or substituted |

The existing animated favicon declaration is removed in favour of the current static branded PNG/ICO and Apple icon, following the playbook's motion guidance. Artwork files are preserved. The decorative globe and existing reduced-motion CSS remain.

## Files

- `index.html`: professional content, metadata, semantics, static icon declarations.
- `app.js`: explicit multi-category filtering, focus-word content, details state synchronisation.
- `style.css`: responsive containment, wrapping, touch targets, small capability subheadings.
- `robots.txt`, `sitemap.xml`: indexing/discovery.
- `tools/check.py`: seven dependency-free release checks.
- `tools/build.py`: checked static production packaging.
- `package.json`: lint/test/build entry points, no dependencies.
- `README.md`: current source, preview and release guidance.
- `docs/RECRUITER_REFRESH.md`, `docs/screenshots/`: review evidence.
- Current static favicon assets are synchronised from the later Sites baseline where they differ from GitHub. Existing CV and portrait are unchanged.

## Validation

- `npm run lint`: passed. Runs JavaScript syntax validation plus lightweight HTML/content/CSS integrity checks. This is not a full ESLint/Stylelint suite.
- `npm test`: seven checks passed: internal anchors and local assets, semantic/content assertions, category membership, unchanged CV and its three references, metadata/schema, JavaScript syntax, CSS delimiter and editorial checks.
- `npm run build`: passed. Creates `build` with checked HTML/CSS/JS, icons, discovery files and assets. Static site requires no transpilation. No TypeScript source exists, so type-checking is not applicable.
- `git diff --check`: passed.
- Chrome: all four case studies opened with Enter and closed with Space. Each rendered three populated subheadings. Experience views showed 5 / 3 / 3 roles. Search dialogue narrowed to Experience. Dark/light switch updated the document theme.
- Responsive review: same-origin iframe viewports at exactly 320, 375, 390, 768, 1024 and 1440 CSS pixels. Each had equal client and scroll widths after the fix. These are browser-rendered viewport checks, not device-lab testing.
- Main text/accent colours on card backgrounds: minimum calculated contrast 8.15:1 in dark mode and 5.68:1 in light mode. This does not constitute an automated audit of every gradient pixel or browser state.
- Existing PDF opened in the browser preview; all local asset references exist. PDF bytes remain identical. No final approved replacement was supplied.
- Captured console messages were from the browser extension; no application error was observed in the sampled logs.
- No new frontend library, remote font, tracking or analytics was added. Hero image keeps its declared dimensions and high fetch priority.
- Environment emits an npm `http-proxy` configuration warning, unrelated to site source. Checks still exited successfully.

Limits: no Lighthouse score or real Safari/Firefox/device test is claimed. Reduced-motion handling was inspected in CSS/JS, not OS-emulated. External LinkedIn/YouTube/Instagram account destinations were preserved; availability in each user's session is not guaranteed. Mobile quick-navigation interaction inside the review iframe was inconclusive; desktop keyboard navigation and mobile layout were verified. Production response headers, caching, social-preview fetches and live post-release behaviour remain to be verified after approved deployment.

## Factual review

Conservative fallbacks are applied, so no fabricated answer is needed to review the branch. Before public release please confirm:

1. Workflow, baseline/endpoint and period behind 70% AHT reduction if it should return. Currently omitted.
2. Which reporting tools and measured weekly time savings support “several hours”; this phrase is retained from the approved specification without a new numerical claim.
3. Formal authority over delivery, capacity and staffing. Public text uses coordinating/overseeing rather than unqualified ownership.
4. Actual professional examples of MySQL, CI/CD, AWS and LLM code/hallucination assessment. Unverified claims are omitted in the scoped sections.
5. Timeline uses the document's September 2021 transition and Acting Team Lead designation. Confirm those dates/titles against the final approved CV.
6. Final CV is still awaited. Existing asset is preserved pending a separately supplied approved document.

## Release plan and rollback

Review the feature branch and pull request. Do not merge or deploy without owner approval. After approval, synchronise the accepted static files to the same Sites project, package the exact pushed source and use the existing explicit Sites save/deploy flow. Verify domain, metadata, anchors, interactions, asset HTTP status/content type and the unchanged/approved CV. Record the deployed source SHA and successful deployment ID. Keep the existing production version as rollback; do not force-push or bypass branch protection.

## Screenshots

Before and after desktop and 320px mobile screenshots, plus updated light theme, are stored in `screenshots/`. Mobile captures show the constrained viewport inside the review harness; the grey surround is test tooling, not website design.
