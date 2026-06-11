import Link from "next/link";
import { SiteLogo } from "@/modules/shared/components/SiteHeader";

const footerColumns = [
  ["Enlaces rapidos", "Inicio,Nosotros,Productos,Marcas,Servicios,Contacto"],
  ["Categorias", "Motor,Frenos,Suspension,Electrico,Iluminacion,Accesorios"],
  [
    "Informacion",
    "Envios y Entregas,Politicas de Garantia,Terminos y Condiciones",
  ],
  [
    "Contacto",
    "+51 900 438 494,ventas@karbinmotors.com,Cal. Londres 122, Ate",
  ],
];

export function SiteFooter() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto grid max-w-[1480px] gap-8 px-5 py-10 md:grid-cols-2 lg:grid-cols-5 lg:px-12">
        <div>
          <SiteLogo inverse />
          <p className="mt-4 text-xs leading-6 text-neutral-400">
            Repuestos de calidad para tu vehiculo. Calidad, garantia y el mejor
            precio del mercado.
          </p>
        </div>
        {footerColumns.map(([title, items]) => (
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
