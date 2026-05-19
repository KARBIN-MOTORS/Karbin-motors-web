"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappHref } from "@/modules/shared/constants/whatsapp";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    ["Inicio", "/"],
    ["Productos", "/productos"],
    ["Nosotros", "/nosotros"],
  ];

  return (
    <header className="glass-panel fixed inset-x-0 top-0 z-[999] isolate">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 lg:grid lg:grid-cols-3">
        
        {/* Mobile Menu Button (Left on Mobile, Hidden on Desktop) */}
        <div className="flex lg:hidden w-[100px]">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center gap-[6px] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-12">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="font-display text-[0.8rem] font-bold uppercase tracking-[0.1em] text-brand-muted transition-all duration-300 hover:text-brand-accent hover:glow-text relative group"
            >
              {label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-black uppercase tracking-tighter text-white hover:text-brand-accent transition-colors duration-300 lg:justify-self-center"
        >
          KARBIN<span className="text-brand-accent">MOTORS</span>
        </Link>

        {/* Right Side Buttons */}
        <div className="flex items-center justify-end gap-4 lg:justify-self-end w-[100px] lg:w-auto">
          {/* Desktop WhatsApp Button — external link, stays as <a> */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="cut-button relative hidden sm:inline-flex min-h-10 items-center justify-center bg-brand-accent px-6 font-display text-xs font-bold uppercase tracking-widest text-brand-carbon transition-all duration-300 hover:bg-brand-accent-vibrant hover:scale-105 shadow-[0_0_15px_rgba(240,45,45,0.5)] hover:shadow-[0_0_25px_rgba(240,45,45,0.8)] focus:outline-none z-10"
          >
            <span className="mr-2 h-2 w-2 bg-white animate-pulse rounded-full" />
            Línea de Venta
          </a>
          
          {/* Mobile WhatsApp Icon — external link, stays as <a> */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="sm:hidden flex h-10 w-10 items-center justify-center bg-brand-accent text-white shadow-[0_0_15px_rgba(240,45,45,0.5)] transition-transform active:scale-95"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-brand-border transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="font-display text-lg font-black uppercase tracking-widest text-white hover:text-brand-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
