import React from 'react';
import Reveal from '../reveal';

const Features = () => {
  const features = [
    {
      icon: "⚖️",
      title: "Konsultan Legal",
      description:
        "Pendampingan hukum profesional untuk perizinan, legalitas usaha, kontrak, dan solusi hukum strategis bagi individu maupun bisnis."
    },
    {
      icon: "📊",
      title: "Kelola Manajemen",
      description:
        "Solusi pengelolaan manajemen bisnis yang rapi dan efisien untuk meningkatkan produktivitas, kontrol operasional, dan pertumbuhan usaha."
    },
    {
      icon: "🏠",
      title: "IT SOLUTION",
      description:
        "Solusi IT yang terintegrasi untuk mendukung operasional bisnis, pengelolaan data, dan pengembangan aplikasi yang efisien."
    },
    {
      icon: "🧮",
      title: "Kalkulator Pajak",
      description:
        "Perhitungan pajak yang mudah, cepat, dan akurat untuk membantu perencanaan pajak pribadi maupun bisnis."
    },
    {
      icon: "💻",
      title: "Pembuatan Website",
      description:
        "Pembuatan website profesional, modern, dan responsif untuk meningkatkan kredibilitas serta kehadiran digital bisnis Anda."
    },
    {
      icon: "💬",
      title: "Konsultasi Gratis",
      description: "Dapatkan konsultasi profesional tanpa biaya untuk menentukan solusi terbaik bagi kebutuhan bisnis Anda"
    },
  ];


  return (
    <section className="features" id="fitur">
      <div className="container">
        <div className="section-title">
          <Reveal delay={40}>
            <div className="section-badge">
              🎯 Keunggulan Kami
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2>Mengapa Memilih Layanan Kami?</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Kami memberikan solusi terbaik dengan fitur-fitur unggulan untuk 
              kesuksesan bisnis digital Anda
            </p>
          </Reveal>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100 + 160}>
              <div className="card feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;