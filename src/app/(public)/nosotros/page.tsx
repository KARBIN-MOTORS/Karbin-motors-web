import type { Metadata } from "next";
import { AboutBusinessInfo } from "@/modules/about/components/AboutBusinessInfo";
import { AboutContact } from "@/modules/about/components/AboutContact";
import { AboutHero } from "@/modules/about/components/AboutHero";
import { AboutStory } from "@/modules/about/components/AboutStory";
import { AboutValues } from "@/modules/about/components/AboutValues";
import { SITE_NAME } from "@/modules/shared/constants/site.const";

export const metadata: Metadata = {
	title: "Nosotros",
	description:
		"Conoce Karbin Motors S.A.C., empresa peruana dedicada a la venta de partes, piezas y accesorios para vehículos en Ate, Lima.",
	alternates: {
		canonical: "/nosotros",
	},
	openGraph: {
		title: "Nosotros | Karbin Motors S.A.C.",
		description:
			"Empresa peruana dedicada a la venta de repuestos y accesorios para vehículos en Ate, Lima.",
		url: "/nosotros",
		siteName: SITE_NAME,
		locale: "es_PE",
		type: "website",
	},
};

export default function NosotrosPage() {
	return (
		<>
			<AboutHero />
			<AboutStory />
			<AboutValues />
			<AboutBusinessInfo />
			<AboutContact />
		</>
	);
}
