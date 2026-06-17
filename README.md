
# My Landing Page

This is a simple landing page I built with React and Vite. Nothing fancy - just a Header, Footer, and some Service Cards with nice styling.

## Quick Start

```bash
# Install and run
npm install
npm run dev
```

That's it! Opens at `http://localhost:5173`

## What's Inside?

- **Header** - Welcome message at the top
- **Card Components** - Shows Web Development and UI/UX Design services
- **Footer** - Links and copyright info
- **Responsive Design** - Works on mobile too
- **No Hooks** - Just props, keeps it simple

## Files

- `src/App.jsx` - Main page
- `src/App.css` - Styling
- `src/Header.jsx`, `src/Footer.jsx`, `src/Card.jsx` - Components
- `public/` - Put your images here

## Customize

**Change the title:**
```jsx
<Header 
  title="Your Title" 
  subtitle="Your Subtitle"
/>
```

**Add more cards:**
```jsx
<Card 
  title="Service" 
  content="Description" 
  image="/image.jpg" 
/>
```

**Add images:**
1. Drop files in `public/` folder
2. Use `/filename.jpg` in Card component

## Build & Deploy

```bash
npm run build    # Create production version
```

Deploy to Vercel, Netlify, or GitHub Pages.

---

Made with React ⚛️ + Vite ⚡
