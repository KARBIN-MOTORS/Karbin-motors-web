import type { Metadata } from "next";
import { ProductGallery } from "@/modules/products/components/ProductGallery";
import { getCategories } from "@/modules/products/services/categories.service";

export const metadata: Metadata = {
	title: "Catálogo de Repuestos | Karbin Motors",
	description:
		"Explora el catálogo completo de repuestos, componentes eléctricos y piezas mecánicas disponibles en Karbin Motors.",
};

type ProductosPageProps = {
	searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProductosPage({
	searchParams,
}: ProductosPageProps) {
	const { category } = await searchParams;
	const initialCategory = Array.isArray(category) ? category[0] : category;
	const categories = await getCategories();

	return (
		<main className="min-h-screen">
			<section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(100deg,#fff_0%,#fff_54%,#f4f4f4_54%,#f7f7f7_100%)]">
				<div className="absolute right-[12%] top-0 hidden h-full w-28 -skew-x-12 bg-red-600 lg:block" />
				<div className="relative mx-auto max-w-370 px-5 py-16 lg:px-12">
					<p className="text-sm font-black uppercase tracking-widest text-red-600">
						Catálogo Karbin Motors
					</p>
					<h1 className="mt-4 max-w-3xl font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-neutral-950 sm:text-6xl">
						Nuestros de repuestos
					</h1>
					<p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-neutral-600">
						Consulta repuestos mecánicos, eléctricos y accesorios disponibles.
						Filtra por categoría o busca por nombre para cotizar al instante.
					</p>
				</div>
			</section>

			<section className="px-5 py-12 lg:px-12">
				<div className="mx-auto w-full max-w-370">
					<ProductGallery
						categories={categories}
						initialCategory={initialCategory ?? "all"}
					/>
				</div>
			</section>
		</main>
	);
}
