import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "./services-data";
import "../styles/services.css";

// 1. Definisikan Kategori Utama
const CATEGORIES = [
  { id: "generator", label: "Generator Surat", icon: "📝" },
  { id: "calculator", label: "Calculator", icon: "🧮" },
  { id: "document", label: "Document", icon: "📄" },
  { id: "crm", label: "CRM", icon: "👥" },
  { id: "akuntansi", label: "Akuntansi", icon: "📒" },
  { id: "erp", label: "ERP", icon: "📊" },
  { id: "pos-kasir", label: "POS Kasir", icon: "🏪" },
  { id: "it-solution", label: "IT SOLUTION", icon: "💻" },
];

const ServicesMegaMenu = ({ onItemClick }) => {
  const navigate = useNavigate();
  const services = useServices();
  const [activeCategory, setActiveCategory] = useState("generator");

  const handleCategoryClick = (catId) => {
    // Kategori yang memiliki list card sendiri
    if (["generator", "akuntansi", "calculator", "document"].includes(catId)) {
      setActiveCategory(catId);
    } else {
      // Navigasi langsung untuk kategori lainnya
      onItemClick && onItemClick();
      navigate(`/industri/${catId}`);
    }
  };

  // Filter logic
  const accountingServices = services.filter((s) => s.title === "Akuntansi");
  const calculatorServices = services.filter((s) =>
    s.title.toLowerCase().includes("kalkulator")
  );
  const documentServices = services.filter((s) =>
    s.title.toLowerCase().includes("kbli")
  );

  // Generator = Semua services KECUALI yang sudah masuk kategori lain
  const generatorServices = services.filter((s) =>
    s.title !== "Akuntansi" &&
    !s.title.toLowerCase().includes("kalkulator") &&
    !s.title.toLowerCase().includes("kbli")
  );

  let displayedServices = [];
  if (activeCategory === "akuntansi") displayedServices = accountingServices;
  else if (activeCategory === "calculator") displayedServices = calculatorServices;
  else if (activeCategory === "document") displayedServices = documentServices;
  else displayedServices = generatorServices;

  return (
    <div className="mega-dropdown">
      {/* 2. Top Grid Buttons */}
      <div className="services-category-grid">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-label">
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Content Area */}
      {["generator", "akuntansi", "calculator", "document"].includes(activeCategory) && (
        <div className="services-grid">
          {displayedServices.length > 0 ? (
            displayedServices.map((service) => (
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
                    className={`service-label ${service.label === "Free Trial"
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
            ))) : (
            <div style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "2rem",
              color: "#64748b"
            }}>
              Layanan belum tersedia.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
