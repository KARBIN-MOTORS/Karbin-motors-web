import { technicalInfo } from "../constants/data";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-brand-card px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Sobre nosotros
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Karbin Motors S.A.C.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-carbon-main">
            Empresa formal ubicada en Ate, Lima, enfocada en venta de repuestos,
            accesorios y orientación técnica para vehículos de trabajo. La
            prioridad es confirmar compatibilidad y stock antes de la compra.
          </p>
        </div>

        <div className="grid gap-px bg-brand-border sm:grid-cols-2">
          {technicalInfo.map(([label, value]) => (
            <div key={label} className="bg-brand-background px-5 py-5">
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-brand-muted">
                {label}
              </p>
              <p className="mt-3 font-display text-base font-extrabold uppercase text-brand-carbon">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
