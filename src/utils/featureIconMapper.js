// src/utils/featureIconMapper.js
import { Icons } from './services-data-icons';

export const mapFeatureIcon = (iconOrCode = '') => {
  const normalized = iconOrCode.toLowerCase();

  // PRIORITAS ICON EXPLICIT
  if (Icons[normalized]) return Icons[normalized]();

  // FALLBACK BERDASARKAN CODE
  if (normalized.includes('calculator')) return Icons.calculator();
  if (normalized.includes('invoice')) return Icons.dollar();
  if (normalized.includes('jalan')) return Icons.truck();
  if (normalized.includes('kuasa')) return Icons.document();
  if (normalized.includes('permohonan')) return Icons.mail();
  if (normalized.includes('perintah')) return Icons.briefcase();
  if (normalized.includes('laporan')) return Icons.chart();
  if (normalized.includes('penawaran')) return Icons.pen();
  if (normalized.includes('pernyataan')) return Icons.pen();
  if (normalized.includes('perjanjian')) return Icons.document();
  if (normalized.includes('slip-gaji')) return Icons.receipt();
  if (normalized.includes('surat')) return Icons.document();

  return Icons.fileText();
};
