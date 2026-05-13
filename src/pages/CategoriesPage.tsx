import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GitBranch, Cloud, Cpu, Bot, BarChart3, Code2,
  ArrowRight, ArrowLeft, Layers
} from 'lucide-react';
import { tools, layerInfo } from '../data/tools';

const categoryData = [
  { key: 'foundation', label: 'Foundation', icon: GitBranch, color: '#10B981', desc: 'Terminal, Git, VS Code, Node, Python, Docker. Get your environment right once—then build anything.' },
  { key: 'cloud', label: 'Cloud', icon: Cloud, color: '#06B6D4', desc: 'Cloud platforms, deployment, CI/CD pipelines, and container orchestration across AWS, GCP, Azure, and more.' },
  { key: 'devops', label: 'DevOps', icon: Cpu, color: '#F59E0B', desc: 'CI/CD, containerization, monitoring, and infrastructure automation for production-grade workflows.' },
  { key: 'genai', label: 'GenAI', icon: Bot, color: '#7C3AED', desc: 'LangChain, vector databases, free LLM APIs, and experiment tracking—wired together for shipping AI features fast.' },
  { key: 'analytics', label: 'Analytics', icon: BarChart3, color: '#EC4899', desc: 'SQL, Python analytics, visualization libraries, and BI tools for data-driven decisions.' },
  { key: 'fullstack', label: 'Full Stack', icon: Code2, color: '#3B82F6', desc: 'Next.js, Supabase, auth, UI kits, and deployment—everything you need to ship a complete product.' },
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

const CategoriesPage = () => {
  const [searchParams] = useSearchParams();
  const activeFilter = searchParams.get('filter');

  const activeCat = useMemo(() => {
    if (!activeFilter) return null;
    return categoryData.find(c => c.key === activeFilter) || null;
  }, [activeFilter]);

  const filteredTools = useMemo(() => {
    if (!activeFilter) return [];
    return tools.filter(t => t.layer === activeFilter);
  }, [activeFilter]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-padding">
        {/* Breadcrumb */}
        {activeFilter && (
          <div className="mb-6">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-sm text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
            >
              <ArrowLeft size={14} />
              All Categories
            </Link>
          </div>
        )}

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-[#7C3AED]" />
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED]">
              {activeFilter ? activeCat?.label : 'Categories'}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {activeFilter ? activeCat?.label : 'Browse by Category'}
          </h1>
          <p className="text-[#71717A] max-w-2xl">
            {activeFilter
              ? activeCat?.desc
              : 'Explore our six carefully organized layers covering the entire modern development stack.'}
          </p>
        </div>

        {/* Category Grid (when no filter) */}
        {!activeFilter && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.map((cat, index) => {
              const count = layerInfo[cat.key as keyof typeof layerInfo]?.tools?.length || 0;
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={`/categories?filter=${cat.key}`}
                    className="group block p-6 rounded-2xl bg-[#12121A] border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                      style={{ backgroundColor: `${cat.color}15` }}
                    >
                      <cat.icon size={26} style={{ color: cat.color }} />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="font-display text-xl font-semibold text-white">
                        {cat.label}
                      </h2>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono text-[#52525B] bg-white/5">
                        {count}
                      </span>
                    </div>
                    <p className="text-sm text-[#71717A] leading-relaxed mb-4 line-clamp-2">
                      {cat.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                      style={{ color: cat.color }}
                    >
                      Explore tools <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Filtered Tools Grid */}
        {activeFilter && (
          <>
            <div className="mb-4">
              <p className="text-xs text-[#52525B] font-mono">
                {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                >
                  <Link
                    to={`/tool/${tool.id}`}
                    className="group block p-5 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#7C3AED]/30 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider"
                        style={{
                          backgroundColor: `${getCategoryColor(tool.layer)}15`,
                          color: getCategoryColor(tool.layer),
                        }}
                      >
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white mb-1.5 group-hover:text-[#A78BFA] transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-[#71717A] line-clamp-2 leading-relaxed mb-3">
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
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.main>
  );
};

export default CategoriesPage;
