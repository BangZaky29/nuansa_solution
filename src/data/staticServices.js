// src/data/staticServices.js
import KBLIPdf from "../assets/doc/KBLI_2025_NUANSA LEGAL.pdf";

export const STATIC_SERVICES = [
  {
    id: "kbli",
    title: "KBLI 2025",
    icon: "fileText",  // akan di-map ke Icons.fileText
    url: KBLIPdf,
    label: "Free Download",
    isDownload: true,
  }
];
