import { scrollLeft } from "$state/index";
import { useStore } from "@nanostores/react";
import { useAnimate } from "framer-motion";
import { type FC, useEffect, useRef } from "react";

const LatestCodeScroller: FC = () => {
  const scrollLeftValue = useStore(scrollLeft);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // @ts-ignore
    scope.current = document.querySelector(
      ".codes-container",
    ) as HTMLDivElement;
  }, [scope]);

  useEffect(() => {
    if (!scope.current) return;

    animate(scope.current.scrollLeft, scrollLeftValue, {
      onUpdate: left => {
        scope.current.scrollTo({ left });
      },
    });
  }, [scope, animate, scrollLeftValue]);

  return null;
};

export default LatestCodeScroller;
