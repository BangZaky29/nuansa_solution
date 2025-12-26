import React from 'react';
import { useParams } from 'react-router-dom';
import { getIndustryBySlug } from './data';
import NSLogoBig from '../assets/NS_blank_01.png';
import { getWhatsAppLink } from '../utils/whatsapp';

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-text">
              <h1>Industri tidak ditemukan</h1>
              <h4>Silakan pilih industri dari menu Industri-industri di header.</h4>
              <div className="industry-actions">
                <a className="btn-secondary" href="/" aria-label="Kembali ke beranda">Kembali</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const waMsg = `Hallo kak. Saya dapat informasi dari website nuansasolution.id. Saya mau konsultasi mengenai layanan ${industry.name}.`;
  const wa = getWhatsAppLink('6285775080888', waMsg);

  return (
    <section className="industry-page">
      <div className="container">
        <div className="industry-content">
          <div className="industry-text">
            <div className="section-badge">Solusi Digital Profesional</div>
            <h1>Software ideal untuk mengelola {industry.name}</h1>
            <h4>
              Nuansa Solution membantu {industry.name.toLowerCase()} dengan teknologi modern,
              automasi proses, dan dukungan konsultasi gratis untuk meningkatkan efisiensi,
              pelayanan, serta pengelolaan inventaris dan customer service.
            </h4>
            <div className="industry-actions">
              <a className="btn-primary" href={wa} target="_blank" rel="noreferrer">
                Mulai sekarang
              </a>
              <a className="btn-secondary" href={wa} target="_blank" rel="noreferrer">
                Temui penasihat
              </a>
            </div>
          </div>
          <div className="industry-image">
            <img src={NSLogoBig} alt="Nuansa Solution" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPage;
