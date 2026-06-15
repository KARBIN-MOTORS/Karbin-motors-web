import type { Category } from "@/modules/shared/entities/category.entity";
import { isDefined } from "@/modules/shared/utils/isDefined.util";
import client from "@/tina/__generated__/client";

export async function getCategories(): Promise<Category[]> {
	const response = await client.queries.productCategoryConnection();

	return (response.data.productCategoryConnection.edges ?? [])
		.map((edge) => edge?.node)
		.filter(isDefined)
		.map((node) => ({
			name: node.name,
			slug: node.slug ?? undefined,
		}));
}
