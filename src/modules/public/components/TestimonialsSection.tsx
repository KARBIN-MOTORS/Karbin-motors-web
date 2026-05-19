import { testimonials } from "../constants/data";

export function TestimonialsSection() {
  return (
    <section
      id="resenas"
      className="bg-brand-carbon px-5 py-16 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="max-w-4xl">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent-vibrant">
            Testimonios y reseñas
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] sm:text-[4rem]">
            Confianza para una marca nueva
          </h2>
        </div>

        <div className="mt-10 grid gap-px bg-white/12 lg:grid-cols-3">
          {testimonials.map(([title, detail]) => (
            <article key={title} className="min-h-64 bg-brand-carbon p-7">
              <p className="font-display text-[4rem] font-extrabold leading-none text-brand-accent-vibrant">
                “
              </p>
              <h3 className="font-display text-[1.35rem] font-extrabold uppercase leading-tight">
                {title}
              </h3>
              <p className="mt-5 text-sm leading-6 text-white/68">{detail}</p>
              <p className="mt-8 font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-white/42">
                Cliente verificado · Lima
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
