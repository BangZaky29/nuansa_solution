import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "./services-data";
import "../styles/services.css";

// 1. Definisikan Kategori Utama
// Hardcoded structure based on user request
const MENU_GROUPS = [
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
          <div key={idx} className="service-group">
            <div className="group-header" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              padding: '0.75rem',
              backgroundColor: '#eff6ff', // blue-50
              borderRadius: '0.5rem',
              color: '#1e40af', // blue-800
              fontWeight: 'bold'
            }}>
              <span style={{ fontSize: '1.25rem' }}>{group.icon}</span>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>{group.title}</h3>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
