import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "./services-data";
import warlokLogo from "../assets/apps/warlok_2000x2000_Transparant_1.png";
import "../styles/services.css";

// 1. Definisikan Kategori Utama
// Hardcoded structure based on user request
const MENU_GROUPS = [
  {
    title: "Aplikasi",
    icon: null,
    isAppSection: true,
    items: [
      {
        name: "Warlok - Warga Lokal",
        logo: warlokLogo,
        url: "https://warlok-website.nuansasolution.id/",
        description: "Solusi Manajemen Lingkungan Digital"
      }
    ]
  },
  {
    title: "Generator Surat Legal",
    icon: "⚖️",
    items: [
      "Generator Surat Kuasa",
      "Generator Surat Pernyataan",
      "Generator Surat Permohonan",
      "Generator Surat Perintah Kerja",
      "Generator Surat Jalan",
      "Generator Surat Keterangan Kerja",
      "Generator Surat Berita Acara"
    ]
  },
  {
    title: "Dokumen Operasional & Bisnis",
    icon: "💼",
    items: [
      "Generator Invoice",
      "Generator Surat Penawaran",
      "Generator Surat Perjanjian Sewa",
      "Generator Surat Kontrak Sewa Kantor",
      "Generator Surat Perjanjian Jual Beli",
      "Generator Surat Tanda Terima",
      "Generator Laporan Rekap Data Konsumen",
      "Generator Laporan Bisnis Keuangan Perusahaan Jasa",
      "Custom Letter Generator"
    ]
  },
  {
    title: "Keuangan & HR Tools",
    icon: "💰",
    items: [
      "Generator Slip Gaji",
      "Kalkulator PPH",
      "Kalkulator Pajak Properti",
      "Pencatatan Uang Masuk & Uang Keluar",
      "Aplikasi Pos Kasir",
      "Aplikasi CRM",
      "Aplikasi ERP",
      "Aplikasi Akuntansi Perusahaan",
      "E-learning (Sekolah, Universitas dan Instansi)"
    ]
  }
];

const ServicesMegaMenu = ({ onItemClick }) => {
  const navigate = useNavigate();
  const services = useServices();

  // Mapping for items that should behave like Industry links
  const INDUSTRY_LINKS = {
    "Pencatatan Uang Masuk & Uang Keluar": "/industri/pencatatan-keuangan",
    "Aplikasi Pos Kasir": "/industri/pos-kasir",
    "Aplikasi CRM": "/industri/crm",
    "Aplikasi ERP": "/industri/erp",
    "E-learning (Sekolah, Universitas dan Instansi)": "/industri/e-learning"
  };

  // Helper to find service URL
  const getServiceData = (title) => {
    // Basic fuzzy match or direct match
    const found = services.find(s =>
      s.title.toLowerCase() === title.toLowerCase() ||
      s.title.toLowerCase().includes(title.toLowerCase())
    );

    // Default fallback
    return found || {
      url: "https://payment.nuansasolution.id/register",
      icon: "📄"
    };
  };

  return (
    <div className="mega-dropdown">
      <div className="services-mega-layout" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        padding: '2rem',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        {MENU_GROUPS.map((group, idx) => (
          <div key={idx} className={`service-group ${group.isAppSection ? 'app-section' : ''}`} style={group.isAppSection ? {
            gridColumn: '1 / -1',
            marginBottom: '1rem',
            borderBottom: '2px solid #f1f5f9',
            paddingBottom: '1.5rem'
          } : {}}>
            <div className="group-header" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              padding: '0.75rem',
              backgroundColor: group.isAppSection ? '#f8fafc' : '#eff6ff',
              borderRadius: '0.5rem',
              color: group.isAppSection ? '#64748b' : '#1e40af',
              fontWeight: 'bold'
            }}>
              {group.icon && <span style={{ fontSize: '1.25rem' }}>{group.icon}</span>}
              <h3 style={{ margin: 0, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{group.title}:</h3>
            </div>

            {group.isAppSection ? (
              <div className="apps-container" style={{ display: 'flex', gap: '2rem' }}>
                {group.items.map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '1rem',
                      backgroundColor: '#f1f5f9',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f1f5f9';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <img src={app.logo} alt={app.name} style={{ height: '40px', width: 'auto' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '1rem' }}>{app.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{app.description}</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {group.items.map((item) => {
                  const isIndustryLink = INDUSTRY_LINKS[item];
                  const service = getServiceData(item);

                  // Content common to both link types
                  const content = (
                    <>
                      <span>{service.icon || '📄'}</span>
                      <span>{item}</span>
                    </>
                  );

                  const linkStyle = {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  };

                  return (
                    <li key={item} style={{ marginBottom: '0.5rem' }}>
                      {isIndustryLink ? (
                        <div
                          onClick={() => {
                            onItemClick && onItemClick();
                            navigate(isIndustryLink);
                          }}
                          className="service-link"
                          style={linkStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f1f5f9';
                            e.currentTarget.style.color = '#2563eb';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#475569';
                          }}
                        >
                          {content}
                        </div>
                      ) : (
                        <a
                          href={service.url}
                          className="service-link"
                          onClick={onItemClick}
                          style={linkStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f1f5f9';
                            e.currentTarget.style.color = '#2563eb';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#475569';
                          }}
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
