import { WHATSAPP_HREF } from "@/modules/shared/constants/networks.const.";
import { WhatsAppIcon } from "@/modules/shared/icons";

export function FloatingWhatsAppButton() {
	return (
		<a
			href={WHATSAPP_HREF}
			target="_blank"
			rel="noreferrer"
			aria-label="WhatsApp"
			className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:bg-emerald-600"
		>
			<WhatsAppIcon className="h-6 w-6" />
		</a>
	);
}
