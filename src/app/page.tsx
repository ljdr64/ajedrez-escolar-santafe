import { Hero } from '@/components/hero';
import { FeaturesSection } from '@/components/features-section';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
