import {
  HeroSection,
  CloudLayer,
  BirdIllustration,
  FlyingBirdAnimation,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main id="main-content" className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Decorative Elements */}
      <CloudLayer />
      <BirdIllustration />
      <FlyingBirdAnimation />
    </main>
  );
}
