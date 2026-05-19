import { guides } from "../constants/data";

export function GuidesSection() {
  return (
    <section
      id="blog"
      className="border-y border-brand-border bg-brand-background px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Blog
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Consejos para elegir repuestos compatibles
          </h2>
        </div>

        <div className="mt-10 grid gap-px bg-brand-border lg:grid-cols-4">
          {guides.map((guide) => (
            <article key={guide} className="min-h-52 bg-brand-background p-6">
              <h3 className="font-display text-[1.35rem] font-extrabold uppercase leading-tight text-brand-carbon">
                {guide}
              </h3>
              <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2px] text-brand-muted">
                Próxima publicación
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
