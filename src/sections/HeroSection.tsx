import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(badgeRef.current, { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0)
        .fromTo(headlineRef.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.15)
        .fromTo(subRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.35)
        .fromTo(ctaRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
        .fromTo(statsRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.7);

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.5,
        },
      });
      scrollTl
        .to(headlineRef.current, { y: -40, opacity: 0, ease: 'power2.in' }, 0.6)
        .to(subRef.current,     { y: -20, opacity: 0, ease: 'power2.in' }, 0.65)
        .to(ctaRef.current,     { y: 20,  opacity: 0, ease: 'power2.in' }, 0.7)
        .to(statsRef.current,   { opacity: 0, ease: 'power2.in' }, 0.75);
    }, section);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-void ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-premium opacity-[var(--glow-opacity)]" />
        <div className="absolute inset-0 hero-glow" />
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />
      </div>

      <div className="section-padding relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-0">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-violet-500/10 border border-violet-500/20 mb-10
                     backdrop-blur-md"
        >
          <Sparkles size={12} className="text-violet-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-violet-400">
            Rajora AI &nbsp;·&nbsp; 2026 Edition
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-7xl md:text-[88px] font-display font-bold tracking-tight
                     text-white leading-[0.92] mb-8"
        >
          The Ultimate
          <br />
          <span className="text-gradient-purple">AI Tool Guide</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="text-base md:text-lg text-zinc-400 font-body max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Discover, compare and launch the world's best developer &amp; AI tools —
          curated by <span className="text-white font-medium">Rajora AI</span>.
          From foundation to GenAI, everything in one place.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('directory')}
            className="group w-full sm:w-auto flex items-center justify-center gap-2
                       px-8 py-4 rounded-xl bg-white text-zinc-900 font-bold text-sm
                       hover:bg-zinc-100 transition-all shadow-2xl shadow-white/10
                       hover:shadow-white/20 active:scale-[0.98]"
          >
            Explore Directory
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://chat.rajora.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2
                       px-8 py-4 rounded-xl border border-white/10 bg-white/5
                       text-white font-bold text-sm
                       hover:border-violet-500/40 hover:bg-violet-500/10
                       transition-all active:scale-[0.98]"
          >
            <Zap size={16} className="text-violet-400" />
            Try AION AI
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl
                     border-t border-white/5 pt-12"
        >
          {[
            { label: 'Curated Tools',   value: '150+' },
            { label: 'Daily Updates',   value: 'Realtime' },
            { label: 'Active Users',    value: '10k+' },
            { label: 'Always',          value: 'Free' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <p className="text-3xl font-display font-bold text-white mb-1
                            group-hover:text-violet-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
