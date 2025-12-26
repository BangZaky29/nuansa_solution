import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoHalimoon from './assets/NS_blank_02.png';
import LogoNuansaLegal from './assets/BKBlank_LogoNuansaLegal.png';
import { getWhatsAppLink } from "./utils/whatsapp";
import IndustriesMegaMenu from './industries/IndustriesMegaMenu';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo">
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
              <li><NavLink to="/" onClick={() => setIndustriesOpen(false)}>Home</NavLink></li>
              <li className={`mega ${industriesOpen ? 'open' : ''}`}>
                <button 
                  type="button"
                  className="mega-trigger nav-link-like"
                  onClick={() => setIndustriesOpen((v) => !v)}
                  aria-expanded={industriesOpen ? 'true' : 'false'}
                  aria-controls="mega-industries"
                >
                  Industri-industri
                </button>
                <IndustriesMegaMenu 
                  onItemClick={() => setIndustriesOpen(false)} 
                />
              </li>
              <li><a href="https://payment.nuansasolution.id" target="_blank" rel="noopener noreferrer">Layanan</a></li>
              <li><NavLink to="/">Fitur</NavLink></li>
              <li><NavLink to="/">Harga</NavLink></li>
              <li><NavLink to="/">Kontak</NavLink></li>
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
            onClick={() => setMenuOpen(!menuOpen)}
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
