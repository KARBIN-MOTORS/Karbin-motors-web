"use client";

import { useState } from "react";
import { ProductCard } from "@/modules/shared/components/ProductCard";

type Product = {
  filename: string;
  name: string;
  category: string;
};

type ProductGalleryProps = {
  products: Product[];
};

const CATEGORIES = ["Todos", "Electricos", "Mecanicos", "Accesorios"];
const ITEMS_PER_PAGE = 12;

function normalize(value: string) {
  return value
    .replace(/Ã©/g, "e")
    .replace(/Ã¡/g, "a")
    .replace(/Ã­/g, "i")
    .replace(/Ã³/g, "o")
    .replace(/Ãº/g, "u")
    .replace(/Ã±/g, "n")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function ProductGallery({ products }: ProductGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = normalize(product.name).includes(
      normalize(searchQuery),
    );
    const matchesCategory =
      activeCategory === "Todos" ||
      normalize(product.category) === normalize(activeCategory);
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="BUSCAR REPUESTO..."
            value={searchQuery}
            onChange={(event) => handleSearchChange(event.target.value)}
            className="w-full rounded border border-neutral-200 bg-white px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-neutral-950 placeholder:text-neutral-400 transition-all focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          <div className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-red-600" />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              type="button"
              className={`inline-flex h-10 items-center justify-center rounded border px-6 font-display text-[0.65rem] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "border-red-600 bg-red-600 text-white shadow-[0_10px_24px_rgba(220,38,38,0.18)]"
                  : "border-neutral-200 bg-white text-neutral-500 hover:border-red-600 hover:text-red-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, index) => (
            <ProductCard
              key={product.filename}
              name={product.name}
              category={product.category}
              imageSrc={`/repuestos/${product.filename}`}
              priority={index < 4}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="font-display text-xl font-bold uppercase tracking-widest text-neutral-500">
              No se encontraron resultados
            </p>
          </div>
        )}
      </div>

      {totalPages > 1 ? (
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-neutral-500">
            Mostrando {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} de{" "}
            {filteredProducts.length} repuestos
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              type="button"
              className="inline-flex h-10 items-center justify-center rounded border border-neutral-200 bg-white px-4 font-display text-[0.65rem] font-black uppercase tracking-widest text-neutral-800 transition-all duration-300 hover:border-red-600 hover:text-red-600 disabled:pointer-events-none disabled:opacity-30"
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  type="button"
                  className={`inline-flex h-10 w-10 items-center justify-center rounded border font-display text-[0.65rem] font-black uppercase transition-all duration-300 ${
                    currentPage === page
                      ? "border-red-600 bg-red-600 text-white shadow-[0_10px_24px_rgba(220,38,38,0.18)]"
                      : "border-neutral-200 bg-white text-neutral-500 hover:border-red-600 hover:text-red-600"
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
              className="inline-flex h-10 items-center justify-center rounded border border-neutral-200 bg-white px-4 font-display text-[0.65rem] font-black uppercase tracking-widest text-neutral-800 transition-all duration-300 hover:border-red-600 hover:text-red-600 disabled:pointer-events-none disabled:opacity-30"
            >
              Siguiente
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
