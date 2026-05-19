import { technicalInfo } from "../constants/data";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-brand-background grid-bg px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-carbon-main">
              Karbin Motors S.A.C.
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            VENTA DE <br />
            <span className="text-brand-accent glow-text">REPUESTOS</span>
          </h2>
          <p className="mt-8 font-sans text-lg leading-relaxed text-brand-muted">
            Somos especialistas en la venta y distribución de repuestos para
            motocargueros, furgonetas y trimotos en todo el Perú. Desde nuestro
            almacén en Ate (Lima), proveemos componentes clave como coronas,
            ejes cardan y sistemas de suspensión pesada.
          </p>
        </div>

        <div className="grid gap-[2px] bg-brand-border sm:grid-cols-2 p-[2px]">
          {technicalInfo.map(([label, value]) => (
            <div
              key={label}
              className="bg-brand-card px-6 py-8 transition-colors hover:bg-brand-card"
            >
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
                {"// "}
                {label}
              </p>
              <p className="mt-4 font-display text-lg font-black uppercase text-brand-carbon glow-text">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
