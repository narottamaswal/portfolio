# Portfolio  — Angular 18

One-page portfolio driven by a JSON API. Each section is a standalone component with its own `.html`, `.scss`, and `.ts` file.

## Quick Start

```bash
npm install
npm start
```

Opens at `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── app.component.{ts,html,scss}       root component
│   ├── app.config.ts                       Angular providers
│   ├── models/
│   │   └── portfolio.model.ts              TypeScript interfaces
│   ├── services/
│   │   └── portfolio.service.ts            HTTP data fetching
│   ├── directives/
│   │   └── scroll-reveal.directive.ts      IntersectionObserver animation
│   └── sections/
│       ├── navbar/                         fixed nav bar
│       ├── intro/                          hero: name, title, summary, city image
│       ├── skills/                         skill category grid
│       ├── experience/                     alternating left/right timeline
│       ├── education/                      education cards
│       ├── projects/                       3x2 project card grid
│       ├── achievements/                   achievement list
│       ├── recommendations/                LinkedIn-style recommendation cards
│       ├── notes/                          writing and notes list
│       └── contact/                        contact form + info + footer
├── assets/
│   └── data/portfolio.json                 your data (swap with real API)
└── styles.scss                             global CSS variables and shared styles
```

## Connecting a Real API

Open `src/app/services/portfolio.service.ts` and change:

```typescript
private apiUrl = 'assets/data/portfolio.json';
```

to your endpoint:

```typescript
private apiUrl = 'https://your-api.com/portfolio';
```

The response must match the shape in `src/app/models/portfolio.model.ts`.

## Adding a Note / Blog Post

Add an entry to the `notes` array in `portfolio.json`:

```json
{
  "title": "Your post title",
  "date": "Mar 2026",
  "summary": "A sentence or two about what you wrote.",
  "tags": ["tag1", "tag2"],
  "link": "https://your-blog.com/post"   // optional
}
```

## Build

```bash
npm run build
# Output: dist/portfolio/
```
