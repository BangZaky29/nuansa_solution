export const INDUSTRY_CATEGORIES = [
  {
    id: 'retail',
    label: 'RETAIL',
    color: '#ef4444',
    items: [
      { slug: 'toko-buku', name: 'Toko Buku' },
      { slug: 'toko-baju', name: 'Toko Baju' },
      { slug: 'toko-furnitur', name: 'Toko Furnitur' },
      { slug: 'toko-kelontong', name: 'Toko Kelontong' },
      { slug: 'toko-hardware', name: 'Toko Hardware' },
      { slug: 'toko-mainan', name: 'Toko Mainan' }
    ]
  },
  {
    id: 'manufaktur',
    label: 'MANUFAKTUR',
    color: '#3b82f6',
    items: [
      { slug: 'tekstil', name: 'Tekstil' },
      { slug: 'logam', name: 'Logam' },
      { slug: 'perabotan', name: 'Perabotan' },
      { slug: 'makanan', name: 'Makanan' },
      { slug: 'brewery', name: 'Brewery' },
      { slug: 'corporate-gift', name: 'Corporate Gift' }
    ]
  },
  {
    id: 'makanan-hospitality',
    label: 'MAKANAN & HOSPITALITY',
    color: '#f59e0b',
    items: [
      { slug: 'bar-pub', name: 'Bar dan Pub' },
      { slug: 'restoran', name: 'Restoran' },
      { slug: 'fast-food', name: 'Fast Food' },
      { slug: 'rumah-tamu', name: 'Rumah Tamu' },
      { slug: 'distributor-minuman', name: 'Distributor Minuman' },
      { slug: 'hotel', name: 'Hotel' }
    ]
  },
  {
    id: 'kesehatan-fitness',
    label: 'KESEHATAN & FITNESS',
    color: '#10b981',
    items: [
      { slug: 'sports-club', name: 'Sports Club' },
      { slug: 'toko-kacamata', name: 'Toko Kacamata' },
      { slug: 'fitness-center', name: 'Fitness Center' },
      { slug: 'wellness-practitioners', name: 'Wellness Practitioners' },
      { slug: 'farmasi', name: 'Farmasi' },
      { slug: 'salon-rambut', name: 'Salon Rambut' }
    ]
  },
  {
    id: 'real-estate',
    label: 'REAL ESTATE',
    color: '#ec4899',
    items: [
      { slug: 'agensi-real-estate', name: 'Agensi Real Estate' },
      { slug: 'firma-arsitektur', name: 'Firma Arsitektur' },
      { slug: 'konstruksi', name: 'Konstruksi' },
      { slug: 'estate-management', name: 'Estate Management' },
      { slug: 'perkebunan', name: 'Perkebunan' },
      { slug: 'asosiasi-pemilik-properti', name: 'Asosiasi Pemilik Properti' }
    ]
  },
  {
    id: 'perdagangan',
    label: 'PERDAGANGAN',
    color: '#a855f7',
    items: [
      { slug: 'handyman', name: 'Handyman' },
      { slug: 'it-hardware-support', name: 'IT Hardware & Support' },
      { slug: 'sistem-energi-surya', name: 'Sistem-Sistem Energi Surya' },
      { slug: 'pembuat-sepatu', name: 'Pembuat Sepatu' },
      { slug: 'cleaning-service', name: 'Cleaning Service' },
      { slug: 'layanan-hvac', name: 'Layanan HVAC' }
    ]
  },
  {
    id: 'konsultansi',
    label: 'KONSULTANSI',
    color: '#06b6d4',
    items: [
      { slug: 'firma-akuntansi', name: 'Firma Akuntansi' },
      { slug: 'mitra-nuansa-solution', name: 'Mitra Nuansa Solution' },
      { slug: 'agensi-marketing', name: 'Agensi Marketing' },
      { slug: 'firma-hukum', name: 'Firma hukum' },
      { slug: 'talent-acquisition', name: 'Talent Acquisition' },
      { slug: 'audit-sertifikasi', name: 'Audit & Sertifikasi' }
    ]
  },
  {
    id: 'lainnya',
    label: 'LAINNYA',
    color: '#f97316',
    items: [
      { slug: 'organisasi-nirlaba', name: 'Organisasi Nirlaba' },
      { slug: 'agen-lingkungan', name: 'Agen Lingkungan' },
      { slug: 'rental-billboard', name: 'Rental Billboard' },
      { slug: 'fotografi', name: 'Fotografi' },
      { slug: 'penyewaan-sepeda', name: 'Penyewaan Sepeda' },
      { slug: 'reseller-software', name: 'Reseller Software' }
    ]
  }
];

export const getIndustryBySlug = (slug) => {
  for (const cat of INDUSTRY_CATEGORIES) {
    const found = cat.items.find((i) => i.slug === slug);
    if (found) return { ...found, category: cat.label };
  }
  return null;
};
