import React from 'react';
import Reveal from './reveal';

const Features = () => {
  const features = [
    {
      icon: "💬",
      title: "Konsultasi Gratis",
      description: "Dapatkan konsultasi gratis untuk menentukan solusi terbaik bagi bisnis Anda"
    },
    {
      icon: "🔒",
      title: "Domain + SSL Free",
      description: "Domain profesional dan sertifikat SSL gratis untuk keamanan maksimal"
    },
    {
      icon: "✨",
      title: "Desain Premium",
      description: "Desain website modern dan responsif yang meningkatkan kredibilitas bisnis"
    }
  ];

  return (
    <section className="features" id="fitur">
      <div className="container">
        <div className="section-title">
          <h2>Keunggulan Layanan</h2>
          <p>Mengapa memilih kami untuk kebutuhan website legal Anda</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Reveal key={index} className="card feature-card" delay={index * 80}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
