import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import SkeletonLoader from "./components/SkeletonLoader";
// import SEOProvider from "./providers/SEOProvider";
import Homepage from "./pages/Homepage";

// Lazy load non-critical pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
// const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));

function App() {
  // Page loading fallback component
  const PageLoadingFallback = () => (
    <div className="min-h-screen bg-gray-50">
      <SkeletonLoader variant="hero" />
    </div>
  );

  return (
    <ThemeProvider>
      {/* <SEOProvider> */}
        <Router>
          <div className="min-h-screen flex flex-col transition-colors duration-300">
            <Navbar />
            <main className="flex-1">
              <PageTransition>
                <Suspense fallback={<PageLoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    {/* <Route
                      path="/testimonials"
                      element={<TestimonialsPage />}
                    /> */}
                    <Route
                      path="/certifications"
                      element={<CertificationsPage />}
                    />
                    <Route
                      path="/portfolio/:slug"
                      element={<CaseStudyPage />}
                    />
                  </Routes>
                </Suspense>
              </PageTransition>
            </main>
            <Footer />
          </div>
        </Router>
      {/* </SEOProvider> */}
    </ThemeProvider>
  );
}

export default App;
