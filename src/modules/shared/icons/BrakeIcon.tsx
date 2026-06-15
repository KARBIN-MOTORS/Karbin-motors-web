import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

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
