import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import Components
import Header from './header';
import Hero from './components/hero';
import Features from './components/features';
import Pricing from './components/pricing';
import TeamSection from './components/TeamSection';
import Footer from './footer';
import IndustryPage from './industries/IndustryPage';

// Import Styles
import './styles/main.css';
import './styles/components.css';
import './styles/pricing.css';
import './styles/TeamSection.css';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <main id="main-content">
    <Hero />
    <Features />
    <TeamSection />
  </main>
);

const App = () => {

  /* ===============================
     Smooth Scroll Anchor
  ================================ */
  // Hapus handler anchor & querySelector (menggunakan react-router)

  /* ===============================
     Scroll To Top Button
  ================================ */
  useEffect(() => {
    const handleScroll = () => {
      const scrollBtn = document.getElementById('scroll-to-top');
      if (!scrollBtn) return;

      scrollBtn.style.display =
        window.pageYOffset > 300 ? 'flex' : 'none';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ===============================
     WhatsApp Dynamic Message
  ================================ */
  const phoneNumber = '6285775080888';
  const waMessage = `
    Hallo kak. Saya dapat informasi dari website nuansasolution.id. Saya mau konsultasi mengenai layanan Nuansa Solution.
  `;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  // Hapus hash routing; diganti Router dengan Routes

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-opening">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industri/:slug" element={<IndustryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>

      {/* ===============================
          WhatsApp Floating Button
      ================================ */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi WhatsApp 0882-1372-8307"
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '32px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 8px 24px rgba(18, 140, 126, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow =
            '0 12px 32px rgba(18, 140, 126, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow =
            '0 8px 24px rgba(18, 140, 126, 0.4)';
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0"
        >
          <path
            fill="white"
            d="M12 2C6.48 2 2 6.02 2 10.97c0 1.93.63 3.72 1.71 5.2L2 22l5.02-1.65A9.89 9.89 0 0 0 12 20c5.52 0 10-4.02 10-8.97C22 6.02 17.52 2 12 2Zm0 16.5c-1.6 0-3.08-.46-4.34-1.25l-.31-.2-2.98.98.98-2.9-.22-.33A7.3 7.3 0 0 1 4.5 11c0-3.89 3.36-7.05 7.5-7.05s7.5 3.16 7.5 7.05-3.36 7.5-7.5 7.5Zm4.16-4.3c-.23-.11-1.32-.64-1.52-.71-.2-.07-.35-.11-.5.11-.15.23-.58.71-.71.86-.13.15-.26.17-.49.06-.23-.11-.97-.36-1.85-1.14-.68-.59-1.14-1.32-1.27-1.55-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.39.08-.16.05-.3-.03-.42-.08-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.38h-.43c-.15 0-.39.06-.6.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.11.15 1.62 2.58 3.94 3.52.55.24.98.38 1.32.49.55.17 1.06.15 1.46.09.45-.07 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.21-.16-.44-.27Z"
          />
        </svg>
      </a>

      {/* ===============================
          Scroll To Top Button
      ================================ */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #A7D8FF 0%, #4DA6FF 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 8px 24px rgba(77, 166, 255, 0.4)',
          cursor: 'pointer',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          zIndex: 999,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(77, 166, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(77, 166, 255, 0.4)';
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </BrowserRouter>
  );
};

export default App;
