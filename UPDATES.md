# Portfolio Updates

## 1. Responsive CSS (styles/index.css)

Moved all inline styles from `index.html` into `index.css` for cleaner separation of concerns.

### Hero Section
- Uses `flexbox` with `flex-wrap` so text and video stack vertically on smaller screens
- Video scales with `width: 100%` instead of a fixed `height: 600px`

### Breakpoints Added
- **Tablet (≤900px)** — logo and nav shift inward, font sizes reduce, hero stacks vertically
- **Mobile (≤600px)** — nav becomes `display: block` with each link on its own line, all items centered

---

## 2. Navigation Responsive (styles/index.css)

- **Desktop** — nav stays `position: absolute` / `display: inline-block` on the right
- **Mobile (≤600px)** — nav switches to `display: block`, each link is `display: block` and centered with `text-align: center`
- Logo and nav are centered on mobile using `align-items: center` on `.navigation`

---

## 3. Pause / Play Button (index.html + scripts/index.js + styles/index.css)

Added a pause/play toggle button centered at the bottom of the hero section.

### Behavior
- **Pause** — stops the typing animation and pauses the video
- **Play** — resumes the typing animation and plays the video
- Icon switches between `fa-pause` and `fa-play` accordingly

### Styling
- Frosted glass look using `backdrop-filter: blur` and semi-transparent background
- Scales up slightly on hover
- Positioned with `position: absolute`, `bottom: 30px`, centered via `left: 50%` + `transform: translateX(-50%)`

---

## 4. Fixed Navigation on Scroll (styles/index.css)

- Changed `.navigation` from `position: relative` to `position: fixed`
- Added `top: 0`, `left: 0`, and `z-index: 1000` so the header always stays on top while scrolling
