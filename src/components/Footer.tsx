export default function Footer() {
  return (
    <footer className="w-full px-8 md:px-16 py-12 border-t border-charcoal/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-charcoal/40">
          <a href="https://www.instagram.com/simonejohnson.photography" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal transition-colors">Instagram</a>
          <a href="#" className="hover:text-charcoal transition-colors">Pinterest</a>
          <a href="#" className="hover:text-charcoal transition-colors">Terms</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-medium">
          © {new Date().getFullYear()} Simone Johnson Photography
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-clay"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60">Currently Booking 2026</span>
        </div>
      </div>
    </footer>
  );
}
