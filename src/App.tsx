import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import WorkflowSection from './sections/WorkflowSection';
import LayerSection from './sections/LayerSection';
import DirectorySection from './sections/DirectorySection';
import NewsletterSection from './sections/NewsletterSection';
import FooterSection from './sections/FooterSection';
import { layerInfo } from './data/tools';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount before setting up global snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative">
      <Navigation />
      
      {/* Section 1: Hero */}
      <HeroSection className="z-10" />
      
      {/* Section 2: Workflow */}
      <WorkflowSection className="z-20" />
      
      {/* Section 3: Foundation (Layer 0) */}
      <LayerSection
        layerKey="foundation"
        title="Layer 0"
        subtitle="Foundation"
        description="Terminal, Git, VS Code, Node, Python, Docker. Get your environment right once—then build anything."
        image="/terminal_coder.jpg"
        imagePosition="right"
        tools={layerInfo.foundation.tools.slice(0, 6)}
        className="z-30"
      />
      
      {/* Section 4: Cloud & DevOps (Layers 1-2) */}
      <LayerSection
        layerKey="cloud"
        title="Cloud & DevOps"
        subtitle="Layers 1–2"
        description="Cloud platforms, deployment, CI/CD pipelines, and container orchestration."
        image="/cloud_server_room.jpg"
        imagePosition="left"
        tools={[
          ...layerInfo.cloud.tools.slice(0, 3),
          ...layerInfo.devops.tools.slice(0, 3)
        ]}
        className="z-40"
      />
      
      {/* Section 5: GenAI & Data Science (Layer 3) */}
      <LayerSection
        layerKey="genai"
        title="GenAI & Data Science"
        subtitle="Layer 3"
        description="LangChain, vector databases, free LLM APIs, and experiment tracking—wired together so you can ship AI features fast."
        image="/ai_brain_visual.jpg"
        imagePosition="right"
        tools={layerInfo.genai.tools.slice(0, 6)}
        className="z-50"
      />
      
      {/* Section 6: Data Analytics (Layer 4) */}
      <LayerSection
        layerKey="analytics"
        title="Data Analytics"
        subtitle="Layer 4"
        description="SQL, Python analytics, visualization libraries, and BI tools for data-driven decisions."
        image="/data_dashboard.jpg"
        imagePosition="left"
        tools={layerInfo.analytics.tools.slice(0, 6)}
        className="z-[60]"
      />
      
      {/* Section 7: Full Stack (Layer 5) */}
      <LayerSection
        layerKey="fullstack"
        title="Full Stack"
        subtitle="Layer 5"
        description="Next.js, Supabase, auth, UI kits, and deployment—everything you need to ship a complete product."
        image="/fullstack_ui.jpg"
        imagePosition="right"
        tools={layerInfo.fullstack.tools.slice(0, 6)}
        className="z-[70]"
      />
      
      {/* Section 8: Directory (Search & Filter) */}
      <DirectorySection className="z-[80]" />
      
      {/* Section 9: Newsletter */}
      <NewsletterSection className="z-[90]" />
      
      {/* Section 10: Footer */}
      <FooterSection className="z-[100]" />
    </div>
  );
}

export default App;