import type { Product } from "@/modules/shared/entities/products.entity";

export interface GetProductsRequest {
	first?: number;
	after?: string;
	last?: number;
	before?: string;
}

export interface PageInfo {
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	startCursor: string;
	endCursor: string;
}

export interface GetProductsResponse {
	products: Product[];
	pageInfo: PageInfo;
}
