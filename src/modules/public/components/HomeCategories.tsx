import Link from "next/link";
import { SectionTitle } from "@/modules/shared/components/SectionTitle";
import { homeCategories } from "../constants/home";

export function HomeCategories() {
  return (
    <section className="mx-auto max-w-[1480px] px-5 py-7 lg:px-12">
      <SectionTitle
        eyebrow="Compra por línea"
        title="Nuestras categorías"
        actionLabel="Ver todas"
        actionHref="/productos"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {homeCategories.map((category, index) => (
          <Link
            key={category.name}
            href="/productos"
            className={`group relative min-h-[232px] overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_12px_34px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_18px_46px_rgba(220,38,38,0.16)] ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(112deg,#111_0%,#111_42%,#1b1b1b_42%,#0a0a0a_100%)]" />
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-red-600/18 blur-2xl" />
            <div className="absolute right-0 top-0 h-full w-24 -skew-x-12 bg-red-600 transition group-hover:w-32" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

            <div className="relative z-10 flex min-h-[232px]">
              <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded bg-white/10 text-xl text-white ring-1 ring-white/15">
                      <category.Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-red-600 px-3 py-1 text-[0.65rem] font-black uppercase text-white">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-[15rem] font-display text-2xl font-black uppercase leading-none text-white">
                    {category.name}
                  </h3>
                  <p className="mt-3 max-w-[18rem] text-xs font-semibold leading-5 text-white/68">
                    {category.detail}
                  </p>
                </div>
                <p className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase text-white">
                  Ver productos
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-red-600 transition group-hover:translate-x-1">
                    {">"}
                  </span>
                </p>
              </div>

              <div className="relative hidden w-[42%] shrink-0 place-items-center sm:grid">
                <div className="absolute inset-y-8 left-0 w-px bg-white/10" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="relative z-10 max-h-44 w-full object-contain p-4 drop-shadow-2xl transition duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
