import Link from "next/link";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { footerSections } from "../constants/data";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-background px-5 pb-14 pt-16 text-brand-carbon sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-sm font-black uppercase tracking-widest text-brand-accent">
            KARBIN<span className="text-brand-carbon">MOTORS</span>
          </p>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-black uppercase leading-[0.9] tracking-tight">
            REPUESTOS PARA <br />
            MOTOCARGUEROS EN LIMA
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-brand-muted">
            Venta y distribución de repuestos para motocargueros, furgonetas y
            trimotos. Almacén en Ate con stock disponible y atención inmediata
            por WhatsApp.
          </p>
        </div>

        <div>
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
            {"// Índice"}
          </p>
          <div className="mt-6 grid gap-4">
            {footerSections.map(([label, href]) => {
              const isExternal = href.startsWith("http");
              return (
                <Link
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="font-display text-xs font-black uppercase tracking-wider text-brand-carbon-main transition-colors duration-300 hover:text-brand-accent glow-text"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted">
            {"// Ubicación & Redes"}
          </p>
          <p className="mt-6 font-sans text-sm leading-relaxed text-brand-carbon-main">
            Almacén Principal:
            <br />
            Cal. Londres 122, Urb. Portales de J. Prado, Ate, Lima.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Karbin-Motor/61574322585057/"
              target="_blank"
              rel="noreferrer"
              className="font-display text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-carbon transition-colors duration-300"
            >
              [ Facebook ]
            </a>
            <a
              href="https://www.instagram.com/karbinmotors/"
              target="_blank"
              rel="noreferrer"
              className="font-display text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-carbon transition-colors duration-300"
            >
              [ Instagram ]
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="font-display text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-carbon transition-colors duration-300"
            >
              [ TikTok ]
            </a>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="cut-button mt-8 inline-flex min-h-12 w-full items-center justify-center border-2 border-brand-accent bg-brand-accent/10 px-5 font-display text-xs font-bold uppercase tracking-wider text-brand-carbon transition-all duration-300 hover:bg-brand-accent hover:shadow-[0_0_20px_rgba(240,45,45,0.4)]"
          >
            LÍNEA DIRECTA
          </a>
        </div>
      </div>
    </footer>
  );
}
