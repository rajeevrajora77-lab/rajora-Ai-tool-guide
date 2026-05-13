import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-padding max-w-3xl mx-auto">
        {/* Back */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7C3AED] mb-3 block">
            Legal
          </span>
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#52525B] font-mono">
            Last updated: May 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              Tool Guide ("we", "our", "us") is a product of Rajora.ai. This Privacy Policy explains
              how we collect, use, and protect information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed mb-3">
              Tool Guide is designed to be privacy-friendly. We collect minimal data:
            </p>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li className="flex items-start gap-2">
                <span className="text-[#7C3AED] mt-1.5 text-xs">●</span>
                <span><strong className="text-white">Usage Analytics:</strong> Anonymous page views and interaction data to improve the platform.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C3AED] mt-1.5 text-xs">●</span>
                <span><strong className="text-white">Feedback Data:</strong> If you submit feedback, we collect the content you provide and optionally your email.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C3AED] mt-1.5 text-xs">●</span>
                <span><strong className="text-white">Technical Data:</strong> Browser type, device type, and IP address for security and performance.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              We use collected information solely to improve Tool Guide, respond to feedback,
              ensure security, and analyze usage patterns. We do not sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              4. Third-Party Services
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              Tool Guide may link to external tool websites. We are not responsible for the privacy
              practices of these third-party sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              We implement appropriate security measures to protect any data we collect. However,
              no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              6. Contact
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:contact@rajora.live" className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors">
                contact@rajora.live
              </a>
              {' '}or visit{' '}
              <a
                href="https://rajora.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
              >
                rajora.live
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </motion.main>
  );
};

export default PrivacyPolicyPage;
