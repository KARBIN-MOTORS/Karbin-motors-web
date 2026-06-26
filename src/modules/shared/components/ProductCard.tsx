import Image from "next/image";

export type ProductCardProps = {
  name: string;
  imageSrc: string;
  model?: string;
  category?: string;
  price?: string;
  oldPrice?: string;
  badge?: string;
  compact?: boolean;
  priority?: boolean;
};

const badgeLabels: Record<string, string> = {
  featured: "Destacado",
  new: "Nuevo",
  last_units: "Ultimas unidades",
};

export function ProductCard({
  name,
  imageSrc,
  model,
  category,
  price,
  oldPrice,
  badge,
  compact = false,
  priority = false,
}: ProductCardProps) {
  const badgeLabel = badge ? (badgeLabels[badge] ?? badge) : undefined;
  const quoteHref = `https://wa.me/51900438494?text=${encodeURIComponent(
    `Hola Karbin Motors, solicito cotización y stock del repuesto: ${name}`,
  )}`;

  return (
    <article className="group relative flex h-full flex-col rounded-md border border-neutral-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_16px_42px_rgba(220,38,38,0.14)]">
      {badgeLabel ? (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-3 py-1 text-[0.68rem] font-black uppercase text-white">
          {badgeLabel}
        </span>
      ) : null}

      {category ? (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-neutral-100 px-3 py-1 text-[0.65rem] font-black uppercase text-neutral-500">
          {category}
        </span>
      ) : null}

      <div
        className={
          compact
            ? "relative grid min-h-36 place-items-center"
            : "relative grid min-h-48 place-items-center"
        }
      >
        <Image
          src={imageSrc}
          alt={name}
          width={360}
          height={260}
          priority={priority}
          className="max-h-40 w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 line-clamp-2 text-sm font-black text-neutral-950">
        {name}
      </h3>
      {model ? (
        <p className="mt-1 text-xs font-semibold text-neutral-500">{model}</p>
      ) : null}

      <div className="mt-3 flex items-end gap-2">
        <span className="text-lg font-black text-red-600">
          {price ?? "Consultar"}
        </span>
        {oldPrice ? (
          <span className="text-xs font-bold text-neutral-400 line-through">
            {oldPrice}
          </span>
        ) : null}
      </div>

      <p className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        En stock
      </p>

      <a
        href={quoteHref}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex h-10 items-center justify-center rounded border border-neutral-200 text-xs font-black uppercase text-neutral-900 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
      >
        Cotizar
      </a>
    </article>
  );
}
