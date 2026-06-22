import type { Metadata } from "next";
import Link from "next/link";
import { NotFoundSVG } from "@/modules/shared/components/NotFound/NotFoundSVG";
import { ChevronRightIcon } from "@/modules/shared/icons";
import PublicLayout from "./(public)/layout";

export const metadata: Metadata = {
	title: "Página no encontrada | Karbin Motors",
	description:
		"La página que buscas no existe o fue movida. Vuelve al menú principal de Karbin Motors.",
};

export default function NotFound() {
	return (
		<PublicLayout>
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
							<div className="absolute left-[1.05rem] top-2 z-20 rounded-md bg-neutral-950 px-4 py-2 font-display text-2xl font-black text-white shadow-xl sm:left-[1.6rem] sm:text-4xl">
								NOT FOUND
							</div>
							<div className="absolute right-3 top-3 z-10 rounded bg-red-600 px-4 py-3 text-[0.68rem] font-black uppercase tracking-widest text-white shadow-xl shadow-red-600/20 sm:right-4">
								Diagnóstico 404
							</div>
							<div className="relative overflow-hidden rounded-md border border-neutral-200 bg-white p-4 shadow-2xl shadow-neutral-950/10 sm:p-6">
								<div className="absolute right-0 top-0 h-full w-24 -skew-x-12 bg-red-600/10" />
								<NotFoundSVG />
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
		</PublicLayout>
	);
}
