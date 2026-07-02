import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 10, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5,
          scrollTrigger: { trigger: section, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const layerLinks = [
    { label: 'Foundation', id: 'layer-foundation' },
    { label: 'Cloud',      id: 'layer-cloud' },
    { label: 'DevOps',     id: 'layer-devops' },
    { label: 'GenAI',      id: 'layer-genai' },
    { label: 'Analytics',  id: 'layer-analytics' },
    { label: 'Full Stack', id: 'layer-fullstack' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rajeevrajora77-lab', label: 'GitHub' },
    { icon: Mail,   href: 'mailto:hello@rajora.live',              label: 'Email' },
  ];

  return (
    <footer
      ref={sectionRef}
      className={`relative w-full bg-void border-t border-white/5 ${className}`}
    >
      <div ref={contentRef} className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-2xl font-bold text-white mb-4 block text-left"
            >
              Rajora<span className="text-violet-500">.ai</span>
            </button>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of builders with curated AI &amp;
              developer tool intelligence.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {layerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-5">
              Contact
            </h4>
            <a
              href="mailto:hello@rajora.live"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <Mail size={14} />
              hello@rajora.live
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6
                        pt-10 border-t border-white/5">
          <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            © 2026 Rajora AI · All rights reserved
          </span>

          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-zinc-500 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
