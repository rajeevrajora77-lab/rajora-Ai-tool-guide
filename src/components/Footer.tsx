import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink } from 'lucide-react';

const FooterSection = memo(() => {
  return (
    <footer className="relative w-full border-t border-border/70 bg-background/95">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="section-padding py-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-flex items-center gap-2">
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Tool Guide
              </span>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                by Rajora AI
              </span>
            </Link>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-foreground/70">
              The most comprehensive AI &amp; developer tools discovery platform. Curated, verified, and always free to explore.
            </p>
            <p className="mt-4 font-mono text-xs text-foreground/60">
              Tool Guide is a{' '}
              <a
                href="https://rajora.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-primary/80"
              >
                Rajora AI
              </a>{' '}
              ecosystem product.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground/60">
              Tool Guide
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-foreground/70 transition-colors hover:text-foreground">About</Link></li>
              <li><Link to="/tool-guide" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Explore Tools</Link></li>
              <li><Link to="/categories" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Categories</Link></li>
              <li><Link to="/feedback" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Feedback</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground/70 transition-colors hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground/60">
              Rajora AI Ecosystem
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://rajora.live" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-primary">
                  Rajora AI <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a href="https://chat.rajora.co.in" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-primary">
                  AION <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground/60">
              Contact
            </h4>
            <a
              href="mailto:hello@rajora.live"
              aria-label="Email"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/80 hover:bg-muted transition-colors">
                <Mail size={16} />
              </div>
              hello@rajora.live
            </a>
            <div className="mt-4">
              <a
                href="https://github.com/rajeevrajora77-lab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/80 text-foreground/70 transition-all hover:bg-muted hover:text-foreground"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-10 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-foreground/60">
            <span>© 2026 Rajora AI · Tool Guide</span>
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default FooterSection;
