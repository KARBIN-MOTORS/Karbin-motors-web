import Link from "next/link";
import { whatsappHref } from "../constants/whatsapp";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export function PrimaryButton({ children, href }: PrimaryButtonProps) {
  const className = "cut-button relative inline-flex min-h-12 items-center justify-center bg-brand-accent px-8 font-display text-sm font-bold uppercase tracking-wider text-brand-carbon transition-all duration-300 hover:bg-brand-accent-vibrant hover:shadow-[0_0_20px_rgba(240,45,45,0.6)] focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-background";
  
  if (href) {
    return (
      <Link href={href} className={className}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100 mix-blend-overlay"></div>
      </Link>
    );
  }

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100 mix-blend-overlay"></div>
    </a>
  );
}
