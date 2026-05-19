import { ProductGallery } from "@/modules/products/components/ProductGallery";
import products from "@/modules/products/data/products.json";
import { FinalCtaSection } from "@/modules/public/components/FinalCtaSection";
import { Footer } from "@/modules/public/components/Footer";
import { Header } from "@/modules/public/components/Header";

export const metadata = {
  title: "Catálogo de Repuestos y Hardware | Karbin Motors",
  description:
    "Explora nuestro catálogo completo de repuestos, componentes eléctricos y hardware para vehículos de trabajo pesado.",
};

export default function ProductosPage() {
  return (
    <main className="bg-brand-background font-body text-brand-carbon min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 px-5 sm:px-8 lg:px-10 bg-brand-background border-b border-brand-border">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Catálogo Industrial
            </p>
          </div>
          <h1 className="font-display text-[3.5rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[5.5rem]">
            INVENTARIO <br />
            <span className="text-brand-carbon-main">DE HARDWARE</span>
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-brand-muted">
            Base de datos completa de repuestos, componentes eléctricos y piezas
            mecánicas disponibles. Consulta compatibilidad enviando la
            referencia al canal de atención.
          </p>
        </div>
      </section>

      <section className="relative z-0 px-5 py-16 sm:px-8 lg:px-10 flex-grow bg-brand-background grid-bg">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProductGallery products={products} />
        </div>
      </section>

      <FinalCtaSection />
      <Footer />
    </main>
  );
}
