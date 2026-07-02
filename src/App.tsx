import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import FooterSection from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ToolExplorerPage = lazy(() => import('./pages/ToolExplorerPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const ToolDetailPage = lazy(() => import('./pages/ToolDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

// Loading fallback
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
        Loading Intelligence...
      </p>
    </div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-premium opacity-[var(--glow-opacity)]" />
        <div className="absolute inset-0 hero-glow opacity-[var(--glow-opacity)]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/tool-guide" element={<ToolExplorerPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/tool/:slug" element={<ToolDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <FooterSection />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;