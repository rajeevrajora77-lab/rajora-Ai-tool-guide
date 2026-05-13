import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const FooterSection = memo(() => {
  return (
    <footer className="relative w-full bg-base dark:bg-void border-t border-zinc-200 dark:border-white/5">
      {/* Gradient line at top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                Tool Guide
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                by Rajora.ai
              </span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm mt-3 font-body">
              The most comprehensive AI & developer tools discovery platform.
              Curated, verified, and always free to explore.
            </p>
            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
              Tool Guide is a{' '}
              <a
                href="https://rajora.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors"
              >
                Rajora.ai
              </a>
              {' '}ecosystem product.
            </p>
          </div>

          {/* Tool Guide Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500 mb-4">
              Tool Guide
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/tool-guide" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">
                  Explore Tools
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Rajora.ai Ecosystem */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500 mb-4">
              Rajora.ai Ecosystem
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm"
                >
                  Rajora.ai <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm"
                >
                  AION <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/rajeevrajora77-lab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/5 text-[#71717A] hover:text-white hover:bg-white/10 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 text-[#71717A] hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:contact@rajora.live"
                aria-label="Email"
                className="p-2 rounded-lg bg-white/5 text-[#71717A] hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-[#52525B] text-xs mb-4 sm:mb-0">
            © 2026 Tool Guide. A product by{' '}
            <a
              href="https://rajora.live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
            >
              Rajora.ai
            </a>
            . All rights reserved.
          </p>

          <p className="text-[#52525B] text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-[#7C3AED]" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = 'FooterSection';

export default FooterSection;
