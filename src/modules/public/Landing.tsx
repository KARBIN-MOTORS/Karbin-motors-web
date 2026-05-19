import { AboutSection } from "./components/AboutSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { FaqSection } from "./components/FaqSection";
import { FeaturedPartsSection } from "./components/FeaturedPartsSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { GuidesSection } from "./components/GuidesSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PartsAccessoriesSection } from "./components/PartsAccessoriesSection";
import { PaymentsSection } from "./components/PaymentsSection";
import { SupportSection } from "./components/SupportSection";
import { TechnicalInfoSection } from "./components/TechnicalInfoSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { localBusinessSchema } from "./constants/data";

export function Landing() {
  return (
    <main className="bg-brand-background font-body text-brand-carbon">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static structured data for SEO.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Header />
      <Hero />
      <CategoriesSection />
      <FeaturedPartsSection />
      <PartsAccessoriesSection />
      <SupportSection />
      <AdvantagesSection />
      <AboutSection />
      <PaymentsSection />
      <TestimonialsSection />
      <GuidesSection />
      <FaqSection />
      <TechnicalInfoSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
