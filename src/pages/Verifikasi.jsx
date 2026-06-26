import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/sertifikasi.css';

// ======================================
// DUMMY DATA — prefix NS- (Nuansa Solution)
// ======================================
const dummyCertificates = [
  {
    certificateNo: 'NS-2026-9001-001',
    customerName: 'PT. DIGITAL NUSANTARA PRIMA',
    systemType: 'ISO 9001:2015 Sistem Manajemen Mutu',
    scope: 'Penyediaan Jasa Teknologi Informasi, Pengembangan Perangkat Lunak, dan Konsultasi Digital',
    address: 'Gedung STC Senayan Lt.3 No.190, Jakarta Pusat, Indonesia',
    systemState: 'Valid',
    expireDate: '20/08/2029',
    fileUrl: '#'
  },
  {
    certificateNo: 'NS-2026-14001-088',
    customerName: 'CV. SOLUSI KREATIF MANDIRI',
    systemType: 'ISO 14001:2015 Sistem Manajemen Lingkungan',
    scope: 'Pengembangan Aplikasi Digital & Pengelolaan Infrastruktur IT Ramah Lingkungan',
    address: 'Perumahan Citoh Cluster Halimun Blok H No. 7, Kab. Bogor, Jawa Barat',
    systemState: 'Valid',
    expireDate: '15/03/2028',
    fileUrl: '#'
  },
  {
    certificateNo: '123',
    customerName: 'PT. DEMO TESTING NS',
    systemType: 'ISO 45001:2018 Sistem Manajemen K3',
    scope: 'Layanan Pengujian, Audit Keselamatan, dan Konsultasi K3',
    address: 'Komplek Firdaus Garden, Ngamprah, Kab. Bandung Barat, Jawa Barat',
    systemState: 'Expired',
    expireDate: '01/01/2025',
    fileUrl: '#'
  }
];

// ======================================
// ICONS (inline SVG untuk no-dep)
// ======================================
const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const IconCheckCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconXCircle = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const IconFile = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
  </svg>
);

// ======================================
// COMPONENT
// ======================================
const Verifikasi = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foundCertificate, setFoundCertificate] = useState(null);

  const performSearch = (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      const result = dummyCertificates.find(
        (cert) =>
          cert.certificateNo.toLowerCase() === query.trim().toLowerCase() ||
          cert.customerName.toLowerCase().includes(query.trim().toLowerCase())
      );
      setFoundCertificate(result || null);
      setLoading(false);
      setSearched(true);
    }, 900);
  };

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };

  const tableRows = foundCertificate ? [
    { label: 'Certificate No', value: foundCertificate.certificateNo },
    { label: 'Customer Name', value: foundCertificate.customerName },
    { label: 'System Type', value: foundCertificate.systemType },
    { label: 'Scope', value: foundCertificate.scope },
    { label: 'Address', value: foundCertificate.address },
    {
      label: 'System State',
      value: foundCertificate.systemState === 'Valid'
        ? <span className="badge-valid">{foundCertificate.systemState}</span>
        : <span className="badge-expired">{foundCertificate.systemState}</span>
    },
    { label: 'Expire Date', value: foundCertificate.expireDate },
    {
      label: 'File',
      value: (
        <a href={foundCertificate.fileUrl} className="cert-file-link">
          <IconFile /> Click here
        </a>
      )
    }
  ] : [];

  return (
    <div className="verifikasi-page">
      {/* Page title for SEO */}
      <title>Verifikasi Sertifikat | Nuansa Solution</title>

      <div className="verifikasi-container">
        {/* Header */}
        <div className="verifikasi-header">
          <h1>Verifikasi Sertifikat</h1>
          <p>
            Masukkan Nomor Sertifikat atau Nama Perusahaan untuk memeriksa
            keabsahan dokumen sertifikasi ISO Anda.
          </p>
        </div>

        {/* Form Card */}
        <div className="verifikasi-card">
          <form onSubmit={handleSearch} className="verifikasi-search-form">
            <div className="verifikasi-input-wrap">
              <span className="verifikasi-input-icon">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Contoh: NS-2026-9001-001 atau nama perusahaan"
                className="verifikasi-input"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="verifikasi-search-btn"
            >
              {loading ? (
                <span className="spinner" />
              ) : (
                <>
                  <IconSearch />
                  Cari Data
                </>
              )}
            </button>
          </form>

          <p className="verifikasi-hint">
            Coba tes dengan No. Sertifikat Dummy:{' '}
            <span className="hint-link" onClick={() => setSearchQuery('NS-2026-9001-001')}>
              NS-2026-9001-001
            </span>
            ,{' '}
            <span className="hint-link" onClick={() => setSearchQuery('NS-2026-14001-088')}>
              NS-2026-14001-088
            </span>
            , atau{' '}
            <span className="hint-link" onClick={() => setSearchQuery('123')}>
              123
            </span>
          </p>

          {/* Result */}
          {searched && !loading && (
            <div>
              {foundCertificate ? (
                <div className="cert-result">
                  <div className="cert-result-header">
                    <span className="cert-result-header-icon">
                      <IconCheckCircle />
                    </span>
                    <h3>Sertifikat Ditemukan</h3>
                  </div>
                  <div className="cert-result-body">
                    <table className="cert-table">
                      <tbody>
                        {tableRows.map((row, idx) => (
                          <tr key={idx}>
                            <th>{row.label}</th>
                            <td>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="cert-not-found">
                  <div className="cert-not-found-icon">
                    <IconXCircle />
                  </div>
                  <h3>Data Tidak Ditemukan</h3>
                  <p>
                    Sertifikat dengan kata kunci &ldquo;{searchQuery}&rdquo; tidak ada
                    dalam database kami. Periksa kembali nomor sertifikat atau
                    nama perusahaan Anda.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verifikasi;
