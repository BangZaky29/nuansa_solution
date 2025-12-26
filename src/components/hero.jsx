import React from 'react';
import Reveal from '../reveal';
import { getWhatsAppLink } from "../utils/whatsapp";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          
          {/* Text Section */}
          <Reveal className="hero-text" delay={50}>
            <div className="section-badge">
              ✨ Solusi Digital Profesional
            </div>
            <h1>Wujudkan Kehadiran Digital Legal Bisnis Anda</h1>
            <p>
              Platform terpercaya untuk membangun website legal profesional dengan 
              desain premium, teknologi terkini, dan dukungan konsultasi gratis untuk 
              mengembangkan bisnis Anda di era digital.
            </p>
            <div className="hero-cta">
              <a
                className="btn-primary"
                href={getWhatsAppLink("6285775080888")}
                target="_blank"
                rel="noreferrer"
              >
                <span>Konsultasi Gratis</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a 
                className="btn-secondary"
                href="https://payment.nuansasolution.id/"
                target="_blank"
                rel="noreferrer"
              >
                Lihat Paket Harga
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-image" delay={120}>
            <img
              src="/nuansaLogo.png"
              alt="Nuansa Solution"
              className="hero-logo"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;
