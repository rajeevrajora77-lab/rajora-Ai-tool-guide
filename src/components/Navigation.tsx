import { useState, useEffect, useCallback, useRef, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ExternalLink, Sun, Moon, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { tools } from '../data/tools';

const navLinks = [
  { label: 'Tool Guide', path: '/tool-guide' },
  { label: 'Categories', path: '/categories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen]           = useState(false);
  const [searchQuery, setSearchQuery]         = useState('');
  const { theme, setTheme }                   = useTheme();
  const location                              = useLocation();
  const navigate                              = useNavigate();
  const searchInputRef                        = useRef<HTMLInputElement>(null);
  const searchWrapRef                         = useRef<HTMLDivElement>(null);

  // ── Theme: single click dark ↔ light ──
  const isDark = theme === 'dark';
  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  // ── Live search results (top 5) ──
  const searchResults = searchQuery.trim().length > 0
    ? tools
        .filter(t => {
          const q = searchQuery.toLowerCase();
          return (
            t.name.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q) ||
            t.tags.some(tag => tag.toLowerCase().includes(q))
          );
        })
        .slice(0, 5)
    : [];

  // ── Navigate on Enter ──
  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tool-guide?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, navigate]);

  // ── Ctrl/Cmd+K opens search ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // ── Focus input when search opens ──
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [searchOpen]);

  // ── Close dropdown on outside click ──
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery('');
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
    setIsMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(p => !p), []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[1000] flex h-16 items-center transition-all duration-500 ${
          isScrolled
            ? 'border-b border-border/70 bg-background/70 shadow-soft-panel backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex w-full items-center justify-between">

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Rajora<span className="text-primary">.</span>ai
            </span>
            <span className="ml-2 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
              Tool Guide
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-foreground'
                    : 'text-foreground/70 hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="mx-2 h-4 w-px bg-border" />

            {/* ── Functional Search Bar ── */}
            <div ref={searchWrapRef} className="relative">
              <form onSubmit={handleSearchSubmit}>
                <div
                  className={`flex items-center gap-2 rounded-lg border bg-card/80 px-3 py-1.5 text-xs font-mono transition-all duration-200 ${
                    searchOpen
                      ? 'border-primary/40 w-56'
                      : 'border-border/70 w-32 cursor-pointer hover:border-primary/20'
                  }`}
                  onClick={() => { setSearchOpen(true); }}
                >
                  <Search size={13} className="shrink-0 text-foreground/50" />
                  {searchOpen ? (
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search tools…"
                      className="w-full bg-transparent text-foreground outline-none placeholder-foreground/40 text-xs"
                    />
                  ) : (
                    <span className="text-foreground/60">Search</span>
                  )}
                  {!searchOpen && (
                    <kbd className="ml-auto flex items-center gap-0.5 rounded border border-border/70 bg-background px-1.5 py-0.5 text-[10px] text-foreground/40">
                      ⌘K
                    </kbd>
                  )}
                  {searchOpen && searchQuery && (
                    <button type="button" onClick={e => { e.stopPropagation(); setSearchQuery(''); searchInputRef.current?.focus(); }}
                      className="ml-auto text-foreground/40 hover:text-foreground transition-colors">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </form>

              {/* Live dropdown */}
              <AnimatePresence>
                {searchOpen && searchQuery.trim().length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-border/70 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50"
                  >
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.map(tool => (
                          <Link
                            key={tool.id}
                            to={`/tool/${tool.id}`}
                            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-primary/8 transition-colors border-b border-border/30 last:border-0"
                          >
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-primary">{tool.name[0]}</span>
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{tool.name}</p>
                              <p className="text-[10px] text-muted-foreground truncate">{tool.category}</p>
                            </div>
                          </Link>
                        ))}
                        <button
                          onClick={() => { navigate(`/tool-guide?q=${encodeURIComponent(searchQuery.trim())}`); setSearchOpen(false); setSearchQuery(''); }}
                          className="w-full px-4 py-2.5 text-xs text-primary hover:bg-primary/5 transition-colors text-left font-medium border-t border-border/30"
                        >
                          See all results for "{searchQuery}" →
                        </button>
                      </>
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <p className="text-sm text-muted-foreground">No tools found</p>
                        <p className="text-xs text-muted-foreground/60 mt-1">Try a different keyword</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Theme Toggle: single click dark ↔ light ── */}
            <button
              onClick={toggleTheme}
              className="group flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground/70 transition-all hover:border-primary/30 hover:text-foreground"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </button>

            <Link
              to="/tool-guide"
              className="ml-2 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explore
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground/70"
              aria-label={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/80 text-foreground/70 transition-colors hover:text-foreground"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-8">

              {/* Mobile search */}
              <form onSubmit={e => { e.preventDefault(); if (searchQuery.trim()) { navigate(`/tool-guide?q=${encodeURIComponent(searchQuery.trim())}`); setIsMobileMenuOpen(false); setSearchQuery(''); } }}
                className="w-full max-w-xs">
                <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/80 px-4 py-2.5">
                  <Search size={16} className="text-foreground/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search tools…"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder-foreground/40"
                  />
                </div>
              </form>

              {navLinks.map((link, index) => (
                <motion.div key={link.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link
                    to={link.path}
                    className={`font-display text-2xl font-semibold transition-colors ${
                      location.pathname === link.path ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="my-2 h-px w-16 bg-border" />

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <a href="https://rajora.live" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg text-primary transition-colors hover:text-primary/80">
                  Visit Rajora AI <ExternalLink size={16} />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4">
                <Link to="/tool-guide"
                  className="rounded-xl bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  Explore Tools
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
