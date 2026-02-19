import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/analyze', label: 'Analyze' },
  { href: '/report', label: 'Clinical Report' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          PharmaGuard
        </Link>
        <div className="flex gap-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
