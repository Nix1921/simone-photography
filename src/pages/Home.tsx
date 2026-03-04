import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen pt-96">
      {/* Hero Section - 70vh with video placeholder */}
      <section className="relative h-[70vh] bg-charcoal overflow-hidden">
        {/* Video placeholder with grain texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90">
          {/* Grain overlay effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        {/* Video placeholder text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-paper/40 font-serif text-h2 italic">Hero Video Placeholder</p>
        </div>
      </section>

      {/* Manifesto Section - Asymmetric layout */}
      <section className="px-16 md:px-64 py-96 md:py-[10rem]">
        <div className="max-w-7xl mx-auto">
          {/* Manifesto text - 40% width on desktop, left-aligned */}
          <div className="md:w-2/5">
            <p className="font-serif text-h1 md:text-[48px] md:leading-[1.2] italic mb-48">
              "We believe a wedding is a day, not a photoshoot. We believe the most beautiful thing in the world is the truth."
            </p>
            <p className="font-sans text-body text-film-grey mb-64">
              We strictly forbid 'Say Cheese.' We hunt for the in-between moments. The nervous hand-squeeze. The tear on a father's cheek. The chaotic joy of the dance floor.
            </p>
            <p className="font-serif text-h2 mb-96">
              Be present. We'll handle the proof.
            </p>

            {/* CTA Button - bottom right of content area */}
            <div className="flex justify-start md:justify-end">
              <Link to="/contact" className="btn-primary inline-block">
                Check Your Date
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
