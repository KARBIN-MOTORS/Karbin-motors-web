"use client";

import Image from "next/image";
import { useState } from "react";

type Product = {
  filename: string;
  name: string;
  category: string;
};

type ProductGalleryProps = {
  products: Product[];
};

const CATEGORIES = ["Todos", "Eléctricos", "Mecánicos", "Accesorios"];

export function ProductGallery({ products }: ProductGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "Todos" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-brand-border/30 pb-8">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="BUSCAR REPUESTO..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-[#111111] border border-brand-border px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-brand-carbon placeholder:text-brand-muted focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-brand-accent animate-pulse" />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              type="button"
              className={`cut-button inline-flex h-10 items-center justify-center border px-6 font-display text-[0.65rem] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "border-brand-accent bg-brand-accent text-brand-carbon shadow-[0_0_15px_rgba(240,45,45,0.4)]"
                  : "border-brand-border bg-transparent text-brand-muted hover:border-brand-muted hover:text-brand-carbon"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] bg-brand-border p-[2px]">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, i) => (
            <article
              key={product.filename}
              className="cut-card bg-brand-card p-6 flex flex-col items-center justify-between group transition-colors hover:bg-[#111111] min-h-[300px]"
            >
              <div className="absolute top-4 left-4 text-[0.55rem] font-display font-bold tracking-widest text-brand-muted uppercase">
                {product.category}
              </div>

              <div className="relative w-full aspect-square mt-6">
                <Image
                  src={`/repuestos/${product.filename}`}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority={i < 4}
                />
              </div>

              <div className="mt-6 w-full text-center border-t border-brand-border/50 pt-4 flex flex-col gap-4">
                <h2 className="font-display text-sm font-black uppercase leading-tight text-brand-carbon-main group-hover:text-brand-carbon transition-colors line-clamp-2">
                  {product.name}
                </h2>
                <a
                  href={`https://wa.me/51945145717?text=${encodeURIComponent(
                    `Hola Karbin Motors, solicito cotización y stock del repuesto: ${product.name}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="cut-button inline-flex w-full min-h-10 items-center justify-center border border-brand-border bg-transparent px-4 font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-carbon transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 hover:text-brand-accent"
                >
                  Cotizar Repuesto
                </a>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="font-display text-xl font-bold uppercase tracking-widest text-brand-muted">
              NO SE ENCONTRARON RESULTADOS
            </p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-brand-border/30 pt-8 sm:flex-row">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-brand-muted">
            MOSTRANDO {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} DE{" "}
            {filteredProducts.length} REPUESTOS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              type="button"
              className="cut-button inline-flex h-10 items-center justify-center border border-brand-border px-4 font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-carbon transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 disabled:opacity-30 disabled:pointer-events-none"
            >
              [ ← ANTERIOR ]
            </button>

            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  type="button"
                  className={`cut-button inline-flex h-10 w-10 items-center justify-center border font-display text-[0.65rem] font-bold uppercase transition-all duration-300 ${
                    currentPage === page
                      ? "border-brand-accent bg-brand-accent text-brand-carbon shadow-[0_0_15px_rgba(240,45,45,0.4)]"
                      : "border-brand-border bg-transparent text-brand-muted hover:border-brand-muted hover:text-brand-carbon"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              type="button"
              className="cut-button inline-flex h-10 items-center justify-center border border-brand-border px-4 font-display text-[0.65rem] font-bold uppercase tracking-widest text-brand-carbon transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 disabled:opacity-30 disabled:pointer-events-none"
            >
              [ SIGUIENTE → ]
            </button>
          </div>
        </div>
      )}
    </>
  );
}
