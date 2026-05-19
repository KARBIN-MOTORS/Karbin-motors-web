import Image from "next/image";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { mainCategories } from "../constants/data";

export function CategoriesSection() {
  return (
    <section id="categorias" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Categorías de repuestos
          </p>
          <h2 className="max-w-5xl font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Repuestos organizados por necesidad
          </h2>
        </div>
        <div className="mt-10 grid gap-px bg-brand-border lg:grid-cols-3">
          {mainCategories.map((category) => (
            <a
              key={category.label}
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group grid min-h-[380px] overflow-hidden bg-brand-card"
              aria-label={`Consultar ${category.title} para vehículos en Lima`}
            >
              <div className="relative grid min-h-[230px] place-items-center overflow-hidden bg-brand-background p-8">
                <Image
                  src={category.image}
                  alt={`${category.title} para vehículos en Lima`}
                  width={460}
                  height={320}
                  className="floating-part max-h-[230px] w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-brand-border p-6">
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-brand-accent">
                  {category.label}
                </p>
                <h3 className="mt-3 font-display text-[1.65rem] font-extrabold uppercase leading-tight text-brand-carbon">
                  {category.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-brand-carbon-main">
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
