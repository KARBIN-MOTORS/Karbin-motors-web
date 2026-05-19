import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Karbin Motors S.A.C. | Repuestos para Motocargueros en Lima",
  description:
    "Especialistas en la venta de repuestos para motocargueros, furgonetas y mototaxis en Ate, Lima. Ejes cardan, coronas, muelles y repuestos eléctricos de alta calidad.",
  keywords:
    "repuestos motocargueros, repuestos trimotos, repuestos furgonetas lima, ejes cardan, coronas para motocarguero, muelles de 13 hojas, repuestos Ate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
