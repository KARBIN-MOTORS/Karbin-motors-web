import { ProductGallery } from "@/modules/products/components/ProductGallery";
import products from "@/modules/products/data/products.json";
import { SiteFooter } from "@/modules/shared/components/SiteFooter";
import { SiteHeader } from "@/modules/shared/components/SiteHeader";

export const metadata = {
  title: "Catalogo de Repuestos | Karbin Motors",
  description:
    "Explora el catalogo completo de repuestos, componentes electricos y piezas mecanicas disponibles en Karbin Motors.",
};

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-white font-body text-neutral-800">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(100deg,#fff_0%,#fff_54%,#f4f4f4_54%,#f7f7f7_100%)]">
        <div className="absolute right-[12%] top-0 h-full w-28 -skew-x-12 bg-red-600" />
        <div className="relative mx-auto max-w-[1480px] px-5 py-16 lg:px-12">
          <p className="text-sm font-black uppercase tracking-widest text-red-600">
            Catalogo Karbin Motors
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-neutral-950 sm:text-6xl">
            Inventario de repuestos
          </h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-neutral-600">
            Consulta repuestos mecanicos, electricos y accesorios disponibles.
            Filtra por categoria o busca por nombre para cotizar al instante.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-[1480px]">
          <ProductGallery products={products} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
