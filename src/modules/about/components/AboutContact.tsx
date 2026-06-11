import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { contactInfo } from "../constants/about";

export function AboutContact() {
  return (
    <section id="contacto" className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-[1480px] gap-8 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:px-12">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
            Atención y garantía
          </p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase leading-none">
            Compra con respaldo y asesoría
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-neutral-300">
            Atendemos online y presencialmente. Nuestro horario presencial es de
            8:00 a.m. a 6:00 p.m., con canal virtual disponible 24/7 para
            consultas, coordinaciones y cotizaciones.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactInfo.map(([label, value]) => (
            <div key={label} className="rounded-md bg-white/[0.05] p-5">
              <p className="text-[0.68rem] font-black uppercase tracking-widest text-red-500">
                {label}
              </p>
              <p className="mt-2 text-sm font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1480px] px-5 pb-14 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-5 rounded-md bg-red-600 p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl font-black uppercase">
              ¿Necesitas cotizar un repuesto?
            </h3>
            <p className="mt-1 text-sm font-semibold text-white/85">
              Envíanos el modelo, medida o foto del repuesto y te orientamos.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded bg-white px-7 text-xs font-black uppercase text-red-600"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
