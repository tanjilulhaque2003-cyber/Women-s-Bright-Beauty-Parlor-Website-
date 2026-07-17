# Women's Bright Beauty Parlor and Gym

Website for **Women's Bright Beauty Parlor and Gym** — a women-only beauty parlor and gym
in Shewrapara, Mirpur, Dhaka. *Where beauty meets care.*

A single-page site: services and prices, bridal packages, the ladies' gym, a gallery, and
one-tap WhatsApp / call booking.

## Run it locally

It's plain HTML, CSS and JavaScript — no build step. Because it loads a stylesheet and
images, open it through a local server rather than double-clicking the file:

```bash
# from the project folder
python -m http.server 5173
```

Then visit <http://localhost:5173>. (Any static server works.)

## Structure

```
index.html          the whole page
css/styles.css      design system + styling + animations
js/main.js          menu, service filter, scroll reveals (vanilla JS, no dependencies)
assets/logo.svg     logo
assets/img/         photos (+ CREDITS.md documenting each one)
```

## Notes

- **No frameworks by design.** Customers are on mobile data and budget phones, so animations
  are CSS transforms + IntersectionObserver, not a heavy JS library. Everything still works
  with JavaScript disabled — content is visible by default.
- **Photos are temporary licensed stock** (Unsplash). See [`assets/img/CREDITS.md`](assets/img/CREDITS.md).
  Replace them with real photos of the parlor and its work — the gym photo especially.

## To do

- [ ] Real "About" text (current copy is a placeholder draft)
- [ ] Confirm bridal package list (two pairs of entries looked like duplicates and were merged)
- [ ] Full Facebook page URL (the current link looks truncated)
- [ ] Replace stock photos with real ones
- [ ] Add real client testimonials
