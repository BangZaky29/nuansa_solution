import React, { useState, useEffect } from 'react';
import Reveal from '../reveal';

// Import gambar lokal
import our1 from "/src/assets/our/our_01.jpg";
import our2 from "/src/assets/our/our_02.jpg";
import our3 from "/src/assets/our/our_03.jpg";
import our4 from "/src/assets/our/our_04.jpg";
import our5 from "/src/assets/our/our_05.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array foto untuk slideshow
  const slides = [
    { id: 1, image: our1, alt: "Our Image 01" },
    { id: 2, image: our2, alt: "Our Image 02" },
    { id: 3, image: our3, alt: "Our Image 03" },
    { id: 4, image: our4, alt: "Our Image 04" },
    { id: 5, image: our5, alt: "Our Image 05" }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
                href="https://wa.me/6288294096100?text=Halo%20kak,%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20dari%20Nuansa%20Solution"
                target="_blank"
                rel="noreferrer"
              >
                <span>Konsultasi Gratis</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a 
                className="btn-secondary"
                href="#harga"
              >
                Lihat Paket Harga
              </a>
            </div>
          </Reveal>

          {/* Slideshow Section */}
          <Reveal className="hero-image" delay={120}>
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}

              {/* Navigation Buttons */}
              <button 
                className="slide-nav prev" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button 
                className="slide-nav next" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Dots */}
              <div className="slide-dots">
                {slides.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;