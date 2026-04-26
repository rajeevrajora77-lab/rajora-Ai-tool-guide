import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import type { Tool } from '../data/tools';

gsap.registerPlugin(ScrollTrigger);

interface LayerSectionProps {
  layerKey: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  tools: Tool[];
  className?: string;
}

const LayerSection = ({
  layerKey,
  title,
  subtitle,
  description,
  image,
  imagePosition,
  tools,
  className = '',
}: LayerSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const imageEl = imageRef.current;
    const toolsEl = toolsRef.current;

    if (!section || !content || !imageEl || !toolsEl) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      if (imagePosition === 'right') {
        // Content from left, image from right
        scrollTl.fromTo(
          content,
          { x: '-18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
        scrollTl.fromTo(
          imageEl,
          { x: '18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      } else {
        // Image from left, content from right
        scrollTl.fromTo(
          imageEl,
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
        scrollTl.fromTo(
          content,
          { x: '18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        );
      }

      // Tools strip enters from bottom
      scrollTl.fromTo(
        toolsEl,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      // EXIT (70-100%)
      if (imagePosition === 'right') {
        scrollTl.fromTo(
          content,
          { x: 0, opacity: 1 },
          { x: '-10vw', opacity: 0, ease: 'power2.in' },
          0.7
        );
        scrollTl.fromTo(
          imageEl,
          { x: 0, opacity: 1 },
          { x: '10vw', opacity: 0, ease: 'power2.in' },
          0.7
        );
      } else {
        scrollTl.fromTo(
          imageEl,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        );
        scrollTl.fromTo(
          content,
          { y: 0, opacity: 1 },
          { y: '-6vh', opacity: 0, ease: 'power2.in' },
          0.7
        );
      }

      scrollTl.fromTo(
        toolsEl,
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, [imagePosition]);

  const isImageRight = imagePosition === 'right';

  return (
    <section
      ref={sectionRef}
      id={`layer-${layerKey}`}
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

      {/* Image */}
      <div
        ref={imageRef}
        className={`absolute hidden lg:block ${
          isImageRight ? 'right-[8vw]' : 'left-0'
        }`}
        style={{
          top: '14vh',
          width: isImageRight ? '40vw' : '46vw',
          height: '72vh',
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[10px]"
          style={{ boxShadow: '0 18px 50px rgba(0,0,0,0.55)' }}
        />
        <div
          className={`absolute inset-0 rounded-[10px] ${
            isImageRight
              ? ''
              : 'bg-gradient-to-r from-transparent to-[#0B0C10]/60'
          }`}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`absolute flex flex-col justify-center px-[8vw] ${
          isImageRight ? 'left-0' : 'right-0'
        }`}
        style={{
          top: '18vh',
          width: isImageRight ? '45vw' : '50vw',
          height: '50vh',
        }}
      >
        <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] text-[#B6FF2E] mb-3">
          {subtitle}
        </span>
        <h2
          className="font-['Space_Grotesk'] font-bold text-[#F2F5F8] leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
        >
          {title}
        </h2>
        <p
          className="text-[#A7AFBA] leading-relaxed"
          style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}
        >
          {description}
        </p>
      </div>

      {/* Tools Strip */}
      <div
        ref={toolsRef}
        className="absolute bottom-[10vh] left-[8vw] right-[8vw]"
      >
        <div className="flex flex-wrap gap-3">
          {tools.slice(0, 6).map((tool) => (
            <a
              key={tool.id}
              href={tool.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-3 bg-[#14161B] rounded-[10px] border border-[rgba(242,245,248,0.12)] hover:border-[#B6FF2E]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-[#F2F5F8] font-medium text-sm">
                {tool.name}
              </span>
              <ExternalLink
                size={14}
                className="text-[#A7AFBA] group-hover:text-[#B6FF2E] transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayerSection;