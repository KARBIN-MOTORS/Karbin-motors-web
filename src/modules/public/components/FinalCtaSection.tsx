import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-32 text-center sm:px-8 lg:px-10 bg-brand-background border-t-4 border-brand-accent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,45,45,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern bg-[size:24px_24px]" />
      <div className="mx-auto max-w-5xl relative z-10">
        <p className="mb-6 font-display text-sm font-black uppercase tracking-widest text-brand-accent animate-pulse">
          // Cotización Inmediata
        </p>
        <h2 className="font-display text-[4rem] font-black uppercase leading-[0.85] tracking-tight text-brand-carbon sm:text-[6.5rem]">
          COTIZA TUS <br />REPUESTOS.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-brand-muted">
          Envíanos la lista de piezas, números de parte o imágenes de referencia para tu motocarguero o furgoneta.
          Nuestro almacén en Ate confirmará disponibilidad, compatibilidad y precio en tiempo real.
        </p>
        <div className="mt-12">
          <PrimaryButton>COTIZAR POR WHATSAPP</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
