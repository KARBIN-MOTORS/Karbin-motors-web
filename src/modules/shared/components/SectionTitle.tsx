import Link from "next/link";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  actionLabel?: string;
  actionHref?: string;
  inverse?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  actionLabel,
  actionHref,
  inverse = false,
}: SectionTitleProps) {
  return (
    <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`font-display text-3xl font-black uppercase tracking-tight ${
            inverse ? "text-white" : "text-neutral-950"
          }`}
        >
          {title}
        </h2>
      </div>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="inline-flex h-10 items-center justify-center rounded border border-neutral-200 px-5 text-xs font-black uppercase text-red-600 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
