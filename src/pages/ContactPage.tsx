import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';

const ContactPage = () => {
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
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED] mb-3 block">
            Contact
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
            Have questions, suggestions, or want to collaborate?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Cards */}
          <a
            href="mailto:contact@rajora.live"
            className="group p-6 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#7C3AED]/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
              <Mail size={22} className="text-[#A78BFA]" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
            <p className="text-sm text-[#71717A] mb-3">Best for detailed questions and partnerships</p>
            <span className="text-sm text-[#A78BFA] group-hover:text-[#7C3AED] transition-colors">
              contact@rajora.live
            </span>
          </a>

          <a
            href="https://github.com/rajeevrajora77-lab/rajora-Ai-tool-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#7C3AED]/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <Github size={22} className="text-white" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-1">GitHub</h3>
            <p className="text-sm text-[#71717A] mb-3">Report issues, suggest tools, or contribute</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#A78BFA] group-hover:text-[#7C3AED] transition-colors">
              Open an issue <ExternalLink size={12} />
            </span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#12121A] border border-white/5 hover:border-[#7C3AED]/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center mb-4">
              <Linkedin size={22} className="text-[#0077B5]" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-1">LinkedIn</h3>
            <p className="text-sm text-[#71717A] mb-3">Connect professionally</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#A78BFA] group-hover:text-[#7C3AED] transition-colors">
              Follow us <ExternalLink size={12} />
            </span>
          </a>

          <a
            href="https://rajora.live"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center mb-4">
              <MapPin size={22} className="text-[#A78BFA]" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-1">Rajora.ai HQ</h3>
            <p className="text-sm text-[#71717A] mb-3">Learn more about the parent company</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#A78BFA] group-hover:text-[#7C3AED] transition-colors">
              Visit rajora.live <ExternalLink size={12} />
            </span>
          </a>
        </div>
      </div>
    </motion.main>
  );
};

export default ContactPage;
