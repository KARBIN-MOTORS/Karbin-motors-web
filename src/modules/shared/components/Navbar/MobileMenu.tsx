"use client";

import Link from "next/link";
import { WHATSAPP_HREF } from "@/modules/shared/constants/networks.const.";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/modules/shared/icons";
import { useMobileMenu } from "../../hooks/useMobileMenu";

type NavLink = readonly [label: string, href: string];

type SiteMobileMenuProps = {
	navLinks: readonly NavLink[];
};

export function MobileMenu({ navLinks }: SiteMobileMenuProps) {
	const { isOpen, setIsOpen, isMounted, menuId, closeMenu } = useMobileMenu();

	return (
		<div className="lg:hidden">
			<button
				className="relative grid h-11 w-11 place-items-center overflow-hidden rounded border border-neutral-200 text-neutral-950 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
				type="button"
				aria-controls={menuId}
				aria-expanded={isOpen}
				aria-label={isOpen ? "Cerrar menu" : "Menu"}
				onClick={() => setIsOpen((current) => !current)}
			>
				<MenuIcon
					className={`absolute h-6 w-6 transition duration-200 ${
						isOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 opacity-100"
					}`}
				/>
				<CloseIcon
					className={`absolute h-6 w-6 transition duration-200 ${
						isOpen ? "scale-100 opacity-100" : "scale-75 -rotate-90 opacity-0"
					}`}
				/>
			</button>

			{isMounted ? (
				<div
					className={`absolute inset-x-0 top-full z-40 ${
						isOpen ? "mobile-menu-enter" : "mobile-menu-exit"
					}`}
				>
					<button
						type="button"
						aria-label="Cerrar menu"
						className={`absolute inset-x-0 top-0 h-dvh bg-black/35 backdrop-blur-[2px] ${
							isOpen
								? "mobile-menu-backdrop-enter"
								: "mobile-menu-backdrop-exit"
						}`}
						onClick={closeMenu}
					/>
					<nav
						id={menuId}
						aria-label="Menu movil"
						className="relative mx-auto grid max-w-370 gap-3 border-b border-neutral-200 bg-white px-5 py-5 shadow-2xl shadow-black/15"
					>
						<div className="mb-1 flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
							<div>
								<p className="font-display text-xs font-black uppercase tracking-[0.3em] text-red-600">
									Karbin Motors
								</p>
								<p className="mt-1 text-sm font-bold text-neutral-600">
									Repuestos y soporte especializado
								</p>
							</div>
						</div>
						{navLinks.map(([label, href]) => (
							<Link
								key={label}
								href={href}
								onClick={closeMenu}
								className="mobile-menu-item group flex min-h-12 items-center justify-between rounded border border-neutral-200 px-4 text-sm font-black uppercase text-neutral-950 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
							>
								<span>{label}</span>
								<span className="h-2 w-2 rounded-full bg-red-600 opacity-0 transition group-hover:opacity-100" />
							</Link>
						))}
						<a
							href={WHATSAPP_HREF}
							target="_blank"
							rel="noreferrer"
							onClick={closeMenu}
							className="mobile-menu-item mt-2 flex min-h-12 items-center justify-center gap-2 rounded bg-red-600 px-4 text-sm font-black uppercase text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-red-600"
						>
							<WhatsAppIcon className="h-5 w-5" />
							Cotizar por WhatsApp
						</a>
						<a
							href={WHATSAPP_HREF}
							target="_blank"
							rel="noreferrer"
							onClick={closeMenu}
							className="mobile-menu-item flex min-h-11 items-center justify-center gap-2 rounded border border-neutral-200 px-4 text-sm font-black text-neutral-950 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-red-600"
						>
							<WhatsAppIcon className="h-4 w-4" />
							WhatsApp directo
						</a>
					</nav>
				</div>
			) : null}
		</div>
	);
}
