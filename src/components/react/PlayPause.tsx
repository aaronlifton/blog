import { type PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from "react";
// @ts-ignore
import Play from "~/icons/tabler/play.svg?react";
// @ts-ignore
import PlayFilled from "~/icons/tabler/play-filled.svg?react";
// @ts-ignore
import Pause from "~/icons/tabler/pause.svg?react";
// @ts-ignore
import clsx from "clsx";
import PauseFilled from "~/icons/tabler/pause-filled.svg?react";
import Styles from "~components/styles/PlayPause.module.css";
import { isManuallyPaused, isPaused } from "~state";

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
  const [pageLoaded, setPageLoaded] = useState(false);
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

  useEffect(() => {
    isPaused.subscribe((paused) => {
      setStatus(paused ? pauseStatus : playStatus);
    });
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);
  }, []);

  return (
    <div
      ref={button}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && setStatus(isPlayStatus ? pauseStatus : playStatus)}
      onMouseEnter={() => setStatus(isPlayStatus ? playHoverStatus : pauseHoverStatus)}
      onMouseLeave={() => setStatus(isPlayStatus ? playStatus : pauseStatus)}
      className={clsx([
        "relative left-[-5px] mt-4 flex w-auto cursor-pointer flex-row",
        "border-border h-10 justify-center rounded-md border px-2",
        "[&_svg]:stroke-amethyst-300 [&_svg]:text-amethyst-300",
        "transition-all duration-150 ease-in [&_*]:leading-snug",
        isPlayStatus ? "opacity-0" : pageLoaded ? "opacity-100" : "opacity-0",
      ])}
    >
      <PauseFilled width={17} className="relative top-[-1px]" />
      <span
        data-state={isPlayStatus ? null : "paused"}
        className={clsx(
          "animate-fill-forwards absolute data-[state=paused]:animate-pingOnce",
          "inline-flex h-full w-full rounded-full bg-gray-200",
          pageLoaded ? "opacity-66" : "opacity-0",
          Styles.ping,
        )}
      />
      <div className="flex items-center text-sm">Paused</div>
    </div>
  );
};

export default PlayPause;
