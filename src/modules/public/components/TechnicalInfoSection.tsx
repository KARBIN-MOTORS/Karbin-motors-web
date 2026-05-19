export function TechnicalInfoSection() {
  return (
    <section id="contacto" className="bg-[#0A0A0A] px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border">
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Tienda Física
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            NUESTRO <br/><span className="text-brand-carbon-main">ALMACÉN</span>
          </h2>
          <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-brand-muted">
            Visítanos en nuestro almacén en Lima para recoger tus repuestos de forma inmediata. 
            Te recomendamos escribirnos por WhatsApp antes de venir para confirmar el stock de la pieza que buscas.
          </p>
        </div>

        <div className="grid gap-[2px] bg-brand-border sm:grid-cols-3 p-[2px]">
          {[
            ["Ubicación", "Cal. Londres 122, Ate"],
            ["Sector", "Urb. Portales de J. Prado"],
            ["Canal", "WhatsApp / Presencial"],
          ].map(([label, value]) => (
            <div key={label} className="bg-brand-background p-6 transition-colors hover:bg-brand-card">
              <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
                // {label}
              </p>
              <p className="mt-4 font-display text-lg font-black uppercase leading-tight text-brand-carbon">
                {value}
              </p>
            </div>
          ))}
          <div className="min-h-64 bg-brand-accent p-8 text-brand-carbon sm:col-span-3 relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--brand-muted)_1px,_transparent_1px)] bg-[size:10px_10px]" />
            
            <p className="relative z-10 font-display text-xs font-black uppercase tracking-widest text-brand-carbon/70">
              [ Aviso Importante ]
            </p>
            <h3 className="relative z-10 mt-6 max-w-2xl font-display text-[2.5rem] font-black uppercase leading-[0.9] tracking-tight">
              CONFIRMA TU REPUESTO POR WHATSAPP
            </h3>
            <p className="relative z-10 mt-6 max-w-xl font-sans text-base leading-relaxed text-brand-carbon/90">
              Para garantizar que no pierdas tiempo en tu visita, te pedimos que nos envíes un mensaje 
              con la foto de tu repuesto, modelo de tu motocarguero o furgoneta, y te confirmaremos
              la disponibilidad y precio al instante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
