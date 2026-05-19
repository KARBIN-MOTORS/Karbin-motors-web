import { faqs } from "../constants/data";

export function FaqSection() {
  return (
    <section id="faq" className="bg-brand-background px-5 py-24 sm:px-8 lg:px-10 border-t border-brand-border">
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="sticky top-32">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-accent animate-pulse" />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-accent">
              Preguntas Frecuentes
            </p>
          </div>
          <h2 className="font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-brand-carbon sm:text-[4.5rem]">
            CONSULTAS <br/><span className="text-brand-carbon-main">RÁPIDAS</span>
          </h2>
        </div>

        <div className="grid gap-[2px] bg-brand-border p-[2px]">
          {faqs.map(([question, answer]) => (
            <article key={question} className="bg-brand-background p-8 transition-colors hover:bg-brand-card group">
              <h3 className="font-display text-xl font-black uppercase leading-tight text-brand-carbon group-hover:text-brand-accent transition-colors">
                {question}
              </h3>
              <p className="mt-5 font-sans text-sm leading-relaxed text-brand-muted">
                {answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
