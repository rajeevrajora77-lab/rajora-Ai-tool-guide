import { useState, useMemo, useDeferredValue, useCallback, memo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Search, Filter, ExternalLink, X, Terminal, BookOpen, Github,
  ArrowRight, Layers
} from 'lucide-react';
import { tools, layerInfo, type Tool } from '../data/tools';

const ITEMS_PER_ROW_DESKTOP = 4;
const ITEMS_PER_ROW_TABLET = 2;
const ROW_HEIGHT = 220;
const ROW_GAP = 16;

const layerFilters = [
  { key: 'all', label: 'All', count: tools.length },
  { key: 'foundation', label: 'Foundation', count: layerInfo.foundation.tools.length },
  { key: 'cloud', label: 'Cloud', count: layerInfo.cloud.tools.length },
  { key: 'devops', label: 'DevOps', count: layerInfo.devops.tools.length },
  { key: 'genai', label: 'GenAI', count: layerInfo.genai.tools.length },
  { key: 'analytics', label: 'Analytics', count: layerInfo.analytics.tools.length },
  { key: 'fullstack', label: 'Full Stack', count: layerInfo.fullstack.tools.length },
];

function getCategoryColor(layer: string): string {
  const colors: Record<string, string> = {
    foundation: '#10B981',
    cloud: '#06B6D4',
    devops: '#F59E0B',
    genai: '#7C3AED',
    analytics: '#EC4899',
    fullstack: '#3B82F6',
  };
  return colors[layer] || '#7C3AED';
}

// ─── Tool Card ───
const ToolCard = memo(({ tool }: { tool: Tool }) => (
  <Link
    to={`/tool/${tool.id}`}
    className="group flex flex-col p-5 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#7C3AED]/30 transition-all duration-300 h-full cursor-pointer"
  >
    <div className="flex items-center justify-between mb-3">
      <span
        className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider"
        style={{
          backgroundColor: `${getCategoryColor(tool.layer)}15`,
          color: getCategoryColor(tool.layer),
        }}
      >
        {tool.layer}
      </span>
      <ExternalLink
        size={14}
        className="text-[#52525B] opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>

    <h3 className="font-display font-semibold text-white text-base mb-1.5 group-hover:text-[#A78BFA] transition-colors">
      {tool.name}
    </h3>

    <p className="text-xs text-[#71717A] line-clamp-2 leading-relaxed mb-3 flex-grow">
      {tool.description}
    </p>

    <div className="flex flex-wrap gap-1 mt-auto">
      {tool.tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 bg-white/5 rounded text-[#52525B] text-[10px] uppercase tracking-wide"
        >
          {tag}
        </span>
      ))}
    </div>
  </Link>
));
ToolCard.displayName = 'ToolCard';

