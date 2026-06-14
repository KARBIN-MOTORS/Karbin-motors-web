import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

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
