"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";
import { CloseIcon, MenuIcon } from "@/modules/shared/icons";

type NavLink = readonly [label: string, href: string];

type SiteMobileMenuProps = {
  navLinks: readonly NavLink[];
};

export function SiteMobileMenu({ navLinks }: SiteMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        className="grid h-11 w-11 place-items-center rounded border border-neutral-200 text-neutral-950 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        type="button"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Menú"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full z-40 border-b border-neutral-200 bg-white shadow-2xl shadow-black/10">
          <nav
            id={menuId}
            aria-label="Menú móvil"
            className="mx-auto grid max-w-[1480px] gap-2 px-5 py-5"
          >
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center rounded border border-neutral-200 px-4 text-sm font-black uppercase text-neutral-950 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {label}
              </Link>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded bg-red-600 px-4 text-sm font-black uppercase text-white transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
