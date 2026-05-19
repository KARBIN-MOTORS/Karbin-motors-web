import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";
import { paymentOptions } from "../constants/data";

export function PaymentsSection() {
  return (
    <section id="pagos" className="bg-brand-background px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-brand-accent/5 rounded-full blur-[120px]" />
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start relative z-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Métodos de Pago
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            FACILIDADES <br/><span className="text-brand-carbon-main">DE COMPRA</span>
          </h2>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-brand-muted">
            Ofrecemos diversas alternativas para agilizar tu compra. Nuestro equipo 
            siempre validará la disponibilidad del repuesto antes de procesar el pago 
            para garantizar que te lleves la pieza correcta.
          </p>
          <div className="mt-10">
            <PrimaryButton>CONSULTAR MEDIOS DE PAGO</PrimaryButton>
          </div>
        </div>

        <div className="grid gap-[2px] bg-brand-border sm:grid-cols-2 p-[2px]">
          {paymentOptions.map(([title, detail]) => (
            <article key={title} className="bg-brand-card p-8 transition-colors hover:bg-brand-background group">
              <h3 className="font-display text-xl font-black uppercase leading-tight text-brand-carbon group-hover:text-brand-accent transition-colors">
                // {title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-brand-muted">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
