export default function Footer() {
  return (
    <footer className="px-12 py-12 border-t border-charcoal/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-charcoal/40 font-medium">
      <p>© {new Date().getFullYear()} Simone Johnson Photography</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-clay transition-colors">Instagram</a>
        <a href="#" className="hover:text-clay transition-colors">Pinterest</a>
      </div>
    </footer>
  );
}
