# AXON Garments — React site

Marketing site for AXON Garments (UAE uniform manufacturer, est. 1998), built with **Vite + React 18**.
Styling uses Tailwind (via CDN, configured in `index.html`) plus a few custom rules in `src/index.css`.

## Run locally

```bash
npm install
npm run dev      # starts the dev server on http://localhost:5180
```

## Build for production

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build
```

## Structure

```
index.html                  # Tailwind CDN + theme config + #root
public/assets/img/          # logo + 11 service photos
src/
  main.jsx                  # React entry
  App.jsx                   # page assembly
  index.css                 # custom CSS (marquee, reveal, cards…)
  data.js                   # contact details + the 11 service categories
  components/
    UtilityBar, Nav, Hero, Stats, Sectors, CustomDesign,
    Marquee, Specialized, CapabilityIndex, About, CTA,
    Footer, WhatsAppButton, Reveal
```

> Note: Tailwind is loaded from its CDN for simplicity. For a production deployment you'd
> typically install `tailwindcss` and compile it; the markup stays identical.
