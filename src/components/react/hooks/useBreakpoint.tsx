import { useEffect, useState } from "react";
import * as pkg from "react-use";
const { useWindowSize } = pkg;
import { isBrowser } from "../helpers";

export function useBreakpoint(breakpoint = 768) {
	if (!isBrowser) return;
	const [isBreakpoint, setIsBreakpoint] = useState(false);
	const { width } = useWindowSize();

	// biome-ignore lint: breakpoint doesn't ever update
	useEffect(() => {
		if (width <= breakpoint) {
			setIsBreakpoint(true);
		} else {
			setIsBreakpoint(false);
		}
	}, [width]);

	return isBreakpoint;
}
