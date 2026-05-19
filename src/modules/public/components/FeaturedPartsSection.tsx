import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { productHighlights } from "../constants/data";

export function FeaturedPartsSection() {
  return (
    <section
      id="destacados"
      className="bg-brand-background grid-bg px-5 py-24 sm:px-8 lg:px-10 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/5" />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-2 w-2 bg-brand-accent animate-pulse" />
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-carbon-main">
                {"Alta Demanda // Stock Disponible"}
              </p>
            </div>
            <h2 className="font-display text-[3.5rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[5rem]">
              REPUESTOS <br />
              <span className="text-brand-accent glow-text">PRINCIPALES</span>
            </h2>
          </div>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-brand-muted md:mt-0 md:text-right">
            Piezas de recambio frecuente para mantener tu motocarguero operando
            sin interrupciones. Coronas, bocamazas y sistemas de tracción
            reforzados.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productHighlights.map((product, index) => (
            <article
              key={product.name}
              className="cut-card section-rise group relative overflow-hidden border border-brand-border bg-brand-card p-0 transition-all duration-300 hover:border-brand-accent"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative grid min-h-[300px] place-items-center overflow-hidden bg-brand-card p-8">
                {/* Background grid for card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="absolute right-4 top-4 font-display text-[5rem] font-black uppercase text-brand-background leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute inset-x-5 top-5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-2 border border-brand-accent/50 bg-brand-accent/10 px-2 py-1 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                    <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-carbon">
                      En stock
                    </p>
                  </span>
                </div>

                <div className="relative mt-8 grid min-h-[220px] w-full place-items-center z-10">
                  <Image
                    src={product.image}
                    alt={`${product.name} para vehículos disponible en Karbin Motors Ate, Lima`}
                    width={390}
                    height={280}
                    className="floating-part max-h-[230px] w-full object-contain transition duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_10px_25px_rgba(240,45,45,0.2)]"
                  />
                </div>
              </div>

              <div className="grid gap-5 border-t border-brand-border bg-brand-card p-6 sm:grid-cols-[1fr_auto] sm:items-end relative z-20">
                <div>
                  <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
                    {"// "}
                    {product.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-black uppercase leading-tight text-brand-carbon group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h3>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="cut-button inline-flex h-12 w-12 items-center justify-center border-2 border-brand-muted font-display text-lg font-bold text-brand-carbon transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:shadow-[0_0_15px_rgba(240,45,45,0.5)]"
                  aria-label={`Consultar stock de ${product.name}`}
                >
                  +
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/productos"
            className="cut-button inline-flex min-h-12 items-center justify-center border-2 border-brand-accent bg-brand-accent/10 px-8 font-display text-xs font-bold uppercase tracking-wider text-brand-carbon transition-all duration-300 hover:bg-brand-accent hover:shadow-[0_0_20px_rgba(240,45,45,0.4)]"
          >
            EXPLORAR TODOS LOS PRODUCTOS
          </Link>
        </div>
      </div>
    </section>
  );
}
