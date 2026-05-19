import Image from "next/image";
import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";
import { accessoryLines } from "../constants/data";

export function PartsAccessoriesSection() {
    <section
      id="repuestos-accesorios"
      className="relative min-h-screen overflow-hidden bg-brand-background grid-bg px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/5" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-[1440px] gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="section-rise flex flex-col justify-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Catálogo de Hardware
            </p>
          </div>
          <h2 className="max-w-4xl font-display text-[3.5rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.7rem] lg:text-[5.5rem]">
            STOCK TÉCNICO <br/><span className="text-brand-carbon-main">EN LÍNEA</span>
          </h2>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-brand-muted">
            Punto de distribución: componentes eléctricos, fuentes de carga, óptica avanzada,
            sistemas de frenado e instrumentación industrial. Protocolo: Transmisión de 
            referencia visual o técnica para validación inmediata.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton>INICIAR TRANSMISIÓN</PrimaryButton>
            <a
              href="#taller"
              className="cut-button inline-flex min-h-12 items-center justify-center border-2 border-brand-border bg-transparent px-8 font-display text-sm font-bold uppercase tracking-wider text-brand-carbon transition-all duration-300 hover:border-brand-muted focus:outline-none"
            >
              Documentación
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-[2px] bg-brand-border sm:grid-cols-3 p-[2px]">
            {accessoryLines.map(([title]) => (
              <div key={title} className="bg-brand-card px-4 py-5 transition-colors hover:bg-brand-background group">
                <p className="font-display text-[0.68rem] font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-accent transition-colors">
                  // {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-rise relative min-h-[600px] cut-card bg-brand-card border border-white/5 group">
          <div className="absolute inset-0 bg-brand-card" />
          <div className="absolute inset-6 border border-brand-border border-dashed opacity-30" />
          
          {/* Tech accents */}
          <div className="absolute top-8 left-8 text-[0.65rem] font-display font-bold tracking-widest text-brand-muted uppercase">SYS_ACT_01</div>
          
          <Image
            src="/repuestos/14-_ACELERADOR_ELECTRICO-removebg-preview.png"
            alt="Componente industrial disponible en Karbin Motors"
            width={860}
            height={560}
            className="floating-part absolute left-1/2 top-1/2 z-10 max-h-[500px] w-[85%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_20px_50px_rgba(240,45,45,0.15)] group-hover:scale-105 transition-transform duration-700"
          />
          
          <div className="absolute bottom-6 left-6 z-20 glass-panel px-6 py-4 border-l-2 border-brand-accent">
            <p className="font-display text-xs font-black uppercase tracking-widest text-brand-carbon">
              CONTROL_V1
            </p>
            <p className="font-sans text-xs text-brand-muted mt-1">Acelerador Eléctrico</p>
          </div>
        </div>
      </div>
    </section>
}
