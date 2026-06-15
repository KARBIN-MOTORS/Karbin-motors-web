import { useCallback, useEffect, useId, useState } from "react";

export const useMobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const menuId = useId();

	const closeMenu = useCallback(() => setIsOpen(false), []);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
			return;
		}

		const timeout = window.setTimeout(() => setIsMounted(false), 240);
		return () => window.clearTimeout(timeout);
	}, [isOpen]);

	useEffect(() => {
		if (!isMounted) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeMenu();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [closeMenu, isMounted]);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	return { isOpen, setIsOpen, isMounted, menuId, closeMenu };
};
