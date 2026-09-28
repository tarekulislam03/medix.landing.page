Restyle the DESKTOP version of the existing page into a 1990s-style static business website, with tabbed page navigation instead of one long scrolling page. Mobile must stay exactly as it is.

SCOPE (critical):
- Put ALL visual changes inside one desktop media query (@media (min-width: 1024px), or the site's existing desktop breakpoint). Do not edit base or mobile styles, the mobile menu, or the mobile layout. Override CSS variables only inside that media query (for example, set the gradient variables to flat solid colors).
- Keep all content, copy, links, images and functionality exactly as they are. No new content or claims.
- The page at 375px width must render identically to before: everything stays on one long page and the nav keeps its current scroll behavior.

DESKTOP TAB NAVIGATION (the main change):
- On desktop, the nav items act as page tabs. Only the active tab's sections are visible; all other sections are hidden with display:none. Keep every section in the DOM (do not unmount them) and drive the hiding from an attribute on the app root, scoped inside the desktop media query, so mobile shows everything as before.
- Tab-to-section mapping (use the existing sections only):
  - Home: hero, key facts strip, "What Problem Medix Solves"
  - Features: "All-in-One Pharmacy Management System"
  - Modules: "Module & Feature Matrix"
  - Pricing: the Pricing section
  - Specs: "Technical Specifications & System Details"
  - About: "About Medix"
  - Contact: contact details already in the footer (phone, email) plus the FAQ
  - Dealers: whatever content the Dealers link currently points to
  If a nav item has no matching section, use the closest existing content. Do not invent any.
- Clicking a tab on desktop: switch the visible sections, update the URL hash using the existing section anchor ids (so /#pricing opens the Pricing tab), scroll to the top instantly (no smooth scroll), update the breadcrumb (Home > Pricing) and set document.title (e.g. "Pricing - Medix"). Browser back/forward must work. On page load, resolve the hash to the right tab; default is Home.
- Remove scroll-spy and any dimmed or highlighted-on-scroll nav states on desktop. All nav links are the same color; only the active tab looks different.
- Every in-page link or button that points to a section (hero "What Medix Solves", "Book a Demo" -> Contact tab, "Discuss on Call", footer links, breadcrumb) must switch to the tab containing that section on desktop. On mobile they keep their current behavior.
- Detect desktop with matchMedia using the same breakpoint, and handle a window resize across the breakpoint without errors.
- Header, nav and footer appear on every tab. Each tab starts with a page title (Times New Roman bold 22px) and the breadcrumb, followed by the content. Give the content area a min-height of about 420px so short tabs do not collapse.
- Tab look: the nav is a row of classic tabs. Inactive tabs are dark green (#1F3D2F) with white text and a 2px outset border. The active tab is #E4EAE6 with bold dark green text, visually connected to the content panel below it (no bottom border, same background). "Book a Demo" stays at the right end as a brass button.

90s LOOK (desktop only):
- Layout: fixed 960px centered container, white, with a 1px solid #808080 border, on the existing #F2F3F1 page background. Separate sections with a classic engraved rule (1px #808080 line with a 1px #fff line below it). Tight spacing (8-10px).
- Static: header position static (not fixed or sticky); remove any top padding or margin that offsets a fixed header. No transitions, animations, fade-ins, hover lifts or smooth scroll. Hover only changes link color/underline or a button's pressed state.
- No box-shadow, blur, gradients or border-radius anywhere. Flat fills only.
- 3D bevels using borders only: raised = 2px outset, sunken = 2px inset, edge colors #fff and #808080. Buttons are raised and sunken on :active. Plan boxes, image frames, tables and FAQ items use these bevels. Panel title strips are flat #1F3D2F with white bold text and a 2px outset border.
- Type: Verdana 12px body (line-height 1.4). Headings in Times New Roman bold (section titles 16px). No other fonts.
- Links on light backgrounds: #0000EE underlined, visited #551A8B. Links on dark green: white underlined.
- Colors: keep the existing palette (dark green #1F3D2F, brass #8F5F1A with white text, tint #E4EAE6, text #222). Bevel edges are the only neutral additions.
- Header: small utility bar with pipe-separated links, then the logo row, then the tab row.
- Tables: 1px #808080 borders on every cell, header row #E4EAE6 with bold text, zebra rows, 4-6px cell padding.
- "What Problem Medix Solves": render the three items as a single-row, 3-column bordered table with the same content.
- FAQ: 960px wide like the other sections, one title only (remove the duplicate small uppercase label above it), square [+] / [-] text markers instead of chevrons, same accordion behavior.
- Footer: dense multi-column sitemap, 11px text, pipe-separated bottom row.
- Keep the strict rules: no glassmorphism, glow, emoji icons, trendy fonts, filler marketing phrases or invented stats.

DESKTOP BUGS TO FIX:
1. Hero (Home tab): make it two columns, top-aligned. Text on the left, image on the right at about 40% width in a 2px inset frame, 260px tall (object-fit: cover). No empty space under the text.
2. "All-in-One Pharmacy Management System" (Features tab): the dashboard image overflows and is clipped at the right edge. Text left (50%), image right (50%), max-width 100%, inset frame.
3. The fixed header renders mid-page in full-page captures and leaves an empty band above the hero. Make it static.
4. The floating round call/LinkedIn/WhatsApp buttons and the "Join WhatsApp group for job opportunities" popup overlap the footer links. On desktop, hide them and show the same three actions as plain text links in the footer ("Call | LinkedIn | Join our WhatsApp group for job opportunities"). Mobile keeps the floating buttons.
5. Constrain anything that overflows the 960px container.

No gimmicks: no marquee, blinking text, visitor counters, "under construction" or "best viewed in" notes, clip art or animated GIFs. It should feel 90s but still read as a professional business.

On desktop, do not override fonts: remove the Verdana and Times New Roman rules from the desktop media query, and use the same font-family (var(--font-body) and any heading font mobile uses) for all text, including headings, tabs, tables and buttons.
Keep the font sizes, weights and line-height identical to the mobile view, and change nothing else in the prompt.


Output the complete updated code.
