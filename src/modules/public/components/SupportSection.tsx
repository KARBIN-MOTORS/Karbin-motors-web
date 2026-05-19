import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";
import { supportServices } from "../constants/data";

export function SupportSection() {
  return (
    <section id="taller" className="bg-brand-background px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border">
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Ventas y Distribución
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            ASESORÍA <br/><span className="text-brand-carbon-main">TÉCNICA</span>
          </h2>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-brand-muted">
            No solo vendemos repuestos, garantizamos que lleves la pieza exacta para tu motocarguero o furgoneta. 
            Contamos con personal capacitado en Lima para ayudarte a identificar problemas de suspensión,
            transmisión y sistema eléctrico.
          </p>
          <div className="mt-10">
            <PrimaryButton>CONTACTAR ASESOR</PrimaryButton>
          </div>
        </div>

        <div className="grid gap-[2px] bg-brand-border sm:grid-cols-2 p-[2px]">
          {supportServices.map((service) => (
            <div key={service} className="bg-brand-background px-6 py-8 transition-all hover:bg-brand-card group border-l-2 border-transparent hover:border-brand-accent">
              <p className="font-display text-sm font-black uppercase tracking-widest text-brand-carbon-main group-hover:text-brand-carbon transition-colors">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
