import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ExternalLink, Target, Layers, Heart, Shield,
  ArrowRight, Sparkles
} from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background pt-24 pb-16 text-foreground"
    >
      <div className="section-padding mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.12em] text-primary">
            About
          </span>
          <h1 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            About Tool Guide
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tool Guide is a curated AI and developer tools discovery platform, built and maintained
            as part of the Rajora.ai ecosystem. We help developers find the right tools faster.
          </p>
        </div>

        <section className="mb-16">
          <div className="rounded-2xl border border-border/70 bg-card/80 p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Target size={20} className="text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">What is Tool Guide?</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Tool Guide is a comprehensive, interactive platform for discovering 150+ free developer tools
                across GenAI, DevOps, Cloud, Data Analytics, and Full Stack development.
              </p>
              <p>
                Every tool in our database is manually curated, verified for free tier availability, and
                organized into six logical layers that mirror the modern development stack — from Foundation
                (terminal, editors, version control) all the way to Full Stack (frameworks, auth, deployment).
              </p>
              <p>
                Whether you're a junior developer setting up your first environment or a senior engineer
                evaluating new AI tools, Tool Guide helps you find what you need in seconds.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
            <Sparkles size={22} className="text-cyan-500" />
            Why Tool Guide Exists
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                title: 'Too many tools, too little time',
                desc: 'The developer tooling landscape is exploding. We curate so you don\'t have to spend hours researching.',
              },
              {
                title: 'Free tiers are hard to find',
                desc: 'We verify and document free tier details for every tool, so you know exactly what you get before signing up.',
              },
              {
                title: 'Stack decisions matter',
                desc: 'Our layered architecture helps you understand dependencies and make informed decisions about your tech stack.',
              },
              {
                title: 'Community knowledge should be shared',
                desc: 'Open source and community-driven. Everyone benefits when knowledge about great tools is freely accessible.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/70 bg-card/70 p-5">
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                <Shield size={20} className="text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Built by Rajora.ai</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Tool Guide is proudly built, managed, and maintained by{' '}
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                >
                  Rajora.ai <ExternalLink size={12} />
                </a>
                , a technology company focused on building AI-powered products and developer tools.
              </p>
              <p>
                As part of the Rajora.ai ecosystem, Tool Guide benefits from the same commitment to quality,
                performance, and user experience that powers all Rajora.ai products — including AION,
                Revive OS, and HopeSense AI.
              </p>
              <p>
                For more information about Rajora.ai and the full ecosystem of products, visit{' '}
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                >
                  rajora.live <ExternalLink size={12} />
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
            <Heart size={22} className="text-pink-500" />
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: 'Accuracy', desc: 'Every tool listing is verified and updated regularly.' },
              { title: 'Accessibility', desc: 'Free to use, forever. No paywalls, no tracking.' },
              { title: 'Community', desc: 'Open source. Your contributions make this better for everyone.' },
            ].map((value) => (
              <div key={value.title} className="rounded-xl border border-border/70 bg-card/70 p-5 text-center">
                <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            to="/tool-guide"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Layers size={18} />
            Explore Tool Guide
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default AboutPage;
