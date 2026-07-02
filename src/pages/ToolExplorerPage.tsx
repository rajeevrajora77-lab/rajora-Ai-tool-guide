import { useState, useMemo, useDeferredValue, useCallback, memo, useRef, type ChangeEvent, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import {
  Search, Filter, ExternalLink, X, Terminal, BookOpen, Github,
  Layers
} from 'lucide-react';
import { tools, layerInfo, type Tool } from '../data/tools';
import ToolCard from '../components/ToolCard';

const ITEMS_PER_ROW_DESKTOP = 4;
const ITEMS_PER_ROW_TABLET = 2;
const ROW_HEIGHT = 260;  // increased from 220 to prevent clipping
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

// ─── Tool Detail Modal ───
const ToolModal = memo(({ tool, onClose }: { tool: Tool; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-card/90 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.96, opacity: 0 }}
      className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border/70 p-6 shadow-2xl"
      onClick={(e: MouseEvent) => e.stopPropagation()}
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
          <h3 className="font-display text-2xl font-bold text-foreground">
            {tool.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all"
        >
          <X size={20} />
        </button>
      </div>

      <p className="text-muted-foreground text-base mb-6 leading-relaxed">
        {tool.description}
      </p>

      <div className="p-4 rounded-xl bg-card border border-[#7C3AED]/20 mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#7C3AED] mb-2">
          Free Tier
        </h4>
        <p className="text-foreground text-sm">{tool.freeTierDetails}</p>
      </div>

      {tool.installCommand && (
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Install Command
          </h4>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/70 font-mono text-sm text-foreground">
            <Terminal size={14} className="text-[#7C3AED] shrink-0" />
            <code className="break-all">{tool.installCommand}</code>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-muted/70 rounded-lg text-muted-foreground text-xs">
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
          className="flex items-center gap-2 px-5 py-3 bg-primary text-foreground font-medium text-sm rounded-xl hover:bg-primary/90 transition-colors"
        >
          <ExternalLink size={16} />
          Official Website
        </a>
        {tool.documentationUrl && (
          <a
            href={tool.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-border/70 text-foreground text-sm rounded-xl hover:bg-muted/70 transition-all"
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
            className="flex items-center gap-2 px-5 py-3 border border-border/70 text-foreground text-sm rounded-xl hover:bg-muted/70 transition-all"
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

  const deferredQuery = useDeferredValue(searchQuery);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        deferredQuery === '' ||
        tool.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(deferredQuery.toLowerCase())
        );
      const matchesLayer = selectedLayer === 'all' || tool.layer === selectedLayer;
      return matchesSearch && matchesLayer;
    });
  }, [deferredQuery, selectedLayer]);

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
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Find the perfect tool
          </h1>
          <p className="text-muted-foreground">
            Search, filter, and discover from{' '}
            <span className="text-foreground font-medium">{tools.length}+</span>{' '}
            curated developer tools.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search tools (e.g., 'Docker', 'LLM', 'SQL')..."
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-card border border-border/70 rounded-xl text-foreground placeholder-[#52525B] focus:border-[#7C3AED]/40 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/20 transition-all text-sm"
              id="tool-search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-2 mr-2">
              <Filter size={14} className="text-muted-foreground" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Filter:
              </span>
            </div>
            {layerFilters.map((layer) => (
              <button
                key={layer.key}
                onClick={() => handleLayerSelect(layer.key)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  selectedLayer === layer.key
                    ? 'bg-primary text-foreground'
                    : 'bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border/70'
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
          <p className="text-xs text-muted-foreground font-mono">
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
              {virtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
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
                    <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {rowTools.map((tool) => (
                        <ToolCard
                          key={tool.id}
                          tool={tool}
                          onClick={() => setSelectedTool(tool)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">
              No tools found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLayer('all');
              }}
              className="text-primary hover:text-primary/80 transition-colors text-sm"
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
