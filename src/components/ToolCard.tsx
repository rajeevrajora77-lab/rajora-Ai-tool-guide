// ToolCard: fluid spacing + container queries + aspect-ratio media + 44px touch target
import React from 'react';

export interface Tool {
  name: string;
  description: string;
  url: string;
  logo?: string;
  category?: string;
  tags?: string[];
}

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="glass-card flex flex-col gap-fluid-2">
      {/* Logo: aspect-ratio + object-fit so it never breaks layout */}
      {tool.logo && (
        <div
          className="media-1-1 rounded-md overflow-hidden"
          style={{ width: 'clamp(2rem, 5vw, 3rem)', height: 'clamp(2rem, 5vw, 3rem)' }}
        >
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* Category badge */}
      {tool.category && (
        <span
          className="text-fluid-xs font-semibold uppercase tracking-wider px-fluid-2 py-fluid-1 rounded-full w-fit"
          style={{
            backgroundColor: 'var(--tg-border)',
            color: 'hsl(var(--primary))',
          }}
        >
          {tool.category}
        </span>
      )}

      <h3 className="card-title text-fluid-lg font-semibold leading-snug">{tool.name}</h3>
      <p  className="card-body text-fluid-sm text-muted-foreground line-clamp-3 flex-1">{tool.description}</p>

      {/* Tags */}
      {tool.tags && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-fluid-1">
          {tool.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-fluid-xs px-fluid-1 py-fluid-1 rounded bg-elevated text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA: min 44px touch target enforced via nav-item global rule below 1024px */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item mt-auto text-fluid-sm font-medium text-primary hover:underline justify-start pl-0"
      >
        Visit →
      </a>
    </article>
  );
}

export default ToolCard;
