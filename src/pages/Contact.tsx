import { type FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    story: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend/form service
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-96 pb-96 px-16 md:px-64">
        <div className="md:w-1/2">
          <h1 className="font-serif text-[48px] md:text-[72px] leading-tight mb-32">Let's Talk</h1>
          <p className="font-serif text-h2 italic mb-32">
            Message received. I'm already excited. Talk soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-clay underline font-sans text-body"
          >
            ← Back to form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-96 pb-96">
      <div className="px-16 md:px-64">
        <div className="md:w-1/2">
          {/* Page Title */}
          <h1 className="font-serif text-[48px] md:text-[72px] leading-tight mb-16">Let's Talk</h1>
          <p className="font-sans text-body text-film-grey mb-64">
            Check your date. Tell me your story.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-32">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-caption uppercase tracking-wider text-film-grey mb-8">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-caption uppercase tracking-wider text-film-grey mb-8">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Wedding Date */}
            <div>
              <label htmlFor="date" className="block text-caption uppercase tracking-wider text-film-grey mb-8">
                Wedding Date
              </label>
              <input
                type="date"
                id="date"
                required
                className="input"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            {/* Story */}
            <div>
              <label htmlFor="story" className="block text-caption uppercase tracking-wider text-film-grey mb-8">
                What's your story?
              </label>
              <textarea
                id="story"
                required
                rows={8}
                className="input resize-none"
                placeholder="Tell me about yourselves, your day, your vision..."
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full">
              Check Your Date
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
