# Coup

iMessage Automation for Teams and AI Workflows.

Send iMessages directly from your phone number, running securely on your Mac or Mac Mini.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router and Turbopack
- **Language:** [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with CSS-based configuration
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Package Manager:** [pnpm](https://pnpm.io/) 9.x
- **React Compiler:** Enabled for optimized performance

## Features

- Responsive landing page with hero section
- Animated cloud layers and bird illustrations
- Flying bird animations using Framer Motion
- Mobile-responsive navigation with hamburger menu
- Accessible components with ARIA labels and skip-to-content link
- SEO optimized with Open Graph and Twitter Card metadata
- Security headers configured (X-Frame-Options, CSP, etc.)
- Custom Button component with hover animations

## Prerequisites

- Node.js 20.9.0 or higher (see `.nvmrc`)
- pnpm 9.x

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadShahiryar/coup_web
   cd coup_web
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your configuration.

4. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `pnpm dev`        | Start development server        |
| `pnpm build`      | Create production build         |
| `pnpm start`      | Start production server         |
| `pnpm lint`       | Run ESLint                      |
| `pnpm lint:fix`   | Fix ESLint errors automatically |
| `pnpm type-check` | Run TypeScript type checking    |

## Project Structure

```
coup_web/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout with metadata & header
│   ├── page.tsx                # Home page
│   ├── error.tsx               # Error boundary (client component)
│   ├── loading.tsx             # Loading UI with spinner
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Global styles & Tailwind theme
│   ├── icon.svg                # App icon
│   ├── apple-icon.svg          # Apple touch icon
│   └── favicon.svg             # Favicon
│
├── components/                 # React components
│   ├── index.ts                # Barrel export for all components
│   │
│   ├── common/                 # Shared components
│   │   ├── index.ts
│   │   └── logo.tsx            # Coup logo SVG component
│   │
│   ├── icons/                  # Icon components
│   │   ├── index.ts
│   │   └── apple-icon.tsx      # Apple icon for download button
│   │
│   ├── landing/                # Landing page components
│   │   ├── index.ts
│   │   ├── hero-section.tsx    # Main hero with headline & CTAs
│   │   ├── message-badge.tsx   # "#1 iMessage Automation Tool" badge
│   │   ├── cloud-layer.tsx     # Animated cloud SVG layers
│   │   ├── bird-illustration.tsx   # Static bird illustrations
│   │   └── flying-bird-animation.tsx # Animated flying birds
│   │
│   ├── layout/                 # Layout components
│   │   ├── index.ts
│   │   └── header.tsx          # Navigation header with mobile menu
│   │
│   └── ui/                     # UI primitives
│       ├── index.ts
│       └── button.tsx          # Button with variants & animations
│
├── config/                     # App configuration
│   ├── index.ts                # Barrel export
│   ├── navigation.ts           # Navigation items (NAV_ITEMS)
│   └── site.ts                 # Site metadata (siteConfig)
│
├── hooks/                      # Custom React hooks
│   ├── index.ts
│   └── use-window-size.ts      # Window dimensions hook
│
├── lib/                        # Utility functions
│   ├── index.ts
│   └── utils.ts                # cn() - Tailwind class merger
│
├── types/                      # TypeScript type definitions
│   └── index.ts                # NavItem interface
│
├── public/                     # Static assets
│   ├── favicon.svg
│   ├── icon.svg
│   └── apple-icon.svg
│
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── .nvmrc                      # Node version (20.9.0)
├── eslint.config.mjs           # ESLint flat config
├── global.d.ts                 # Global type declarations
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Dependencies & scripts
├── pnpm-lock.yaml              # Lock file
├── postcss.config.mjs          # PostCSS with Tailwind
├── proxy.ts                    # Security headers utility
└── tsconfig.json               # TypeScript configuration
```

## Component Overview

### UI Components

#### `Button`

Reusable button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="lg" animated={true}>
  Click me
</Button>;
```

| Prop       | Type                                    | Default     | Description            |
| ---------- | --------------------------------------- | ----------- | ---------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button style variant   |
| `size`     | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | Button size            |
| `animated` | `boolean`                               | `true`      | Enable hover animation |

### Landing Components

| Component             | Description                                 |
| --------------------- | ------------------------------------------- |
| `HeroSection`         | Main headline, subheadline, and CTA buttons |
| `MessageBadge`        | Badge showing "#1 iMessage Automation Tool" |
| `CloudLayer`          | Four-layer animated cloud SVG background    |
| `BirdIllustration`    | Static bird decorations with chat bubbles   |
| `FlyingBirdAnimation` | Two animated birds flying across the screen |

### Layout Components

| Component | Description                                     |
| --------- | ----------------------------------------------- |
| `Header`  | Responsive navigation with logo, nav items, CTA |
| `Logo`    | Coup brand logo as SVG component                |

## Styling

This project uses **Tailwind CSS 4** with CSS-based configuration in `globals.css`:

### CSS Variables (Design Tokens)

```css
:root {
  --primary: #007aff;
  --primary-hover: #0056b3;
  --background: #e5f2fe;
  --foreground: #1d2026;
  --muted-foreground: #475569;
}
```

### Custom Animations

| Class                | Description                      |
| -------------------- | -------------------------------- |
| `.animate-rise`      | Rise up animation for clouds     |
| `.animate-rise-bird` | Rise animation for bird elements |

## Code Style

| Type       | Convention           | Example            |
| ---------- | -------------------- | ------------------ |
| Files      | kebab-case           | `hero-section.tsx` |
| Components | PascalCase           | `HeroSection`      |
| Functions  | camelCase            | `toggleMenu`       |
| Constants  | SCREAMING_SNAKE_CASE | `NAV_ITEMS`        |
| Types      | PascalCase           | `NavItem`          |
| CSS vars   | kebab-case           | `--primary-hover`  |

## Environment Variables

| Variable              | Description    | Default                 |
| --------------------- | -------------- | ----------------------- |
| `NEXT_PUBLIC_APP_URL` | Public app URL | `http://localhost:3000` |

See `.env.example` for all available variables.

## Security

The project includes security configurations:

### Next.js Config Headers

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`

### Additional Security

- `poweredByHeader: false` - Hides X-Powered-By header
- React Strict Mode enabled
- TypeScript strict mode enabled

## Accessibility

- Skip-to-content link for keyboard navigation
- ARIA labels on interactive elements
- `aria-hidden` on decorative SVGs
- `aria-expanded` and `aria-controls` on mobile menu
- Focus-visible outline styles
- Semantic HTML structure

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/coup_web)

### Manual Deployment

```bash
pnpm build
pnpm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.
