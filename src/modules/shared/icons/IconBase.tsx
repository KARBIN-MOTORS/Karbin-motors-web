import type { ReactNode } from "react";
import type { IconProps } from "./IconProps";

type IconBaseProps = IconProps & {
  children: ReactNode;
};

export function IconBase({ children, ...props }: IconBaseProps) {
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
