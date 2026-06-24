## 2024-06-17 - Added ARIA labels to header icons
**Learning:** Icon-only navigation actions (menu, dark mode) in Hugo templates often miss accessible names. Adding `aria-label` to the `<input type="checkbox">` used for CSS-only menu toggles makes the screen-reader experience functional without breaking the CSS-driven UI.
**Action:** When updating Hugo themes, ensure any CSS-only state toggles (`<input type="checkbox">`) or anchor links masquerading as buttons (`href="#"`) have explicit `aria-label` and `role="button"` attributes.
