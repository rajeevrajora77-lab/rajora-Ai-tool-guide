import {
  useState, useMemo, useDeferredValue, useCallback,
  memo, useRef, useEffect,
  type ChangeEvent, type MouseEvent
} from 'react';
import { motion } from 'framer-motion';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import {
  Search, Filter, ExternalLink, X, Terminal,
  BookOpen, Github, Layers, Command
} from 'lucide-react';
import { tools, layerInfo, type Tool } from '../data/tools';
import ToolCard from '../components/ToolCard';

const ITEMS_PER_ROW_DESKTOP = 4;
const ITEMS_PER_ROW_TABLET  = 2;
const ROW_HEIGHT = 280;
const ROW_GAP    = 16;

const layerFilters = [
  { key: 'all',        label: 'All',        count: tools.length },
  { key: 'foundation', label: 'Foundation', count: layerInfo.foundation.tools.length },
  { key: 'cloud',      label: 'Cloud',      count: layerInfo.cloud.tools.length },
  { key: 'devops',     label: 'DevOps',     count: layerInfo.devops.tools.length },
  { key: 'genai',      label: 'GenAI',      count: layerInfo.genai.tools.length },
  { key: 'analytics',  label: 'Analytics',  count: layerInfo.analytics.tools.length },
  { key: 'fullstack',  label: 'Full Stack', count: layerInfo.fullstack.tools.length },
];

function getCategoryColor(layer: string): string {
  const colors: Record<string, string> = {
    foundation: '#10B981', cloud: '#06B6D4', devops: '#F59E0B',
    genai: '#7C3AED', analytics: '#EC4899', fullstack: '#3B82F6',
  };
  return colors[layer] || '#7C3AED';
}

// ─── Tool Detail Modal ───
const ToolModal = memo(({ tool, onClose }: { tool: Tool; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
      className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--surface)] rounded-2xl border border-[var(--tg-border)] p-6 shadow-2xl"
      onClick={(e: MouseEvent) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <span
            className="inline-block px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider mb-2"
            style={{ backgroundColor: `${getCategoryColor(tool.layer)}18`, color: getCategoryColor(tool.layer) }}
          >
            {tool.category}
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">{tool.name}</h3>
          {(tool as Tool & { developer?: string }).developer && (
            <p className="text-xs text-muted-foreground mt-1">by {(tool as Tool & { developer?: string }).developer}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      </div>

      <p className="text-muted-foreground text-base mb-6 leading-relaxed">{tool.description}</p>

      <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/20 mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-violet-500 dark:text-violet-400 mb-2">Free Tier</h4>
        <p className="text-foreground text-sm">{tool.freeTierDetails}</p>
      </div>

      {tool.installCommand && (
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Install Command</h4>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 font-mono text-sm text-foreground">
            <Terminal size={14} className="text-violet-500 dark:text-violet-400 shrink-0" />
            <code className="break-all">{tool.installCommand}</code>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-lg text-muted-foreground text-xs">{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm rounded-xl transition-colors"
        >
          <ExternalLink size={16} /> Official Website
        </a>
        {tool.documentationUrl && (
          <a href={tool.documentationUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-black/10 dark:border-white/10 text-foreground text-sm rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            <BookOpen size={16} /> Documentation
          </a>
        )}
        {tool.githubUrl && (
          <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-black/10 dark:border-white/10 text-foreground text-sm rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            <Github size={16} /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
));
ToolModal.displayName = 'ToolModal';

// ─── Main Page ───
const ToolExplorerPage = () => {
  const [searchQuery, setSearchQuery]     = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [selectedTool, setSelectedTool]   = useState<Tool | null>(null);
  const parentRef     = useRef<HTMLDivElement>(null);
  const inputRef      = useRef<HTMLInputElement>(null);
  const deferredQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setSelectedTool(null);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filteredTools = useMemo(() => {
    const q = deferredQuery.toLowerCase().trim();
    if (!q && selectedLayer === 'all') return tools;
    return tools.filter((tool) => {
      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        ((tool as Tool & { developer?: string }).developer ?? '').toLowerCase().includes(q) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchesLayer = selectedLayer === 'all' || tool.layer === selectedLayer;
      return matchesSearch && matchesLayer;
    });
  }, [deferredQuery, selectedLayer]);

  const getItemsPerRow = useCallback(() => {
    if (typeof window === 'undefined') return ITEMS_PER_ROW_DESKTOP;
    if (window.innerWidth >= 1280) return ITEMS_PER_ROW_DESKTOP;
    if (window.innerWidth >= 768)  return ITEMS_PER_ROW_TABLET;
    return 1;
  }, []);

  const itemsPerRow = getItemsPerRow();
  const rowCount    = Math.ceil(filteredTools.length / itemsPerRow);

  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT + ROW_GAP,
    overscan: 3,
  });

  return (
    <motion.main
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24"
    >
      <div className="section-padding">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-violet-500 dark:text-violet-400" />
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-violet-500 dark:text-violet-400">Tool Explorer</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Find the perfect tool</h1>
          <p className="text-muted-foreground">
            Discover from <span className="text-foreground font-medium">{tools.length}+</span> curated developer &amp; AI tools.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search by name, description, category, developer, tags…"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-28 py-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl
                         text-foreground placeholder:text-muted-foreground focus:border-violet-500/50 focus:outline-none
                         focus:ring-1 focus:ring-violet-500/30 transition-all text-sm"
              aria-label="Search tools"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {searchQuery ? (
                <button
                  onClick={() => { setSearchQuery(''); inputRef.current?.focus(); }}
                  className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              ) : (
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
                               text-muted-foreground text-[10px] font-mono">
                  <Command size={10} /> K
                </kbd>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter size={13} className="text-muted-foreground" />
            {layerFilters.map((layer) => (
              <button
                key={layer.key}
                onClick={() => setSelectedLayer(layer.key)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  selectedLayer === layer.key
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                    : 'bg-black/5 dark:bg-white/5 text-muted-foreground hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10'
                }`}
              >
                {layer.label}
                <span className="ml-1 opacity-50">({layer.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-xs text-muted-foreground font-mono mb-4">
          {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
          {deferredQuery && <span className="text-foreground/70"> for &quot;{deferredQuery}&quot;</span>}
        </p>

        {/* Grid */}
        {filteredTools.length > 0 ? (
          <div ref={parentRef} className="overflow-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
            <div style={{ height: `${virtualizer.getTotalSize()}px`, width: '100%', position: 'relative' }}>
              {virtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
                const startIndex = virtualRow.index * itemsPerRow;
                const rowTools   = filteredTools.slice(startIndex, startIndex + itemsPerRow);
                return (
                  <div
                    key={virtualRow.key}
                    style={{
                      position: 'absolute', top: 0, left: 0, width: '100%',
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {rowTools.map((tool) => (
                        <ToolCard
                          key={tool.id}
                          tool={tool}
                          searchQuery={deferredQuery}
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
          <div className="text-center py-24 flex flex-col items-center gap-4">
            <Search size={40} className="text-muted-foreground/50" />
            <p className="text-muted-foreground text-lg font-medium">No tools found</p>
            <p className="text-muted-foreground/70 text-sm">Try a different keyword or clear the filters</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedLayer('all'); }}
              className="mt-2 px-5 py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl
                         text-foreground text-sm hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {selectedTool && <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />}
    </motion.main>
  );
};

export default ToolExplorerPage;
