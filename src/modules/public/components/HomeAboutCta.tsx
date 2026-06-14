import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { CheckIcon } from "@/modules/shared/icons";

const advisorBenefits = [
  "Validación por foto o referencia",
  "Cotización rápida por WhatsApp",
  "Despacho coordinado a Lima y provincias",
];

export function HomeAboutCta() {
  return (
    <section id="contacto" className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-[1480px] gap-8 px-5 py-12 lg:grid-cols-[1fr_1.2fr_1fr] lg:px-12">
        <div>
          <h2 className="font-display text-2xl font-black uppercase">
            Sobre nosotros
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300">
            <span className="font-black text-red-500">Karbin Motors</span> es
            una empresa peruana dedicada a la venta de repuestos automotrices de
            alta calidad para todo tipo de vehículo.
          </p>
          <Link
            href="/nosotros"
            className="mt-6 inline-flex rounded bg-red-600 px-6 py-3 text-xs font-black uppercase"
          >
            Conocer más
          </Link>
        </div>

        <div className="relative min-h-64 overflow-hidden rounded-md bg-neutral-800">
          <Image
            src="/karbin/karbin-mecanico.png"
            alt="Tienda de repuestos Karbin Motors"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
            Atención especializada
          </p>
          <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white">
            Te ayudamos a encontrar el repuesto correcto
          </h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-neutral-300">
            Envíanos una foto, modelo o medida del repuesto y validamos
            disponibilidad antes de que compres.
          </p>
          <div className="mt-6 grid gap-3">
            {advisorBenefits.map((item) => (
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
          <div className="mt-7 grid gap-3">
            <Link
              href="/nosotros"
              className="inline-flex h-12 items-center justify-center rounded bg-red-600 px-6 text-xs font-black uppercase text-white transition hover:bg-red-700"
            >
              Conocer nuestra historia
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded border border-white/20 px-6 text-xs font-black uppercase text-white transition hover:border-red-500 hover:text-red-500"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
