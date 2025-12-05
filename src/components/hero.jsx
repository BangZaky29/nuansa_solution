import React, { useState, useEffect } from 'react';
// import LogoBrand from './src/assets/BKBlank_LogoNuansaLegal.png';
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
  {
    id: 1,
    image: our1,
    alt: "Our Image 01"
  },
  {
    id: 2,
    image: our2,
    alt: "Our Image 02"
  },
  {
    id: 3,
    image: our3,
    alt: "Our Image 03"
  },
  {
    id: 4,
    image: our4,
    alt: "Our Image 04"
  },
  {
    id: 5,
    image: our5,
    alt: "Our Image 05"
  }
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

          {/* == Text Section (Tetap) == */}
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

          {/* == Slideshow Section (Hasil Penggabungan) == */}
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
              <button className="slide-nav prev" onClick={prevSlide}>❮</button>
              <button className="slide-nav next" onClick={nextSlide}>❯</button>

              {/* Dots */}
              <div className="slide-dots">
                {slides.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
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
