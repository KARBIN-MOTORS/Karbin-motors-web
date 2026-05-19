import { whatsappHref } from "../constants/whatsapp";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

export function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-12 items-center justify-center bg-brand-accent px-7 font-display text-sm font-bold uppercase text-white transition-colors duration-300 hover:bg-brand-accent-hover"
    >
      {children}
    </a>
  );
}
