import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-brand-background grid-bg px-5 pb-14 pt-32 text-brand-carbon sm:px-8 lg:px-10"
    >
      <div className="absolute inset-x-0 top-20 h-[2px] bg-white/5" />
      <div className="absolute right-0 top-0 h-full w-[45vw] bg-brand-card/30 border-l border-white/5 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,45,45,0.15)_0%,_transparent_60%)]" />
      <div className="accent-line absolute left-0 top-20 h-[2px] w-1/3 bg-brand-accent glow-text" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="section-rise flex flex-col justify-center">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-carbon-main">
              Karbin Motors S.A.C. · Ate, Lima
            </p>
          </div>
          <h1 className="max-w-4xl font-display text-[3.8rem] font-black uppercase leading-[0.85] tracking-tight text-brand-carbon sm:text-[5.5rem] lg:text-[6.5rem]">
            REPUESTOS PARA <br />{" "}
            <span className="text-brand-accent glow-text">MOTOCARGUEROS.</span>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-brand-muted">
            Especialistas en la venta de repuestos para motocargueros,
            furgonetas y trimotos. Ejes cardan, coronas, muelles reforzados y
            componentes eléctricos de alta resistencia en Ate, Lima.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row relative z-10">
            <PrimaryButton href="/productos">
              VER CATÁLOGO TÉCNICO
            </PrimaryButton>
            <Link
              href="/nosotros"
              className="cut-button inline-flex min-h-12 items-center justify-center border-2 border-brand-border bg-transparent px-8 font-display text-sm font-bold uppercase tracking-widest text-brand-carbon transition-all duration-300 hover:border-brand-muted focus:outline-none"
            >
              NOSOTROS
            </Link>
          </div>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-px bg-brand-border">
            {[
              ["Almacén", "Ate, Lima"],
              ["RUC", "20615669696"],
              ["Soporte", "24/7"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-brand-background p-5 transition-colors hover:bg-brand-card"
              >
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
                  {label}
                </p>
                <p className="mt-2 font-display text-base font-black uppercase tracking-wide text-brand-carbon">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-rise relative min-h-[600px] overflow-hidden lg:min-h-[700px] cut-card bg-brand-card border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,45,45,0.08)_0%,_transparent_70%)]" />
          <div className="absolute inset-6 border border-brand-border border-dashed opacity-30" />

          {/* Technical corner accents */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-brand-accent" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-brand-accent" />

          <Image
            src="/repuestos/8-_GATA_HIDRAULICA_2TN-removebg-preview.png"
            alt="Componente industrial de Karbin Motors"
            width={900}
            height={600}
            priority
            className="floating-part absolute left-1/2 top-1/2 z-10 max-h-[500px] w-[85%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_20px_50px_rgba(240,45,45,0.15)]"
          />

          <div className="absolute bottom-6 left-6 z-20 glass-panel px-6 py-4 border-l-2 border-brand-accent">
            <p className="font-display text-xs font-black uppercase tracking-widest text-brand-carbon">
              {"Hardware // Stock"}
            </p>
            <p className="font-sans text-xs text-brand-muted mt-1">
              Gata Hidráulica 2TN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
