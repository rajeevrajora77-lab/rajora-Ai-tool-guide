import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ExternalLink, Github, BookOpen, Terminal, Filter } from 'lucide-react';
import { tools, layerInfo, type Tool } from '../data/tools';

gsap.registerPlugin(ScrollTrigger);

interface DirectorySectionProps {
  className?: string;
}

const DirectorySection = ({ className = '' }: DirectorySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const search = searchRef.current;
    const grid = gridRef.current;

    if (!section || !header || !search || !grid) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Search bar animation
      gsap.fromTo(
        search,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid cards animation
      const cards = grid.querySelectorAll('.tool-card');
      gsap.fromTo(
        cards,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Filter tools based on search and layer
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      searchQuery === '' ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesLayer =
      selectedLayer === 'all' || tool.layer === selectedLayer;

    return matchesSearch && matchesLayer;
  });

  const layerFilters = [
    { key: 'all', label: 'All', count: tools.length },
    { key: 'foundation', label: 'Foundation', count: layerInfo.foundation.tools.length },
    { key: 'cloud', label: 'Cloud', count: layerInfo.cloud.tools.length },
    { key: 'devops', label: 'DevOps', count: layerInfo.devops.tools.length },
    { key: 'genai', label: 'GenAI', count: layerInfo.genai.tools.length },
    { key: 'analytics', label: 'Analytics', count: layerInfo.analytics.tools.length },
    { key: 'fullstack', label: 'Full Stack', count: layerInfo.fullstack.tools.length },
  ];

  const getLayerColor = (layer: string) => {
    const colors: Record<string, string> = {
      foundation: '#B6FF2E',
      cloud: '#00D4FF',
      devops: '#FF6B6B',
      genai: '#A855F7',
      analytics: '#F59E0B',
      fullstack: '#EC4899',
    };
    return colors[layer] || '#B6FF2E';
  };

  return (
    <section
      ref={sectionRef}
      id="directory"
      className={`relative w-full min-h-screen bg-[#0B0C10] py-[6vh] ${className}`}
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

      <div className="relative px-[8vw]">
        {/* Header */}
        <div ref={headerRef} className="mb-6">
          <h2
            className="font-['Space_Grotesk'] font-bold text-[#F2F5F8] mb-2"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Find a <span className="text-[#B6FF2E]">tool</span>
          </h2>
          <p className="text-[#A7AFBA]" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            Filter by layer, category, or search by name.{' '}
            <span className="text-[#F2F5F8]">{tools.length}+ tools</span> available.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div ref={searchRef} className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A7AFBA]"
            />
            <input
              type="text"
              placeholder="Search tools (e.g., 'Docker', 'LLM', 'SQL')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#14161B] border border-[rgba(242,245,248,0.12)] rounded-[10px] text-[#F2F5F8] placeholder-[#A7AFBA]/50 focus:border-[#B6FF2E]/50 focus:outline-none transition-colors"
            />
          </div>

          {/* Layer Filters */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-2">
              <Filter size={16} className="text-[#A7AFBA]" />
              <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#A7AFBA]">
                Filter:
              </span>
            </div>
            {layerFilters.map((layer) => (
              <button
                key={layer.key}
                onClick={() => setSelectedLayer(layer.key)}
                className={`px-3 py-2 rounded-[8px] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.06em] transition-all duration-300 ${
                  selectedLayer === layer.key
                    ? 'bg-[#B6FF2E] text-[#0B0C10]'
                    : 'bg-[#14161B] text-[#A7AFBA] hover:text-[#F2F5F8] border border-[rgba(242,245,248,0.12)]'
                }`}
              >
                {layer.label}
                <span className="ml-1 opacity-60">({layer.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool)}
              className="tool-card group p-5 bg-[#14161B] rounded-[10px] border border-[rgba(242,245,248,0.08)] hover:border-[#B6FF2E]/40 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Layer badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-2 py-1 rounded-[6px] font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.08em]"
                  style={{
                    backgroundColor: `${getLayerColor(tool.layer)}20`,
                    color: getLayerColor(tool.layer),
                  }}
                >
                  {tool.layer}
                </span>
                <ExternalLink
                  size={14}
                  className="text-[#A7AFBA] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Tool name */}
              <h3 className="font-['Space_Grotesk'] font-semibold text-[#F2F5F8] text-lg mb-2 group-hover:text-[#B6FF2E] transition-colors">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="text-[#A7AFBA] text-sm line-clamp-2 mb-3">
                {tool.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {tool.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#0B0C10] rounded-[4px] text-[#A7AFBA] text-[10px] uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#A7AFBA] text-lg">
              No tools found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLayer('all');
              }}
              className="mt-4 px-4 py-2 text-[#B6FF2E] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0B0C10]/90 backdrop-blur-sm"
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#14161B] rounded-[16px] border border-[rgba(242,245,248,0.12)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span
                  className="inline-block px-2 py-1 rounded-[6px] font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.08em] mb-2"
                  style={{
                    backgroundColor: `${getLayerColor(selectedTool.layer)}20`,
                    color: getLayerColor(selectedTool.layer),
                  }}
                >
                  {selectedTool.category}
                </span>
                <h3
                  className="font-['Space_Grotesk'] font-bold text-[#F2F5F8]"
                  style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
                >
                  {selectedTool.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTool(null)}
                className="text-[#A7AFBA] hover:text-[#F2F5F8] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-[#A7AFBA] text-lg mb-6">
              {selectedTool.description}
            </p>

            {/* Free tier details */}
            <div className="p-4 bg-[#0B0C10] rounded-[10px] border border-[#B6FF2E]/30 mb-6">
              <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#B6FF2E] mb-2">
                Free Tier
              </h4>
              <p className="text-[#F2F5F8]">{selectedTool.freeTierDetails}</p>
            </div>

            {/* Install command */}
            {selectedTool.installCommand && (
              <div className="mb-6">
                <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#A7AFBA] mb-2">
                  Install Command
                </h4>
                <div className="flex items-center gap-2 p-3 bg-[#0B0C10] rounded-[8px] font-mono text-sm text-[#F2F5F8]">
                  <Terminal size={14} className="text-[#B6FF2E]" />
                  <code>{selectedTool.installCommand}</code>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mb-6">
              <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#A7AFBA] mb-2">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#0B0C10] rounded-[6px] text-[#A7AFBA] text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={selectedTool.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#B6FF2E] text-[#0B0C10] font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.06em] font-medium rounded-[10px] hover:bg-[#d4ff6e] transition-colors"
              >
                <ExternalLink size={16} />
                Official Website
              </a>
              {selectedTool.documentationUrl && (
                <a
                  href={selectedTool.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border border-[rgba(242,245,248,0.2)] text-[#F2F5F8] font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.06em] rounded-[10px] hover:border-[#B6FF2E]/50 hover:bg-[#B6FF2E]/10 transition-all"
                >
                  <BookOpen size={16} />
                  Documentation
                </a>
              )}
              {selectedTool.githubUrl && (
                <a
                  href={selectedTool.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border border-[rgba(242,245,248,0.2)] text-[#F2F5F8] font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.06em] rounded-[10px] hover:border-[#B6FF2E]/50 hover:bg-[#B6FF2E]/10 transition-all"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DirectorySection;