import {
	animated,
	createInterpolator,
	to as interpolate,
	useSpring,
	useSpringRef,
} from "@react-spring/web";
import { cubicCoordinates, stepsCoordinates } from "easing-coordinates";
import * as React from "react";

import styles from "./GradientBackground.module.css";
import type { ICoordinate } from "easing-coordinates/dist/lib/shared";
import { useEffect } from "react";

type EaseMap = {
	[key: string]: { x1: number; y1: number; x2: number; y2: number };
};
const easeMap: EaseMap = {
	"ease-in-out": { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
	"ease-out": { x1: 0, y1: 0, x2: 0.58, y2: 1 },
	"ease-in": { x1: 0.42, y1: 0, x2: 1, y2: 1 },
	ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 },
	linear: { x1: 0.25, y1: 0.25, x2: 0.75, y2: 0.75 },
};

export default function App() {
	const [lastColorIdx, setLastColorIdx] = React.useState(0);
	const api = useSpringRef();
	const { colorFrom, colorMid, colorTo } = useSpring({
		ref: api,
		colorFrom: "#0546ff",
		colorMid: "#8514f5",
		colorTo: "#f637e3",
		loop: true
	});
	const easeCustom = "";
	const easing: keyof EaseMap = "ease-in-out";
	const stops = 5;
	const angle = 32;

	const coordinates = React.useMemo(() => {
		let coordinates: ICoordinate[];
		const customBezier = easeCustom.split(",").map(Number);
		if (customBezier.length <= 1) {
			if (easing === "steps") {
				coordinates = stepsCoordinates(stops, "skip-none");
			} else {
				const { x1, y1, x2, y2 } = easeMap[easing];
				coordinates = cubicCoordinates(x1, y1, x2, y2, stops);
			}
		} else {
			coordinates = cubicCoordinates(
				customBezier[0],
				customBezier[1],
				customBezier[2],
				customBezier[3],
				stops,
			);
		}

		return coordinates;
	}, [easing, easeCustom, stops]);

	const allStops = interpolate(
		[colorFrom, colorMid, colorTo],
		(from, mid, to) => {
			const blend = createInterpolator({
				range: [0, 0.5, 1],
				output: [from, mid, to],
			});

			return coordinates.map(({ x, y }) => {
				const color = blend(y);

				return `${color} ${x * 100}%`;
			});
		},
	);

	useEffect(() => {
		// setInterval(() => {
		// 	const colorTos = ["#f64d33", "#f637e3"];
		// 	const colorFroms = ["#0546ff", "#33e699"];
		// 	api.start({
		// 		colorTo: colorTos[lastColorIdx],
		// 		colorFrom: colorFroms[lastColorIdx],
		// 	});
		// 	setLastColorIdx((lastColorIdx + 1) % colorTos.length);
		// }, 200);
		api.set({
			colorTo: [
				"#FF0000",
				"#FFA500",
				"#FFFF00",
				"#00FF00",
				"#00FFFF",
				"#0000FF",
				"#8A2BE2",
				"#FF00FF",
				"#FF1493",
				"#FF4500",
			],
		});
		setTimeout(() => api.start(), 200);
	}, []);

	return (
		<animated.div
			className={styles.container}
			style={{
				backgroundImage: allStops.to(
					(...args) => `linear-gradient(${angle}deg, ${args.join(", ")})`,
				),
				// transform: props.x.to((value: number) => `rotateZ(${value}deg)`),
			}}
		/>
	);
}
