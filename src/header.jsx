import React, { useState } from 'react';
import LogoHalimoon from './assets/NS_blank_02.png';
import LogoNuansaLegal from './assets/BKBlank_LogoNuansaLegal.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <a href="#home" className="logo">
              <img src={LogoHalimoon} alt="Halimoon" className="logo-halimoon" />
            </a>
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
              <li><a href="#home">Home</a></li>
              <li><a href="https://payment.nuansasolution.id" target="_blank" rel="noopener noreferrer">Layanan</a></li>
              <li><a href="#fitur">Fitur</a></li>
              <li><a href="#harga">Harga</a></li>
              <li><a href="#kontak">Kontak</a></li>
              <li>
                <a 
                  className="btn-primary"
                  href="https://wa.me/6288294096100?text=hallo%20kak..Apakah%20dengan%20konsultasi%20Pembuatas%20Website%20PT.%20Nuansa%20Legal%3F"
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
