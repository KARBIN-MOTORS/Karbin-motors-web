import { FloatingWhatsAppButton } from "@/modules/shared/components/FloatingWhatsAppButton";
import { SiteFooter } from "@/modules/shared/components/SiteFooter";
import { SiteHeader } from "@/modules/shared/components/SiteHeader";
import { BrandStrip } from "./components/BrandStrip";
import { FeaturedProductsSection } from "./components/FeaturedProductsSection";
import { HomeAboutCta } from "./components/HomeAboutCta";
import { HomeAboutPreview } from "./components/HomeAboutPreview";
import { HomeCategories } from "./components/HomeCategories";
import { HomeHero } from "./components/HomeHero";
import { HomeServices } from "./components/HomeServices";
import { localBusinessSchema } from "./constants/data";

export function Landing() {
  return (
    <main
      id="inicio"
      className="min-h-screen bg-white font-body text-neutral-800"
    >
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static structured data for SEO.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="min-w-0 flex-1">
        <SiteHeader />
        <HomeHero />
        <BrandStrip />
        <HomeCategories />
        <FeaturedProductsSection />
        <HomeAboutPreview />
        <HomeServices />
        <HomeAboutCta />
        <SiteFooter />
      </div>

      <FloatingWhatsAppButton />
    </main>
  );
}
