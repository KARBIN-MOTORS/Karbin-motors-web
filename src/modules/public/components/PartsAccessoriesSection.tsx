import Image from "next/image";
import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";
import { accessoryLines } from "../constants/data";

export function PartsAccessoriesSection() {
  return (
    <section
      id="repuestos-accesorios"
      className="relative min-h-screen overflow-hidden px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_1.14fr] lg:items-center">
        <div className="section-rise">
          <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Repuestos y accesorios
          </p>
          <h2 className="max-w-4xl font-display text-[3rem] font-extrabold uppercase leading-[0.92] text-brand-carbon sm:text-[4.7rem] lg:text-[6rem]">
            Stock técnico para volver a la ruta
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-brand-carbon-main lg:text-lg">
            Esta sección concentra la compra de piezas: componentes eléctricos,
            cargadores, luces, frenos, tableros y accesorios para vehículos de
            trabajo. Envía foto o referencia y validamos compatibilidad.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Consultar repuesto</PrimaryButton>
            <a
              href="#taller"
              className="inline-flex min-h-12 items-center justify-center border border-brand-carbon px-7 font-display text-sm font-bold uppercase text-brand-carbon transition-colors duration-300 hover:bg-brand-carbon hover:text-white"
            >
              Ver soporte
            </a>
          </div>
          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px bg-brand-border sm:grid-cols-3">
            {accessoryLines.map(([title]) => (
              <div key={title} className="bg-brand-card px-4 py-4">
                <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.2px] text-brand-carbon-main">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-rise relative min-h-[520px]">
          <div className="absolute inset-0 bg-brand-carbon" />
          <div className="absolute inset-5 border border-white/12" />
          <Image
            src="/repuestos/14-_ACELERADOR_ELECTRICO-removebg-preview.png"
            alt="Acelerador eléctrico para vehículo de trabajo disponible en Karbin Motors Ate"
            width={860}
            height={560}
            className="floating-part absolute left-1/2 top-1/2 z-10 max-h-[430px] w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <div className="absolute bottom-0 left-0 z-20 bg-brand-accent px-5 py-4">
            <p className="font-display text-xs font-bold uppercase text-white">
              Control · acelerador
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
