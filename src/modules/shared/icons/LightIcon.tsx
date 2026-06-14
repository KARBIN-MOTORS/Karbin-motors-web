import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

export function LightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-.8.8-1 1.7-1 2H9c0-.3-.2-1.2-1-2Z" />
    </IconBase>
  );
}
