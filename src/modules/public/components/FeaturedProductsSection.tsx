import { ProductCard } from "@/modules/shared/components/ProductCard";
import { SectionTitle } from "@/modules/shared/components/SectionTitle";
import { featuredProducts } from "../constants/home";

export function FeaturedProductsSection() {
	return (
		<section className="mx-auto max-w-370 px-5 py-10 lg:px-12">
			<SectionTitle
				title="Productos destacados"
				actionLabel="Ver todos los productos"
				actionHref="/productos"
			/>
			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{featuredProducts.map((product) => (
					<ProductCard
						key={product.name}
						{...product}
						imageSrc={product.image}
					/>
				))}
			</div>
		</section>
	);
}
