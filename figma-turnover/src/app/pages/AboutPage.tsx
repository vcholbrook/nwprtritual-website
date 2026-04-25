import { WhatIsRitual } from '../components/WhatIsRitual';
import { Takeaway } from '../components/Takeaway';
import { Brands } from '../components/Brands';
import { WhyNewport } from '../components/WhyNewport';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-nwprt-navy text-nwprt-cream py-20 md:py-28 text-center">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
          <div className="caption text-nwprt-yellow mb-4">The Experience</div>
          <h1 className="display text-5xl md:text-7xl text-nwprt-cream mb-6">About the Retreat</h1>
          <div className="rule-yellow mx-auto mb-8" />
          <p className="accent-italic text-xl md:text-2xl text-nwprt-cream/80 max-w-2xl mx-auto">
            A four-day immersive journey designed for women ready to understand their bodies at the deepest level.
          </p>
        </div>
      </section>

      {/* What is NWPRT Ritual */}
      <WhatIsRitual />

      {/* What You Leave With */}
      <Takeaway />

      {/* The Brands */}
      <Brands />

      {/* Why Newport */}
      <WhyNewport />
    </div>
  );
}