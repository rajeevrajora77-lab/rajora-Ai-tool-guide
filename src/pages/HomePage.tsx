import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Search, Shield, Zap, Globe, Cpu,
  BarChart3, Code2, Cloud, GitBranch, Bot,
  ExternalLink, Layers, Star, TrendingUp, CheckCircle2
} from 'lucide-react';
import { tools, layerInfo } from '../data/tools';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

// ─── Hero Section ───
const HeroSection = memo(() => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-dot-pattern opacity-30" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#06B6D4]/5 rounded-full blur-[100px]" />

    <div className="relative z-10 section-padding w-full pt-32 pb-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-[#7C3AED]/20 text-sm">
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-medium">150+ Free AI & Developer Tools</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-foreground leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          Discover the{' '}
          <span className="text-gradient-purple">right tool</span>
          <br />
          for every build.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
        >
          Tool Guide is a curated platform for discovering free developer tools across
          GenAI, DevOps, Cloud, Data Analytics & Full Stack — organized so you can
          start building immediately.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/tool-guide"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
          >
            <Search size={18} />
            Explore All Tools
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/categories"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border/70 text-foreground font-semibold hover:bg-muted/70 hover:border-border transition-all duration-300"
          >
            <Layers size={18} />
            Browse Categories
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/70"
        >
          <div>
            <p className="text-2xl font-bold text-foreground">{tools.length}+</p>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">Tools Curated</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">6</p>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">Categories</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">100%</p>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">Free to Explore</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

// ─── Features Section ───
const features = [
  {
    icon: Zap,
    title: 'Instant Discovery',
    description: 'Find the perfect tool in seconds with smart filtering, search, and category browsing.',
  },
  {
    icon: Shield,
    title: 'Verified & Trusted',
    description: 'Every tool is manually curated with verified free tiers, install commands, and documentation links.',
  },
  {
    icon: Layers,
    title: 'Layered Architecture',
    description: 'Tools organized into 6 logical layers — from Foundation to Full Stack — so you build in the right order.',
  },
  {
    icon: Globe,
    title: 'Always Current',
    description: 'Continuously updated to reflect the latest tools, pricing changes, and developer ecosystem shifts.',
  },
];

const FeaturesSection = memo(() => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
    <div className="relative section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED] mb-3 block">
          Why Tool Guide
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built for developers who value their time
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Stop wasting hours researching tools. We've done the work so you can focus on building.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-card/60 border border-border/70 hover:border-[#7C3AED]/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <feature.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));
FeaturesSection.displayName = 'FeaturesSection';

// ─── Categories Section ───
const categoryData = [
  { key: 'foundation', label: 'Foundation', icon: GitBranch, color: '#10B981', desc: 'Terminal, Git, Editors, Runtime', image: '/terminal_coder.jpg' },
  { key: 'cloud', label: 'Cloud', icon: Cloud, color: '#06B6D4', desc: 'AWS, GCP, Azure, Deployment', image: '/cloud_server_room.jpg' },
  { key: 'devops', label: 'DevOps', icon: Cpu, color: '#F59E0B', desc: 'CI/CD, Containers, Monitoring', image: '/cloud_server_room.jpg' },
  { key: 'genai', label: 'GenAI', icon: Bot, color: '#7C3AED', desc: 'LLMs, Vector DBs, AI Frameworks', image: '/ai_brain_visual.jpg' },
  { key: 'analytics', label: 'Analytics', icon: BarChart3, color: '#EC4899', desc: 'SQL, BI, Visualization, Notebooks', image: '/data_dashboard.jpg' },
  { key: 'fullstack', label: 'Full Stack', icon: Code2, color: '#3B82F6', desc: 'Next.js, Auth, UI, Databases', image: '/fullstack_ui.jpg' },
];

const CategoriesSection = memo(() => (
  <section className="relative py-24">
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-cyan-500 mb-3 block">
          Categories
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Explore by category
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Six carefully organized layers covering the entire modern development stack.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map((cat, index) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Link
              to={`/categories?filter=${cat.key}`}
              className="group relative block overflow-hidden rounded-2xl bg-card/40 border border-border/70 hover:border-border/70 transition-all duration-500 h-64"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  <cat.icon size={22} style={{ color: cat.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground text-xl">{cat.label}</h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {layerInfo[cat.key as keyof typeof layerInfo]?.tools?.length || 0}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground transition-colors">{cat.desc}</p>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={20} className="text-foreground" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/categories"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
        >
          View all categories
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
));
CategoriesSection.displayName = 'CategoriesSection';

// ─── Trending Tools ───
const TrendingToolsSection = memo(() => {
  const trendingTools = useMemo(() => {
    const picks = ['cursor', 'docker', 'supabase', 'vercel', 'langchain', 'nextjs', 'vscode', 'github-copilot'];
    return tools.filter(t => picks.includes(t.id)).slice(0, 8);
  }, []);

  // Fallback if specific IDs don't match
  const displayTools = trendingTools.length >= 4 ? trendingTools : tools.slice(0, 8);

  return (
    <section className="relative py-24 bg-card/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#F59E0B] mb-3 block">
              <TrendingUp size={14} className="inline mr-2" />
              Trending
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Popular tools right now
            </h2>
          </div>
          <Link
            to="/tool-guide"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all tools <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                to={`/tool/${tool.id}`}
                className="group block p-5 rounded-2xl bg-card border border-border/70 hover:border-[#7C3AED]/30 transition-all duration-300 h-full"
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
                  <Star size={14} className="text-[#F59E0B]/50 group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
TrendingToolsSection.displayName = 'TrendingToolsSection';

// ─── Trust Section ───
const TrustSection = memo(() => (
  <section className="relative py-24">
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-emerald-500 mb-3 block">
            Trust & Quality
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why trust Tool Guide?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Manually Curated', desc: 'Every tool is hand-picked and verified by our team. No automated scraping or AI-generated listings.' },
            { title: 'Ecosystem Backed', desc: 'Built and managed by Rajora.ai — a trusted technology company building the future of AI-powered products.' },
            { title: 'Community Driven', desc: 'Open source contributions welcome. Help us keep the database accurate and up to date.' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card/40 border border-border/70"
            >
              <CheckCircle2 size={20} className="text-emerald-500 mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
));
TrustSection.displayName = 'TrustSection';

// ─── Ecosystem Section ───
const ecosystemProducts = [
  {
    name: 'Rajora.ai',
    description: 'Parent ecosystem company building AI-powered products',
    tag: 'Ecosystem',
    color: '#7C3AED',
  },
  {
    name: 'AION',
    description: 'Advanced AI assistant with agentic capabilities',
    tag: 'AI Agent',
    color: '#06B6D4',
  },
  {
    name: 'Revive OS',
    description: 'Next-generation operating system experience',
    tag: 'OS',
    color: '#10B981',
  },
  {
    name: 'HopeSense AI',
    description: 'AI-powered mental wellness and support platform',
    tag: 'Wellness',
    color: '#EC4899',
  },
];

const EcosystemSection = memo(() => (
  <section className="relative py-24 bg-card/30">
    <div className="absolute inset-0 bg-dot-pattern opacity-20" />
    <div className="relative section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-12"
      >
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-3 block">
          Part of something bigger
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          The Rajora.ai Ecosystem
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tool Guide is one product in the Rajora.ai family of AI-powered solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {ecosystemProducts.map((product, index) => (
          <motion.a
            key={product.name}
            href="https://rajora.live"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group p-5 rounded-2xl bg-card/60 border border-border/70 hover:border-border/70 transition-all duration-300 text-left"
          >
            <span
              className="inline-block px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider mb-3"
              style={{ backgroundColor: `${product.color}15`, color: product.color }}
            >
              {product.tag}
            </span>
            <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
              {product.name}
              <ExternalLink size={12} className="text-muted-foreground group-hover:text-foreground/50 transition-colors" />
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://rajora.live"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#7C3AED]/30 text-primary hover:bg-primary/10 transition-all text-sm font-medium"
        >
          Explore Rajora.ai ecosystem
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </section>
));
EcosystemSection.displayName = 'EcosystemSection';

// ─── Final CTA ───
const CTASection = memo(() => (
  <section className="relative py-24">
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="p-12 rounded-3xl bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/5 border border-[#7C3AED]/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-primary/10 rounded-full blur-[80px]" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to build faster?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore our curated collection of 150+ free tools and start building production-ready applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tool-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                Start Exploring
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border/70 text-foreground rounded-xl hover:bg-muted/70 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
));
CTASection.displayName = 'CTASection';

// ─── Helpers ───
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

// ─── HomePage ───
const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <TrendingToolsSection />
      <TrustSection />
      <EcosystemSection />
      <CTASection />
    </motion.main>
  );
};

export default HomePage;
