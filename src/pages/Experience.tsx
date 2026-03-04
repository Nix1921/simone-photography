import { Link } from 'react-router-dom';

export default function Experience() {
  return (
    <div className="min-h-screen pt-96 pb-96">
      {/* Page Title */}
      <div className="px-16 md:px-64 mb-96">
        <h1 className="font-serif text-[48px] md:text-[72px] leading-tight mb-48">Experience</h1>
      </div>

      {/* Opening Statement - 40% width, left-aligned */}
      <div className="px-16 md:px-64 mb-96">
        <div className="md:w-2/5">
          <p className="font-serif text-h1 md:text-[40px] md:leading-[1.4] italic mb-96">
            "I don't carry a shot list. I carry a camera and an obsession with the truth."
          </p>
        </div>
      </div>

      {/* Three-Step Process */}
      <div className="px-16 md:px-64 mb-96">
        <div className="md:w-3/5 space-y-64">
          {/* Step 1 */}
          <div>
            <div className="flex items-baseline gap-16 mb-16">
              <span className="font-serif text-[72px] text-clay leading-none">01</span>
              <h3 className="font-serif text-h2">The Vibe Check</h3>
            </div>
            <p className="font-sans text-body text-film-grey ml-[88px]">
              We chat, see if we click. This isn't a vendor meeting — it's a conversation.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex items-baseline gap-16 mb-16">
              <span className="font-serif text-[72px] text-clay leading-none">02</span>
              <h3 className="font-serif text-h2">The Unscripted Day</h3>
            </div>
            <p className="font-sans text-body text-film-grey ml-[88px]">
              I show up, you get married, I capture the truth. No poses. No performance.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-baseline gap-16 mb-16">
              <span className="font-serif text-[72px] text-clay leading-none">03</span>
              <h3 className="font-serif text-h2">The Reveal</h3>
            </div>
            <p className="font-sans text-body text-film-grey ml-[88px]">
              You get a gallery that looks like a movie of your life.
            </p>
          </div>
        </div>
      </div>

      {/* Manifesto Callout Box */}
      <div className="px-16 md:px-64 mb-96">
        <div className="md:w-3/5 manifesto-box">
          <p className="font-serif text-h2 text-center">
            Be present. We'll handle the proof.
          </p>
        </div>
      </div>

      {/* Closing Statement + CTA */}
      <div className="px-16 md:px-64">
        <div className="md:w-2/5">
          <p className="font-sans text-body mb-48">
            This isn't for everyone. If you want perfect poses, I'm not for you. But if you want to <span className="italic">attend</span> your own wedding? Let's talk.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Check Your Date
          </Link>
        </div>
      </div>
    </div>
  );
}
