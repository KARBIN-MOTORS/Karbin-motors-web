"use client";

import ProductListSkeleton from "@/modules/products/components/ProductListSkeleton";
import { useGetAllProducts } from "@/modules/products/hooks/useGetAllProducts";
import { formatPrice } from "@/modules/products/utils/formatPrice.util";
import { getCategoryName } from "@/modules/products/utils/getCategoryName.util";
import { ProductCard } from "@/modules/shared/components/ProductCard";
import { SectionTitle } from "@/modules/shared/components/SectionTitle";

export function FeaturedProductsSection() {
  const { isFetchingProductsList, productsList } = useGetAllProducts({
    badge: "featured",
    first: 6,
  });

  return (
    <section className="mx-auto max-w-370 px-5 py-10 lg:px-12">
      <SectionTitle
        title="Productos destacados"
        actionLabel="Ver todos los productos"
        actionHref="/productos"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {productsList.map((product, index) => (
          <ProductCard
            key={product.id}
            name={product.title}
            category={getCategoryName(product.category)}
            imageSrc={product.image}
            badge={product.badge}
            brand={product.brand}
            priority={index < 3}
          />
        ))}
        {isFetchingProductsList && productsList.length === 0 ? (
          <ProductListSkeleton count={6} className="col-span-full" />
        ) : null}
      </div>
    </section>
  );
}
