import { PhoneIcon } from "@/modules/shared/icons";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:bg-emerald-600"
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
