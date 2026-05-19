import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { footerSections } from "../constants/data";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-carbon px-5 pb-14 pt-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent-vibrant">
            Karbin Motors
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[2.4rem] font-extrabold uppercase leading-[0.95]">
            Repuestos para vehículos en Lima
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/62">
            Venta de repuestos, accesorios y componentes para vehículos de
            trabajo. Atención por WhatsApp y tienda en Ate.
          </p>
        </div>

        <div>
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-white/42">
            Secciones
          </p>
          <div className="mt-5 grid gap-3">
            {footerSections.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-display text-xs font-bold uppercase text-white/78 transition-colors duration-300 hover:text-brand-accent-vibrant"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.96px] text-white/42">
            Contacto
          </p>
          <p className="mt-5 text-sm leading-6 text-white/68">
            Cal. Londres 122, Urb. Portales de Javier Prado, Ate, Lima.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brand-accent px-5 font-display text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-brand-accent-hover"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
