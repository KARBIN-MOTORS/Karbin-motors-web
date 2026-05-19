import { whatsappHref } from "@/modules/shared/constants/whatsapp";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brand-border bg-brand-background/88 backdrop-blur-md">
      <div className="mx-auto grid h-16 w-full max-w-[1440px] grid-cols-3 items-center px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-5">
          <a
            href="#categorias"
            className="font-display text-xs font-bold uppercase text-brand-carbon-main transition-colors duration-300 hover:text-brand-accent"
          >
            Categorías
          </a>
          <a
            href="#destacados"
            className="font-display text-xs font-bold uppercase text-brand-carbon-main transition-colors duration-300 hover:text-brand-accent"
          >
            Repuestos
          </a>
          <a
            href="#taller"
            className="hidden font-display text-xs font-bold uppercase text-brand-carbon-main transition-colors duration-300 hover:text-brand-accent sm:inline"
          >
            Taller
          </a>
        </div>
        <a
          href="#inicio"
          className="justify-self-center font-display text-base font-extrabold uppercase text-brand-carbon"
        >
          Karbin Motors
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="justify-self-end font-display text-xs font-bold uppercase text-brand-carbon transition-colors duration-300 hover:text-brand-accent"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
