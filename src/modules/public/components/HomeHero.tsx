import Link from "next/link";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { trustItems } from "../constants/home";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(100deg,#fff_0%,#fff_48%,#f4f4f4_48%,#f7f7f7_100%)]">
      <div className="absolute right-[12%] top-0 hidden h-full w-36 -skew-x-12 bg-red-600 lg:block" />
      <div className="mx-auto grid min-h-[560px] max-w-[1480px] items-center gap-8 px-5 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="relative z-10">
          <p className="text-sm font-black uppercase tracking-widest text-red-600">
            Karbin Motors
          </p>
          <h1 className="mt-5 max-w-2xl break-words font-display text-4xl font-black uppercase leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl sm:leading-[0.92] lg:text-7xl">
            Repuestos de calidad para{" "}
            <span className="text-red-600">tu vehículo</span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-neutral-600">
            Contamos con una amplia variedad de repuestos originales y
            alternativos para todo tipo de vehículos. Calidad, garantía y el
            mejor precio del mercado.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/productos"
              className="inline-flex h-14 w-full items-center justify-center rounded bg-red-600 px-6 text-center text-sm font-black uppercase text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700 sm:w-auto sm:min-w-44 sm:px-8"
            >
              Ver catálogo
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 w-full items-center justify-center rounded border border-neutral-300 bg-white px-6 text-center text-sm font-black uppercase text-neutral-950 transition hover:border-red-600 hover:text-red-600 sm:w-auto sm:min-w-56 sm:px-8"
            >
              Cotizar por WhatsApp
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {trustItems.map(({ Icon, title, text }) => (
              <div key={title} className="flex min-w-0 items-center gap-3">
                <Icon className="h-7 w-7 shrink-0 text-red-600" />
                <div className="min-w-0">
                  <p className="break-words text-xs font-black uppercase text-neutral-900">
                    {title}
                  </p>
                  <p className="break-words text-[0.72rem] font-semibold text-neutral-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid min-h-[300px] overflow-hidden place-items-center sm:min-h-[430px]">
          <div className="absolute h-56 w-56 rounded-full bg-neutral-200 blur-3xl sm:h-72 sm:w-72" />
          <img
            src="/repuestos/4-_BOMBA_DE_FRENO_POS-removebg-preview.png"
            alt="Kit de repuestos Karbin Motors"
            className="absolute left-[2%] top-[8%] z-20 max-h-32 rotate-[-12deg] object-contain drop-shadow-2xl sm:left-[6%] sm:max-h-52"
          />
          <img
            src="/repuestos/16.-FARO CENTRAL LED PARA CARGUERO (3).png"
            alt="Faro LED Karbin Motors"
            className="absolute right-[2%] top-[18%] z-20 max-h-28 rotate-6 object-contain drop-shadow-2xl sm:right-[8%] sm:max-h-44"
          />
          <img
            src="/repuestos/18.-CARGADOR_60V_58AH_CONEXIONES-removebg-preview.png"
            alt="Batería Karbin Motors"
            className="absolute bottom-[6%] right-[12%] z-30 max-h-36 object-contain drop-shadow-2xl sm:right-[18%] sm:max-h-56"
          />
          <img
            src="/repuestos/10.-_EJE_CARDAN_COMPLETO-removebg-preview (1).png"
            alt="Eje cardan Karbin Motors"
            className="relative z-10 max-h-[280px] w-full object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.28)] sm:max-h-[410px]"
          />
        </div>
      </div>
    </section>
  );
}
