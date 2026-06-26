import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LogoHalimoon from './assets/NS_blank_02.png';
import LogoNuansaLegal from './assets/BKBlank_LogoNuansaLegal.png';
import { getWhatsAppLink } from "./utils/whatsapp";
import IndustriesMegaMenu from './industries/IndustriesMegaMenu';
import ServicesMegaMenu from './components/ServicesMegaMenu';
import './styles/sertifikasi.css';

// =============================================
// Data dropdown Sertifikasi
// =============================================
const sertifikasiItems = [
  { name: 'Sertifikasi ISO 9001:2015', desc: 'Sistem Manajemen Mutu' },
  { name: 'Sertifikasi ISO 14001:2015', desc: 'Sistem Manajemen Lingkungan' },
  { name: 'Sertifikasi ISO 45001:2018', desc: 'Sistem Manajemen K3' },
  { name: 'Sertifikasi ISO 27001:2022', desc: 'Sistem Manajemen Keamanan Informasi' },
  { name: 'Sertifikasi ISO 37001:2016', desc: 'Sistem Manajemen Anti Penyuapan' },
  { name: 'Sertifikasi ISO 50001:2018', desc: 'Sistem Manajemen Energi' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sertifikasiOpen, setSertifikasiOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIndustriesOpen(false);
    setServicesOpen(false);
    setSertifikasiOpen(false);
  };

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo" onClick={closeAllMenus}>
              <img src={LogoHalimoon} alt="Halimoon" className="logo-halimoon" />
            </Link>
            <p>
              Support
              <a href="https://www.nuansalegal.id/" target="_blank" rel="noopener noreferrer">
                <img src={LogoNuansaLegal} alt="Nuansa Legal" className="logo-nuansa-legal" />
              </a>
              <br />By Nuansa Legal
            </p>
          </div>

          <nav>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>

              {/* Home */}
              <li>
                <NavLink to="/" onClick={closeAllMenus}>Home</NavLink>
              </li>

              {/* Industri Mega Menu */}
              <li className={`mega ${industriesOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="mega-trigger nav-link-like"
                  onClick={() => {
                    setIndustriesOpen((v) => !v);
                    setServicesOpen(false);
                    setSertifikasiOpen(false);
                  }}
                  aria-expanded={industriesOpen ? 'true' : 'false'}
                  aria-controls="mega-industries"
                >
                  Industri-industri
                </button>
                <IndustriesMegaMenu
                  onItemClick={() => {
                    setIndustriesOpen(false);
                    setMenuOpen(false);
                  }}
                />
              </li>

              {/* Layanan Mega Menu */}
              <li className={`mega ${servicesOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="mega-trigger nav-link-like"
                  onClick={() => {
                    setServicesOpen((v) => !v);
                    setIndustriesOpen(false);
                    setSertifikasiOpen(false);
                  }}
                  aria-expanded={servicesOpen ? 'true' : 'false'}
                  aria-controls="mega-services"
                >
                  Layanan
                </button>
                <ServicesMegaMenu
                  onItemClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                />
              </li>

              {/* ========================
                  SERTIFIKASI DROPDOWN (BARU)
                  ======================== */}
              <li className="nav-sertifikasi">
                {/* Desktop: hover dropdown */}
                <button
                  type="button"
                  className="mega-trigger nav-link-like nav-sertifikasi-trigger"
                  onClick={() => {
                    setSertifikasiOpen((v) => !v);
                    setIndustriesOpen(false);
                    setServicesOpen(false);
                  }}
                  aria-expanded={sertifikasiOpen ? 'true' : 'false'}
                >
                  Sertifikasi
                  <svg className="chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Dropdown panel — desktop: hover via CSS, mobile: controlled by state */}
                <div
                  className="nav-sertifikasi-dropdown"
                  style={
                    /* pada mobile (menuOpen = true), gunakan state untuk kontrol */
                    menuOpen
                      ? { opacity: sertifikasiOpen ? 1 : 0, visibility: sertifikasiOpen ? 'visible' : 'hidden', position: 'static', transform: 'none', boxShadow: 'none', borderRadius: '8px', marginTop: '8px' }
                      : {}
                  }
                >
                  {sertifikasiItems.map((item, idx) => (
                    <a
                      key={idx}
                      href="https://www.nuansalegal.id/sertifikasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-sertifikasi-dropdown-item"
                      onClick={() => {
                        setSertifikasiOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      <span>{item.desc}</span>
                    </a>
                  ))}
                </div>
              </li>

              {/* Kontak */}
              <li>
                <a href="#kontak" onClick={() => { setMenuOpen(false); closeAllMenus(); }}>
                  Kontak
                </a>
              </li>

              {/* ========================
                  VERIFIKASI LINK (BARU)
                  ======================== */}
              <li>
                <Link
                  to="/verifikasi"
                  className="nav-verifikasi-link"
                  onClick={() => { setMenuOpen(false); closeAllMenus(); }}
                >
                  Verifikasi
                </Link>
              </li>

              {/* Konsultasi CTA */}
              <li>
                <a
                  className="btn-primary"
                  href={getWhatsAppLink("6285775080888")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsultasi
                </a>
              </li>

            </ul>
          </nav>

          <button
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (menuOpen) closeAllMenus();
            }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
