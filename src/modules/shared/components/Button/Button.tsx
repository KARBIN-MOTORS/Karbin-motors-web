import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "default" | "compact" | "square";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
	active?: boolean;
};

const BASE =
	"inline-flex h-10 items-center justify-center rounded border font-display text-[0.65rem] font-black uppercase tracking-widest transition-all duration-300 disabled:pointer-events-none disabled:opacity-30";

const SIZE: Record<ButtonSize, string> = {
	default: "px-6",
	compact: "px-4",
	square: "w-10",
};

const SOLID = "border-red-600 bg-red-600 text-white shadow-[0_10px_24px_rgba(220,38,38,0.18)]";
const OUTLINE_ACTIVE = SOLID;
const OUTLINE_IDLE = "border-neutral-200 bg-white text-neutral-800 hover:border-red-600 hover:text-red-600";

function variantClass(variant: ButtonVariant, active: boolean): string {
	if (variant === "solid") return SOLID;
	return active ? OUTLINE_ACTIVE : OUTLINE_IDLE;
}

export function Button({
	variant = "outline",
	size = "default",
	active = false,
	className = "",
	children,
	...props
}: ButtonProps) {
	const classes = [BASE, SIZE[size], variantClass(variant, active), className]
		.filter(Boolean)
		.join(" ");

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
}
