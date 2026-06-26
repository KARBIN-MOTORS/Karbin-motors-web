import { FacebookIcon, InstagramIcon } from "../icons";
import {
  FACEBOOK_HREF,
  INSTAGRAM_HREF,
  WHATSAPP_HREF,
} from "./networks.const.";

export type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  items: FooterLinkItem[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Enlaces rápidos",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Productos", href: "/productos" },
      { label: "Categorias", href: "/#categorias" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
  {
    title: "Categorías",
    items: [
      { label: "Eléctricos", href: "/productos?category=electrico" },
      { label: "Gasolinero", href: "/productos?category=gasolinero" },
    ],
  },
  {
    title: "Información",
    items: [
      { label: "Envíos y Entregas", href: "/envios-y-entregas" },
      { label: "Políticas de Garantía", href: "/politicas-de-garantia" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "+51 900 438 494", href: WHATSAPP_HREF, external: true },
      {
        label: "ventas@karbinmotors.com",
        href: "mailto:ventas@karbinmotors.com",
      },
      {
        label: "Calle Londres 122, Ate",
        href: "https://www.google.com/maps/search/?api=1&query=Calle%20Londres%20122%20Ate%20Lima%20Peru",
        external: true,
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: FACEBOOK_HREF,
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: INSTAGRAM_HREF,
    Icon: InstagramIcon,
  },
];
