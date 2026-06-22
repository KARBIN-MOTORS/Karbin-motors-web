import Image from "next/image";
import Link from "next/link";
import { CheckIcon, PhoneIcon } from "@/modules/shared/icons";

const advantages = [
  "Importación directa",
  "Garantía total",
  "Stock permanente",
  "Precios competitivos",
];

export function HomeAboutPreview() {
  return (
    <section
      id="nosotros"
      className="mx-auto grid max-w-370 gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"
    >
      <div className="relative grid min-h-90 grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-md bg-neutral-200">
          <Image
            src="/karbin/preview-car.avif"
            alt="Mecánico revisando un vehículo en taller"
            fill
            loading="eager"
            quality={60}
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="relative mt-10 overflow-hidden rounded-md bg-neutral-200">
          <Image
            src="/karbin/preview-mechanic.avif"
            alt="Asesoría en repuestos"
            fill
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-6 left-1/2 rounded-md bg-red-600 px-7 py-5 text-white shadow-2xl">
          <p className="font-display text-5xl font-black leading-none">30+</p>
          <p className="mt-1 text-xs font-black uppercase">
            Años de experiencia
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-black uppercase tracking-widest text-neutral-950">
          ¿Por qué elegir Karbin Motors?
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-black leading-tight text-neutral-950">
          Nuestro objetivo es brindarte la mejor{" "}
          <span className="text-red-600">experiencia en repuestos</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-neutral-600">
          Nos especializamos en ofrecer repuestos de calidad para todo tipo de
          vehículos, con atención clara, confianza y asesoría antes de comprar.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {advantages.map((item) => (
            <p
              key={item}
              className="flex items-center gap-3 text-sm font-black"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-red-600 text-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              {item}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/nosotros"
            className="inline-flex h-12 items-center justify-center rounded bg-red-600 px-7 text-xs font-black uppercase text-white"
          >
            Conocer más sobre nosotros
          </Link>
          <a
            href="tel:+51900438494"
            className="inline-flex h-12 items-center justify-center gap-3 rounded bg-neutral-100 px-7 text-sm font-black text-neutral-950"
          >
            <PhoneIcon className="h-4 w-4" />
            +51 900 438 494
          </a>
        </div>
      </div>
    </section>
  );
}
