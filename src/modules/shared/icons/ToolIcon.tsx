import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

export function ToolIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z" />
    </IconBase>
  );
}
