interface Props {
	className?: string;
	count?: number;
}

const ProductListSkeleton = ({ className, count = 12 }: Props) => {
	return (
		<div
			className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${className ?? ""}`}
		>
			{Array.from({ length: count }, (_, i) => `sk-${i}`).map((id) => (
				<div
					key={id}
					className="flex flex-col gap-3 rounded-md border border-neutral-200 p-4"
				>
					<div className="h-48 animate-pulse rounded bg-neutral-100" />
					<div className="h-4 w-3/4 animate-pulse rounded bg-neutral-200" />
					<div className="h-6 w-1/4 animate-pulse rounded bg-red-100" />
					<div className="h-3 w-1/3 animate-pulse rounded bg-neutral-100" />
					<div className="h-10 animate-pulse rounded border border-neutral-200 bg-neutral-50" />
				</div>
			))}
		</div>
	);
};

export default ProductListSkeleton;
