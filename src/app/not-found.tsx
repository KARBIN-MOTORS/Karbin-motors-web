import type { Metadata } from "next";
import Link from "next/link";
import { FloatingWhatsAppButton } from "@/modules/shared/components/FloatingWhatsAppButton/FloatingButton";
import { Footer } from "@/modules/shared/components/Footer/Footer";
import { Navbar } from "@/modules/shared/components/Navbar/Navbar";
import { ChevronRightIcon } from "@/modules/shared/icons";

export const metadata: Metadata = {
	title: "Página no encontrada | Karbin Motors",
	description:
		"La página que buscas no existe o fue movida. Vuelve al menú principal de Karbin Motors.",
};

function Automotive404Svg() {
	return (
		<svg
			className="relative z-10 h-auto w-full"
			viewBox="0 0 760 520"
			role="img"
			aria-labelledby="automotive-404-title"
		>
			<title id="automotive-404-title">
				Ilustración 404 con panel de diagnóstico automotriz
			</title>
			<defs>
				<pattern
					id="grid-pattern"
					width="40"
					height="40"
					patternUnits="userSpaceOnUse"
				>
					<path
						d="M40 0H0V40"
						className="fill-none stroke-white"
						strokeWidth="1"
					/>
				</pattern>
			</defs>
			<rect width="760" height="520" rx="28" className="fill-neutral-950" />
			<path d="M0 0 H760 V520 H0Z" fill="url(#grid-pattern)" opacity="0.2" />

			<path
				d="M92 354 C158 264 250 302 312 224 C384 134 504 156 624 84"
				className="fill-none stroke-red-600"
				strokeWidth="12"
				strokeLinecap="round"
			/>
			<path
				d="M92 354 C158 264 250 302 312 224 C384 134 504 156 624 84"
				className="fill-none stroke-white"
				strokeWidth="2"
				strokeDasharray="12 18"
				strokeLinecap="round"
				opacity="0.65"
			/>
			<path
				d="M454 142 L530 112"
				className="fill-none stroke-neutral-950"
				strokeWidth="24"
				strokeLinecap="round"
			/>

			<g className="font-display font-black">
				<text x="66" y="235" className="fill-white text-[160px]">
					4
				</text>
				<text
					x="288"
					y="235"
					className="fill-transparent stroke-white text-[160px]"
					strokeWidth="5"
				>
					0
				</text>
				<text x="514" y="235" className="fill-white text-[160px]">
					4
				</text>
			</g>

			<g transform="translate(272 266)">
				<rect
					width="216"
					height="116"
					rx="12"
					className="fill-white stroke-neutral-200"
					strokeWidth="2"
				/>
				<rect
					x="18"
					y="18"
					width="72"
					height="12"
					rx="6"
					className="fill-red-600"
				/>
				<rect
					x="18"
					y="44"
					width="156"
					height="8"
					rx="4"
					className="fill-neutral-300"
				/>
				<rect
					x="18"
					y="64"
					width="118"
					height="8"
					rx="4"
					className="fill-neutral-300"
				/>
				<path
					d="M166 84 H192 M179 71 V97"
					className="fill-none stroke-neutral-950"
					strokeWidth="8"
					strokeLinecap="round"
				/>
			</g>

			<g className="fill-white">
				<circle cx="92" cy="354" r="12" />
				<circle cx="312" cy="224" r="12" />
				<circle cx="624" cy="84" r="12" />
			</g>
			<g className="fill-red-600">
				<rect x="72" y="408" width="138" height="12" rx="6" />
				<rect x="550" y="342" width="126" height="12" rx="6" />
			</g>
			<g className="fill-white" opacity="0.85">
				<rect x="72" y="432" width="210" height="8" rx="4" />
				<rect x="550" y="366" width="92" height="8" rx="4" />
			</g>
		</svg>
	);
}

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white font-body text-neutral-800">
			<Navbar />
			<main className="min-w-0 flex-1">
				<section className="relative overflow-hidden border-b border-neutral-200 bg-[linear-gradient(105deg,#fff_0%,#fff_50%,#f5f5f5_50%,#f7f7f7_100%)]">
					<div className="absolute right-[8%] top-0 hidden h-full w-24 -skew-x-12 bg-red-600 lg:block" />
					<div className="absolute right-[22%] top-0 hidden h-full w-4 -skew-x-12 bg-neutral-950 lg:block" />
					<div className="mx-auto grid min-h-[calc(100dvh-7.5rem)] max-w-370 items-center gap-10 px-5 py-14 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
						<div className="relative z-10 max-w-2xl">
							<p className="text-sm font-black uppercase tracking-widest text-red-600">
								Error 404
							</p>
							<h1 className="mt-5 max-w-2xl wrap-break-word font-display text-4xl font-black uppercase leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl sm:leading-[0.92] lg:text-7xl">
								No encontramos esta <span className="text-red-600">ruta</span>
							</h1>
							<p className="mt-6 max-w-xl text-base font-semibold leading-7 text-neutral-600">
								El enlace pudo cambiar o la página ya no está disponible. Vuelve
								al menú principal para seguir explorando repuestos, servicios y
								atención especializada.
							</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Link
									href="/"
									className="inline-flex h-14 w-full items-center justify-center gap-2 rounded bg-red-600 px-6 text-center text-sm font-black uppercase text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700 sm:w-auto sm:min-w-52 sm:px-8"
								>
									Volver al menú principal
									<ChevronRightIcon className="h-4 w-4" />
								</Link>
								<Link
									href="/productos"
									className="inline-flex h-14 w-full items-center justify-center rounded border border-neutral-300 bg-white px-6 text-center text-sm font-black uppercase text-neutral-950 transition hover:border-red-600 hover:text-red-600 sm:w-auto sm:min-w-44 sm:px-8"
								>
									Ver catálogo
								</Link>
							</div>
							<div className="mt-10 grid max-w-xl gap-3 border-t border-neutral-200 pt-6 sm:grid-cols-3">
								{["Repuestos", "Asesoría", "Garantía"].map((item) => (
									<div key={item} className="flex items-center gap-3">
										<span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
										<span className="text-xs font-black uppercase tracking-wide text-neutral-900">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative z-10 grid min-h-85 place-items-center overflow-hidden sm:min-h-115 lg:min-h-130">
							<div className="relative w-full max-w-155">
								<div className="absolute -left-5 top-10 z-999 rounded bg-neutral-950 px-4 py-2 font-display text-3xl font-black text-white shadow-xl sm:text-4xl">
									NOT FOUND
								</div>
								<div className="absolute right-0 top-3 z-10 rounded bg-red-600 px-4 py-3 text-[0.68rem] font-black uppercase tracking-widest text-white shadow-xl shadow-red-600/20 sm:right-4">
									Diagnóstico 404
								</div>
								<div className="relative overflow-hidden rounded-md border border-neutral-200 bg-white p-6 shadow-2xl shadow-neutral-950/10">
									<div className="absolute right-0 top-0 h-full w-24 -skew-x-12 bg-red-600/10" />
									<Automotive404Svg />
									<div className="relative z-10 mt-4 grid gap-3 border-t border-neutral-200 pt-4 sm:grid-cols-2">
										<div>
											<p className="text-[0.68rem] font-black uppercase tracking-widest text-red-600">
												Karbin Motors
											</p>
											<p className="mt-1 text-sm font-black text-neutral-950">
												Te llevamos de vuelta a la página correcta.
											</p>
										</div>
										<div className="rounded bg-neutral-950 px-4 py-3 text-right text-white">
											<p className="font-display text-2xl font-black leading-none">
												24/7
											</p>
											<p className="mt-1 text-[0.68rem] font-black uppercase tracking-widest text-neutral-300">
												Consulta online
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<FloatingWhatsAppButton />
			</main>
			<Footer />
		</div>
	);
}
