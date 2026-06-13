import Image from "next/image";
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

        <div className="relative z-10 grid min-h-[320px] overflow-hidden place-items-center sm:min-h-[460px] lg:min-h-[520px]">
          <div className="absolute h-64 w-64 rounded-full bg-neutral-200 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute inset-x-8 bottom-10 h-24 -skew-x-12 rounded bg-red-600/10 sm:bottom-16 sm:h-32" />
          <div className="absolute right-4 top-8 h-28 w-28 rounded-full border border-red-600/20 sm:right-12 sm:h-40 sm:w-40" />
          <Image
            src="/karbin/hero-karbin.png"
            alt="Kit de repuestos Karbin Motors"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 52vw, 92vw"
            className="relative z-20 w-full max-w-[420px] -rotate-6 object-contain drop-shadow-2xl sm:max-w-[620px] lg:max-w-[760px]"
          />
        </div>
      </div>
    </section>
  );
}
