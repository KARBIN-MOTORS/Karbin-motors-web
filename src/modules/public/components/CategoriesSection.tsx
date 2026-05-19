import Image from "next/image";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { mainCategories } from "../constants/data";

export function CategoriesSection() {
  return (
    <section id="categorias" className="bg-brand-card px-5 py-24 sm:px-8 lg:px-10 border-y border-brand-border">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-4xl font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
              LÍNEAS DE <br/><span className="text-brand-accent glow-text">PRODUCTO</span>
            </h2>
            <p className="mt-8 font-sans text-lg leading-relaxed text-brand-muted">
              Cobertura integral para tu vehículo de carga. Desde el sistema eléctrico 
              y suspensiones pesadas (muelles), hasta la transmisión completa (ejes cardan y coronas).
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {mainCategories.map((category) => (
            <a
              key={category.label}
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="cut-card group grid min-h-[420px] overflow-hidden bg-brand-background border border-brand-border transition-colors hover:border-brand-accent"
              aria-label={`Consultar ${category.title} para vehículos en Lima`}
            >
              <div className="relative grid min-h-[260px] place-items-center overflow-hidden p-8">
                {/* Abstract tech background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:10px_10px]" />
                
                <Image
                  src={category.image}
                  alt={`${category.title} para vehículos en Lima`}
                  width={460}
                  height={320}
                  className="relative z-10 floating-part max-h-[200px] w-full object-contain transition duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(240,45,45,0.15)]"
                />
              </div>
              
              <div className="border-t border-brand-border p-8 bg-brand-background relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-brand-accent cut-button flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(240,45,45,0.5)]">
                  <span className="text-brand-carbon font-bold">→</span>
                </div>
                
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
                  [ {category.label} ]
                </p>
                <h3 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-brand-carbon">
                  {category.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-brand-muted group-hover:text-brand-carbon/80 transition-colors">
                  {category.detail}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
