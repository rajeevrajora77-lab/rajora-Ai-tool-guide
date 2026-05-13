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
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-padding max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED] mb-3 block">
            About
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            About Tool Guide
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
            Tool Guide is a curated AI and developer tools discovery platform, built and maintained
            as part of the Rajora.ai ecosystem. We help developers find the right tools faster.
          </p>
        </div>

        {/* What is Tool Guide */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-[#12121A] border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                <Target size={20} className="text-[#A78BFA]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">What is Tool Guide?</h2>
            </div>
            <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
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

        {/* Why it exists */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Sparkles size={22} className="text-[#06B6D4]" />
            Why Tool Guide Exists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div key={item.title} className="p-5 rounded-xl bg-[#12121A]/40 border border-white/5">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rajora.ai Ownership */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center">
                <Shield size={20} className="text-[#A78BFA]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">
                Built by Rajora.ai
              </h2>
            </div>
            <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
              <p>
                Tool Guide is proudly built, managed, and maintained by{' '}
                <a
                  href="https://rajora.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors inline-flex items-center gap-1"
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
                  className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors inline-flex items-center gap-1"
                >
                  rajora.live <ExternalLink size={12} />
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart size={22} className="text-[#EC4899]" />
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Accuracy', desc: 'Every tool listing is verified and updated regularly.' },
              { title: 'Accessibility', desc: 'Free to use, forever. No paywalls, no tracking.' },
              { title: 'Community', desc: 'Open source. Your contributions make this better for everyone.' },
            ].map((value) => (
              <div key={value.title} className="p-5 rounded-xl bg-[#12121A]/40 border border-white/5 text-center">
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#71717A]">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/tool-guide"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7C3AED] text-white font-semibold rounded-xl hover:bg-[#6D28D9] transition-all"
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
