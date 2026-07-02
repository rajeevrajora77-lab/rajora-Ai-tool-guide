import { useState, useEffect, useCallback, useRef, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, Sun, Moon, Search, Info, Compass, Grid3X3,
  MessageSquare, Mail, Sparkles, Bot,
  Github, Globe, ChevronRight, ExternalLink, Layers
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { tools } from '../data/tools';

type InternalItem = { label: string; path: string; icon: LucideIcon; internal: true };
type ExternalItem = { label: string; href: string; icon: LucideIcon; internal: false };
type MenuItem = InternalItem | ExternalItem;

const navLinks = [
  { label: 'Tool Guide', path: '/tool-guide', icon: Compass },
  { label: 'Categories', path: '/categories', icon: Grid3X3 },
  { label: 'About',      path: '/about',       icon: Info },
  { label: 'Contact',    path: '/contact',     icon: Mail },
];

const mobileMenuSections: { id: string; title: string; icon: LucideIcon; items: MenuItem[] }[] = [
  {
    id: 'toolguide',
    title: 'Tool Guide',
    icon: Layers,
    items: [
      { label: 'Explore Tools', path: '/tool-guide', icon: Compass,       internal: true },
      { label: 'Categories',    path: '/categories', icon: Grid3X3,       internal: true },
      { label: 'About',         path: '/about',      icon: Info,          internal: true },
      { label: 'Feedback',      path: '/feedback',   icon: MessageSquare, internal: true },
      { label: 'Contact',       path: '/contact',    icon: Mail,          internal: true },
    ],
  },
  {
    id: 'ecosystem',
    title: 'Rajora AI',
    icon: Sparkles,
    items: [
      { label: 'Rajora AI', href: 'https://rajora.live',                   icon: Globe,  internal: false },
      { label: 'AION',      href: 'https://chat.rajora.co.in',             icon: Bot,    internal: false },
      { label: 'GitHub',    href: 'https://github.com/rajeevrajora77-lab', icon: Github, internal: false },
    ],
  },
];

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled]             = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen]             = useState(false);
  const [searchQuery, setSearchQuery]           = useState('');
  const { theme, setTheme }                     = useTheme();
  const location                                = useLocation();
  const navigate                                = useNavigate();
  const searchInputRef                          = useRef<HTMLInputElement>(null);
  const searchWrapRef                           = useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';
  const toggleTheme = useCallback(() => setTheme(isDark ? 'light' : 'dark'), [isDark, setTheme]);

  const searchResults = searchQuery.trim().length > 0
    ? tools.filter(t => {
        const q = searchQuery.toLowerCase();
        return t.name.toLowerCase().includes(q) ||
               t.description.toLowerCase().includes(q) ||
               t.category.toLowerCase().includes(q) ||
               t.tags.some(tag => tag.toLowerCase().includes(q));
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tool-guide?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); }
      if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(''); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setSearchOpen(false); setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); setSearchOpen(false); setSearchQuery('');
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(p => !p), []);

  return (
    <>
      {/* ── Desktop / Shared Navbar ── */}
      <nav className={`fixed left-0 right-0 top-0 z-[1000] flex h-14 items-center transition-all duration-500 ${
        isScrolled ? 'border-b border-border/70 bg-background/80 shadow-soft-panel backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="section-padding flex w-full items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Rajora<span className="text-primary">.</span>ai
            </span>
            <span className="hidden sm:inline-flex rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
              Tool Guide
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path ? 'text-foreground' : 'text-foreground/70 hover:bg-muted/80 hover:text-foreground'
                }`}>
                {link.label}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                )}
              </Link>
            ))}

            <div className="mx-1.5 h-4 w-px bg-border" />

            {/* Search */}
            <div ref={searchWrapRef} className="relative">
              <form onSubmit={handleSearchSubmit}>
                <div
                  className={`flex items-center gap-2 rounded-lg border bg-card/80 px-3 py-1.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
                    searchOpen ? 'border-primary/40 w-52' : 'border-border/70 w-32 hover:border-primary/20'
                  }`}
                  onClick={() => setSearchOpen(true)}
                >
                  <Search size={12} className="shrink-0 text-foreground/50" />
                  {searchOpen ? (
                    <input ref={searchInputRef} type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search tools…"
                      className="w-full bg-transparent text-foreground outline-none placeholder-foreground/40 text-xs" />
                  ) : (
                    <span className="text-foreground/60">Search</span>
                  )}
                  {!searchOpen && (
                    <kbd className="ml-auto rounded border border-border/70 bg-background px-1.5 py-0.5 text-[10px] text-foreground/40">⌘K</kbd>
                  )}
                  {searchOpen && searchQuery && (
                    <button type="button" onClick={e => { e.stopPropagation(); setSearchQuery(''); searchInputRef.current?.focus(); }}
                      className="ml-auto text-foreground/40 hover:text-foreground transition-colors"><X size={11} /></button>
                  )}
                </div>
              </form>
              <AnimatePresence>
                {searchOpen && searchQuery.trim().length > 0 && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                    className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-border/70 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.map(tool => (
                          <Link key={tool.id} to={`/tool/${tool.id}`}
                            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/8 transition-colors border-b border-border/30 last:border-0">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-primary">{tool.name[0]}</span>
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{tool.name}</p>
                              <p className="text-[10px] text-muted-foreground truncate">{tool.category}</p>
                            </div>
                          </Link>
                        ))}
                        <button onClick={() => { navigate(`/tool-guide?q=${encodeURIComponent(searchQuery.trim())}`); setSearchOpen(false); setSearchQuery(''); }}
                          className="w-full px-4 py-2.5 text-xs text-primary hover:bg-primary/5 transition-colors text-left font-medium border-t border-border/30">
                          See all results for "{searchQuery}" →
                        </button>
                      </>
                    ) : (
                      <div className="px-4 py-5 text-center">
                        <p className="text-sm text-muted-foreground">No tools found</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            <button onClick={toggleTheme}
              className="group flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground/70 transition-all hover:border-primary/30 hover:text-foreground"
              title={isDark ? 'Light Mode' : 'Dark Mode'} aria-label={isDark ? 'Light Mode' : 'Dark Mode'}>
              <motion.div key={isDark ? 'moon' : 'sun'} initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.18 }}>
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </button>

            <Link to="/tool-guide"
              className="ml-2 rounded-lg bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
              Explore
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground/70"
              aria-label={isDark ? 'Light mode' : 'Dark mode'}>
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button onClick={toggleMobileMenu}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-card/80 border border-border/70 text-foreground/70 transition-colors hover:text-foreground"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
              <AnimatePresence mode="wait">
                <motion.div key={isMobileMenuOpen ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed inset-0 z-[999] bg-background/98 backdrop-blur-2xl lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border/50 shrink-0">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-foreground">
                  Rajora<span className="text-primary">.</span>ai
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">Tool Guide</span>
              </Link>
              <button onClick={toggleMobileMenu}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 text-foreground/70 hover:text-foreground transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="px-5 pt-4 pb-2 shrink-0">
              <form onSubmit={e => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  navigate(`/tool-guide?q=${encodeURIComponent(searchQuery.trim())}`);
                  setIsMobileMenuOpen(false); setSearchQuery('');
                }
              }}>
                <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/60 px-4 py-3">
                  <Search size={15} className="text-foreground/50 shrink-0" />
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search tools…"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder-foreground/40" />
                  {searchQuery && (
                    <button type="button" onClick={() => setSearchQuery('')} className="text-foreground/40"><X size={13} /></button>
                  )}
                </div>
              </form>
            </div>

            {/* Nav Sections */}
            <div className="flex-1 px-5 pt-3 pb-4 space-y-1">
              {mobileMenuSections.map((section) => (
                <div key={section.id}>
                  {/* Section header */}
                  <div className="flex items-center gap-2 pt-4 pb-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10">
                      <section.icon size={13} className="text-primary" />
                    </div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {section.title}
                    </span>
                    <div className="flex-1 h-px bg-border/60 ml-1" />
                  </div>

                  {/* Items — discriminated union narrowed */}
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      item.internal ? (
                        <Link
                          key={item.label}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 active:scale-[0.98] ${
                            location.pathname === item.path
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground/80 hover:bg-muted/60 hover:text-foreground'
                          }`}
                        >
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            location.pathname === item.path ? 'bg-primary/20' : 'bg-muted/80 group-hover:bg-muted'
                          }`}>
                            <item.icon size={17} />
                          </div>
                          <span className="flex-1 font-medium text-[15px]">{item.label}</span>
                          <ChevronRight size={15} className="text-foreground/30 group-hover:text-foreground/50 transition-colors" />
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl px-3 py-3 text-foreground/80 hover:bg-muted/60 hover:text-foreground transition-all duration-200 active:scale-[0.98]"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted/80 group-hover:bg-muted transition-colors">
                            <item.icon size={17} />
                          </div>
                          <span className="flex-1 font-medium text-[15px]">{item.label}</span>
                          <ExternalLink size={13} className="text-foreground/30" />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Card */}
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 pb-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10">
                    <Mail size={13} className="text-primary" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Contact</span>
                  <div className="flex-1 h-px bg-border/60 ml-1" />
                </div>
                <a
                  href="mailto:hello@rajora.live"
                  className="group flex items-center gap-3.5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:bg-card/90 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground font-mono mb-0.5">Email us</p>
                    <p className="text-sm font-semibold text-foreground truncate">hello@rajora.live</p>
                  </div>
                  <div className="text-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                    <ChevronRight size={16} />
                  </div>
                </a>
              </div>
            </div>

            {/* Footer strip */}
            <div className="shrink-0 border-t border-border/50 px-5 py-3 flex items-center justify-between">
              <p className="text-[11px] text-muted-foreground font-mono">© 2026 Rajora AI</p>
              <div className="flex items-center gap-2">
                <a href="https://github.com/rajeevrajora77-lab" target="_blank" rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60 text-foreground/60 hover:text-foreground transition-colors">
                  <Github size={14} />
                </a>
                <a href="https://rajora.live" target="_blank" rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60 text-foreground/60 hover:text-foreground transition-colors">
                  <Globe size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
