"use client";

import { useMemo, useState } from "react";
import { Button } from "@/modules/shared/components/Button";
import { ProductCard } from "@/modules/shared/components/ProductCard";
import type { Category } from "@/modules/shared/entities/category.entity";
import { SearchIcon } from "@/modules/shared/icons/SearchIcon";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import { formatPrice } from "../utils/formatPrice.util";
import { getCategoryName } from "../utils/getCategoryName.util";

const ITEMS_PER_PAGE = 12;

type ProductGalleryProps = {
  categories: Category[];
  initialCategory?: string;
};

export function ProductGallery({
  categories: tinaCategories,
  initialCategory = "all",
}: ProductGalleryProps) {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = useMemo(
    () => [{ name: "Todos", slug: "all" }, ...tinaCategories],
    [tinaCategories],
  );

  const {
    productsList,
    pageInfo,
    totalCount,
    isFetchingProductsList,
    resetPage,
    nextPage,
    previousPage,
  } = useGetAllProducts({
    first: ITEMS_PER_PAGE,
    categorySlug: activeCategory,
    search: searchQuery,
  });

  const handleSearch = () => {
    resetPage();
    setSearchQuery(inputValue.trim());
  };

  const handleCategoryChange = (categorySlug?: string) => {
    resetPage();
    setActiveCategory(categorySlug ?? "all");
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-center md:justify-between">
        <form
          className="flex w-full items-center gap-2 md:w-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="BUSCAR REPUESTO..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full rounded border border-neutral-200 bg-white px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-neutral-950 placeholder:text-neutral-400 transition-all focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 md:w-80"
          />
          <Button variant="solid" type="submit" className="inline-flex gap-2">
            <SearchIcon className="h-4 w-4" />
            Buscar
          </Button>
        </form>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.slug ?? category.name}
              variant="outline"
              active={activeCategory === category.slug}
              onClick={() => handleCategoryChange(category.slug)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {productsList.length > 0 ? (
          productsList.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.title}
              category={getCategoryName(product.category)}
              imageSrc={product.image}
              badge={product.badge}
              price={formatPrice(product.price)}
              priority={index < 4}
            />
          ))
        ) : isFetchingProductsList ? (
          <div className="col-span-full py-20 text-center">
            <p className="font-display text-xl font-bold uppercase tracking-widest text-neutral-500">
              Cargando repuestos...
            </p>
          </div>
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="font-display text-xl font-bold uppercase tracking-widest text-neutral-500">
              No se encontraron resultados
            </p>
          </div>
        )}
      </div>

      {(pageInfo?.hasPreviousPage ||
        pageInfo?.hasNextPage ||
        totalCount > 0) && (
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-neutral-500">
            Mostrando {productsList.length} de {totalCount} repuestos
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="compact"
              onClick={previousPage}
              disabled={!pageInfo?.hasPreviousPage || isFetchingProductsList}
            >
              Anterior
            </Button>

            <Button
              size="compact"
              onClick={nextPage}
              disabled={!pageInfo?.hasNextPage || isFetchingProductsList}
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
