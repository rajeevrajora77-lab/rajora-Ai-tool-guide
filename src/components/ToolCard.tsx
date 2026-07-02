import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Tool } from '../data/tools';

type ToolCardProps = {
  tool: Tool;
  compact?: boolean;
  className?: string;
};

function getLayerStyle(layer: string) {
  const colorVar = {
    foundation: 'var(--layer-foundation)',
    cloud: 'var(--layer-cloud)',
    devops: 'var(--layer-devops)',
    genai: 'var(--layer-genai)',
    analytics: 'var(--layer-analytics)',
    fullstack: 'var(--layer-fullstack)',
  }[layer] || 'var(--primary)';

  return {
    color: colorVar,
    borderColor: `color-mix(in srgb, ${colorVar} 24%, transparent)`,
    backgroundColor: `color-mix(in srgb, ${colorVar} 12%, transparent)`,
  };
}

const ToolCard = ({ tool, compact = false, className = '' }: ToolCardProps) => {
  const layerStyle = getLayerStyle(tool.layer);
  const visibleTags = compact ? tool.tags.slice(0, 2) : tool.tags.slice(0, 3);

  return (
    <Link
      to={`/tool/${tool.id}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 shadow-soft-panel transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 mb-4 flex items-center justify-between">
        <span
          className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
          style={layerStyle}
        >
          {tool.layer}
        </span>
        <ArrowRight size={14} className="text-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-primary" />
      </div>

      <h3 className="relative z-10 mb-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
        {tool.name}
      </h3>

      <p className="relative z-10 mb-4 flex-grow text-xs leading-relaxed text-foreground/70">
        {tool.description}
      </p>

      {!compact && (
        <div className="relative z-10 mt-auto flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/70 bg-background/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-foreground/60 transition-colors group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default ToolCard;
