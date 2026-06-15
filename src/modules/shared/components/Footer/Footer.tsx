import Link from "next/link";
import { KarbinLogo } from "@/modules/shared/components/KarbinLogo/KarbinLogo";
import {
	FOOTER_COLUMNS,
	SOCIAL_LINKS,
} from "../../constants/footer.const";

export function Footer() {
	return (
		<footer className="bg-[#080808] text-white">
			<div className="mx-auto grid max-w-370 gap-8 px-5 py-10 md:grid-cols-2 lg:grid-cols-5 lg:px-12">
				<div>
					<KarbinLogo inverse />
					<p className="mt-4 text-xs leading-6 text-neutral-400">
						Repuestos de calidad para tu vehículo. Calidad, garantía y el mejor
						precio del mercado.
					</p>
					<div className="mt-5 flex items-center gap-3">
						{SOCIAL_LINKS.map(({ label, href, Icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								className="grid h-9 w-9 place-items-center rounded border border-white/10 text-neutral-300 transition hover:border-red-500 hover:text-red-500"
								aria-label={`${label} de Karbin Motors`}
							>
								<Icon className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>
				{FOOTER_COLUMNS.map(([title, items]) => (
					<div key={title}>
						<h3 className="text-xs font-black uppercase tracking-widest">
							{title}
						</h3>
						<div className="mt-4 grid gap-2 text-xs font-semibold text-neutral-400">
							{items.split(",").map((item) => (
								<Link key={item} href="/" className="hover:text-red-500">
									{item}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="border-t border-white/10 px-5 py-5 text-center text-xs text-neutral-500">
				(c) 2026 Karbin Motors. Todos los derechos reservados.
			</div>
		</footer>
	);
}