// ─── Tool Detail Modal ───
const ToolModal = memo(({ tool, onClose }: { tool: Tool; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0A0A0F]/90 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.96, opacity: 0 }}
      className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#12121A] rounded-2xl border border-white/10 p-6 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <span
            className="inline-block px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider mb-2"
            style={{
              backgroundColor: `${getCategoryColor(tool.layer)}15`,
              color: getCategoryColor(tool.layer),
            }}
          >
            {tool.category}
          </span>
          <h3 className="font-display text-2xl font-bold text-white">
            {tool.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-white/5 text-[#71717A] hover:text-white transition-all"
        >
          <X size={20} />
        </button>
      </div>

      <p className="text-[#A1A1AA] text-base mb-6 leading-relaxed">
        {tool.description}
      </p>

      <div className="p-4 rounded-xl bg-[#0A0A0F] border border-[#7C3AED]/20 mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#7C3AED] mb-2">
          Free Tier
        </h4>
        <p className="text-white text-sm">{tool.freeTierDetails}</p>
      </div>

      {tool.installCommand && (
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A] mb-2">
            Install Command
          </h4>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0A0A0F] border border-white/5 font-mono text-sm text-white">
            <Terminal size={14} className="text-[#7C3AED] shrink-0" />
            <code className="break-all">{tool.installCommand}</code>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A] mb-2">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[#A1A1AA] text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#7C3AED] text-white font-medium text-sm rounded-xl hover:bg-[#6D28D9] transition-colors"
        >
          <ExternalLink size={16} />
          Official Website
        </a>
        {tool.documentationUrl && (
          <a
            href={tool.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-white/10 text-white text-sm rounded-xl hover:bg-white/5 transition-all"
          >
            <BookOpen size={16} />
            Documentation
          </a>
        )}
        {tool.githubUrl && (
          <a
            href={tool.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-white/10 text-white text-sm rounded-xl hover:bg-white/5 transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
));
ToolModal.displayName = 'ToolModal';

// ─── Main Page ───
const ToolExplorerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Deferred search for performance
  const deferredQuery = useDeferredValue(searchQuery);

  // Memoized filtered tools
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        deferredQuery === '' ||
        tool.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(deferredQuery.toLowerCase())
        );

      const matchesLayer =
        selectedLayer === 'all' || tool.layer === selectedLayer;

      return matchesSearch && matchesLayer;
    });
  }, [deferredQuery, selectedLayer]);

  // Grid layout: chunk tools into rows
  const getItemsPerRow = useCallback(() => {
    if (typeof window === 'undefined') return ITEMS_PER_ROW_DESKTOP;
    if (window.innerWidth >= 1280) return ITEMS_PER_ROW_DESKTOP;
    if (window.innerWidth >= 768) return ITEMS_PER_ROW_TABLET;
    return 1;
  }, []);

  const itemsPerRow = getItemsPerRow();
  const rowCount = Math.ceil(filteredTools.length / itemsPerRow);

  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT + ROW_GAP,
    overscan: 3,
  });

  const handleLayerSelect = useCallback((key: string) => {
    setSelectedLayer(key);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24"
    >
      <div className="section-padding">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-[#7C3AED]" />
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED]">
              Tool Guide Explorer
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Find the perfect tool
          </h1>
          <p className="text-[#71717A]">
            Search, filter, and discover from{' '}
            <span className="text-white font-medium">{tools.length}+</span>{' '}
            curated developer tools.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#52525B]"
            />
            <input
              type="text"
              placeholder="Search tools (e.g., 'Docker', 'LLM', 'SQL')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#12121A] border border-white/8 rounded-xl text-white placeholder-[#52525B] focus:border-[#7C3AED]/40 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/20 transition-all text-sm"
              id="tool-search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-white/5 text-[#52525B] hover:text-white transition-all"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-2 mr-2">
              <Filter size={14} className="text-[#52525B]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#52525B]">
                Filter:
              </span>
            </div>
            {layerFilters.map((layer) => (
              <button
                key={layer.key}
                onClick={() => handleLayerSelect(layer.key)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  selectedLayer === layer.key
                    ? 'bg-[#7C3AED] text-white'
                    : 'bg-white/5 text-[#71717A] hover:text-white hover:bg-white/8 border border-white/5'
                }`}
              >
                {layer.label}
                <span className="ml-1 opacity-60">({layer.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-xs text-[#52525B] font-mono">
            {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Virtualized Grid */}
        {filteredTools.length > 0 ? (
          <div
            ref={parentRef}
            className="overflow-auto"
            style={{ maxHeight: 'calc(100vh - 300px)' }}
          >
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
              }}
            >
              {virtualizer.getVirtualItems().map((virtualRow) => {
                const startIndex = virtualRow.index * itemsPerRow;
                const rowTools = filteredTools.slice(startIndex, startIndex + itemsPerRow);

                return (
                  <div
                    key={virtualRow.key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <div className={`grid gap-4 h-full ${
                      itemsPerRow === 4
                        ? 'grid-cols-4'
                        : itemsPerRow === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-1'
                    }`}>
                      {rowTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#71717A] text-lg mb-4">
              No tools found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLayer('all');
              }}
              className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </motion.main>
  );
};

export default ToolExplorerPage;
