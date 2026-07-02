// Nav restructures at breakpoints: bottom-bar (<768px) → hamburger drawer (768-1023px) → sticky top bar (1024px+)
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Tools',      href: '#tools' },
  { label: 'Categories', href: '#categories' },
  { label: 'Submit',     href: '#submit' },
  { label: 'About',      href: '#about' },
];

export function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ─ Desktop (1024px+): sticky top horizontal bar ─ */}
      <nav className="nav-root hidden lg:flex items-center justify-between px-fluid-6 py-fluid-2">
        <span className="text-fluid-xl font-bold text-gradient-purple">Rajora AI Tools</span>
        <ul className="flex gap-fluid-6 list-none m-0 p-0">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-fluid-sm font-medium hover:text-primary transition-colors px-fluid-2 py-fluid-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ─ Tablet (768-1023px): top bar + hamburger that opens a drawer ─ */}
      <nav className="nav-root hidden md:flex lg:hidden items-center justify-between px-fluid-4 py-fluid-2">
        <span className="text-fluid-lg font-bold text-gradient-purple">Rajora AI Tools</span>
        <button
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(o => !o)}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:bg-elevated transition-colors"
        >
          <span className="text-fluid-xl">{drawerOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* Tablet drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 hidden md:block lg:hidden"
          onClick={() => setDrawerOpen(false)}
        >
          <aside
            className="absolute right-0 top-0 h-full w-[min(80vw,320px)] bg-elevated p-fluid-6 flex flex-col gap-fluid-4"
            onClick={e => e.stopPropagation()}
          >
            <span className="text-fluid-lg font-bold text-gradient-purple mb-fluid-2">Rajora AI Tools</span>
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setDrawerOpen(false)}
                className="text-fluid-lg font-medium min-h-[44px] flex items-center hover:text-primary transition-colors border-b border-border pb-fluid-2"
              >
                {l.label}
              </a>
            ))}
          </aside>
        </div>
      )}

      {/* ─ Mobile (<768px): sticky bottom bar — restructured layout ─ */}
      <nav className="nav-root flex md:hidden justify-around items-center px-fluid-2">
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="nav-item flex flex-col items-center gap-1 text-fluid-xs font-medium hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}

export default Nav;
