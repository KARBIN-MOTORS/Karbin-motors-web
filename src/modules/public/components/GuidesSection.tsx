import { guides } from "../constants/data";

export function GuidesSection() {
    <section
      id="blog"
      className="bg-brand-background px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Documentación
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            INTELIGENCIA <br/><span className="text-brand-carbon-main">OPERATIVA</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-[2px] bg-brand-border lg:grid-cols-4 p-[2px]">
          {guides.map((guide) => (
            <article key={guide} className="min-h-[280px] bg-brand-card p-8 flex flex-col justify-between transition-colors hover:bg-brand-card group">
              <h3 className="font-display text-xl font-black uppercase leading-tight text-brand-carbon group-hover:text-brand-accent transition-colors">
                {guide}
              </h3>
              <div className="mt-8 flex items-center justify-between border-t border-brand-border pt-4">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-brand-muted">
                  [ Próxima_Pub ]
                </p>
                <span className="w-6 h-[2px] bg-brand-carbon-main group-hover:bg-brand-accent transition-colors"></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
}
