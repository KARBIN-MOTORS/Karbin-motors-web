import Link from "next/link";
import { CartIcon, MenuIcon, SearchIcon } from "@/modules/shared/icons";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";

function SiteLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Karbin Motors">
      <span className="font-display text-3xl font-black leading-none tracking-tighter text-red-600">
        KM
      </span>
      <span className="grid gap-0.5 leading-none">
        <span
          className={`font-display text-xl font-black tracking-tight ${
            inverse ? "text-white" : "text-neutral-950"
          }`}
        >
          KARBIN
        </span>
        <span className="font-display text-[0.7rem] font-black tracking-[0.42em] text-red-600">
          MOTORS
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const navLinks = [
    ["Inicio", "/"],
    ["Nosotros", "/nosotros"],
    ["Productos", "/productos"],
    ["Marcas", "/#marcas"],
    ["Servicios", "/#servicios"],
    ["Contacto", "/#contacto"],
  ];

  return (
    <>
      <div className="bg-black text-white">
        <div className="mx-auto flex h-10 max-w-[1480px] items-center justify-between px-5 text-[0.72rem] font-bold lg:px-12">
          <div className="hidden items-center gap-8 md:flex">
            <span>Envios a todo el Peru</span>
            <span>Garantia en todos los productos</span>
            <span>Soporte tecnico especializado</span>
          </div>
          <div className="ml-auto flex items-center gap-5">
            <span className="text-emerald-500">Online</span>
            <a href="tel:+51900438494">+51 900 438 494</a>
            <span>f</span>
            <span>ig</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1480px] items-center gap-8 px-5 lg:px-12">
          <SiteLogo />
          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="border-b-2 border-transparent py-7 text-[0.72rem] font-black uppercase tracking-wide text-neutral-900 transition hover:border-red-600 hover:text-red-600"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <button
              className="hidden h-10 w-10 place-items-center rounded text-neutral-700 transition hover:bg-neutral-100 hover:text-red-600 sm:grid"
              type="button"
              aria-label="Buscar"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <button
              className="relative hidden h-10 w-10 place-items-center rounded text-neutral-700 transition hover:bg-neutral-100 hover:text-red-600 sm:grid"
              type="button"
              aria-label="Carrito"
            >
              <CartIcon className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-red-600 text-[0.6rem] font-black text-white">
                2
              </span>
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded bg-red-600 px-5 py-3 text-[0.7rem] font-black uppercase text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 md:inline-flex"
            >
              Cotizar por WhatsApp
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded text-neutral-900 transition hover:bg-neutral-100 hover:text-red-600 lg:hidden"
              type="button"
              aria-label="Menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export { SiteLogo };
