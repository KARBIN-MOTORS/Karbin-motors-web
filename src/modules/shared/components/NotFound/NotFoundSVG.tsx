export function NotFoundSVG() {
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