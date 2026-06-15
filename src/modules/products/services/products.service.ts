import type {
  GetProductsRequest,
  GetProductsResponse,
} from "../interfaces/products.interface";

export async function getProducts({
  categorySlug = "all",
  search,
  first,
  last,
  after,
  before,
}: GetProductsRequest = {}): Promise<GetProductsResponse> {
  const params = new URLSearchParams();

  if (categorySlug && categorySlug !== "all") {
    params.set("categorySlug", categorySlug);
  }

  if (search) params.set("search", search);
  if (first) params.set("first", String(first));
  if (last) params.set("last", String(last));
  if (after) params.set("after", after);
  if (before) params.set("before", before);

  const response = await fetch(`/api/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return response.json();
}
