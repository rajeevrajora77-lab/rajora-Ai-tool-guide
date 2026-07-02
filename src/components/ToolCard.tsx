import { ExternalLink } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  officialUrl: string;
  category: string;
  layer: string;
  tags?: string[];
  logo?: string;
  freeTierDetails?: string;
  installCommand?: string;
  documentationUrl?: string;
  githubUrl?: string;
}

interface ToolCardProps {
  tool: Tool;
  compact?: boolean;
  onClick?: () => void;
}

const LAYER_COLORS: Record<string, string> = {
  foundation: '#10B981',
  cloud:      '#06B6D4',
  devops:     '#F59E0B',
  genai:      '#7C3AED',
  analytics:  '#EC4899',
  fullstack:  '#3B82F6',
};

/** Extract the hostname for Google's favicon CDN */
function faviconUrl(url: string): string {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch {
    return '';
  }
}

export function ToolCard({ tool, compact, onClick }: ToolCardProps) {
  const color = LAYER_COLORS[tool.layer] ?? '#7C3AED';
  const favicon = faviconUrl(tool.officialUrl);

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(tool.officialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <article
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      className="group relative flex flex-col gap-3 rounded-xl border transition-all duration-200 cursor-pointer
                 bg-[#18181A] border-white/8 hover:border-[#7C3AED]/50 hover:shadow-lg hover:shadow-[#7C3AED]/10
                 p-4 h-full min-h-[200px] outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/60"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Top row: icon + category badge */}
      <div className="flex items-center justify-between gap-2">
        {/* Favicon icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
          {favicon ? (
            <img
              src={favicon}
              alt={`${tool.name} icon`}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <span className="text-lg font-bold text-white/50">
              {tool.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Category badge */}
        <span
          className="text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded-md whitespace-nowrap"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {tool.category}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#7C3AED] transition-colors">
        {tool.name}
      </h3>

      {/* Description — hidden in compact mode */}
      {!compact && (
        <p className="text-sm text-white/50 line-clamp-2 flex-1">
          {tool.description}
        </p>
      )}

      {/* Tags */}
      {!compact && tool.tags && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Visit link */}
      <a
        href={tool.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
        className="mt-auto flex items-center gap-1.5 text-xs font-medium text-[#7C3AED]/70
                   hover:text-[#7C3AED] transition-colors w-fit"
      >
        <ExternalLink size={12} />
        Visit site
      </a>
    </article>
  );
}

export default ToolCard;
