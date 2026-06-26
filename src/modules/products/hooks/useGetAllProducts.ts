import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import type { GetProductsRequest } from "../interfaces/products.interface";
import { getProducts } from "../services/products.service";

const PAGE_SIZE = 12;

type CursorState = {
  after?: string;
  before?: string;
};

export function useGetAllProducts({
  first = PAGE_SIZE,
  categorySlug = "all",
  badge,
  search = "",
}: GetProductsRequest = {}) {
  const [cursor, setCursor] = useState<CursorState>({});

  const productsQuery = useQuery({
    queryKey: ["products", first, categorySlug, badge, search, cursor],
    queryFn: () =>
      getProducts({
        first: cursor.before ? undefined : first,
        last: cursor.before ? first : undefined,
        after: cursor.after,
        before: cursor.before,
        categorySlug,
        badge,
        search,
      }),
  });

  const resetPage = useCallback(() => {
    setCursor({});
  }, []);

  const nextPage = () => {
    if (!productsQuery.data?.pageInfo.hasNextPage) return;
    setCursor({ after: productsQuery.data.pageInfo.endCursor });
  };
  const previousPage = () => {
    if (!productsQuery.data?.pageInfo.hasPreviousPage) return;
    setCursor({ before: productsQuery.data.pageInfo.startCursor });
  };

  return {
    productsList: productsQuery.data?.products ?? [],
    pageInfo: productsQuery.data?.pageInfo,
    totalCount: productsQuery.data?.totalCount ?? 0,
    isFetchingProductsList: productsQuery.isFetching,
    resetPage,
    nextPage,
    previousPage,
  };
}
