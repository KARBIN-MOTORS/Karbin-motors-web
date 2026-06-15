import type { Category } from "@/modules/shared/entities/category.entity";

export function getCategoryName(category: Category | string): string {
	if (typeof category === "string") return category;
	return category.name;
}
