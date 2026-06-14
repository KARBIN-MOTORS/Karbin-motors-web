"use client";

import { Button } from "@/modules/shared/components/Button";
import { ProductCard } from "@/modules/shared/components/ProductCard";
import type { Category } from "@/modules/shared/entities/category.entity";
import type { Product } from "@/modules/shared/entities/products.entity";
import { SearchIcon } from "@/modules/shared/icons/SearchIcon";
import { useProductGallery } from "../hooks/useProductGallery";
import { formatPrice } from "../utils/formatPrice.util";
import { getCategoryName } from "../utils/getCategoryName.util";

const ITEMS_PER_PAGE = 12;

type ProductGalleryProps = {
	products: Product[];
	categories: Category[];
};

export function ProductGallery({
	products,
	categories: tinaCategories,
}: ProductGalleryProps) {
	const {
		inputValue,
		activeCategory,
		currentPage,
		categories,
		filteredProducts,
		paginatedProducts,
		totalPages,
		handleInputChange,
		handleSearch,
		handleCategoryChange,
		goToPage,
		prevPage,
		nextPage,
	} = useProductGallery(products, tinaCategories);

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
						onChange={(e) => handleInputChange(e.target.value)}
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
							key={category}
							variant="outline"
							active={activeCategory === category}
							onClick={() => handleCategoryChange(category)}
						>
							{category}
						</Button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{paginatedProducts.length > 0 ? (
					paginatedProducts.map((product, index) => (
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
				) : (
					<div className="col-span-full py-20 text-center">
						<p className="font-display text-xl font-bold uppercase tracking-widest text-neutral-500">
							No se encontraron resultados
						</p>
					</div>
				)}
			</div>

			{totalPages > 1 && (
				<div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row">
					<p className="font-display text-xs font-bold uppercase tracking-widest text-neutral-500">
						Mostrando {(currentPage - 1) * ITEMS_PER_PAGE + 1} –{" "}
						{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} de{" "}
						{filteredProducts.length} repuestos
					</p>

					<div className="flex flex-wrap items-center justify-center gap-2">
						<Button
							size="compact"
							onClick={prevPage}
							disabled={currentPage === 1}
						>
							Anterior
						</Button>

						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<Button
								key={page}
								size="square"
								variant="outline"
								active={currentPage === page}
								onClick={() => goToPage(page)}
							>
								{page}
							</Button>
						))}

						<Button
							size="compact"
							onClick={nextPage}
							disabled={currentPage === totalPages}
						>
							Siguiente
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
