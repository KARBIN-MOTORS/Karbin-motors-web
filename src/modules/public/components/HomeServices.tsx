import { SectionTitle } from "@/modules/shared/components/SectionTitle";
import { WHATSAPP_HREF } from "@/modules/shared/constants/networks.const.";
import { serviceCards, stats } from "../constants/home";

export function HomeServices() {
  return (
    <section id="servicios" className="bg-neutral-50 py-12">
      <div className="mx-auto max-w-370 px-5 lg:px-12">
        <SectionTitle title="Nuestros servicios" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-md bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-red-50 text-2xl text-red-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-sm font-black text-neutral-950">
                {title}
              </h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-neutral-500">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-md bg-neutral-950 text-white xl:grid-cols-[2fr_1fr]">
          <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="min-w-0 p-5 text-center sm:p-7">
                <p className="font-display text-4xl font-black text-red-600">
                  {value}
                </p>
                <p className="mt-2 text-[0.7rem] font-black uppercase text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-stretch gap-5 bg-red-600 p-5 sm:p-7 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="font-display text-xl font-black uppercase">
                ¿Necesitas un repuesto?
              </p>
              <p className="mt-1 text-xs font-semibold text-white">
                Cotiza por WhatsApp y obtén una respuesta inmediata.
              </p>
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded bg-white px-5 py-3 text-center text-xs font-black uppercase text-red-600 md:shrink-0"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
