import React from 'react';
import LogoBrand from './assets/BKBlank_LogoNuansaLegal.png';
import Reveal from './reveal';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <Reveal className="hero-text" delay={50}>
            <h1>Solusi Legal Digital Terpercaya untuk Bisnis Anda</h1>
            <p>
              Dapatkan layanan pembuatan website legal profesional dengan 
              desain premium, domain gratis, dan konsultasi tanpa biaya.
            </p>
            <a 
              className="btn-primary"
              href="https://wa.me/6288294096100?text=hallo%20kak..Apakah%20dengan%20konsultasi%20Pembuatas%20Website%20PT.%20Nuansa%20Legal%3F"
              target="_blank"
              rel="noreferrer"
            >
              Mulai Sekarang
            </a>
          </Reveal>
          <Reveal className="hero-image" delay={120}>
            <div className="hero-placeholder">
              <img src={LogoBrand} alt="Nuansa Legal" className="hero-logo" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
