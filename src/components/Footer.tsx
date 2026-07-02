import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Github, Mail, ExternalLink, Globe, Sparkles, Layers,
  Info, Compass, Grid3X3, MessageSquare, Bot, Shield
} from 'lucide-react';

const FooterSection = memo(() => {
  return (
    <footer className="relative w-full border-t border-border/50 bg-background/95">
      {/* Gradient top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="section-padding py-10 md:py-12">

        {/* Desktop grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-3 inline-flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Rajora<span className="text-primary">.</span>ai
              </span>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                Tool Guide
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-foreground/60 mb-3">
              The most comprehensive AI &amp; developer tools discovery platform.
              Curated, verified, and always free to explore.
            </p>
            <p className="font-mono text-[11px] text-foreground/50">
              Part of the{' '}
              <a href="https://rajora.live" target="_blank" rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-primary/80">Rajora AI</a>{' '}
              ecosystem.
            </p>
          </div>

          {/* Tool Guide links */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <Layers size={13} className="text-primary" />
              <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/50">Tool Guide</h4>
            </div>
            <ul className="space-y-2">
              {[
                { label: 'About',        path: '/about',       icon: Info },
                { label: 'Explore Tools',path: '/tool-guide',  icon: Compass },
                { label: 'Categories',   path: '/categories',  icon: Grid3X3 },
                { label: 'Feedback',     path: '/feedback',    icon: MessageSquare },
                { label: 'Contact',      path: '/contact',     icon: Mail },
              ].map(item => (
                <li key={item.path}>
                  <Link to={item.path}
                    className="group inline-flex items-center gap-2 text-xs text-foreground/60 transition-colors hover:text-foreground">
                    <item.icon size={12} className="text-foreground/30 group-hover:text-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles size={13} className="text-primary" />
              <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/50">Rajora AI</h4>
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Rajora AI', href: 'https://rajora.live',       icon: Globe },
                { label: 'AION',     href: 'https://chat.rajora.co.in', icon: Bot },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs text-foreground/60 transition-colors hover:text-primary">
                    <item.icon size={12} className="text-foreground/30 group-hover:text-primary transition-colors" />
                    {item.label}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <Mail size={13} className="text-primary" />
              <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/50">Contact</h4>
            </div>

            {/* Contact card */}
            <a href="mailto:hello@rajora.live"
              className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 px-3 py-3 transition-all duration-300 hover:border-primary/30 hover:bg-card/90 hover:shadow-lg hover:shadow-primary/5 mb-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Mail size={15} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground font-mono">Email us</p>
                <p className="text-xs font-semibold text-foreground truncate">hello@rajora.live</p>
              </div>
            </a>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a href="https://github.com/rajeevrajora77-lab" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60 text-foreground/60 transition-all hover:bg-muted hover:text-foreground">
                <Github size={14} />
              </a>
              <a href="https://rajora.live" target="_blank" rel="noopener noreferrer" aria-label="Website"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60 text-foreground/60 transition-all hover:bg-muted hover:text-foreground">
                <Globe size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-5 sm:flex-row">
          <div className="flex items-center gap-1.5 text-[11px] text-foreground/50">
            <Shield size={11} className="text-foreground/30" />
            <span>© 2026 Rajora AI · Tool Guide · All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-[11px] text-foreground/50 transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/privacy-policy" className="text-[11px] text-foreground/50 transition-colors hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = 'FooterSection';
export default FooterSection;
