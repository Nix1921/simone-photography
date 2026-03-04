export default function Portfolio() {
  // Placeholder image data - would come from CMS in production
  const placeholders = [
    { id: 1, aspect: 'landscape', size: 'large' }, // 70% width
    { id: 2, aspect: 'portrait', size: 'medium' },
    { id: 3, aspect: 'square', size: 'medium' },
    { id: 4, aspect: 'landscape', size: 'medium' },
    { id: 5, aspect: 'portrait', size: 'large' },
    { id: 6, aspect: 'square', size: 'small' },
  ];

  return (
    <div className="min-h-screen pt-96 pb-96">
      {/* Page Title */}
      <div className="px-16 md:px-64 mb-64">
        <h1 className="font-serif text-[48px] md:text-[72px] leading-tight">Portfolio</h1>
      </div>

      {/* Masonry Grid - simplified for MVP */}
      <div className="px-16 md:px-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className={`bg-charcoal relative overflow-hidden group cursor-pointer ${
                item.size === 'large'
                  ? 'md:col-span-2 aspect-[16/9]'
                  : item.aspect === 'portrait'
                  ? 'aspect-[4/5]'
                  : item.aspect === 'square'
                  ? 'aspect-square'
                  : 'aspect-[16/9]'
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px',
              }}
            >
              {/* Hover overlay with info */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/80 transition-all duration-300 flex items-end p-16">
                <p className="text-paper text-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Wedding Gallery #{item.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
