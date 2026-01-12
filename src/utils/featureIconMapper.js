import { Icons } from "./services-data-icons";

export const mapFeatureIcon = (code) => {
  code = code.toLowerCase();
  if (code.includes("calculator")) return Icons.calculator;
  if (code.includes("invoice")) return Icons.dollar;
  if (code.includes("jalan")) return Icons.truck;
  if (code.includes("kuasa")) return Icons.document;
  if (code.includes("permohonan")) return Icons.mail;
  if (code.includes("perintah")) return Icons.briefcase;
  if (code.includes("laporan")) return Icons.chart;
  if (code.includes("surat-pernyataan")) return Icons.pen;
  if (code.includes("surat-penawaran")) return Icons.pen;
  if (code.includes("surat-perjanjian")) return Icons.document;
  if (code.includes("slip-gaji")) return Icons.receipt;
  return Icons.fileText; // default
};
