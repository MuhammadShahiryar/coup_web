# Coup

iMessage Automation for Teams and AI Workflows.

Send iMessages directly from your phone number, running securely on your Mac or Mac Mini.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Prerequisites

- Node.js 20.9.0 or higher
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

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `pnpm dev`        | Start development server     |
| `pnpm build`      | Create production build      |
| `pnpm start`      | Start production server      |
| `pnpm lint`       | Run ESLint                   |
| `pnpm lint:fix`   | Fix ESLint errors            |
| `pnpm type-check` | Run TypeScript type checking |

## Project Structure

```
coup_web/
├── app/                    # App Router (routing files only)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading UI
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
│
├── components/             # React components
│   ├── common/             # Shared components (Logo, etc.)
│   ├── icons/              # Icon components
│   ├── landing/            # Landing page components
│   ├── layout/             # Layout components (Header, Footer)
│   └── ui/                 # UI primitives (Button, Input, etc.)
│
├── config/                 # App configuration
│   ├── navigation.ts       # Navigation items
│   └── site.ts             # Site metadata
│
├── hooks/                  # Custom React hooks
│   └── use-window-size.ts
│
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions (cn, etc.)
│
├── types/                  # TypeScript type definitions
│
├── public/                 # Static assets
│
├── proxy.ts                # Next.js proxy (middleware)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Code Style

- **Files:** kebab-case (`hero-section.tsx`)
- **Components:** PascalCase (`HeroSection`)
- **Functions:** camelCase (`formatDate`)
- **Constants:** SCREAMING_SNAKE_CASE (`NAV_ITEMS`)
- **Types:** PascalCase (`NavItem`)

## Environment Variables

| Variable              | Description    |
| --------------------- | -------------- |
| `NEXT_PUBLIC_APP_URL` | Public app URL |

See `.env.example` for all available variables.

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/coup_web)

### Manual Deployment

```bash
pnpm build
pnpm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.
