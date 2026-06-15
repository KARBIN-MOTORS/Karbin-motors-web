import { CheckIcon } from "@/modules/shared/icons";
import { aboutValues } from "../constants/about";

export function AboutValues() {
  return (
    <section className="bg-neutral-50 py-14">
      <div className="mx-auto max-w-370 px-5 lg:px-12">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
            Lo que nos representa
          </p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-neutral-950">
            Nuestros pilares
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {aboutValues.map(([title, text]) => (
            <article
              key={title}
              className="rounded-md border border-neutral-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded bg-red-50 text-xl font-black text-red-600">
                <CheckIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-black uppercase text-neutral-950">
                {title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-neutral-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
