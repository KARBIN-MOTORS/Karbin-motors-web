import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";
import { supportServices } from "../constants/data";

export function SupportSection() {
  return (
    <section id="taller" className="bg-brand-card px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Taller técnico y servicios
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Instalación, revisión y mantenimiento
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-carbon-main">
            Te ayudamos a identificar piezas compatibles para vehículos de
            trabajo, cargueros y unidades eléctricas. También puedes consultar
            por instalación, revisión eléctrica, luces y frenos.
          </p>
          <div className="mt-8">
            <PrimaryButton>Consultar instalación</PrimaryButton>
          </div>
        </div>

        <div className="grid gap-px bg-brand-border sm:grid-cols-2">
          {supportServices.map((service) => (
            <div key={service} className="bg-brand-background px-5 py-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2px] text-brand-carbon-main">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
