import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

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
