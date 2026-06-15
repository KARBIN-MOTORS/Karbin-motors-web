import { AboutBusinessInfo } from "@/modules/about/components/AboutBusinessInfo";
import { AboutContact } from "@/modules/about/components/AboutContact";
import { AboutHero } from "@/modules/about/components/AboutHero";
import { AboutStory } from "@/modules/about/components/AboutStory";
import { AboutValues } from "@/modules/about/components/AboutValues";
import { Footer } from "@/modules/shared/components/Footer/Footer";
import { Navbar } from "@/modules/shared/components/Navbar/Navbar";

export const metadata = {
	title: "Nosotros | Karbin Motors S.A.C.",
	description:
		"Conoce Karbin Motors S.A.C., empresa peruana dedicada a la venta de partes, piezas y accesorios para vehículos en Ate, Lima.",
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
