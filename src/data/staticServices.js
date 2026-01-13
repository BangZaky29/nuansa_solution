// src/data/staticServices.js
import KBLIPdf from "../assets/doc/KBLI_2025_NUANSA LEGAL.pdf";
import { Icons } from "../utils/services-data-icons";

export const STATIC_SERVICES = [
  {
    id: "kbli",
    title: "KBLI 2025",
    icon: Icons.kbli(), // ✅ JSX langsung
    url: KBLIPdf,
    label: "Free Download",
    isDownload: true,
  }
];

