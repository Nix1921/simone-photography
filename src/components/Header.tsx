import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-8 bg-transparent">
      <div className="flex items-center gap-2">
        <h2 className="font-serif text-2xl font-semibold tracking-tight uppercase">
          <Link to="/" className="hover:text-clay transition-colors">Simone Johnson</Link>
        </h2>
      </div>
      <nav className="flex items-center gap-12">
        <Link to="/experience" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-clay transition-colors">
          Experience
        </Link>
        <Link to="/portfolio" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-clay transition-colors">
          Portfolio
        </Link>
        <Link to="/contact" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-clay transition-colors">
          Contact
        </Link>
        <Link to="/contact" className="bg-charcoal text-white text-[10px] uppercase tracking-[0.3em] px-8 py-3 hover:bg-clay transition-all">
          Inquire
        </Link>
      </nav>
    </header>
  );
}
