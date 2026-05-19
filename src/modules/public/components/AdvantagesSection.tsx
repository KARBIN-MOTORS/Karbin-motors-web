import { advantages } from "../constants/data";

export function AdvantagesSection() {
  return (
    <section id="ventajas" className="bg-brand-background px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border">
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Optimización Técnica
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            VALIDACIÓN <br/><span className="text-brand-carbon-main">ESTRUCTURAL</span>
          </h2>
        </div>
        <div className="grid gap-[2px] bg-brand-border sm:grid-cols-2 p-[2px]">
          {advantages.map(([title, detail], index) => (
            <article key={title} className="bg-brand-background p-8 transition-colors hover:bg-brand-card group">
              <p className="font-display text-[4rem] font-black leading-none text-brand-border transition-colors group-hover:text-brand-accent glow-text">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 font-display text-xl font-black uppercase leading-tight text-brand-carbon">
                {title}
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
