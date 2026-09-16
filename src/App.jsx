import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen flex flex-col bg-[#06080d] text-text-primary selection:bg-brand/30 selection:text-brand-light overflow-x-hidden">
          {/* 1. Luminous Horizon Top Laser Beam */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent z-40 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
          />

          {/* 2. Precision Technical Engineering Grid with Radial Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_15%,#000_70%,transparent_100%)] opacity-90"
          />

          {/* 3. Micro Dot Matrix Texture for Depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_35%,#000_40%,transparent_100%)] opacity-60"
          />

          {/* 4. Ambient Cyber Lighting Orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[580px] bg-gradient-to-b from-brand/22 via-accent-cyan/15 to-transparent blur-[160px] rounded-full z-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed top-[40%] -right-48 w-[650px] h-[650px] bg-brand/12 blur-[180px] rounded-full z-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-12 -left-48 w-[550px] h-[550px] bg-accent-cyan/10 blur-[160px] rounded-full z-0"
          />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
          <Suspense
            fallback={
              <div className="flex-1 flex items-center justify-center min-h-[60vh]" role="status" aria-label="Loading page">
                <div className="w-8 h-8 rounded-full border-2 border-brand-light border-t-transparent animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Navigate to="/#projects" replace />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
