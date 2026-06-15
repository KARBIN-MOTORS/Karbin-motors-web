import Link from "next/link";
import { WHATSAPP_HREF } from "@/modules/shared/constants/networks.const.";
import {
	FacebookIcon,
	InstagramIcon,
	WhatsAppIcon,
} from "@/modules/shared/icons";
import { NAV_LINKS } from "../../constants/navbar.const";
import { FACEBOOK_HREF, INSTAGRAM_HREF } from "../../constants/networks.const.";
import { KarbinLogo } from "../KarbinLogo/KarbinLogo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
	return (
		<>
			<div className="bg-black text-white">
				<div className="mx-auto flex min-h-10 max-w-370 items-center justify-between gap-4 px-5 py-2 text-[0.72rem] font-bold lg:px-12">
					<div className="hidden min-w-0 items-center gap-8 lg:flex">
						<span>Envíos a todo el Perú</span>
						<span>Garantía en todos los productos</span>
						<span>Soporte técnico especializado</span>
					</div>
					<div className="ml-auto flex min-w-0 items-center gap-4 sm:gap-5">
						<a
							className="inline-flex items-center gap-1.5 whitespace-nowrap transition hover:text-emerald-400"
							href={WHATSAPP_HREF}
							target="_blank"
							rel="noreferrer"
							aria-label="WhatsApp de Karbin Motors"
						>
							<WhatsAppIcon className="size-3.5" />
							+51 900 438 494
						</a>
						<a
							href={FACEBOOK_HREF}
							target="_blank"
							rel="noreferrer"
							className="shrink-0 transition hover:text-red-500"
							aria-label="Facebook de Karbin Motors"
						>
							<FacebookIcon className="h-4 w-4" />
						</a>
						<a
							href={INSTAGRAM_HREF}
							target="_blank"
							rel="noreferrer"
							className="shrink-0 transition hover:text-red-500"
							aria-label="Instagram de Karbin Motors"
						>
							<InstagramIcon className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>

			<header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
				<div className="mx-auto flex h-20 max-w-370 items-center gap-8 px-5 lg:px-12">
					<KarbinLogo />
					<nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
						{NAV_LINKS.map(([label, href]) => (
							<Link
								key={label}
								href={href}
								className="border-b-2 border-transparent py-7 text-[0.72rem] font-black uppercase tracking-wide text-neutral-900 transition hover:border-red-600 hover:text-red-600"
							>
								{label}
							</Link>
						))}
					</nav>
					<div className="ml-auto flex items-center gap-4">
						<a
							href={WHATSAPP_HREF}
							target="_blank"
							rel="noreferrer"
							className="hidden rounded bg-red-600 px-5 py-3 text-[0.7rem] font-black uppercase text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 md:inline-flex"
						>
							Cotizar por WhatsApp
						</a>
						<MobileMenu navLinks={NAV_LINKS} />
					</div>
				</div>
			</header>
		</>
	);
}
