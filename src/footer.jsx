import React from 'react';
import { Link } from 'react-router-dom';
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
    <footer className="footer" id="kontak" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          
          <Reveal className="footer-section footer-brand" delay={40}>
            <img src={LogoBrand} alt="Nuansa Solution" className="footer-logo" />
            <div className="footer-company">
              <h4>PT. NUANSA BERKAH SEJAHTERA</h4>
              
              <p><strong>Cabang Jakarta:</strong></p>
              <p>Gedung STC Senayan Lt.3 No.190<br />Jakarta Pusat | 0896-4444-8721</p>
              
              <p><strong>Cabang Bogor:</strong></p>
              <p>Perum Citoh Cluster Halimun J4<br />Bogor | 0858-8343-7514</p>
              
              <p><strong>Cabang Bandung:</strong></p>
              <p>Komplek Firdaus Garden, Ngamprah<br />Kab. Bandung Barat | 0882-9409-6100</p>
            </div>
            
            <div className="footer-social-icons" role="navigation" aria-label="Social media links">
              <a 
                href="https://www.instagram.com/nuansalegal.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <img src={IconInstagram} alt="" />
              </a>
              <a 
                href="https://www.tiktok.com/@nuansalegal.id?lang=id-ID" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our TikTok"
              >
                <img src={IconTiktok} alt="" />
              </a>
              <a 
                href="mailto:cs@nuansalegal.id"
                aria-label="Send us an email"
              >
                <img src={IconEmail} alt="" />
              </a>
            </div>
          </Reveal>

          <Reveal className="footer-section footer-links" delay={80}>
            <h3>Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#fitur">Layanan</a></li>
                <li><a href="#harga">Harga</a></li>
                <li><a href="#kontak">Kontak</a></li>
              </ul>
            </nav>
          </Reveal>

          <Reveal className="footer-section footer-details" delay={120}>
            <h3>Informasi</h3>
            <ul className="footer-list">
              <li><a href="#legal">Legal Notice</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><span>All rights reserved</span></li>
            </ul>
          </Reveal>

          <Reveal className="footer-section footer-contact" delay={160}>
            <h3>Kontak Kami</h3>
            <ul className="footer-contact-list">
              <li>
                <img src={phoneIcon} alt="" className="contact-icon" />
                <a href="tel:+6289644448721">0896-4444-8721</a>
              </li>
              <li> 
                <img src={emailIcon} alt="" className="contact-icon" />
                <a href="mailto:cs@nuansasolution.id">
                  cs@nuansasolution.id
                </a>
              </li>
              <li> 
                <img src={emailIcon} alt="" className="contact-icon" />
                <a href="mailto:Info@nuansasolution.id">
                  Info@nuansasolution.id
                </a>
              </li>
              <li> 
                <img src={emailIcon} alt="" className="contact-icon" />
                <a href="mailto:teknis@nuansasolution.id">
                  teknis@nuansasolution.id
                </a>
              </li>
              <li>
                <img src={clockIcon} alt="" className="contact-icon" />
                <span>08.00 - 17.00 WIB</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; 2022 Nuansa Solution. All rights reserved. 
            <span style={{ display: 'inline-block', margin: '0 8px' }}>|</span>
            Built with ❤️ by Nuansa Legal Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
