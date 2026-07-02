import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Search, Shield, Zap, Globe, Cpu,
  BarChart3, Code2, Cloud, GitBranch, Bot,
  ExternalLink, Layers, Star, TrendingUp, CheckCircle2,
  MonitorPlay, Clock
} from 'lucide-react';
import { tools, layerInfo } from '../data/tools';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

// ─── Hero Section — ~55vh, compact ───
const HeroSection = memo(() => (
  <section className="relative flex items-center overflow-hidden" style={{ minHeight: 'clamp(480px, 58vh, 680px)' }}>
    <div className="absolute inset-0 bg-dot-pattern opacity-30" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#06B6D4]/4 rounded-full blur-[80px]" />

    <div className="relative z-10 section-padding w-full" style={{ paddingTop: 'clamp(5rem, 10vh, 7rem)', paddingBottom: 'clamp(2.5rem, 5vh, 4rem)' }}>
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-3xl">

        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-[#7C3AED]/20 text-xs">
            <Sparkles size={12} className="text-primary" />
            <span className="text-primary font-medium">AI &amp; Developer Tools · Curated by Rajora AI</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-foreground leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
        >
          Discover the{' '}
          <span className="text-gradient-purple">right tool</span>
          <br />for every build.
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed max-w-xl mb-7" style={{ fontSize: 'clamp(14px, 1.2vw, 17px)' }}>
          Curated platform for discovering free developer tools across
          GenAI, DevOps, Cloud, Data Analytics &amp; Full Stack.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/tool-guide"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-primary text-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.3)] text-sm"
          >
            <Search size={16} />
            Explore All Tools
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/categories"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-border/70 text-foreground font-semibold hover:bg-muted/70 transition-all duration-300 text-sm"
          >
            <Layers size={16} />
            Browse Categories
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-border/50">
          <div>
            <p className="text-xl font-bold text-foreground">{tools.length}+</p>
            <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">Tools Curated</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">6</p>
            <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">Categories</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">100%</p>
            <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">Free to Explore</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

// ─── Features Section ───
const features = [
  { icon: Zap,    title: 'Instant Discovery',   description: 'Find the perfect tool in seconds with smart filtering and search.' },
  { icon: Shield, title: 'Verified & Trusted',   description: 'Every tool manually curated with verified free tiers and docs.' },
  { icon: Layers, title: 'Layered Architecture', description: '6 logical layers from Foundation to Full Stack.' },
  { icon: Globe,  title: 'Always Current',       description: 'Updated continuously to reflect the latest developer ecosystem.' },
];

const FeaturesSection = memo(() => (
  <section className="relative" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
    <div className="relative section-padding">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#7C3AED] mb-2 block">Why Tool Guide</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Built for developers who value their time</h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">Stop wasting hours researching. We’ve done the work so you can focus on building.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
            className="group p-5 rounded-xl bg-card/60 border border-border/70 hover:border-[#7C3AED]/30 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <feature.icon size={18} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1.5">{feature.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));
FeaturesSection.displayName = 'FeaturesSection';

// ─── Featured Tools Section (AION + Desktop Control) ───
const FeaturedToolsSection = memo(() => (
  <section style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
    <div className="section-padding">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-violet-400 mb-2 block">By Rajora AI</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Tools</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Flagship tools built by the Rajora AI team.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {/* AION */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="group relative p-6 rounded-xl bg-gradient-to-br from-cyan-500/8 to-violet-600/8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Bot size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">AION</h3>
                <p className="text-[11px] text-zinc-500">by Rajora AI</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Live</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Enterprise AI Workspace with multiple AI models, intelligent agents, file analysis, code generation, reasoning, web search, and productivity tools.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {['AI Assistant', 'Multi-Model', 'Agents', 'Code Gen'].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-500 font-mono">{tag}</span>
            ))}
          </div>
          <a href="https://chat.rajora.co.in" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-semibold text-sm rounded-lg transition-colors">
            <ExternalLink size={13} /> Open Tool
          </a>
        </motion.div>

        {/* Desktop Control */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          className="group relative p-6 rounded-xl bg-gradient-to-br from-violet-600/8 to-fuchsia-600/8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <MonitorPlay size={20} className="text-violet-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">Desktop Control</h3>
                <p className="text-[11px] text-zinc-500">by Rajora AI</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">Official</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center gap-1">
                <Clock size={9} /> Soon
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Secure desktop automation platform enabling AI agents to control apps, automate workflows, execute repetitive tasks, and perform intelligent desktop operations.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {['Automation', 'AI Agents', 'Desktop', 'RPA'].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-500 font-mono">{tag}</span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-zinc-400 font-semibold text-sm rounded-lg cursor-default">
            <Clock size={13} /> Coming Soon
          </span>
        </motion.div>
      </div>
    </div>
  </section>
));
FeaturedToolsSection.displayName = 'FeaturedToolsSection';

// ─── Categories Section ───
const categoryData = [
  { key: 'foundation', label: 'Foundation', icon: GitBranch, color: '#10B981', desc: 'Terminal, Git, Editors, Runtime',    image: '/terminal_coder.jpg' },
  { key: 'cloud',      label: 'Cloud',      icon: Cloud,      color: '#06B6D4', desc: 'AWS, GCP, Azure, Deployment',        image: '/cloud_server_room.jpg' },
  { key: 'devops',     label: 'DevOps',     icon: Cpu,        color: '#F59E0B', desc: 'CI/CD, Containers, Monitoring',     image: '/cloud_server_room.jpg' },
  { key: 'genai',      label: 'GenAI',      icon: Bot,        color: '#7C3AED', desc: 'LLMs, Vector DBs, AI Frameworks',   image: '/ai_brain_visual.jpg' },
  { key: 'analytics',  label: 'Analytics',  icon: BarChart3,  color: '#EC4899', desc: 'SQL, BI, Visualization, Notebooks', image: '/data_dashboard.jpg' },
  { key: 'fullstack',  label: 'Full Stack', icon: Code2,      color: '#3B82F6', desc: 'Next.js, Auth, UI, Databases',      image: '/fullstack_ui.jpg' },
];

const CategoriesSection = memo(() => (
  <section className="relative" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
    <div className="section-padding">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-500 mb-2 block">Categories</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Explore by category</h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">Six layers covering the entire modern development stack.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryData.map((cat, index) => (
          <motion.div key={cat.key} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <Link to={`/categories?filter=${cat.key}`}
              className="group relative block overflow-hidden rounded-xl bg-card/40 border border-border/70 hover:border-border/70 transition-all duration-500 h-48">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img src={cat.image} alt={cat.label} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-35 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />
              </div>
              <div className="relative h-full p-5 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all group-hover:scale-110" style={{ backgroundColor: `${cat.color}15` }}>
                  <cat.icon size={20} style={{ color: cat.color }} />
                </div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-semibold text-foreground text-base">{cat.label}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{layerInfo[cat.key as keyof typeof layerInfo]?.tools?.length || 0}</span>
                </div>
                <p className="text-xs text-muted-foreground">{cat.desc}</p>
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={18} className="text-foreground" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/categories" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
          View all categories <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  </section>
));
CategoriesSection.displayName = 'CategoriesSection';

// ─── Trending Tools ───
const TrendingToolsSection = memo(() => {
  const displayTools = useMemo(() => {
    const picks = ['cursor', 'docker', 'supabase', 'vercel', 'langchain', 'nextjs', 'vscode', 'github-copilot'];
    const matched = tools.filter(t => picks.includes(t.id));
    return matched.length >= 4 ? matched.slice(0, 8) : tools.slice(0, 8);
  }, []);

  return (
    <section className="relative" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)', background: 'hsl(var(--card) / 0.3)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative section-padding">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#F59E0B] mb-2 block">
              <TrendingUp size={13} className="inline mr-1" />Trending
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Popular tools right now</h2>
          </div>
          <Link to="/tool-guide" className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
            View all <ArrowRight size={13} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayTools.map((tool, index) => (
            <motion.div key={tool.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <Link to={`/tool/${tool.id}`}
                className="group block p-4 rounded-xl bg-card border border-border/70 hover:border-[#7C3AED]/30 transition-all duration-300 h-full hover:shadow-md">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider"
                    style={{ backgroundColor: `${getCategoryColor(tool.layer)}15`, color: getCategoryColor(tool.layer) }}>
                    {tool.layer}
                  </span>
                  <Star size={13} className="text-[#F59E0B]/50 group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{tool.description}</p>
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
  <section style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-500 mb-2 block">Trust &amp; Quality</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Why trust Tool Guide?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: 'Manually Curated',  desc: 'Every tool hand-picked and verified. No automated scraping.' },
            { title: 'Ecosystem Backed',  desc: 'Built by Rajora AI — a trusted company building AI-powered products.' },
            { title: 'Community Driven',  desc: 'Open source contributions welcome. Help keep the database accurate.' },
          ].map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
              className="p-5 rounded-xl bg-card/40 border border-border/70">
              <CheckCircle2 size={18} className="text-emerald-500 mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
  { name: 'Rajora.ai',     description: 'Parent ecosystem building AI-powered products',    tag: 'Ecosystem', color: '#7C3AED', href: 'https://rajora.live' },
  { name: 'AION',         description: 'Enterprise AI Workspace with multi-model agents',   tag: 'AI Agent',  color: '#06B6D4', href: 'https://chat.rajora.co.in' },
  { name: 'Revive OS',    description: 'Next-generation operating system experience',        tag: 'OS',        color: '#10B981', href: 'https://rajora.live' },
  { name: 'HopeSense AI', description: 'AI-powered mental wellness and support platform',   tag: 'Wellness',  color: '#EC4899', href: 'https://rajora.live' },
];

const EcosystemSection = memo(() => (
  <section className="relative" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)', background: 'hsl(var(--card) / 0.3)' }}>
    <div className="absolute inset-0 bg-dot-pattern opacity-20" />
    <div className="relative section-padding">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary mb-2 block">Part of something bigger</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">The Rajora AI Ecosystem</h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">Tool Guide is one product in the Rajora AI family.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {ecosystemProducts.map((product, index) => (
          <motion.a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}
            className="group p-4 rounded-xl bg-card/60 border border-border/70 hover:border-border/70 transition-all duration-300 text-left hover:shadow-md">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider mb-2.5"
              style={{ backgroundColor: `${product.color}15`, color: product.color }}>{product.tag}</span>
            <h3 className="font-semibold text-foreground text-sm mb-1 flex items-center gap-1.5">
              {product.name} <ExternalLink size={11} className="text-muted-foreground group-hover:text-foreground/50 transition-colors" />
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-6">
        <a href="https://rajora.live" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#7C3AED]/30 text-primary hover:bg-primary/10 transition-all text-sm font-medium">
          Explore Rajora AI ecosystem <ExternalLink size={13} />
        </a>
      </div>
    </div>
  </section>
));
EcosystemSection.displayName = 'EcosystemSection';

// ─── Final CTA ───
const CTASection = memo(() => (
  <section style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
    <div className="section-padding">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/5 border border-[#7C3AED]/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[150px] bg-primary/10 rounded-full blur-[60px]" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Ready to build faster?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              Explore our curated collection of developer &amp; AI tools and start building today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/tool-guide" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-sm">
                Start Exploring <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-border/70 text-foreground rounded-xl hover:bg-muted/70 transition-all text-sm">
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

function getCategoryColor(layer: string): string {
  const colors: Record<string, string> = {
    foundation: '#10B981', cloud: '#06B6D4', devops: '#F59E0B',
    genai: '#7C3AED', analytics: '#EC4899', fullstack: '#3B82F6',
  };
  return colors[layer] || '#7C3AED';
}

const HomePage = () => (
  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
    <HeroSection />
    <FeaturesSection />
    <FeaturedToolsSection />
    <CategoriesSection />
    <TrendingToolsSection />
    <TrustSection />
    <EcosystemSection />
    <CTASection />
  </motion.main>
);

export default HomePage;
