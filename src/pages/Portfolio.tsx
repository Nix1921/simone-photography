export default function Portfolio() {
  // Curated portfolio images from Simone Johnson Photography
  const portfolioImages = [
    { id: 1, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/5737207a-06e1-4308-8100-900b4e36b58d/SIM05134.jpg', aspect: 'landscape', size: 'large', alt: 'Couple at golden hour' },
    { id: 2, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/dc790ddc-485a-4add-91ad-a2ac2c0d7be2/SIM05950.jpg', aspect: 'portrait', size: 'medium', alt: 'Intimate wedding moment' },
    { id: 3, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/ab20934f-5e4b-4d78-bf79-88ef2e2a77c4/SJP05697.jpg', aspect: 'portrait', size: 'medium', alt: 'Wedding ceremony' },
    { id: 4, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/bbb3ff63-7adc-4ff2-b4ea-cfaf8732893d/SIM04185.jpg', aspect: 'landscape', size: 'medium', alt: 'Reception details' },
    { id: 5, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/3542fb0c-d62c-486e-8831-6936261913d6/SIM03871.jpg', aspect: 'portrait', size: 'large', alt: 'Bride portrait' },
    { id: 6, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/c50731c9-d6dc-4746-b222-0542b0df152d/SIM05698.jpg', aspect: 'landscape', size: 'medium', alt: 'Couple walking' },
    { id: 7, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/1b428ed0-aaf0-4fbe-a227-924f048e857d/SIM04364.jpg', aspect: 'portrait', size: 'medium', alt: 'Dance floor moment' },
    { id: 8, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/c12e0060-8c34-47da-b7cd-12628eaac31c/SIM04456.jpg', aspect: 'landscape', size: 'large', alt: 'Outdoor ceremony' },
    { id: 9, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/429c55b1-dc5c-48f5-9cde-14d1784d9338/SIM06001.jpg', aspect: 'portrait', size: 'medium', alt: 'Getting ready' },
    { id: 10, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/28ad56e7-e619-497b-9f62-660cdb3f6069/SIM05772.jpg', aspect: 'landscape', size: 'medium', alt: 'Sunset couple shot' },
    { id: 11, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/700a9240-16fe-41fe-b6a9-21c485c06fac/SJP06271.jpg', aspect: 'portrait', size: 'medium', alt: 'Candid moment' },
    { id: 12, url: 'https://images.squarespace-cdn.com/content/v1/6840f5cae39f224b3e3f2b2a/c5d0b9ce-4cce-48a1-a52b-373e1c9cc93a/SIM05772-2.jpg', aspect: 'landscape', size: 'large', alt: 'Evening celebration' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Page Title */}
      <div className="px-8 md:px-16 mb-16 ml-[10%]">
        <h1 className="font-serif text-[72px] md:text-[96px] leading-none font-light italic opacity-90">Portfolio</h1>
      </div>

      {/* Masonry Grid */}
      <div className="px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden group cursor-pointer ${
                image.size === 'large'
                  ? 'md:col-span-2 aspect-[16/9]'
                  : image.aspect === 'portrait'
                  ? 'aspect-[4/5]'
                  : 'aspect-[16/9]'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-300 flex items-center justify-center">
                <p className="text-paper text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Gallery
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
