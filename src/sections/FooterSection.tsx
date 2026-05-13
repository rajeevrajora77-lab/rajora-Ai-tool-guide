import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';

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
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const layerLinks = [
    { label: 'Foundation', id: 'layer-foundation' },
    { label: 'Cloud', id: 'layer-cloud' },
    { label: 'DevOps', id: 'layer-devops' },
    { label: 'GenAI', id: 'layer-genai' },
    { label: 'Analytics', id: 'layer-analytics' },
    { label: 'Full Stack', id: 'layer-fullstack' },
  ];

  const resourceLinks = [
    { label: 'Setup Guides', href: '#' },
    { label: 'Cheatsheets', href: '#' },
    { label: 'Templates', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer
      ref={sectionRef}
      className={`relative w-full bg-void border-t border-white/5 ${className}`}
    >
      <div ref={contentRef} className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-2xl font-bold text-white mb-6 group transition-colors"
            >
              Rajora<span className="text-violet-500 group-hover:text-violet-400 transition-colors">.</span>ai
            </button>
            <p className="text-zinc-400 font-body text-sm leading-relaxed max-w-xs">
              Empowering the next generation of builders with curated intelligence 
              and premium developer resources.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              {layerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-body">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            <span>© 2026 Rajora.ai</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={10} className="text-violet-500" /> for the community
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;