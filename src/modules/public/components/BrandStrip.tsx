import { SectionTitle } from "@/modules/shared/components/SectionTitle";
import { brands } from "../constants/home";

export function BrandStrip() {
  return (
    <section id="marcas" className="mx-auto max-w-[1480px] px-5 py-8 lg:px-12">
      <SectionTitle title="Marcas que trabajamos" />
      <div className="grid grid-cols-2 overflow-hidden rounded border border-neutral-200 bg-white sm:grid-cols-5 lg:grid-cols-10">
        {brands.map((brand) => (
          <div
            key={brand}
            className="grid h-16 place-items-center border-b border-r border-neutral-200 text-xs font-black uppercase tracking-wide text-neutral-500"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
