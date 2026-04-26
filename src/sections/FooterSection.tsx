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
      className={`relative w-full bg-[#0B0C10] border-t border-[rgba(242,245,248,0.08)] ${className}`}
    >
      <div ref={contentRef} className="px-[8vw] py-[6vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-['Space_Grotesk'] text-2xl font-bold text-[#F2F5F8] hover:text-[#B6FF2E] transition-colors mb-4 block"
            >
              Rajora<span className="text-[#B6FF2E]">.Ai</span>
            </button>
            <p className="text-[#A7AFBA] text-sm leading-relaxed">
              Build like it's 2026.
              <br />
              Your complete guide to 150+ free developer tools.
            </p>
          </div>

          {/* Layers */}
          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] text-[#A7AFBA] mb-4">
              Layers
            </h4>
            <ul className="space-y-2">
              {layerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#F2F5F8]/80 hover:text-[#B6FF2E] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] text-[#A7AFBA] mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F2F5F8]/80 hover:text-[#B6FF2E] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] text-[#A7AFBA] mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F2F5F8]/80 hover:text-[#B6FF2E] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[rgba(242,245,248,0.08)]">
          <p className="text-[#A7AFBA]/60 text-sm mb-4 sm:mb-0">
            © 2026 Rajora.Ai. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#A7AFBA] hover:text-[#B6FF2E] transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6">
          <p className="text-[#A7AFBA]/40 text-xs flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-[#B6FF2E]" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;