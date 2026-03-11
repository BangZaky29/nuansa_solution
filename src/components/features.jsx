import React from 'react';
import Reveal from '../reveal';

const Features = () => {
  const products = [
    {
      icon: "⚖️",
      title: "Generator Surat",
      description:
        "Otomasi pembuatan dokumen legal dan administrasi secara digital yang cepat, akurat, dan profesional untuk kebutuhan bisnis Anda."
    },
    {
      icon: "🏠",
      title: "Warlok",
      description:
        "Warga Lokal - Aplikasi manajemen lingkungan RT/RW digital yang memudahkan iuran, pelaporan, dan komunikasi komunitas secara transparan."
    },
    {
      icon: "🎓",
      title: "E-learning",
      description:
        "Platform pembelajaran digital terintegrasi untuk sekolah, universitas, dan instansi dengan fitur manajemen kursus dan evaluasi lengkap."
    },
    {
      icon: "💻",
      title: "Aplikasi/Website sesuai Permintaan",
      description:
        "Solusi pengembangan perangkat lunak kustom yang premium, responsif, dan scalable sesuai dengan spesifikasi unik kebutuhan bisnis Anda."
    }
  ];

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
      icon: "💬",
      title: "Konsultasi Gratis",
      description: "Dapatkan konsultasi profesional tanpa biaya untuk menentukan solusi terbaik bagi kebutuhan bisnis Anda"
    }
  ];

  return (
    <section className="features" id="fitur">
      <div className="container">
        {/* Produk Utama Section */}
        <div className="section-title">
          <Reveal delay={40}>
            <div className="section-badge">🚀 Produk Unggulan</div>
          </Reveal>
          <Reveal delay={80}>
            <h2>PRODUK UTAMA KAMI</h2>
          </Reveal>
        </div>

        <div className="features-grid mb-20" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '4rem' }}>
          {products.map((product, index) => (
            <Reveal key={`prod-${index}`} delay={index * 100 + 100}>
              <div className="card feature-card border-2 border-blue-50 hover:border-blue-200 transition-all duration-300">
                <div className="feature-icon">{product.icon}</div>
                <h3 className="text-blue-600">{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Layanan Kami Section */}
        <div className="section-title pt-10 border-t border-gray-100">
          <Reveal delay={40}>
            <div className="section-badge bg-slate-100 text-slate-600">🎯 Layanan Profesional</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-gray-800">Layanan Kami</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Kami memberikan solusi terbaik dengan fitur-fitur unggulan untuk
              kesuksesan bisnis digital Anda
            </p>
          </Reveal>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {features.map((feature, index) => (
            <Reveal key={`feat-${index}`} delay={index * 100 + 160}>
              <div className="card feature-card shadow-sm hover:shadow-md transition-shadow">
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