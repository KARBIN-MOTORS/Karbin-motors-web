import { faqs } from "../constants/data";

export function FaqSection() {
  return (
    <section id="faq" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            FAQ
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="grid gap-px bg-brand-border">
          {faqs.map(([question, answer]) => (
            <article key={question} className="bg-brand-card p-6">
              <h3 className="font-display text-[1.15rem] font-extrabold uppercase leading-tight text-brand-carbon">
                {question}
              </h3>
              <p className="mt-4 text-sm leading-6 text-brand-carbon-main">
                {answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
