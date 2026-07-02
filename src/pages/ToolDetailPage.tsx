import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, BookOpen, Github, Terminal,
  Tag, Layers, Copy, Check
} from 'lucide-react';
import { tools } from '../data/tools';
import { useState, useCallback } from 'react';
import ToolCard from '../components/ToolCard';

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

const ToolDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const tool = useMemo(() => {
    return tools.find(t => t.id === slug);
  }, [slug]);

  const relatedTools = useMemo(() => {
    if (!tool) return [];
    return tools
      .filter(t => t.layer === tool.layer && t.id !== tool.id)
      .slice(0, 4);
  }, [tool]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  if (!tool) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-32 pb-16"
      >
        <div className="section-padding text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Tool not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The tool you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/tool-guide"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-xl hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Tool Guide
          </Link>
        </div>
      </motion.main>
    );
  }

  const color = getCategoryColor(tool.layer);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-padding max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/tool-guide"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Tool Guide
          </Link>
        </div>

        {/* Tool Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {tool.layer}
            </span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-muted-foreground font-mono">{tool.category}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {tool.name}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {tool.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={16} />
            Visit Official Site
          </a>
          {tool.documentationUrl && (
            <a
              href={tool.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border/70 text-foreground rounded-xl hover:bg-muted/70 transition-all"
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
              className="inline-flex items-center gap-2 px-6 py-3 border border-border/70 text-foreground rounded-xl hover:bg-muted/70 transition-all"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Free Tier */}
          <div className="p-6 rounded-2xl bg-card border border-[#7C3AED]/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers size={16} className="text-primary" />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#7C3AED]">
                Free Tier
              </h3>
            </div>
            <p className="text-foreground text-sm leading-relaxed">{tool.freeTierDetails}</p>
          </div>

          {/* Install Command */}
          {tool.installCommand && (
            <div className="p-6 rounded-2xl bg-card border border-border/70">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-muted/70 flex items-center justify-center">
                  <Terminal size={16} className="text-muted-foreground" />
                </div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Install
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-foreground text-sm font-mono break-all flex-grow">
                  {tool.installCommand}
                </code>
                <button
                  onClick={() => handleCopy(tool.installCommand!)}
                  className="p-2 rounded-lg hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all shrink-0"
                  aria-label="Copy command"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={14} className="text-muted-foreground" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Tags
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-muted/70 rounded-lg text-muted-foreground text-sm border border-border/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">
              More {tool.layer} tools
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTools.map((related) => (
                <ToolCard key={related.id} tool={related} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.main>
  );
};

export default ToolDetailPage;
