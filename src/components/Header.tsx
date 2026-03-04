import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-16 md:px-64 py-24">
        {/* Logo - left aligned */}
        <Link to="/" className="font-serif text-h3 tracking-tight hover:text-clay transition-colors">
          Simone Johnson
        </Link>

        {/* Navigation links - right aligned */}
        <div className="hidden md:flex items-center gap-32 font-sans text-body">
          <Link to="/portfolio" className="hover:text-clay transition-colors">
            Portfolio
          </Link>
          <Link to="/experience" className="hover:text-clay transition-colors">
            Experience
          </Link>
          <Link to="/contact" className="hover:text-clay transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger menu (placeholder) */}
        <button className="md:hidden flex flex-col gap-4 w-24 h-24" aria-label="Menu">
          <span className="block w-full h-2 bg-charcoal"></span>
          <span className="block w-full h-2 bg-charcoal"></span>
        </button>
      </nav>
    </header>
  );
}
