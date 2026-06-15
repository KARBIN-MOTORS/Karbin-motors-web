import type { Product } from "@/modules/shared/entities/products.entity";
import type { ProductConnectionQuery } from "@/tina/__generated__/types";

type TinaProductNode = NonNullable<
	NonNullable<
		NonNullable<ProductConnectionQuery["productConnection"]["edges"]>[number]
	>["node"]
>;

export const productAdapterToResponse = (
	product: TinaProductNode,
): Product => ({
	id: product._sys.filename,
	badge: product.badge as Product["badge"],
	title: product.title,
	slug: product.slug ?? '',
	image: product.image,
	brand: product?.brand ?? '',
	price: product.price,
	currency: product.currency as Product["currency"],
	inStock: product.inStock ?? false,
	category: (product.category ?? "otros") as Product["category"],
	description: product.description ?? "",
});
