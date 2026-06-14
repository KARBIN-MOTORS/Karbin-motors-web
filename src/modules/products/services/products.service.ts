import type { Product } from "@/modules/shared/entities/products.entity";
import { isDefined } from "@/modules/shared/utils/isDefined.util";
import client from "@/tina/__generated__/client";
import { productAdapterToResponse } from "../adapters/products.adapter";

export async function getProducts(): Promise<Product[]> {
	const response = await client.queries.productConnection();

	return (response.data.productConnection.edges ?? [])
		.map((edge) => edge?.node)
		.filter(isDefined)
		.map(productAdapterToResponse);
}
