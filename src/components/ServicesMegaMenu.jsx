import React from 'react';
import { SERVICES_LIST } from './services-data';

const ServicesMegaMenu = ({ onItemClick }) => {
  return (
    <div className="mega-dropdown">
      <div className="services-grid">
        {SERVICES_LIST.map((service) => (
          <a
            key={service.id}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            download={service.isDownload ? true : undefined}
            className="service-card"
            onClick={onItemClick}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <span className="service-title">{service.title}</span>
            <span className={`service-label ${
              service.label === 'Free Trial' ? 'label-free' : 
              service.label === 'Free Download' ? 'label-download' : 
              'label-subscribe'
            }`}>
              {service.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
