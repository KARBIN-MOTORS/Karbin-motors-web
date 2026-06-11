import { AboutBusinessInfo } from "@/modules/about/components/AboutBusinessInfo";
import { AboutContact } from "@/modules/about/components/AboutContact";
import { AboutHero } from "@/modules/about/components/AboutHero";
import { AboutStory } from "@/modules/about/components/AboutStory";
import { AboutValues } from "@/modules/about/components/AboutValues";
import { SiteFooter } from "@/modules/shared/components/SiteFooter";
import { SiteHeader } from "@/modules/shared/components/SiteHeader";

export const metadata = {
  title: "Nosotros | Karbin Motors S.A.C.",
  description:
    "Conoce Karbin Motors S.A.C., empresa peruana dedicada a la venta de partes, piezas y accesorios para vehiculos en Ate, Lima.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white font-body text-neutral-800">
      <SiteHeader />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutBusinessInfo />
      <AboutContact />
      <SiteFooter />
    </main>
  );
}
