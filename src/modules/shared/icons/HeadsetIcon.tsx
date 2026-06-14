import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

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
