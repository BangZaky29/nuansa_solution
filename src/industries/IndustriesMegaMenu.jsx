import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRY_CATEGORIES } from './data';

const IndustriesMegaMenu = ({ onItemClick }) => {
  return (
    <div className="mega-dropdown">
      <div className="mega-grid">
        {INDUSTRY_CATEGORIES.map((cat) => (
          <div className="mega-column" key={cat.id}>
            <div className="mega-heading" style={{ borderColor: cat.color }}>
              {cat.label}
            </div>
            <ul className="mega-list">
              {cat.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/industri/${item.slug}`}
                    className="mega-link"
                    onClick={onItemClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mega-browse">
        <Link to="/industri">Browse semua Industri</Link>
      </div>
    </div>
  );
};

export default IndustriesMegaMenu;
