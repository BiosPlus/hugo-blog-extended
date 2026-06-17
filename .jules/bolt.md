## 2026-06-17 - [Optimize Go-To-Top button scroll event handling]
**Learning:** Adding a throttle with `requestAnimationFrame` and `passive: true` to the `window.addEventListener('scroll')` handles the massive amount of events that scroll dispatch to avoid blocking the main thread. It's a common performance pattern for handling frequent events like scrolling.
**Action:** Always prefer throttled scroll event listeners using `requestAnimationFrame` over unthrottled ones (especially avoiding `window.onscroll`) to maintain 60 FPS scrolling and low main thread contention.
