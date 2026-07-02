import { ExternalLink, Clock } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  officialUrl: string;
  category: string;
  layer: string;
  tags: string[];
  logo?: string;
  developer?: string;
  status?: 'live' | 'coming-soon';
  badge?: string;
  freeTierDetails?: string;
  installCommand?: string;
  documentationUrl?: string;
  githubUrl?: string;
}

interface ToolCardProps {
  tool: Tool;
  compact?: boolean;
  onClick?: () => void;
  searchQuery?: string;
}

const LAYER_COLORS: Record<string, string> = {
  foundation: '#10B981',
  cloud:      '#06B6D4',
  devops:     '#F59E0B',
  genai:      '#7C3AED',
  analytics:  '#EC4899',
  fullstack:  '#3B82F6',
};

function faviconUrl(url: string): string {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch { return ''; }
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
          ? <mark key={i} className="bg-violet-500/30 text-violet-300 rounded px-0.5 not-italic">{part}</mark>
          : part
      )}
    </>
  );
}

export function ToolCard({ tool, compact, onClick, searchQuery = '' }: ToolCardProps) {
  const color   = LAYER_COLORS[tool.layer] ?? '#7C3AED';
  const favicon = tool.logo ?? faviconUrl(tool.officialUrl);
  const isComingSoon = tool.status === 'coming-soon';

  const handleCardClick = () => {
    if (isComingSoon) return;
    if (onClick) onClick();
    else window.open(tool.officialUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      onClick={handleCardClick}
      role={isComingSoon ? 'article' : 'button'}
      tabIndex={isComingSoon ? -1 : 0}
      onKeyDown={(e) => !isComingSoon && e.key === 'Enter' && handleCardClick()}
      className={[
        'group relative flex flex-col gap-3 rounded-xl border p-4 h-full min-h-[200px]',
        'bg-[#111112] border-white/8 transition-all duration-200',
        'outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60',
        isComingSoon
          ? 'opacity-80 cursor-default'
          : 'cursor-pointer hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/8 hover:-translate-y-0.5',
      ].join(' ')}
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Badge */}
      {tool.badge && (
        <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest
                         px-2 py-0.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-400">
          {tool.badge}
        </span>
      )}

      {/* Icon + Category */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white/5
                        flex items-center justify-center">
          {favicon ? (
            <img
              src={favicon}
              alt={`${tool.name} icon`}
              width={32} height={32}
              className="w-8 h-8 object-contain"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          ) : (
            <span className="text-lg font-bold text-white/40">{tool.name.charAt(0)}</span>
          )}
        </div>
        <span
          className="text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded-md whitespace-nowrap"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {tool.category}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-bold text-white text-base leading-snug group-hover:text-violet-300 transition-colors">
        <Highlight text={tool.name} query={searchQuery} />
      </h3>

      {/* Developer */}
      {tool.developer && (
        <p className="text-[11px] text-zinc-600 -mt-1">{tool.developer}</p>
      )}

      {/* Description */}
      {!compact && (
        <p className="text-sm text-zinc-500 line-clamp-2 flex-1">
          <Highlight text={tool.description} query={searchQuery} />
        </p>
      )}

      {/* Tags */}
      {!compact && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-600 font-mono">
              <Highlight text={tag} query={searchQuery} />
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      {isComingSoon ? (
        <div className="mt-auto flex items-center gap-1.5 text-xs text-zinc-600">
          <Clock size={12} />
          Coming Soon
        </div>
      ) : (
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-auto flex items-center gap-1.5 text-xs font-medium
                     text-violet-500/70 hover:text-violet-400 transition-colors w-fit"
        >
          <ExternalLink size={12} />
          Visit site
        </a>
      )}
    </article>
  );
}

export default ToolCard;
