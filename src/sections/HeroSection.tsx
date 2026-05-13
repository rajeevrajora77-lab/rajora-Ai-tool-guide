import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microcopyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const headline = headlineRef.current;
    const cta = ctaRef.current;
    const microcopy = microcopyRef.current;

    if (!section || !image || !headline || !cta || !microcopy) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation (on page load)
      const entranceTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Image entrance
      entranceTl.fromTo(
        image,
        { x: '8vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0
      );

      // Headline entrance with stagger
      const headlineElements = headline.querySelectorAll('.animate-item');
      entranceTl.fromTo(
        headlineElements,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
        0.2
      );

      // CTA entrance
      entranceTl.fromTo(
        cta.querySelectorAll('.animate-item'),
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        0.5
      );

      // Microcopy entrance
      entranceTl.fromTo(
        microcopy,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.7
      );

      // Scroll-driven EXIT animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([image, headline, cta, microcopy], {
              opacity: 1,
              x: 0,
              y: 0,
            });
          },
        },
      });

      // EXIT phase (70-100%)
      scrollTl.fromTo(
        image,
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cta,
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        microcopy,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToWorkflow = () => {
    const element = document.getElementById('workflow');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDirectory = () => {
    const element = document.getElementById('directory');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-void ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-premium opacity-30" />
        <div className="absolute inset-0 hero-glow" />
      </div>

      <div className="section-padding relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Animated Badge */}
        <div className="animate-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400">
            Curated Intelligence • 2026 Edition
          </span>
        </div>

        {/* Main Title */}
        <h1 
          ref={headlineRef}
          className="animate-item text-5xl md:text-8xl font-display font-bold tracking-tight text-white mb-8 leading-[0.9]"
        >
          Discover the future of{" "}
          <span className="text-gradient-purple">AI Tools</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-item text-lg md:text-xl text-zinc-400 font-body max-w-2xl mx-auto mb-12 leading-relaxed">
          Join 10k+ developers exploring the world's most comprehensive 
          directory of AI tools, curated by <span className="text-white font-medium">Rajora.ai</span>. 
          Built for the next generation of builders.
        </p>

        {/* Action Row */}
        <div
          ref={ctaRef}
          className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToDirectory}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-void font-bold hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
          >
            Explore Directory
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToWorkflow}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Submit a Tool
          </button>
        </div>

        {/* Featured Stats */}
        <div
          ref={microcopyRef}
          className="animate-item mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl border-t border-white/5 pt-12"
        >
          {[
            { label: "Curated Tools", value: "150+" },
            { label: "Daily Updates", value: "Realtime" },
            { label: "Active Users", value: "10k+" },
            { label: "Premium Access", value: "Free" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <p className="text-3xl font-display font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">{stat.value}</p>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;