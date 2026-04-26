import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers } from 'lucide-react';

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
      className={`relative w-full h-screen overflow-hidden bg-[#0B0C10] ${className}`}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(242, 245, 248, 0.03) 0px,
              rgba(242, 245, 248, 0.03) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(242, 245, 248, 0.03) 0px,
              rgba(242, 245, 248, 0.03) 1px,
              transparent 1px,
              transparent 40px
            )
          `,
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Image (right) */}
      <div
        ref={imageRef}
        className="absolute hidden lg:block"
        style={{
          left: '52vw',
          top: '14vh',
          width: '44vw',
          height: '72vh',
        }}
      >
        <img
          src="/hero_portrait.jpg"
          alt="Developer"
          className="w-full h-full object-cover rounded-[10px]"
          style={{
            boxShadow: '0 18px 50px rgba(0,0,0,0.55)',
          }}
        />
        {/* Neon accent border */}
        <div className="absolute inset-0 rounded-[10px] border border-[#B6FF2E]/20 pointer-events-none" />
      </div>

      {/* Headline Block (left) */}
      <div
        ref={headlineRef}
        className="absolute flex flex-col justify-center"
        style={{
          left: '8vw',
          top: '22vh',
          width: 'clamp(320px, 40vw, 600px)',
        }}
      >
        <h1 className="animate-item font-['Space_Grotesk'] font-bold text-[#F2F5F8] leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          <span className="relative inline-block">
            Build
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#B6FF2E]" />
          </span>{' '}
          like it's{' '}
          <span className="text-[#B6FF2E]">2026</span>.
        </h1>
        
        <p className="animate-item mt-6 text-[#A7AFBA] leading-relaxed"
          style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
        >
          A free, step-by-step guide to{' '}
          <span className="text-[#F2F5F8] font-medium">150+ tools</span> across
          GenAI, DevOps, Cloud, Data, and Full Stack.
        </p>
      </div>

      {/* CTA Row */}
      <div
        ref={ctaRef}
        className="absolute flex flex-col sm:flex-row gap-4"
        style={{
          left: '8vw',
          top: '62vh',
        }}
      >
        <button
          onClick={scrollToWorkflow}
          className="animate-item group flex items-center gap-3 px-6 py-4 bg-[#B6FF2E] text-[#0B0C10] font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.08em] font-medium rounded-[10px] hover:bg-[#d4ff6e] transition-all duration-300 hover:-translate-y-[2px]"
        >
          <Layers size={18} />
          Explore the Layers
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
        
        <button
          onClick={scrollToDirectory}
          className="animate-item px-6 py-4 border border-[#B6FF2E]/40 text-[#F2F5F8] font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.08em] rounded-[10px] hover:border-[#B6FF2E] hover:bg-[#B6FF2E]/10 transition-all duration-300"
        >
          View the Directory
        </button>
      </div>

      {/* Microcopy */}
      <div
        ref={microcopyRef}
        className="absolute font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#A7AFBA]/70"
        style={{
          left: '8vw',
          top: '86vh',
        }}
      >
        Last updated: Feb 2026 • 150+ tools • Always-free tiers
      </div>
    </section>
  );
};

export default HeroSection;