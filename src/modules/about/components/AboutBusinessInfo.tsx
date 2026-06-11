import { CheckIcon } from "@/modules/shared/icons";
import { businessActivities, legalInfo } from "../constants/about";

export function AboutBusinessInfo() {
  return (
    <section className="mx-auto grid max-w-[1480px] gap-8 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:px-12">
      <div className="rounded-md bg-neutral-950 p-7 text-white">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
          Actividades comerciales
        </p>
        <h2 className="mt-3 font-display text-3xl font-black uppercase leading-none">
          Repuestos, accesorios y soluciones para vehiculos
        </h2>
        <div className="mt-7 grid gap-3">
          {businessActivities.map((item) => (
            <p key={item} className="flex items-center gap-3 text-sm font-black">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-red-600 text-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-md border border-neutral-200 bg-white p-7 shadow-[0_12px_34px_rgba(0,0,0,0.07)]">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
          Datos de empresa
        </p>
        <h2 className="mt-3 font-display text-3xl font-black uppercase text-neutral-950">
          Informacion legal
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
          {legalInfo.map(([label, value]) => (
            <div key={label} className="bg-white p-4">
              <p className="text-[0.68rem] font-black uppercase tracking-widest text-neutral-400">
                {label}
              </p>
              <p className="mt-1 text-sm font-black text-neutral-950">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
