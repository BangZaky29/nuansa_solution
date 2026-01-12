import React from "react";
import useServices from "./services-data";
import "../styles/services.css";


const ServicesMegaMenu = ({ onItemClick }) => {
  const services = useServices();

  return (
    <div className="mega-dropdown">
      <div className="services-grid">
        {services.map((service) => (
          <a
            key={service.id}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            download={service.isDownload ? true : undefined}
            className="service-card"
            onClick={onItemClick}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-info">
              <span className="service-title">{service.title}</span>
              <span
                className={`service-label ${
                  service.label === "Free Trial"
                    ? "label-free"
                    : service.label === "Free Download"
                    ? "label-download"
                    : "label-subscribe"
                }`}
              >
                {service.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
