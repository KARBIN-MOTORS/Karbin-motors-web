import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

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
