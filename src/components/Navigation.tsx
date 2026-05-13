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
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between section-padding py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative flex items-center">
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Tool Guide
              </span>
              <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#7C3AED]/15 text-[#A78BFA] border border-[#7C3AED]/20">
                by Rajora.ai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/5'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#7C3AED] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Ecosystem Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                onBlur={() => setTimeout(() => setIsEcosystemOpen(false), 200)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                Ecosystem
                <ChevronDown size={14} className={`transition-transform ${isEcosystemOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isEcosystemOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-64 p-2 rounded-xl bg-[#12121A]/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                  >
                    <a
                      href="https://rajora.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">Rajora.ai</p>
                        <p className="text-xs text-[#71717A]">Parent ecosystem</p>
                      </div>
                      <ExternalLink size={14} className="text-[#71717A] group-hover:text-[#7C3AED] transition-colors" />
                    </a>
                    <a
                      href="https://rajora.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">AION</p>
                        <p className="text-xs text-[#71717A]">AI assistant</p>
                      </div>
                      <ExternalLink size={14} className="text-[#71717A] group-hover:text-[#7C3AED] transition-colors" />
                    </a>
                    <a
                      href="https://rajora.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">Revive OS</p>
                        <p className="text-xs text-[#71717A]">Operating system</p>
                      </div>
                      <ExternalLink size={14} className="text-[#71717A] group-hover:text-[#7C3AED] transition-colors" />
                    </a>
                    <a
                      href="https://rajora.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">HopeSense AI</p>
                        <p className="text-xs text-[#71717A]">Mental wellness AI</p>
                      </div>
                      <ExternalLink size={14} className="text-[#71717A] group-hover:text-[#7C3AED] transition-colors" />
                    </a>
                    <div className="mt-1 pt-2 border-t border-white/5">
                      <a
                        href="https://rajora.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 p-2 rounded-lg text-xs font-mono uppercase tracking-wider text-[#A78BFA] hover:bg-[#7C3AED]/10 transition-colors"
                      >
                        Visit Rajora.ai
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              to="/tool-guide"
              className="ml-4 px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium hover:bg-[#6D28D9] transition-colors"
            >
              Explore Tools
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-[#A78BFA] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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