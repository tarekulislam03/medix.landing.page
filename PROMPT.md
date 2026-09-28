Simplify ONLY the "Software Pricing & Plan Comparison" section so a pharmacy owner can understand it in 10 seconds. Keep the existing old-school enterprise style (square boxes, 1px borders, Verdana/Tahoma, no soft shadows, no gradients other than the existing subtle bevel), but give this section slightly more padding (12-14px inside boxes) so it breathes. Keep the current prices exactly as defined in the code; do not hardcode new ones. Do not add any new claims.

REMOVE: the "Included in both plans" box, the "Feature Differences" 3-column table, the separate summary strip, and the duplicate footnote.

NEW STRUCTURE (top to bottom):
1. Section title strip (the only dark green strip in this section): "Pricing"
2. Headline line (bold, 16px): "Pay once. Use it for life."
   Sub line: "One-time lifetime license. No monthly fees."
3. One-sentence difference line in a light tinted box (#E4EAE6): "Both plans give you the full software. Infinity also includes setup: we load your stock and train your staff."
4. Two plan boxes side by side on desktop, stacked on mobile. Each box has a light tint header with the plan name, then:
   - Price (large), with "One-time | Lifetime license" directly underneath
   - One line: Prime = "You set it up yourself." Infinity = "We set it up for you."
   - 3-4 short check-mark lines (plain text ✓ only):
     Prime: Full ERP & GST billing | 1 year free support | Stock entered by you, with user manual guide
     Infinity: Full ERP & GST billing | Full initial stock loaded by Medix | Dedicated staff onboarding | 1 year free priority support
   - One full-width "Select" button. Infinity has a small rectangular "Recommended" label and the filled brass button; Prime has an outlined button.
5. One small line below: "After Year 1, support renewal (AMC) is optional at ₹1,999/year. Your license keeps working without it."
6. A collapsed <details> element titled "Compare 3-year cost with subscription software". Inside: one compact table (Year | Prime | Infinity | Typical subscription software (illustrative)) with totals calculated from the price constants in the code, and the subscription figure as a single editable constant. No square brackets.

Keep everything responsive and functional. Output the complete updated code.
