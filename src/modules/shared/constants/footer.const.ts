import { FacebookIcon, InstagramIcon } from "../icons";
import { FACEBOOK_HREF, INSTAGRAM_HREF } from "./networks.const.";

export const FOOTER_COLUMNS = [
	["Enlaces rápidos", "Inicio,Nosotros,Productos,Marcas,Servicios,Contacto"],
	["Categorías", "Motor,Frenos,Suspensión,Eléctrico,Iluminación,Accesorios"],
	[
		"Información",
		"Envíos y Entregas,Políticas de Garantía,Términos y Condiciones",
	],
	[
		"Contacto",
		"+51 900 438 494,ventas@karbinmotors.com,Calle Londres 122, Ate",
	],
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
