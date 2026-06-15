import type { Metadata } from "next";
import { BrandStrip } from "@/modules/public/components/BrandStrip";
import { FeaturedProductsSection } from "@/modules/public/components/FeaturedProductsSection";
import { HomeAboutCta } from "@/modules/public/components/HomeAboutCta";
import { HomeAboutPreview } from "@/modules/public/components/HomeAboutPreview";
import { HomeCategories } from "@/modules/public/components/HomeCategories";
import { HomeHero } from "@/modules/public/components/HomeHero";
import { HomeServices } from "@/modules/public/components/HomeServices";
import { localBusinessSchema } from "@/modules/public/constants/data";
import { FloatingWhatsAppButton } from "@/modules/shared/components/FloatingWhatsAppButton/FloatingButton";

export const metadata: Metadata = {
	title: "Repuestos para Vehículos en Lima, Ate | Karbin Motors",
	description:
		"Repuestos para vehículos en Lima. Karbin Motors ofrece luces LED, frenos, cargadores, tableros y accesorios con atención por WhatsApp desde Ate.",
	keywords: [
		"repuestos para vehículos Lima",
		"repuestos Ate Lima",
		"accesorios para vehículos Lima",
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
	return (
		<main id="inicio" className="min-w-0 flex-1">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static structured data for SEO.
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>

			<HomeHero />
			<BrandStrip />
			<HomeCategories />
			<FeaturedProductsSection />
			<HomeAboutPreview />
			<HomeServices />
			<HomeAboutCta />

			<FloatingWhatsAppButton />
		</main>
	);
}
