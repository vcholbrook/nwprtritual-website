import { DeepDive } from '../components/DeepDive';

export function SciencePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-nwprt-navy text-nwprt-cream py-20 md:py-28 text-center">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
          <div className="caption text-nwprt-yellow mb-4">Chapter Two</div>
          <h1 className="display text-5xl md:text-7xl text-nwprt-cream mb-6">Your Science Sessions</h1>
          <div className="rule-yellow mx-auto mb-8" />
          <p className="accent-italic text-xl md:text-2xl text-nwprt-cream/80 max-w-2xl mx-auto">
            Your genetic data and bloodwork are reviewed before you arrive. Your sessions are built around what they reveal.
          </p>
        </div>
      </section>

      {/* DeepDive Component */}
      <DeepDive />
    </div>
  );
}