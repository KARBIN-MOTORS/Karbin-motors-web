import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
	inverse?: boolean;
};

export function SiteLogo({ inverse = false }: SiteLogoProps) {
	const imageURL = inverse ? "/karbin/logo-white.png" : "/karbin/logo.png";

	return (
		<Link
			href="/"
			className="flex items-center gap-2"
			aria-label="Karbin Motors"
		>
			<Image
				src={imageURL}
				alt="Karbin Motors"
				width={80}
				height={50}
				className="shrink-0"
			/>
			<span className="grid gap-0.5 leading-none">
				<span
					className={`font-display text-xl font-black tracking-tight ${
						inverse ? "text-white" : "text-neutral-950"
					}`}
				>
					KARBIN
				</span>
				<span className="font-display text-[0.7rem] font-black tracking-[0.42em] text-red-600">
					MOTORS
				</span>
			</span>
		</Link>
	);
}
