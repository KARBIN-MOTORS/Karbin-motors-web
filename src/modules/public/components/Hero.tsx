import Image from "next/image";
import { PrimaryButton } from "@/modules/shared/components/PrimaryButton";

export function Hero() {
	return (
		<section
			id="inicio"
			className="relative min-h-screen overflow-hidden bg-brand-carbon px-5 pb-14 pt-28 text-white sm:px-8 lg:px-10"
		>
			<div className="absolute inset-x-0 top-16 h-px bg-white/15" />
			<div className="absolute right-0 top-0 h-full w-[38vw] bg-brand-accent" />
			<div className="absolute inset-0 bg-[linear-gradient(112deg,_#111111_0%,_#111111_52%,_rgba(204,31,31,0.92)_52%,_rgba(204,31,31,0.92)_100%)]" />
			<div className="accent-line absolute left-0 top-16 h-1 w-1/2 bg-white" />

			<div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-[1440px] gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
				<div className="section-rise">
					<p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.96px] text-brand-accent-vibrant">
						Karbin Motors S.A.C. · Ate, Lima
					</p>
					<h1 className="max-w-5xl font-display text-[3.35rem] font-extrabold uppercase leading-[0.92] text-white sm:text-[5.25rem] lg:text-[7.15rem]">
						Repuestos para vehículos en Lima
					</h1>
					<p className="mt-7 max-w-2xl text-base leading-7 text-white/72 lg:text-lg">
						Venta de repuestos y accesorios para vehículos de trabajo:
						cargadores, luces LED, frenos, tableros, aceleradores y piezas
						eléctricas con atención directa desde Ate.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row">
						<PrimaryButton>Consultar stock</PrimaryButton>
						<a
							href="#destacados"
							className="inline-flex min-h-12 items-center justify-center border border-white/55 px-7 font-display text-sm font-bold uppercase text-white transition-colors duration-300 hover:bg-white hover:text-brand-carbon"
						>
							Ver repuestos
						</a>
					</div>
					<div className="mt-10 grid max-w-2xl grid-cols-3 gap-px bg-white/14">
						{[
							["Ate", "Lima"],
							["RUC", "20615669696"],
							["Canal", "WhatsApp"],
						].map(([label, value]) => (
							<div key={label} className="bg-brand-carbon/80 p-4">
								<p className="font-display text-[0.62rem] font-bold uppercase tracking-[0.96px] text-white/42">
									{label}
								</p>
								<p className="mt-2 font-display text-sm font-extrabold uppercase">
									{value}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="section-rise relative min-h-[520px] overflow-hidden">
					<div className="absolute inset-0 bg-brand-carbon" />
					<div className="absolute inset-5 border border-white/12" />
					<Image
						src="/repuestos/8-_GATA_HIDRAULICA_2TN-removebg-preview.png"
						alt="Faro posterior LED para vehículo de trabajo disponible en Karbin Motors Ate"
						width={860}
						height={560}
						priority
						className="floating-part absolute left-1/2 top-1/2 z-10 max-h-[430px] w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain"
					/>
					<div className="absolute bottom-0 left-0 z-20 bg-brand-card  px-5 py-4">
						<p className="font-display text-xs font-bold uppercase text-brand-carbon">
							Stock · iluminación LED
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
