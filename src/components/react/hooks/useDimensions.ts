import { useEffect, useLayoutEffect, useRef } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  const hook = import.meta.env.SSR ? useEffect : useLayoutEffect;
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref.current]);

  return dimensions.current;
};
