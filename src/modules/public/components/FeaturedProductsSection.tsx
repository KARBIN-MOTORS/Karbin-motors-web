"use client";

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
						price={formatPrice(product.price)}
						priority={index < 3}
					/>
				))}
				{isFetchingProductsList && productsList.length === 0
					? Array.from({ length: 3 }, (_, index) => (
							<div
								key={`featured-skeleton-${index}`}
								className="flex min-h-80 flex-col gap-3 rounded-md border border-neutral-200 p-4"
							>
								<div className="h-48 animate-pulse rounded bg-neutral-100" />
								<div className="h-4 w-3/4 animate-pulse rounded bg-neutral-200" />
								<div className="h-6 w-1/4 animate-pulse rounded bg-red-100" />
								<div className="h-10 animate-pulse rounded border border-neutral-200 bg-neutral-50" />
							</div>
						))
					: null}
			</div>
		</section>
	);
}
