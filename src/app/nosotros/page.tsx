import { AboutSection } from "@/modules/public/components/AboutSection";
import { AdvantagesSection } from "@/modules/public/components/AdvantagesSection";
import { FaqSection } from "@/modules/public/components/FaqSection";
import { FinalCtaSection } from "@/modules/public/components/FinalCtaSection";
import { Footer } from "@/modules/public/components/Footer";
import { Header } from "@/modules/public/components/Header";
import { PaymentsSection } from "@/modules/public/components/PaymentsSection";
import { SupportSection } from "@/modules/public/components/SupportSection";
import { TechnicalInfoSection } from "@/modules/public/components/TechnicalInfoSection";
import { TestimonialsSection } from "@/modules/public/components/TestimonialsSection";

export const metadata = {
  title: "Nosotros | Karbin Motors S.A.C.",
  description:
    "Conoce Karbin Motors S.A.C., líderes en la venta y distribución de repuestos para motocargueros y furgonetas en Ate, Lima. Conoce nuestra historia y ventajas competitivas.",
};

export default function NosotrosPage() {
  return (
    <main className="bg-brand-background font-body text-brand-carbon">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <AdvantagesSection />
        <SupportSection />
        <PaymentsSection />
        <TestimonialsSection />
        <FaqSection />
        <TechnicalInfoSection />
        <FinalCtaSection />
      </div>
      <Footer />
    </main>
  );
}
