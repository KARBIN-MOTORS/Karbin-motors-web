import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";
import { paymentOptions } from "../constants/data";

export function PaymentsSection() {
  return (
    <section id="pagos" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent">
            Financiamiento y pagos
          </p>
          <h2 className="font-display text-[2.7rem] font-extrabold uppercase leading-[0.96] text-brand-carbon sm:text-[4rem]">
            Cotiza primero, compra con claridad
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-carbon-main">
            Para repuestos y accesorios, la venta debe empezar con
            disponibilidad, compatibilidad y precio confirmado. También se puede
            evaluar financiamiento para compras mayores.
          </p>
          <div className="mt-8">
            <PrimaryButton>Consultar formas de pago</PrimaryButton>
          </div>
        </div>

        <div className="grid gap-px bg-brand-border sm:grid-cols-2">
          {paymentOptions.map(([title, detail]) => (
            <article key={title} className="bg-brand-card p-6">
              <h3 className="font-display text-[1.35rem] font-extrabold uppercase leading-tight text-brand-carbon">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-brand-carbon-main">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
