import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border-color transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-primary lowercase text-3xl tracking-wide">
          the wedding psalm
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">About Us</Link>
          <Link href="#portfolio" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Projects</Link>
          <Link href="#gallery" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Gallery</Link>
          <Link href="#contact" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Contact Us</Link>
        </div>
        <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all">
          Start Project &rarr;
        </Link>
        <button className="md:hidden text-text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}
