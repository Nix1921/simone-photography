import { Link } from 'react-router-dom';

export default function Experience() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-12 pt-24 pb-32">
      {/* Page Title */}
      <div className="ml-[20%] mb-32">
        <h1 className="font-serif text-[120px] leading-none font-light italic opacity-90">Experience</h1>
      </div>

      {/* Opening Statement */}
      <section className="mb-48 grid grid-cols-12">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-serif text-5xl leading-[1.1] italic font-medium">
            I don't carry a shot list. I carry a camera and an obsession with the truth.
          </h2>
        </div>
        <div className="col-span-7"></div> {/* Negative Space */}
      </section>

      {/* Three-Step Process */}
      <section className="space-y-40 mb-56">
        {/* Step 01 */}
        <div className="grid grid-cols-12 items-start">
          <div className="col-span-2">
            <span className="font-serif text-7xl text-clay/40 font-bold leading-none">01</span>
          </div>
          <div className="col-span-4 ml-8">
            <h3 className="font-serif text-3xl font-semibold mb-6">The Vibe Check</h3>
            <p className="font-sans text-base font-light leading-[1.8] text-charcoal/80">
              We strip away the performance. This is where we align on the energy of your day. No forced smiles, just the quiet anticipation of what's real.
            </p>
          </div>
        </div>

        {/* Step 02 - Asymmetric Shift */}
        <div className="grid grid-cols-12 items-start">
          <div className="col-span-4"></div>
          <div className="col-span-2 text-right pr-8">
            <span className="font-serif text-7xl text-clay/40 font-bold leading-none">02</span>
          </div>
          <div className="col-span-4">
            <h3 className="font-serif text-3xl font-semibold mb-6">The Unscripted Day</h3>
            <p className="font-sans text-base font-light leading-[1.8] text-charcoal/80">
              I move with the shadows. My presence is felt, not seen. Your only job is to exist within the moment while I document the fragments that others miss.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="grid grid-cols-12 items-start">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <span className="font-serif text-7xl text-clay/40 font-bold leading-none">03</span>
          </div>
          <div className="col-span-4 ml-8">
            <h3 className="font-serif text-3xl font-semibold mb-6">The Reveal</h3>
            <p className="font-sans text-base font-light leading-[1.8] text-charcoal/80">
              The final gallery is a curated narrative. It's not just a collection of images; it's a tangible archive of your legacy, unfiltered and honest.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Callout */}
      <section className="mb-56">
        <div className="bg-clay/10 w-full py-32 px-12 flex justify-center">
          <div className="max-w-xl text-center md:ml-24">
            <h2 className="font-serif text-4xl italic font-medium leading-relaxed">
              Be present. We'll handle the proof.
            </h2>
          </div>
        </div>
      </section>

      {/* Closing Statement & CTA */}
      <section className="grid grid-cols-12 items-end mb-24">
        <div className="col-span-12 md:col-span-6">
          <p className="font-sans text-sm tracking-[0.1em] text-charcoal/60 uppercase mb-4">Final Thought</p>
          <h4 className="font-sans text-2xl font-light leading-[1.8] max-w-md">
            This isn't for everyone. It's for the ones who value the grit as much as the grace.
          </h4>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-end">
          <Link to="/contact" className="bg-charcoal text-white text-xs uppercase tracking-[0.3em] px-12 py-6 hover:bg-clay transition-all flex items-center gap-4">
            Check Your Date
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
