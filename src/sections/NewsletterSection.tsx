import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection = ({ className = '' }: NewsletterSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.children,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className={`relative w-full bg-[#14161B] border-t border-[#B6FF2E]/20 py-[8vh] ${className}`}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(242, 245, 248, 0.02) 0px,
              rgba(242, 245, 248, 0.02) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(242, 245, 248, 0.02) 0px,
              rgba(242, 245, 248, 0.02) 1px,
              transparent 1px,
              transparent 40px
            )
          `,
        }}
      />

      <div
        ref={contentRef}
        className="relative max-w-[640px] mx-auto text-center px-6"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={20} className="text-[#B6FF2E]" />
          <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] text-[#B6FF2E]">
            Stay Updated
          </span>
          <Sparkles size={20} className="text-[#B6FF2E]" />
        </div>

        <h2
          className="font-['Space_Grotesk'] font-bold text-[#F2F5F8] mb-4"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
        >
          Get the next layer first.
        </h2>

        <p className="text-[#A7AFBA] mb-8" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
          One email per month. New tools, free tiers, and setup shortcuts.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitted}
            className="flex-1 px-5 py-4 bg-[#0B0C10] border border-[rgba(242,245,248,0.12)] rounded-[10px] text-[#F2F5F8] placeholder-[#A7AFBA]/50 focus:border-[#B6FF2E]/50 focus:outline-none transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitted || !email}
            className={`flex items-center justify-center gap-2 px-6 py-4 font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.06em] font-medium rounded-[10px] transition-all duration-300 ${
              isSubmitted
                ? 'bg-green-500 text-white'
                : 'bg-[#B6FF2E] text-[#0B0C10] hover:bg-[#d4ff6e] hover:-translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            {isSubmitted ? (
              <>
                <Check size={18} />
                Subscribed!
              </>
            ) : (
              <>
                <Send size={18} />
                Subscribe
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-[#A7AFBA]/60 text-sm">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;