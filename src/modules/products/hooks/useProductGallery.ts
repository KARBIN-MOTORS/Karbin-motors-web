import { useMemo, useState } from "react";
import type { Category } from "@/modules/shared/entities/category.entity";
import type { Product } from "@/modules/shared/entities/products.entity";
import { getCategoryName } from "../utils/getCategoryName.util";
import { normalize } from "../utils/normalize.util";

const ITEMS_PER_PAGE = 12;

export function useProductGallery(
	products: Product[],
	tinaCategories: Category[],
) {
	const [inputValue, setInputValue] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("Todos");
	const [currentPage, setCurrentPage] = useState(1);

	const categories = useMemo(
		() => ["Todos", ...tinaCategories.map((c) => c.name)],
		[tinaCategories],
	);

	const filteredProducts = useMemo(
		() =>
			products.filter((product) => {
				const matchesSearch = normalize(product.title).includes(
					normalize(searchQuery),
				);
				const matchesCategory =
					activeCategory === "Todos" ||
					normalize(getCategoryName(product.category)) ===
						normalize(activeCategory);
				return matchesSearch && matchesCategory;
			}),
		[products, searchQuery, activeCategory],
	);

	const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

	const paginatedProducts = useMemo(
		() =>
			filteredProducts.slice(
				(currentPage - 1) * ITEMS_PER_PAGE,
				currentPage * ITEMS_PER_PAGE,
			),
		[filteredProducts, currentPage],
	);

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	const handleSearch = () => {
		setSearchQuery(inputValue);
		setCurrentPage(1);
	};

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
		setCurrentPage(1);
	};

	const goToPage = (page: number) => setCurrentPage(page);
	const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
	const nextPage = () =>
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));

	return {
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
	};
}
