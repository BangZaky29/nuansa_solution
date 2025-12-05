import React from 'react';
import Reveal from './reveal';

const Pricing = () => {
  const plans = [
    {
      name: "Silver",
      price: "2.500.000",
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
      name: "Gold",
      price: "4.500.000",
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
      name: "Platinum",
      price: "7.500.000",
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
    }
  ];

  return (
    <section className="pricing" id="harga">
      <div className="container">
        <div className="section-title">
          <h2>Paket Harga</h2>
          <p>Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <Reveal
              key={index}
              className={`card pricing-card ${plan.recommended ? 'recommended' : ''}`}
              delay={index * 90}
            >
              {plan.recommended && (
                <div className="recommended-badge">Recommended</div>
              )}
              <div className="pricing-header">
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">
                  Rp {plan.price}
                  <span>/paket</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn-primary pricing-cta">Pilih Paket</button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
