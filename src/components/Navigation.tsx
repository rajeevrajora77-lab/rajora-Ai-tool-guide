import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Tool Guide', path: '/tool-guide' },
  { label: 'Categories', path: '/categories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsEcosystemOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 h-16 flex items-center ${
          isScrolled
            ? 'bg-void/70 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between section-padding w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative flex items-center">
              <span className="font-display text-xl font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
                Rajora<span className="text-violet-500">.</span>ai
              </span>
              <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Tool Guide
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-violet-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="w-px h-4 bg-white/10 mx-2" />

            {/* Command Hint */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all text-xs font-mono group">
              <span className="group-hover:text-violet-400 transition-colors">Search</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">⌘K</span>
            </button>

            {/* CTA */}
            <Link
              to="/tool-guide"
              className="ml-4 px-5 py-2 rounded-lg bg-white text-void text-sm font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Explore
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-violet-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#0A0A0F]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
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
                        ? 'text-[#7C3AED]'
                        : 'text-white hover:text-[#A78BFA]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="w-16 h-px bg-white/10 my-2" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/feedback"
                  className="text-lg text-[#A1A1AA] hover:text-white transition-colors"
                >
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
                  className="flex items-center gap-2 text-lg text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
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
                  className="px-8 py-3 rounded-xl bg-[#7C3AED] text-white font-medium hover:bg-[#6D28D9] transition-colors"
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