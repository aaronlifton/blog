import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithRef<"button"> {
	variant?: string;
	hoverIcon?: React.ReactNode;
}
const IconButton = React.forwardRef<HTMLButtonElement, Props>(
	(
		{ variant, className: providedClassName, hoverIcon, children, ...rest },
		ref,
	) => {
		variant ||= "rounded-full";
		const [child1Visible, setChild1Visible] = React.useState(true);
		const iterableChildren = React.Children.toArray(children);
		let onHover: () => void = () => null;
		const hasHoverIconState = iterableChildren.length > 1;
		if (hasHoverIconState) {
			onHover = () => {
				setChild1Visible(!child1Visible);
			};
		}
		const [child1, child2] = iterableChildren;
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
						"min-w-[40px] h-[40px] flex justify-center items-center rounded-full px-2":
							variant === "rounded-full",
						"rounded border border-divider p-1 shadow-sm shadow-shadow":
							variant === "rounded",
						"hover:white bg:black": variant === "menu",
						"absolute right-1 bottom-1 [&_svg_*]:text-white/50 z-20 group-hover:text-white group-hover:[&_svg_*]:text-white":
							variant === "inset",
					},
					providedClassName,
				),
			);
		}, [variant, providedClassName]);

		const hoverProps = hasHoverIconState
			? {
					onMouseEnter: () => setChild1Visible(false),
					onMouseLeave: () => setChild1Visible(true),
				}
			: {};
		return (
			<button
				ref={ref as React.ForwardedRef<HTMLButtonElement>}
				type="button"
				{...rest}
				className={className}
				// onMouseEnter={() => setChild1Visible(false)}
				// onMouseLeave={() => setChild1Visible(true)}
				{...hoverProps}
			>
				{child1Visible ? child1 : child2}
			</button>
		);
	},
);

export default IconButton;
