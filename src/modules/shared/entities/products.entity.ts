import type { Category } from "./category.entity";

export type Product = {
	id: string;
	badge?: string;
	title: string;
	slug: string;
	image: string;
	brand: string;
	price: number;
	currency: string;
	inStock: boolean;
	category: Category;
	description?: string;
};
