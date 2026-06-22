import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  inverse?: boolean;
};

const LOGO_ASSETS = {
  default: {
    src: "/karbin/logo.png",
    width: 751,
    height: 332,
  },
  inverse: {
    src: "/karbin/logo-white.png",
    width: 744,
    height: 335,
  },
} as const;

export function KarbinLogo({ inverse = false }: LogoProps) {
  const logo = inverse ? LOGO_ASSETS.inverse : LOGO_ASSETS.default;

  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Karbin Motors"
    >
      <Image
        src={logo.src}
        alt="Karbin Motors"
        width={logo.width}
        height={logo.height}
        loading={inverse ? "lazy" : "eager"}
        className="h-auto w-20 shrink-0"
      />
      <span className="grid gap-0.5 leading-none">
        <span
          className={`font-display text-xl font-black tracking-tight ${
            inverse ? "text-white" : "text-neutral-950"
          }`}
        >
          KARBIN
        </span>
        <span className="font-display text-[0.7rem] font-black tracking-[0.42em] text-red-600">
          MOTORS
        </span>
      </span>
    </Link>
  );
}
