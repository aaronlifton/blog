import { isPaused, scrollDone, scrollLeft } from "$state/index";
import { useStore } from "@nanostores/react";
import { type AnimationPlaybackControls, useAnimate } from "framer-motion";
import { type FC, useEffect, useRef } from "react";
import { useBreakpoint } from "./react/hooks/useBreakpoint";

const LatestCodeScroller: FC = () => {
  const scrollLeftValue = useStore(scrollLeft);
  const controls = useRef<AnimationPlaybackControls>();
  const [scope, animate] = useAnimate();
  const prevOrientation = useRef<string>();
  const isMobile = useBreakpoint(932); // iPhone 14 Pro Max width

  useEffect(() => {
    // @ts-ignore
    scope.current = document.querySelector(
      ".codes-container",
    ) as HTMLDivElement;
  }, [scope]);

  useEffect(() => {
    if (!scope.current) return;

    controls.current = animate(scope.current.scrollLeft, scrollLeftValue, {
      onPlay: () => {
        scrollDone.set(false);
      },
      onUpdate: left => {
        scope.current.scrollTo({ left });
      },
      onComplete: () => {
        scrollDone.set(true);
      },
    });
    return () => controls.current?.stop();
  }, [scope, animate, scrollLeftValue]);

  useEffect(() => {
    // Pause the animation when the user scrolls manually via touch
    if (isMobile) {
      isPaused.subscribe((val) => val && controls.current?.stop());
    }
  }, [isMobile]);

  return null;
};

export default LatestCodeScroller;
