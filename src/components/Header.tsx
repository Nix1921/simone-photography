import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-full px-8 md:px-16 py-8 flex justify-between items-baseline z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-serif text-2xl tracking-tight font-medium hover:text-clay transition-colors">
          Simone Johnson
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-12">
        <Link
          to="/portfolio"
          className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-clay transition-colors ${location.pathname === '/portfolio' ? 'text-clay' : ''}`}
        >
          Portfolio
        </Link>
        <Link
          to="/experience"
          className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-clay transition-colors ${location.pathname === '/experience' ? 'text-clay' : ''}`}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-clay transition-colors ${location.pathname === '/contact' ? 'border-b border-charcoal/10 pb-1' : ''}`}
        >
          Contact
        </Link>
        <a
          href="https://www.instagram.com/simonejohnson.photography"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-clay transition-colors"
          aria-label="Instagram"
        >
          <span className="material-symbols-outlined text-lg">photo_camera</span>
        </a>
      </nav>
      <div className="md:hidden">
        <span className="material-symbols-outlined text-charcoal">menu</span>
      </div>
    </header>
  );
}
