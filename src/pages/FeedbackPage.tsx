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
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-padding max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED] mb-3 block">
            Feedback
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Share your feedback
          </h1>
          <p className="text-[#A1A1AA] leading-relaxed">
            Help us improve Tool Guide. Your feedback directly shapes what we build next.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-2xl bg-[#12121A] border border-[#10B981]/20 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
              <Check size={28} className="text-[#10B981]" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Thank you!
            </h2>
            <p className="text-[#71717A]">
              Your feedback has been received. We appreciate you taking the time.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type Selection */}
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-[#71717A] mb-3 block">
                Feedback Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {feedbackTypes.map((ft) => (
                  <button
                    key={ft.key}
                    type="button"
                    onClick={() => setType(ft.key)}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition-all ${
                      type === ft.key
                        ? 'bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-white'
                        : 'bg-[#12121A] border border-white/5 text-[#71717A] hover:border-white/10'
                    }`}
                  >
                    <ft.icon size={16} style={{ color: type === ft.key ? ft.color : '#52525B' }} />
                    {ft.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="feedback-email" className="font-mono text-xs uppercase tracking-wider text-[#71717A] mb-2 block">
                Email (optional)
              </label>
              <input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#12121A] border border-white/8 rounded-xl text-white placeholder-[#52525B] focus:border-[#7C3AED]/40 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/20 transition-all text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="feedback-message" className="font-mono text-xs uppercase tracking-wider text-[#71717A] mb-2 block">
                Your Feedback
              </label>
              <textarea
                id="feedback-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think..."
                rows={6}
                required
                className="w-full px-4 py-3 bg-[#12121A] border border-white/8 rounded-xl text-white placeholder-[#52525B] focus:border-[#7C3AED]/40 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/20 transition-all text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!message.trim()}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7C3AED] text-white font-medium rounded-xl hover:bg-[#6D28D9] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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
