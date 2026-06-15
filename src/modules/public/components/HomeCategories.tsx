import Link from "next/link";
import { getCategories } from "@/modules/products/services/categories.service";
import { SectionTitle } from "@/modules/shared/components/SectionTitle";
import { ChevronRightIcon } from "@/modules/shared/icons/ChevronRightIcon";
import { categoryVisuals, fallbackCategoryVisual } from "../constants/home";

export async function HomeCategories() {
	const tinaCategories = await getCategories();

	const categories = tinaCategories.map((cat) => ({
		...cat,
		...(categoryVisuals[cat.name] ?? fallbackCategoryVisual),
	}));

	return (
		<section className="mx-auto max-w-370 px-5 py-7 lg:px-12">
			<SectionTitle
				eyebrow="Compra por línea"
				title="Nuestras categorías"
				actionLabel="Ver todas"
				actionHref="/productos"
			/>
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{categories.map((category) => (
					<Link
						key={category.name}
						href={`/productos?category=${encodeURIComponent(category.slug ?? "all")}`}
						className="group relative min-h-58 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_12px_34px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_18px_46px_rgba(220,38,38,0.16)]"
					>
						<div className="absolute inset-0 bg-[linear-gradient(112deg,#111_0%,#111_42%,#1b1b1b_42%,#0a0a0a_100%)]" />
						<div className="absolute right-0 top-0 hidden h-28 w-28 rounded-full bg-red-600/18 blur-2xl sm:block sm:h-36 sm:w-36" />
						<div className="absolute right-0 top-0 hidden h-full w-3 bg-red-600 transition group-hover:w-4 sm:block" />
						<div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent" />

						<div className="relative z-10 flex min-h-58 min-w-0">
							<div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
								<div>
									<div className="flex items-center gap-3">
										<span className="grid h-11 w-11 place-items-center rounded bg-white/10 text-xl text-white ring-1 ring-white/15">
											<category.Icon className="h-6 w-6" />
										</span>
									</div>
									<h3 className="mt-5 max-w-60 wrap-break-word font-display text-[1.35rem] font-black uppercase leading-none text-white sm:text-2xl">
										{category.name}
									</h3>
									<p className="mt-3 max-w-72 text-xs font-semibold leading-5 text-white/80">
										{category.detail}
									</p>
								</div>
								<p className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase text-white">
									Explorar
									<span className="grid h-6 w-6 place-items-center rounded-full bg-red-600 transition group-hover:translate-x-1">
										<ChevronRightIcon className="h-3.5 w-3.5 text-white" />
									</span>
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
