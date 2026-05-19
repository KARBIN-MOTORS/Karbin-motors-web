import { advantages } from "../constants/data";

export function AdvantagesSection() {
  return (
    <section id="ventajas" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Ventajas competitivas
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Compra con validación antes de moverte
          </h2>
        </div>
        <div className="grid gap-px bg-brand-border sm:grid-cols-2">
          {advantages.map(([title, detail], index) => (
            <article key={title} className="bg-brand-card p-6">
              <p className="font-display text-[3rem] font-extrabold leading-none text-brand-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 font-display text-[1.35rem] font-extrabold uppercase leading-tight text-brand-carbon">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-brand-carbon-main">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
