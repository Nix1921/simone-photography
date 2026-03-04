import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="px-8 md:px-16 mb-24">
        <div className="relative w-full aspect-video h-[70vh] bg-charcoal overflow-hidden group">
          {/* Grain Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Placeholder Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-white text-4xl font-light">play_arrow</span>
            </div>
          </div>

          {/* Cinematic frame info */}
          <div className="absolute bottom-6 left-6 flex items-center gap-4 text-[10px] tracking-[0.3em] text-white/40 uppercase">
            <span>Rec • 00:04:12</span>
            <span>4K RAW</span>
          </div>

          {/* Placeholder background - will be replaced with actual video/image */}
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 bg-charcoal/80"
          />
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="px-8 md:px-16 pb-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.05] tracking-tight text-charcoal">
            We believe a wedding is <span className="italic text-clay">a day</span>, <br />
            not a photoshoot. Be present. <br />
            We'll handle the proof.
          </h1>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end items-end pt-12 md:pt-0">
          <div className="max-w-[280px] text-right">
            <p className="text-[13px] leading-relaxed text-charcoal/60 mb-8 font-sans">
              Capturing the unscripted moments that define your legacy. Our approach is quiet, intentional, and editorial in nature.
            </p>
            <Link
              to="/contact"
              className="group relative flex items-center justify-center bg-charcoal text-paper px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-clay hover:text-white"
            >
              <span>Check Your Date</span>
              <span className="material-symbols-outlined ml-3 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Visual/Philosophy Section */}
      <section className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
        <div
          className="aspect-[4/5] bg-neutral-200 overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-clay mb-6 font-bold block">The Philosophy</span>
          <h2 className="font-serif text-3xl mb-6">Minimal intrusion, maximum emotion.</h2>
          <p className="text-sm text-charcoal/70 leading-relaxed font-sans max-w-sm">
            True luxury is found in the moments you didn't even know were being witnessed. We prioritize your experience over the production.
          </p>
          <div className="mt-12 h-[1px] w-24 bg-charcoal/20"></div>
        </div>
      </section>
    </div>
  );
}
