import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 text-center sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-accent" />
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
          Atención directa
        </p>
        <h2 className="font-display text-[3rem] font-extrabold uppercase leading-[0.92] text-brand-carbon sm:text-[5rem]">
          ¿Buscas un repuesto para tu vehículo?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-carbon-main">
          Escríbenos con una foto, nombre de pieza o referencia técnica.
          Confirmamos stock, compatibilidad y atención desde Ate, Lima.
        </p>
        <div className="mt-8">
          <PrimaryButton>Consultar por WhatsApp</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
