import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../reveal';
import '../styles/sertifikasi.css';

// ======================================
// DATA — 9 ISO sertifikasi
// ======================================
const sertifikasiList = [
  { title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu', icon: '🏆' },
  { title: 'ISO 14001:2015', desc: 'Sistem Manajemen Lingkungan', icon: '🌿' },
  { title: 'ISO 45001:2018', desc: 'Sistem Manajemen K3', icon: '👷' },
  { title: 'ISO 37001:2016', desc: 'Sistem Manajemen Anti Penyuapan', icon: '⚖️' },
  { title: 'ISO 27001:2022', desc: 'Sistem Manajemen Keamanan Informasi', icon: '🔒' },
  { title: 'ISO 50001:2018', desc: 'Sistem Manajemen Energi', icon: '⚡' },
  { title: 'ISO 13485:2016', desc: 'Sistem Manajemen Alat Kesehatan', icon: '🏥' },
  { title: 'ISO 22000:2018', desc: 'Sistem Manajemen Keamanan Pangan', icon: '🍽️' },
  { title: 'ISO 21001:2018', desc: 'Sistem Manajemen Pendidikan', icon: '🎓' }
];

// ======================================
// COMPONENT
// ======================================
const SertifikasiSection = () => {
  const [certSearchQuery, setCertSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (certSearchQuery.trim()) {
      navigate(`/verifikasi?q=${encodeURIComponent(certSearchQuery.trim())}`);
    }
  };

  return (
    <section className="sertifikasi-section" id="sertifikasi">
      <div className="container">

        {/* Header */}
        <div className="sertifikasi-header">
          <Reveal delay={40}>
            <div className="section-badge">🏅 Standar Internasional</div>
          </Reveal>

          <Reveal delay={80}>
            <h2>Layanan Sertifikasi ISO</h2>
          </Reveal>

          <Reveal delay={120}>
            <p>
              Tingkatkan kredibilitas dan kepercayaan pelanggan terhadap bisnis
              Anda dengan sertifikasi ISO berstandar internasional, didukung
              penuh oleh Nuansa Legal.
            </p>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={160}>
            <form onSubmit={handleSearch}>
              <div className="cert-search-wrapper">
                <span className="cert-search-icon">🔍</span>
                <input
                  type="text"
                  value={certSearchQuery}
                  onChange={(e) => setCertSearchQuery(e.target.value)}
                  placeholder="Cek Sertifikat (Contoh: NS-2026-9001...)"
                  className="cert-search-input"
                />
                <button type="submit" className="cert-search-btn">
                  Cari Data
                </button>
              </div>
            </form>

            <p className="cert-search-hint">
              Coba tes dengan No. Sertifikat Dummy:{' '}
              <span
                className="cert-hint-link"
                onClick={() => setCertSearchQuery('NS-2026-9001-001')}
              >
                NS-2026-9001-001
              </span>
              ,{' '}
              <span
                className="cert-hint-link"
                onClick={() => setCertSearchQuery('NS-2026-14001-088')}
              >
                NS-2026-14001-088
              </span>
              , atau{' '}
              <span className="cert-hint-link" onClick={() => setCertSearchQuery('123')}>
                123
              </span>
            </p>
          </Reveal>
        </div>

        {/* ISO Grid */}
        <div className="sertifikasi-grid">
          {sertifikasiList.map((item, idx) => (
            <Reveal key={idx} delay={idx * 60 + 200}>
              <a
                className="sertifikasi-card"
                href="https://www.nuansalegal.id/sertifikasi"
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
              >
                <div className="sertifikasi-card-icon">
                  {item.icon}
                </div>
                <div className="sertifikasi-card-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="sertifikasi-cta">
            <a
              href="https://www.nuansalegal.id/sertifikasi"
              target="_blank"
              rel="noopener noreferrer"
              className="sertifikasi-cta-btn"
            >
              Lihat Semua Sertifikasi
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default SertifikasiSection;
