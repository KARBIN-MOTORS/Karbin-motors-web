import { testimonials } from "../constants/data";

export function TestimonialsSection() {
  return (
    <section
      id="resenas"
      className="bg-brand-background px-5 py-24 text-brand-carbon sm:px-8 lg:px-10 border-t border-brand-border relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-brand-accent/5 blur-[100px]" />
      
      <div className="mx-auto w-full max-w-[1440px] relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Experiencia de Compra
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight sm:text-[4.5rem]">
            CLIENTES <br/><span className="text-brand-carbon-main glow-text hover:text-brand-carbon transition-colors">SATISFECHOS</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-[2px] bg-brand-border lg:grid-cols-3 p-[2px]">
          {testimonials.map(([title, detail], index) => (
            <article key={title} className="min-h-64 bg-brand-background p-10 transition-colors hover:bg-brand-card">
              <p className="font-display text-[5rem] font-black leading-none text-brand-border glow-text hover:text-brand-accent transition-colors">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-display text-xl font-black uppercase leading-tight text-brand-carbon">
                "{title}"
              </h3>
              <p className="mt-5 font-sans text-sm leading-relaxed text-brand-muted">{detail}</p>
              <p className="mt-8 font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-accent">
                // Usuario verificado · Cód: {Math.floor(Math.random() * 9000) + 1000}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
