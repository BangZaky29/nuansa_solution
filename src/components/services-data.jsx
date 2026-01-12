// src/components/services-data.jsx
import { useState, useEffect } from "react";
import { getFeatures } from "../utils/featureController";
import { STATIC_SERVICES } from "../data/staticServices";
import { mapFeatureIcon } from "../utils/featureIconMapper";
import { Icons } from "../utils/services-data-icons.jsx";



const PAYMENT_URL = "https://payment.nuansasolution.id";

export default function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadFeatures = async () => {
      // 1️⃣ Ambil data dari API
      const apiFeatures = await getFeatures();

      // 2️⃣ Map data API jadi format yang sama
      const mappedApiFeatures = apiFeatures
        .filter(item => !["calculator-pph", "calculator-pajak-properti", "kbli"].includes(item.code))
        .map(item => ({
          id: item.id,
          title: item.name,
          icon: mapFeatureIcon(item.code),
          url: PAYMENT_URL,
          label: item.status === "free" ? "Free Trial" : "Subscribe Now!",
        }));

      // 3️⃣ Merge dengan STATIC_SERVICES (Kalkulator + KBLI)
      const finalServices = [
        ...STATIC_SERVICES.map(item => ({
          ...item,
          icon: typeof item.icon === "string" ? Icons[item.icon] : item.icon
        })),
        ...mappedApiFeatures
      ];

      setServices(finalServices);
    };

    loadFeatures();
  }, []);

  return services;
}
