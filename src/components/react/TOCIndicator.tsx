import { activeHeading, lastActiveHeading } from "$state/BlogPostState";
import {
	animate,
	motion,
	// useScroll,
	// useSpring,
	// useTransform,
} from "framer-motion";
import { useRef, type FC } from "react";
import Styles from "./TOCIndicator.module.css";

const CircleIndicator: FC = () => {
	// const { scrollY, scrollYProgress } = useScroll();
	// const scale = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const indicatorRef = useRef<HTMLDivElement | null>(null);
	// const scaleY = useSpring(scrollYProgress, {
	// 	stiffness: 100,
	// 	damping: 30,
	// 	restDelta: 0.001,
	// });

	activeHeading.subscribe((activeHeader): { activeHeader: HTMLLIElement } => {
		const indicator = indicatorRef.current;

		// const treeDept = activeHeader?.getAttribute("data-depth");

		if (indicator && activeHeader) {
			const { top } = activeHeader.getBoundingClientRect();

			// TODO: Get the depth of the header
			animate(indicator, { y: top - 110 });
			lastActiveHeading.set(activeHeader);
		}
		return { activeHeader: activeHeader as HTMLLIElement };
	});

	return (
		<div className={Styles.wrapper}>
			<motion.div className={Styles.container}>
				<motion.div
					style={{
						willChange: "transform",
					}}
					className={Styles.item}
					ref={indicatorRef}
				/>
			</motion.div>
		</div>
	);
};

export default CircleIndicator;
