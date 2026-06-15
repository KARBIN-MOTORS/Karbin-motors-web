import type { Product } from "@/modules/shared/entities/products.entity";

export interface GetProductsRequest {
  categorySlug?: string;
  search?: string;
  first?: number;
  last?: number;
  after?: string;
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
  totalCount: number;
}
