import React from 'react';
import Reveal from './reveal';
import IconEmail from './assets/sosialMedia/email.png';
import IconInstagram from './assets/sosialMedia/instagram.png';
import IconTiktok from './assets/sosialMedia/tiktok.png';
import LogoBrand from './assets/NS_blank_01.png';
import phoneIcon from "/src/assets/sosialMedia/phone.png";
import emailIcon from "/src/assets/sosialMedia/email_BK.png";
import clockIcon from "/src/assets/sosialMedia/Clock.png";


const Footer = () => {
  return (
    <footer className="footer" id="kontak">
      <div className="container">
        <div className="footer-content">
          <Reveal className="footer-section footer-brand" delay={40}>
            <img src={LogoBrand} alt="Nuansa Legal" className="footer-logo" />
            <div className="footer-company">
              <h4>PT. NUANSA BERKAH SEJAHTERA</h4>
              <p>Cabang Jakarta :</p>
              <p>Gedung STC Senayan Lt.3 No.190 Jakarta Pusat | 0896-4444-8721</p>
              <p>Cabang Bogor :</p>
              <p>Perum Citoh Cluster Halimun J4, Bogor | 0858-8343-7514</p>
              <p>Cabang Bandung :</p>
              <p>Komplek Firdaus Garden, Ngamprah, Kab. Bandung Barat | 0882-9409-6100</p>
            </div>
            <div className="footer-social-icons">
              <a href="https://www.instagram.com/nuansalegal.id/" target="_blank" rel="noreferrer">
                <img src={IconInstagram} alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@nuansalegal.id?lang=id-ID" target="_blank" rel="noreferrer">
                <img src={IconTiktok} alt="Tiktok" />
              </a>
              <a href="mailto:cs@nuansalegal.id">
                <img src={IconEmail} alt="Email" />
              </a>
            </div>
          </Reveal>
          <Reveal className="footer-section footer-links" delay={80}>
            <h3>Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#fitur">Layanan</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </Reveal>
          <Reveal className="footer-section footer-details" delay={120}>
            <h3>Details</h3>
            <ul className="footer-list">
              <li><a href="#legal">Legal Notice</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li>All rights reserved</li>
            </ul>
          </Reveal>
          <Reveal className="footer-section footer-contact" delay={160}>
            <h3>Kontak Kami</h3>
            <div className="footer-contact">
              <ul className="footer-contact-list">
                <li>
                  <img src={phoneIcon} alt="Phone" className="contact-icon" />
                  <span>0896-4444-8721</span>
                </li>
                <li> 
                  <img src={emailIcon} alt="Email" className="contact-icon" />
                  <span>cs@nuansalegal.id</span>
                </li>
                <li> 
                  <img src={emailIcon} alt="Email" className="contact-icon" />
                  <span>elanurajijah14@gmail.com</span>
                </li>
                <li>
                  <img src={clockIcon} alt="Clock" className="contact-icon" />
                  <span>08.00 - 17.00 WIB</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Nuansa Legal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
