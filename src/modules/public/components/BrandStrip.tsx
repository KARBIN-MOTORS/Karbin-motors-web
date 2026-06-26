import { SectionTitle } from "@/modules/shared/components/SectionTitle";
import { solutions } from "../constants/home";

export function BrandStrip() {
  return (
    <section id="categorias" className="mx-auto max-w-370 px-5 py-8 lg:px-12">
      <SectionTitle title="Soluciones que atendemos" />
      <div className="grid grid-cols-2 overflow-hidden rounded border border-neutral-200 bg-white sm:grid-cols-5 lg:grid-cols-10">
        {solutions.map((solution) => (
          <div
            key={solution}
            className="grid h-16 place-items-center border-b border-r border-neutral-200 text-xs font-black uppercase tracking-wide text-neutral-500"
          >
            {solution}
          </div>
        ))}
      </div>
    </section>
  );
}
