import type { Metadata } from "next";
import { Landing } from "@/modules/public/Landing";

export const metadata: Metadata = {
  title: "Repuestos para Vehículos en Lima, Ate | Karbin Motors",
  description:
    "Repuestos para vehículos en Lima. Karbin Motors ofrece luces LED, frenos, cargadores, tableros y accesorios con atención por WhatsApp desde Ate.",
  keywords: [
    "repuestos para vehículos Lima",
    "repuestos Ate Lima",
    "accesorios para vehículos Lima",
    "luces LED para vehículos",
    "frenos para cargueros",
    "cargadores 60V Lima",
    "Karbin Motors Ate",
  ],
  openGraph: {
    title: "Repuestos para Vehículos en Lima, Ate | Karbin Motors",
    description:
      "Stock de repuestos, accesorios y componentes para vehículos de trabajo. Consulta disponibilidad y compatibilidad desde Ate.",
    url: "https://karbinmotors.pe",
    siteName: "Karbin Motors",
    locale: "es_PE",
    type: "website",
  },
};

export default function Home() {
  return <Landing />;
}
