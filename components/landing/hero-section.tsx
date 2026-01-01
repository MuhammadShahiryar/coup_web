import { Button } from '@/components/ui';
import { MessageBadge } from './message-badge';
import { AppleIcon } from '@/components/icons';

export function HeroSection() {
  return (
    <section className="w-full px-4 pt-10 md:pt-20">
      <div className="text-center max-w-5xl mx-auto">
        {/* Badge */}
        <MessageBadge />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-primary">iMessage</span>{' '}
          <span className="text-foreground">Automation</span>
          <br />
          <span className="text-foreground">for Teams and AI</span>
          <br />
          <span className="text-foreground">Workflows.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">Get Started</Button>

          <a
            href="#download"
            className="flex items-center gap-2 px-5 py-2.5 border border-foreground rounded-full text-foreground text-base font-semibold hover:bg-foreground hover:text-white transition-colors"
            aria-label="Download Mac App"
          >
            <AppleIcon className="w-5 h-5" />
            <span className="w-px h-4 bg-current mx-1" aria-hidden="true" />
            Download Mac App
          </a>
        </div>
      </div>
    </section>
  );
}
