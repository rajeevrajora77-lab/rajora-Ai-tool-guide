import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { label: 'Tool Guide', path: '/tool-guide' },
  { label: 'Categories', path: '/categories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const ThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={18} />;
      case 'dark':
        return <Moon size={18} />;
      default:
        return <Monitor size={18} />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

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
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative flex items-center">
              <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Rajora<span className="text-primary">.</span>ai
              </span>
              <span className="ml-2 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                Tool Guide
              </span>
            </div>
          </Link>

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

            <button className="group flex items-center gap-2 rounded-lg border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-mono text-foreground/70 transition-all hover:border-primary/20 hover:text-foreground">
              <span className="transition-colors group-hover:text-primary">Search</span>
              <span className="rounded border border-border/70 bg-background px-1.5 py-0.5">⌘K</span>
            </button>

            <button
              onClick={cycleTheme}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground/70 transition-all hover:border-primary/20 hover:text-foreground"
              title={`Switch to ${theme === 'light' ? 'Dark' : theme === 'dark' ? 'System' : 'Light'} Mode`}
            >
              <div className="transition-transform group-hover:scale-110">
                <ThemeIcon />
              </div>
            </button>

            <Link
              to="/tool-guide"
              className="ml-4 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explore
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={cycleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-foreground/70 transition-all"
            >
              <ThemeIcon />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-card/80 text-foreground/70 transition-colors hover:text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-2xl font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="my-2 h-px w-16 bg-border" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link to="/feedback" className="text-lg text-foreground/70 transition-colors hover:text-foreground">
                  Feedback
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg text-primary transition-colors hover:text-primary/80"
                >
                  Visit Rajora.ai
                  <ExternalLink size={16} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Link
                  to="/tool-guide"
                  className="rounded-xl bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
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