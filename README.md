# Deumatic Website V2

Production-ready Next.js website for Deumatic, a digital product and technology partner.

## Positioning

The site presents Deumatic as one connected team across product strategy, experience design, software engineering, mobile applications, AI automation, cloud platforms and digital growth.

The dedicated AI and ML Engineering page groups thirteen evidence-based capabilities across discovery, intelligent product development, deployment, optimization, evaluation and technical advisory.

No location-specific positioning or unsupported business metrics are published. SupportOS is
presented as a working Deumatic MVP with real interface captures, while Camsort AI is presented as a
team-built prototype with explicit context.

## Stack

- Next.js 16.3.3 with App Router
- React 19.2.4
- TypeScript strict mode
- Server Components by default
- CSS design tokens and responsive layouts
- Static metadata routes for robots, sitemap and manifest
- Vercel-ready production build

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run check
```

The visual QA script expects the production server at `http://127.0.0.1:4310`:

```bash
npm run build
npm run start -- --hostname 127.0.0.1 -p 4310
node scripts/visual-qa.mjs
```

## Routes

- `/`
- `/services`
- `/services/ai-ml-engineering`
- `/work`
- `/about`
- `/contact`
- `/privacy`
- `/robots.txt`
- `/sitemap.xml`

## Contact workflow

The form opens the visitor's email application with their entered project details. The site does not store form submissions or require a third-party form secret.

## Brand assets

The approved Deumatic logo is integrated in the header, footer, favicon and app icon. Editable source candidates and production exports are organized under `branding/`.

## Selected work

- SupportOS: human-controlled AI support operations, shown with real demo interface captures.
- Camsort AI: a team-built multimodal surveillance prioritization prototype.

Published case studies avoid invented client names, outcomes, adoption claims, and performance
metrics.

## Deployment

The app is structured for Vercel. Add the project, set `deumatic.com` as the production domain, and verify the generated sitemap and social preview after deployment.
