import { easings } from "@react-spring/web";
import type React from "react";
import { type PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from "react";
// @ts-ignore
import Play from "$/icons/tabler/play.svg?react";
// @ts-ignore
import PlayFilled from "$/icons/tabler/play-filled.svg?react";
// @ts-ignore
import Pause from "$/icons/tabler/pause.svg?react";
// @ts-ignore
import PauseFilled from "$/icons/tabler/pause-filled.svg?react";
import Styles from "$components/styles/PlayPause.module.css";
import { isManuallyPaused, isPaused } from "$state/index";
import clsx from "clsx";
import { animated, useSpring, useSpringValue, useTransition } from "react-spring";
interface Props extends PropsWithChildren {
  className: string;
  onClick?: () => void;
}

const playStatus = Symbol("play");
const playHoverStatus = Symbol("playHover");
const pauseStatus = Symbol("pause");
const pauseHoverStatus = Symbol("pauseHover");

type IconState =
  | typeof playStatus
  | typeof playHoverStatus
  | typeof pauseStatus
  | typeof pauseHoverStatus;

const PlayPause: React.FC<Props> = ({ className: _className, onClick }) => {
  const button = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<IconState>(pauseStatus);
  const isPlayStatus = useMemo(
    () => status === playStatus || status === playHoverStatus,
    [status],
  );

  const iconLookup = {
    [playStatus]: Play,
    [playHoverStatus]: PlayFilled,
    [pauseStatus]: Pause,
    [pauseHoverStatus]: PauseFilled,
  };
  const IconComponent = iconLookup[status];

  const handleClick = useCallback(() => {
    isManuallyPaused.set(!isPlayStatus);
    isPaused.set(!isPlayStatus);
    setStatus(isPlayStatus ? pauseStatus : playStatus);
    onClick?.();
  }, [onClick, isPlayStatus]);

  const [{ xys }, api] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: easings.easeInOutExpo,
    }),
    [],
  );
  const opacity = useSpringValue(0, {
    config: {
      // easing: easings.easeInExpo,
      friction: 18,
      // tension: 238,
      // easing: easings.easeInOutCubic,
      mass: 0.1,
      tension: 320,
      velocity: 0.5,
    },
  });
  const y = useSpringValue(0, {
    config: {
      // easing: easings.easeOutExpo,
      friction: 29,
      tension: 238,
      velocity: 2,
    },
  });

  useEffect(() => {
    isPaused.subscribe((paused) => {
      setStatus(paused ? pauseStatus : playStatus);
      opacity.start(paused ? 1 : 0);
    });
  }, [opacity.start]);

  return (
    <div>
      <animated.div
        className={clsx([
          "relative left-[-5px] mt-4 flex w-auto cursor-pointer flex-row",
          "border-border h-10 justify-center rounded-md border px-2",
          "[&_svg]:stroke-amethyst-300 [&_svg]:text-amethyst-300",
          "transition-all [&_*]:leading-snug",
        ])}
        style={{ opacity }}
      >
        <PauseFilled width={17} className="relative top-[-1px]" />
        <animated.div
          data-state={isPlayStatus ? null : "paused"}
          className={clsx(
            "absolute data-[state=paused]:animate-pingOnce",
            "opacity-66 inline-flex h-full w-full rounded-full bg-gray-200",
          )}
          style={{
            transform: opacity.to((y) => `scale(${y === 0 ? 1 : 1.125})`),
          }}
        />
        <div className="flex items-center text-sm">Paused</div>
      </animated.div>
    </div>
  );
};

export default PlayPause;
