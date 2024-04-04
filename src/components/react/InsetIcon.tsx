import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithRef<"div"> {
	variant?: string;
	hoverIcon?: React.ReactNode;
}
const InsetIcon = React.forwardRef<HTMLDivElement, Props>(
	(
		{ variant = "inset", className: providedClassName, hoverIcon, ...rest },
		ref,
	) => {
		const className = React.useMemo(() => {
			return twMerge(
				clsx(
					"bg-surface",
					"hover:bg-hover",
					"text-on-background",
					"disabled:bg-disabled",
					"disabled:text-on-disabled",
					"disabled:hover:cursor-not-allowed",
					"disabled:hover:bg-disabled",
					"hover:text-primary",
					"transition-colors",
					"duration-300",
					{
						"absolute right-1 bottom-1 [&_svg_*]:text-white/0 z-20 group-hover:text-white group-hover:[&_svg_*]:text-white/70 [&_svg_*]:transition-colors [&_svg_*]:ease-in-out [&_svg_*]:duration-150":
							variant === "inset",
					},
					{
						"absolute right-1 bottom-1 z-20": variant === "inset2",
					},
					providedClassName,
				),
			);
		}, [variant, providedClassName]);

		return (
			<div
				ref={ref as React.ForwardedRef<HTMLDivElement>}
				className={className}
				{...rest}
				// onMouseEnter={() => setChild1Visible(false)}
				// onMouseLeave={() => setChild1Visible(true)}
			/>
		);
	},
);

export default InsetIcon;
