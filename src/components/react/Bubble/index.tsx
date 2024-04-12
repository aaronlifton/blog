import { animated, createInterpolator, easings, to as interpolate, useSpring, useSpringRef } from "@react-spring/web";
import { cubicCoordinates, stepsCoordinates } from "easing-coordinates";
import type { ICoordinate } from "easing-coordinates/dist/lib/shared";
import type React from "react";
import { useEffect } from "react";
import Styles from "./Bubble.module.css";
import { useGradientSpring } from "./useGradientSpring";
import { type MovementSquareBorders, useMovementSpring } from "./useMovementSpring";

interface Props {
  colors: string[];
  movementSquareBorders: MovementSquareBorders;
}
const App: React.FC<Props> = ({ colors, movementSquareBorders }) => {
  const movementSpring = useMovementSpring(movementSquareBorders);
  const gradientSpring = useGradientSpring(colors);
  return (
    <animated.div
      className={Styles.container}
      style={{ ...gradientSpring, ...movementSpring }}
    />
  );
  // return (
  //   <animated.div
  //     className={styles.container}
  //     style={{
  //       backgroundImage: allStops.to(
  //         (...args) => `linear-gradient(${angle}deg, ${args.join(", ")})`,
  //       ),
  //       // transform: props.x.to((value: number) => `rotateZ(${value}deg)`),
  //     }}
  //   />
  // );
};

export default App;
