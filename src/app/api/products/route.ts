import { productAdapterToResponse } from "@/modules/products/adapters/products.adapter";
import { isDefined } from "@/modules/shared/utils/isDefined.util";
import client from "@/tina/__generated__/client";

const DEFAULT_PAGE_SIZE = 12;

function getNumberParam(value: string | null): number | undefined {
  if (!value) return undefined;

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function getPageWindow<T>(
  items: T[],
  {
    first,
    last,
    after,
    before,
    getCursor,
  }: {
    first?: number;
    last?: number;
    after?: string;
    before?: string;
    getCursor: (item: T) => string;
  },
) {
  const afterIndex = after
    ? items.findIndex((item) => getCursor(item) === after)
    : -1;
  const beforeIndex = before
    ? items.findIndex((item) => getCursor(item) === before)
    : -1;
  const startIndex = afterIndex >= 0 ? afterIndex + 1 : 0;
  const endIndex = beforeIndex >= 0 ? beforeIndex : items.length;
  const windowItems = items.slice(startIndex, endIndex);
  const pageSize = first ?? last ?? DEFAULT_PAGE_SIZE;
  const pageStartOffset = last ? Math.max(windowItems.length - pageSize, 0) : 0;
  const pageItems = last
    ? windowItems.slice(pageStartOffset)
    : windowItems.slice(0, pageSize);
  const pageStartIndex = startIndex + pageStartOffset;
  const pageEndIndex = pageStartIndex + pageItems.length;

  return {
    pageItems,
    pageInfo: {
      hasPreviousPage: pageStartIndex > 0,
      hasNextPage: pageEndIndex < items.length,
      startCursor: pageItems[0] ? getCursor(pageItems[0]) : "",
      endCursor: pageItems.at(-1) ? getCursor(pageItems.at(-1) as T) : "",
    },
  };
}

function normalizeSearchValue(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categorySlug = searchParams.get("categorySlug");
  const badge = searchParams.get("badge");
  const search = searchParams.get("search")?.trim();
  const first = getNumberParam(searchParams.get("first"));
  const last = getNumberParam(searchParams.get("last"));
  const after = searchParams.get("after") ?? undefined;
  const before = searchParams.get("before") ?? undefined;
  const normalizedSearch = search ? normalizeSearchValue(search) : "";

  const response = await client.queries.productConnection();

  const edges = (response.data.productConnection.edges ?? [])
    .filter(isDefined)
    .filter((edge) => isDefined(edge.node))
    .filter((edge) => edge.node?.inStock === true)
    .filter(
      (edge) =>
        !categorySlug ||
        categorySlug === "all" ||
        edge.node?.category.slug === categorySlug,
    )
    .filter((edge) => !badge || edge.node?.badge === badge)
    .filter(
      (edge) =>
        !normalizedSearch ||
        normalizeSearchValue(edge.node?.title ?? "").includes(normalizedSearch),
    );
  const { pageItems, pageInfo } = getPageWindow(edges, {
    first,
    last,
    after,
    before,
    getCursor: (edge) => edge.cursor,
  });
  const products = pageItems
    .map((edge) => edge.node)
    .filter(isDefined)
    .map(productAdapterToResponse);

  return Response.json({
    products,
    pageInfo,
    totalCount: edges.length,
  });
}
