import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background pt-24 pb-16 text-foreground"
    >
      <div className="section-padding mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.12em] text-primary">
            Contact
          </span>
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Get in touch
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Have questions, suggestions, or want to collaborate?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:hello@rajora.live"
            className="group rounded-2xl border border-border/70 bg-card/80 p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail size={22} className="text-primary" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-foreground">Email</h3>
            <p className="mb-3 text-sm text-muted-foreground">Best for detailed questions and partnerships</p>
            <span className="text-sm text-primary transition-colors group-hover:text-primary/80">
              hello@rajora.live
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rajeevrajora77-lab/rajora-Ai-tool-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border/70 bg-card/80 p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted/60">
              <Github size={22} className="text-foreground" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-foreground">GitHub</h3>
            <p className="mb-3 text-sm text-muted-foreground">Report issues, suggest tools, or contribute</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary transition-colors group-hover:text-primary/80">
              Open an issue <ExternalLink size={12} />
            </span>
          </a>

          {/* Rajora AI */}
          <a
            href="https://rajora.live"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 md:col-span-2"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
              <MapPin size={22} className="text-primary" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-foreground">Rajora AI HQ</h3>
            <p className="mb-3 text-sm text-muted-foreground">Learn more about the parent company and our full product ecosystem</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary transition-colors group-hover:text-primary/80">
              Visit rajora.live <ExternalLink size={12} />
            </span>
          </a>
        </div>
      </div>
    </motion.main>
  );
};

export default ContactPage;
