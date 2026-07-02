import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, MessageSquare, Star, Bug, Lightbulb } from 'lucide-react';

const feedbackTypes = [
  { key: 'suggestion', label: 'Suggestion', icon: Lightbulb, color: '#F59E0B' },
  { key: 'bug', label: 'Bug Report', icon: Bug, color: '#EF4444' },
  { key: 'tool', label: 'Tool Request', icon: Star, color: '#7C3AED' },
  { key: 'general', label: 'General', icon: MessageSquare, color: '#06B6D4' },
];

const FeedbackPage = () => {
  const [type, setType] = useState('general');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMessage('');
        setEmail('');
        setType('general');
      }, 3000);
    }
  }, [message]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background pt-24 pb-16 text-foreground"
    >
      <div className="section-padding mx-auto max-w-2xl">
        <div className="mb-10">
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.12em] text-primary">
            Feedback
          </span>
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Share your feedback
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            Help us improve Tool Guide. Your feedback directly shapes what we build next.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-emerald-500/20 bg-card/80 p-12 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <Check size={28} className="text-emerald-500" />
            </div>
            <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
              Thank you!
            </h2>
            <p className="text-muted-foreground">
              Your feedback has been received. We appreciate you taking the time.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-3 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Feedback Type
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {feedbackTypes.map((ft) => (
                  <button
                    key={ft.key}
                    type="button"
                    onClick={() => setType(ft.key)}
                    className={`flex items-center gap-2 rounded-xl p-3 text-sm font-medium transition-all ${
                      type === ft.key
                        ? 'border border-primary/30 bg-primary/10 text-foreground'
                        : 'border border-border/70 bg-card/70 text-muted-foreground hover:border-border'
                    }`}
                  >
                    <ft.icon size={16} style={{ color: type === ft.key ? ft.color : '#52525B' }} />
                    {ft.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="feedback-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Email (optional)
              </label>
              <input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border/70 bg-card/80 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="feedback-message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Your Feedback
              </label>
              <textarea
                id="feedback-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think..."
                rows={6}
                required
                className="w-full resize-none rounded-xl border border-border/70 bg-card/80 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={!message.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={16} />
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </motion.main>
  );
};

export default FeedbackPage;
