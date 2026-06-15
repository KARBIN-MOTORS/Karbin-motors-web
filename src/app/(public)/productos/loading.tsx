import ProductListSkeleton from "@/modules/products/components/ProductListSkeleton";

export default function ProductosLoading() {
	return (
		<>
			<section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(100deg,#fff_0%,#fff_54%,#f4f4f4_54%,#f7f7f7_100%)]">
				<div className="absolute right-[12%] top-0 hidden h-full w-28 -skew-x-12 bg-red-600 lg:block" />
				<div className="relative mx-auto max-w-370 px-5 py-16 lg:px-12">
					<div className="h-3 w-44 animate-pulse rounded bg-red-100" />
					<div className="mt-5 h-14 w-3/4 max-w-xl animate-pulse rounded bg-neutral-200 sm:h-16" />
					<div className="mt-6 space-y-2">
						<div className="h-4 w-full max-w-lg animate-pulse rounded bg-neutral-100" />
						<div className="h-4 w-2/3 max-w-md animate-pulse rounded bg-neutral-100" />
					</div>
				</div>
			</section>

			<section className="px-5 py-12 lg:px-12">
				<div className="mx-auto w-full max-w-370">
					<div className="mb-10 flex flex-col gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-center md:justify-between">
						<div className="flex w-full items-center gap-2 md:w-auto">
							<div className="h-12 w-full animate-pulse rounded border border-neutral-200 bg-neutral-100 md:w-80" />
							<div className="h-10 w-24 animate-pulse rounded bg-red-100" />
						</div>
						<div className="flex gap-2">
							{Array.from({ length: 12 }, (_, i) => `sk-${i}`).map((id) => (
								<div
									key={id}
									className="h-10 w-24 animate-pulse rounded border border-neutral-200 bg-neutral-100"
								/>
							))}
						</div>
					</div>

					<ProductListSkeleton />
				</div>
			</section>
		</>
	);
}
