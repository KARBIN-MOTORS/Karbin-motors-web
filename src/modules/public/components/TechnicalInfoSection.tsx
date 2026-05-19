export function TechnicalInfoSection() {
  return (
    <section id="contacto" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Contacto y ubicación
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Atención en Ate, Lima
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-brand-carbon-main">
            Venta de repuestos y accesorios para vehículos desde Cal. Londres
            122, Urb. Portales de Javier Prado. Atención directa por WhatsApp
            para confirmar stock antes de visitar la tienda.
          </p>
        </div>

        <div className="grid gap-px bg-brand-border sm:grid-cols-3">
          {[
            ["Dirección", "Cal. Londres 122, Ate"],
            ["Zona", "Urb. Portales de Javier Prado"],
            ["Canal", "WhatsApp y tienda"],
          ].map(([label, value]) => (
            <div key={label} className="bg-brand-card p-6">
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-brand-muted">
                {label}
              </p>
              <p className="mt-4 font-display text-[1.15rem] font-extrabold uppercase leading-tight text-brand-carbon">
                {value}
              </p>
            </div>
          ))}
          <div className="min-h-64 bg-brand-carbon p-6 text-white sm:col-span-3">
            <p className="font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent-vibrant">
              Referencia local
            </p>
            <h3 className="mt-6 max-w-2xl font-display text-[2rem] font-extrabold uppercase leading-tight">
              Consulta disponibilidad antes de acercarte a la tienda
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/68">
              Envíanos foto o nombre del repuesto para validar stock,
              compatibilidad y horario de atención.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
