import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

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
