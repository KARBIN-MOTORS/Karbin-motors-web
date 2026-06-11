import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6h15l-2 9H8L6 3H3" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
    </IconBase>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </IconBase>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
      <path d="M16 19c-.8 1.2-2 2-4 2" />
    </IconBase>
  );
}

export function EngineIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 12h3l2-3h5l2 3h3v6H6v-6Z" />
      <path d="M10 9V6h4v3" />
      <path d="M18 14h3" />
      <path d="M3 15h3" />
    </IconBase>
  );
}

export function BrakeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5 5 3 3" />
      <path d="M19 5 21 3" />
      <path d="M5 19 3 21" />
      <path d="M19 19 21 21" />
    </IconBase>
  );
}

export function SuspensionIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 4v16" />
      <path d="M18 4v16" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <path d="M9 18h6" />
    </IconBase>
  );
}

export function BatteryIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 11v2" />
      <path d="M7 12h4" />
      <path d="M9 10v4" />
      <path d="M14 12h2" />
    </IconBase>
  );
}

export function LightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-.8.8-1 1.7-1 2H9c0-.3-.2-1.2-1-2Z" />
    </IconBase>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z" />
    </IconBase>
  );
}
