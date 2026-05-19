import Image from "next/image";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { productHighlights } from "../constants/data";

export function FeaturedPartsSection() {
  return (
    <section
      id="destacados"
      className="bg-brand-background px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.80fr_1.28fr] lg:items-end">
          <div>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
              Productos destacados
            </p>
            <h2 className="font-display text-[2.9rem] font-extrabold uppercase leading-[0.98] text-brand-carbon sm:text-[4rem]">
              Repuestos con consulta inmediata
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-brand-carbon-main">
            Selección inicial de repuestos para vehículos: componentes
            eléctricos, luces LED, frenos y accesorios. Consulta por WhatsApp
            para validar stock actualizado en Ate.
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
          {productHighlights.map((product, index) => (
            <article
              key={product.name}
              className="cut-card section-rise group relative overflow-hidden bg-brand-background p-0"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="relative grid min-h-[300px] place-items-center overflow-hidden bg-brand-card p-8">
                <div className="absolute right-4 top-4 font-display text-[4rem] font-extrabold uppercase text-brand-carbon/5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                  <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-brand-accent">
                    En stock
                  </p>
                  <span className="h-2 w-8 bg-brand-carbon/15" />
                </div>
                <div className="relative mt-8 grid min-h-[220px] w-full place-items-center">
                  <Image
                    src={product.image}
                    alt={`${product.name} para vehículos disponible en Karbin Motors Ate, Lima`}
                    width={390}
                    height={280}
                    className="floating-part max-h-[230px] w-full object-contain transition duration-300 group-hover:opacity-95"
                  />
                </div>
              </div>
              <div className="grid gap-5 border-t border-brand-border bg-brand-background p-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-brand-muted">
                    {product.category}
                  </p>
                  <h3 className="mt-2 font-display text-[1.35rem] font-extrabold uppercase leading-tight text-brand-carbon">
                    {product.name}
                  </h3>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center border border-brand-carbon/30 font-display text-xs font-bold uppercase text-brand-carbon transition-colors duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white"
                  aria-label={`Consultar stock de ${product.name}`}
                >
                  +
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
