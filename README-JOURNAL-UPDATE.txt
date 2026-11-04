COLOOON WEBSITE — JOURNAL UPDATE

What changed
- The original product landing page remains the homepage at /.
- Added Journal at /journal/ with a card grid and individual article pages.
- Added Chinese pages under /zh/ (product, Journal, Privacy, Support).
- The homepage and Journal detect a Chinese browser language on the first visit and open the matching /zh/ page.
- Visitors can manually switch EN / 中文. Their choice is stored locally in the browser only.
- Existing English Privacy and Support URLs remain available at /privacy/ and /support/.
- No analytics, tracking pixels, remote telemetry, CMS, or server-side data collection were added.

How to add a Journal entry
1. Duplicate one article folder under /journal/ (for example /journal/the-journal-begins-here/).
2. Change the article title, date/category, summary and body in its index.html.
3. Add a matching card to /journal/index.html.
4. Repeat the translated article and card in /zh/journal/ if publishing a Chinese version.
5. Keep image paths root-relative (for example /read-immersive.png).

Design notes
- The original product page's black / white / yellow design and product demonstration sections are preserved.
- Journal cards use a restrained Eagle-inspired grid, with square corners, thin borders and no secondary category navigation or search bar.
- The first-screen eyebrow and final call-to-action copy have been refined to avoid repeating the same sentence.

Deployment
- Upload the contents of this ZIP to the existing colooon-website GitHub repository, replacing the current site files.
- Deploy through the existing Vercel project. Do not create a new project or change the domain settings.
