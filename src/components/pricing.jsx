import React, { useState, useRef } from 'react';

// Import images
import poster_01 from '../assets/poster/poster_01.jpeg';
import poster_02 from '../assets/poster/poster_02.jpeg';
import poster_03 from '../assets/poster/poster_03.jpeg';

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const plans = [
    {
      // name: "CV",
      poster: poster_01,
      color: "#FF6B6B",
      features: [
        "5 Halaman Website",
        "Domain .com Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Support 3 Bulan"
      ],
      recommended: false
    },
    {
      // name: "Firma",
      poster: poster_02,
      color: "#4ECDC4",
      features: [
        "10 Halaman Website",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "SEO Optimization",
        "Support 6 Bulan",
        "Email Profesional"
      ],
      recommended: true
    },
    {
      // name: "Izin Properti",
      poster: poster_03,
      color: "#95E1D3",
      features: [
        "Unlimited Halaman",
        "Domain Premium Gratis",
        "SSL Certificate",
        "Responsive Design",
        "Advanced SEO",
        "Support 12 Bulan",
        "Email Profesional",
        "Maintenance Gratis"
      ],
      recommended: false
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (plan) => {
    setSelectedImage(plan);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="pricing" id="harga">
      <div className="container">
        <div className="carousel-header">
          <h2>Paket Harga</h2>
          <p className="carousel-subtitle">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>

        <div className="carousel-container" ref={containerRef}>
          {/* Left Navigation Button */}
          <button className="carousel-nav-btn left" onClick={goToPrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="carousel-track">
            {plans.map((plan, index) => {
              let position = 'nextSlide';
              if (index === currentIndex) {
                position = 'activeSlide';
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === plans.length - 1)
              ) {
                position = 'prevSlide';
              }

              return (
                <div
                  key={index}
                  className={`carousel-card ${position}`}
                  onClick={() => position === 'activeSlide' && openModal(plan)}
                >
                  {plan.recommended && (
                    <div className="recommended-badge-carousel">Recommended</div>
                  )}
                  
                  {/* Poster Image */}
                  <div className="card-image-wrapper">
                    <img 
                      src={plan.poster} 
                      alt={plan.name}
                      className="card-poster-image"
                    />
                    <div className="card-name-overlay">
                      <h3>{plan.name}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <h4 className="card-title">{plan.name}</h4>
                    <p className="card-subtitle">PACKAGE</p>
                    
                    {position === 'activeSlide' && (
                      <div className="card-features-preview">
                        {plan.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="feature-item-mini">
                            <span className="check-icon">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Navigation Button */}
          <button className="carousel-nav-btn right" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Carousel Dots Navigation */}
        <div className="carousel-dots">
          {plans.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Full Poster Only */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-content-carousel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              {/* Modal Image Only */}
              <div className="modal-image-wrapper">
                <img 
                  src={selectedImage.poster} 
                  alt={selectedImage.name}
                  className="modal-poster-image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
