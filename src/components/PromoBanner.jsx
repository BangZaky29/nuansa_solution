import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import Reveal from '../reveal';
import { getWhatsAppLink } from '../utils/whatsapp';
import '../styles/promobanner.css';

// Import poster
import posterPA from '/poster_PA.jpeg';

const PromoBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const waLink = getWhatsAppLink(
    '6285697474908',
    'Hallo kak, saya tertarik dengan layanan Personal Assistant (PA) Nuansa Solution. Bisa info lebih lanjut?'
  );

  const highlights = [
    'Administrasi & laporan keuangan',
    'Design grafis sesuai kebutuhan',
    'Pengelolaan media sosial',
    'Pembuatan dokumen bisnis',
    'Pendampingan perizinan usaha',
    'Pengelolaan website',
  ];

  return (
    <section className="promo-banner-section" id="promo-pa">
      {/* Background decorations */}
      <div className="promo-bg-orb promo-bg-orb-1" />
      <div className="promo-bg-orb promo-bg-orb-2" />
      <div className="promo-bg-orb promo-bg-orb-3" />

      <div className="container">
        <Reveal delay={40}>
          <div className="section-badge promo-badge">
            🔥 Layanan Baru
          </div>
        </Reveal>

        <div className="promo-banner-content">
          {/* Left — Poster Image */}
          <Reveal className="promo-poster-col" delay={80}>
            <motion.div
              className="promo-poster-wrapper"
              whileHover={{ scale: 1.03, rotateY: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setShowModal(true)}
            >
              <div className="promo-poster-glow" />
              <img
                src={posterPA}
                alt="Jasa Personal Assistant Nuansa Solution - Rp 1.900.000/bln"
                className="promo-poster-img"
                loading="lazy"
              />
              <div className="promo-poster-overlay">
                <span className="promo-zoom-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
                <span>Klik untuk lihat detail</span>
              </div>
            </motion.div>
          </Reveal>

          {/* Right — Info */}
          <Reveal className="promo-info-col" delay={160}>
            <div className="promo-info-card">
              <h2 className="promo-title">
                Jasa <span className="promo-highlight">Personal Assistant</span>
              </h2>
              <p className="promo-desc">
                Dapatkan asisten profesional untuk mendukung operasional bisnis Anda secara efisien. 
                Fokus pada pertumbuhan bisnis, biarkan kami yang mengurus administrasi!
              </p>

              {/* Price Badge */}
              <div className="promo-price-badge">
                <span className="promo-price-label">Mulai dari</span>
                <span className="promo-price-value">
                  Rp 1.900.000<span className="promo-price-period">/bln</span>
                </span>
              </div>

              {/* Highlights */}
              <div className="promo-highlights">
                {highlights.map((item, idx) => (
                  <div className="promo-highlight-item" key={idx}>
                    <span className="promo-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Ketentuan */}
              <div className="promo-ketentuan">
                <div className="promo-ketentuan-item">
                  📅 <span>Senin - Jumat | 09.00 - 16.00 WIB</span>
                </div>
                <div className="promo-ketentuan-item">
                  ⏰ <span>Overtime Rp 45.000 / jam</span>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="promo-cta-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.02 2 10.97c0 1.93.63 3.72 1.71 5.2L2 22l5.02-1.65A9.89 9.89 0 0 0 12 20c5.52 0 10-4.02 10-8.97C22 6.02 17.52 2 12 2Zm0 16.5c-1.6 0-3.08-.46-4.34-1.25l-.31-.2-2.98.98.98-2.9-.22-.33A7.3 7.3 0 0 1 4.5 11c0-3.89 3.36-7.05 7.5-7.05s7.5 3.16 7.5 7.05-3.36 7.5-7.5 7.5Zm4.16-4.3c-.23-.11-1.32-.64-1.52-.71-.2-.07-.35-.11-.5.11-.15.23-.58.71-.71.86-.13.15-.26.17-.49.06-.23-.11-.97-.36-1.85-1.14-.68-.59-1.14-1.32-1.27-1.55-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.39.08-.16.05-.3-.03-.42-.08-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.38h-.43c-.15 0-.39.06-.6.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.11.15 1.62 2.58 3.94 3.52.55.24.98.38 1.32.49.55.17 1.06.15 1.46.09.45-.07 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.1-.21-.16-.44-.27Z" />
                </svg>
                Konsultasi via WhatsApp
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Modal via Portal — rendered outside section to avoid transform issues */}
      {showModal && createPortal(
        <div className="promo-modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="promo-modal-content"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="promo-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={posterPA}
              alt="Poster Jasa Personal Assistant - Detail"
              className="promo-modal-img"
            />
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default PromoBanner;
