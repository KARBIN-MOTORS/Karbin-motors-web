import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/modules/shared/constants/site.const";
import { TanstackProvider } from "@/modules/shared/providers/TanstackProvider";

const barlow = Barlow({
	variable: "--font-barlow",
	subsets: ["latin"],
	weight: ["700", "800", "900"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	applicationName: SITE_NAME,
	title: {
		default: "Karbin Motors S.A.C. | Repuestos para Motocargueros en Lima",
		template: `%s | ${SITE_NAME}`,
	},
	description:
		"Especialistas en la venta de repuestos para motocargueros, furgonetas y mototaxis en Ate, Lima. Ejes cardan, coronas, muelles y repuestos eléctricos de alta calidad.",
	keywords:
		"repuestos motocargueros, repuestos trimotos, repuestos furgonetas lima, ejes cardan, coronas para motocarguero, muelles de 13 hojas, repuestos Ate",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "Karbin Motors S.A.C. | Repuestos para Motocargueros en Lima",
		description:
			"Repuestos para motocargueros, furgonetas y mototaxis en Ate, Lima.",
		url: SITE_URL,
		siteName: SITE_NAME,
		locale: "es_PE",
		type: "website",
		images: [
			{
				url: "/karbin/hero-karbin.webp",
				width: 1200,
				height: 630,
				alt: "Karbin Motors",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={`${barlow.variable} ${inter.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col" suppressHydrationWarning>
				<TanstackProvider>{children}</TanstackProvider>
			</body>
		</html>
	);
}
