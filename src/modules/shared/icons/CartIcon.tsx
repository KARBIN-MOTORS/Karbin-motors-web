import { IconBase } from "./IconBase";
import type { IconProps } from "./IconProps";

export function CartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6h15l-2 9H8L6 3H3" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </IconBase>
  );
}
