export function formatPrice(price: number | undefined | null): string | undefined {
	if (!price) return undefined;
	return `S/ ${price.toLocaleString("es-PE")}`;
}
