import { easings, useSpring } from "@react-spring/web";

export type MovementSquareBorders = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};
export function useMovementSpring(
  movementSquareBorders: MovementSquareBorders,
) {
  const getRandomInt = (min: number, max: number) => {
    const min2 = Math.ceil(min);
    const max2 = Math.floor(max);
    return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
  };

  const [spring, api] = useSpring(() => ({
    from: {
      x: getRandomInt(movementSquareBorders.left, movementSquareBorders.right),
      y: movementSquareBorders.top,
    },
    to: {
      x: getRandomInt(movementSquareBorders.left, movementSquareBorders.right),
      y: movementSquareBorders.bottom,
    },
    config: {
      duration: 3000,
      mass: 100,
      easing: easings.easeInOutCubic,
    },
    onRest: (_, ctrl) => {
      api.start({
        to: {
          y: ctrl.springs.y.animation.fromValues[0],
          x: getRandomInt(
            movementSquareBorders.left,
            movementSquareBorders.right,
          ),
        },
      });
    },
  }));
  return spring;
}
