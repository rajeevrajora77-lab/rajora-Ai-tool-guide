import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer, Copy, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface WorkflowSectionProps {
  className?: string;
}

const WorkflowSection = ({ className = '' }: WorkflowSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;
    const body = bodyRef.current;

    if (!section || !image || !headline || !cards || !body) return;

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
      // Left image panel enters from left
      scrollTl.fromTo(
        image,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Headline enters from right
      scrollTl.fromTo(
        headline,
        { x: '18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Cards stagger in from bottom
      const cardElements = cards.querySelectorAll('.step-card');
      cardElements.forEach((card, index) => {
        scrollTl.fromTo(
          card,
          { y: '18vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05 + index * 0.05
        );
      });

      // Body paragraph enters
      scrollTl.fromTo(
        body,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%) - elements hold position

      // EXIT (70-100%)
      scrollTl.fromTo(
        image,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        headline,
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      cardElements.forEach((card) => {
        scrollTl.fromTo(
          card,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.7
        );
      });

      scrollTl.fromTo(
        body,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Choose your stack',
      icon: MousePointer,
      description: 'Pick from 6 curated layers',
    },
    {
      number: '02',
      title: 'Copy the commands',
      icon: Copy,
      description: 'Follow step-by-step setup',
    },
    {
      number: '03',
      title: 'Deploy in minutes',
      icon: Rocket,
      description: 'Ship to production fast',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="workflow"
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

      {/* Left Image Panel */}
      <div
        ref={imageRef}
        className="absolute left-0 top-0 h-full hidden lg:block"
        style={{ width: '46vw' }}
      >
        <img
          src="/workspace_left_panel.jpg"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0C10]/80" />
      </div>

      {/* Right Content Area */}
      <div
        className="absolute right-0 top-0 h-full flex flex-col justify-center px-[6vw]"
        style={{ width: '100%', paddingLeft: '52vw' }}
      >
        {/* Headline */}
        <div ref={headlineRef} className="mb-8">
          <h2
            className="font-['Space_Grotesk'] font-bold text-[#F2F5F8] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Pick a layer.
            <br />
            <span className="text-[#B6FF2E]">Follow the setup.</span>
            <br />
            Ship faster.
          </h2>
        </div>

        {/* Step Cards */}
        <div ref={cardsRef} className="flex flex-col sm:flex-row gap-4 mb-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card flex-1 p-5 bg-[#14161B] rounded-[10px] border-t-2 border-[#B6FF2E] hover:border-[#B6FF2E] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <step.icon size={20} className="text-[#B6FF2E]" />
                <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#B6FF2E]">
                  {step.number}
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-[#F2F5F8] text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-[#A7AFBA] text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Body Paragraph */}
        <p
          ref={bodyRef}
          className="text-[#A7AFBA] leading-relaxed max-w-md"
          style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}
        >
          We've mapped{' '}
          <span className="text-[#F2F5F8] font-medium">150+ free tools</span> into
          six layers—so you can start anywhere and still end up production-ready.
        </p>
      </div>
    </section>
  );
};

export default WorkflowSection;