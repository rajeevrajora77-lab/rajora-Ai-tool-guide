import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ExternalLink, Github, BookOpen, Terminal, Sparkles, X } from 'lucide-react';
import { tools, layerInfo, type Tool } from '../data/tools';
import { motion, AnimatePresence } from 'framer-motion';

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
      className={`relative w-full min-h-screen bg-void py-24 ${className}`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-grid-premium" />
      </div>

      <div className="relative section-padding">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Find your next <span className="text-gradient-purple">Intelligence</span>
          </h2>
          <p className="text-zinc-400 font-body max-w-xl leading-relaxed">
            Filter through our curated database of {tools.length}+ premium AI resources 
            vetted for performance and utility.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div ref={searchRef} className="mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative flex-1 max-w-2xl">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                type="text"
                placeholder="Search tools, categories, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-surface/50 backdrop-blur-xl border border-white/5 rounded-xl text-white placeholder-zinc-500 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 focus:outline-none transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500">
                ⌘K
              </div>
            </div>

            {/* View Toggle / Sorting (Placeholder) */}
            <div className="flex items-center gap-4 text-zinc-500 text-sm font-mono">
              <span className="hidden sm:inline">Showing {filteredTools.length} results</span>
            </div>
          </div>

          {/* Layer Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 mr-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Filter By Layer
              </span>
            </div>
            {layerFilters.map((layer) => (
              <button
                key={layer.key}
                onClick={() => setSelectedLayer(layer.key)}
                className={`px-4 py-2 rounded-lg font-body text-sm transition-all duration-300 border ${
                  selectedLayer === layer.key
                    ? 'bg-white text-void border-white font-bold'
                    : 'bg-white/5 text-zinc-400 hover:text-white border-white/5 hover:border-white/10'
                }`}
              >
                {layer.label}
                <span className={`ml-2 text-[10px] ${selectedLayer === layer.key ? 'text-void/60' : 'text-zinc-600'}`}>
                  {layer.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedTool(tool)}
              className="tool-card group relative p-6 bg-surface/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-violet-500/30 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                {/* Layer badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-2 py-1 rounded-md font-mono text-[9px] uppercase tracking-widest border"
                    style={{
                      backgroundColor: `${getLayerColor(tool.layer)}10`,
                      color: getLayerColor(tool.layer),
                      borderColor: `${getLayerColor(tool.layer)}20`,
                    }}
                  >
                    {tool.layer}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 text-zinc-500 group-hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Tool info */}
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-zinc-400 text-sm font-body line-clamp-2 mb-6 group-hover:text-zinc-300 transition-colors">
                  {tool.description}
                </p>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-void/50 rounded text-zinc-500 text-[10px] uppercase tracking-wider font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {tool.tags.length > 3 && (
                    <span className="text-[10px] text-zinc-600 font-mono">+{tool.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-32 glass-card rounded-3xl">
            <div className="mb-4 inline-flex p-4 rounded-full bg-white/5">
              <Search size={32} className="text-zinc-600" />
            </div>
            <p className="text-white text-xl font-display font-bold">No results found</p>
            <p className="text-zinc-500 font-body mt-2">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLayer('all');
              }}
              className="mt-6 px-6 py-2 rounded-lg bg-violet-600 text-white text-sm font-bold hover:bg-violet-500 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {selectedTool && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTool(null)}
              className="absolute inset-0 bg-void/80 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-elevated rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 scrollbar-hide"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border"
                      style={{
                        backgroundColor: `${getLayerColor(selectedTool.layer)}10`,
                        color: getLayerColor(selectedTool.layer),
                        borderColor: `${getLayerColor(selectedTool.layer)}20`,
                      }}
                    >
                      {selectedTool.category}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                      {selectedTool.layer} Layer
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                    {selectedTool.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="p-2 rounded-full bg-white/5 text-zinc-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  {/* Description */}
                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-300 leading-relaxed font-body">
                      {selectedTool.description}
                    </p>
                  </div>

                  {/* Free tier details */}
                  <div className="mt-8 p-6 bg-surface/50 rounded-2xl border border-violet-500/20 group">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={16} className="text-violet-400" />
                      <h4 className="font-mono text-xs uppercase tracking-widest text-violet-400">
                        Free Tier Details
                      </h4>
                    </div>
                    <p className="text-white font-body leading-relaxed group-hover:text-violet-100 transition-colors">
                      {selectedTool.freeTierDetails}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-8">
                  {/* Action buttons */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={selectedTool.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-void font-bold rounded-xl hover:bg-zinc-200 transition-all shadow-lg"
                    >
                      <ExternalLink size={18} />
                      Visit Website
                    </a>
                    {selectedTool.documentationUrl && (
                      <a
                        href={selectedTool.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                      >
                        <BookOpen size={18} />
                        Docs
                      </a>
                    )}
                    {selectedTool.githubUrl && (
                      <a
                        href={selectedTool.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                      >
                        <Github size={18} />
                        Source
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4">
                      Associated Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 rounded-lg text-zinc-400 text-xs font-body hover:text-white hover:bg-white/10 transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Install command (footer) */}
              {selectedTool.installCommand && (
                <div className="mt-12 pt-8 border-t border-white/5">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4">
                    Direct Integration
                  </h4>
                  <div className="flex items-center justify-between gap-4 p-4 bg-void rounded-xl border border-white/5 font-mono text-sm text-zinc-300 group">
                    <div className="flex items-center gap-3">
                      <Terminal size={16} className="text-violet-500" />
                      <code className="text-violet-400">{selectedTool.installCommand}</code>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 hover:text-white">
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DirectorySection;