import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(100deg,#fff_0%,#fff_52%,#f4f4f4_52%,#f7f7f7_100%)]">
      <div className="absolute right-[12%] top-0 hidden h-full w-32 -skew-x-12 bg-red-600 lg:block" />
      <div className="relative mx-auto grid min-h-[520px] max-w-[1480px] items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-red-600">
            Karbin Motors S.A.C.
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            Confianza y calidad para cada repuesto
          </h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-neutral-600">
            Nacimos como un proyecto familiar con una meta clara: crear una
            empresa seria en un mercado amplio y competitivo, ofreciendo buena
            atención, repuestos de calidad y una experiencia de compra
            confiable.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center rounded bg-red-600 px-8 text-sm font-black uppercase text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700"
            >
              Hablar con un asesor
            </a>
            <Link
              href="/productos"
              className="inline-flex h-14 items-center justify-center rounded border border-neutral-300 bg-white px-8 text-sm font-black uppercase text-neutral-950 transition hover:border-red-600 hover:text-red-600"
            >
              Ver catálogo
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-md bg-neutral-950 text-white shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80"
            alt="Repuestos automotrices Karbin Motors"
            fill
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-7">
            <p className="font-display text-5xl font-black text-red-600">
              2025
            </p>
            <p className="mt-2 text-sm font-black uppercase tracking-widest">
              Inicio del proyecto familiar
            </p>
            <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-neutral-300">
              Un desafío propio convertido en empresa formal para atender a
              empresas, emprendedores, independientes y clientes particulares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
