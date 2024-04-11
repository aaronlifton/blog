import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
    useRef,
    type PropsWithChildren,
} from "react";
// @ts-ignore
import Play from "$/icons/tabler/play.svg?react";
// @ts-ignore
import PlayFilled from "$/icons/tabler/play-filled.svg?react";
// @ts-ignore
import Pause from "$/icons/tabler/pause.svg?react";
// @ts-ignore
import PauseFilled from "$/icons/tabler/pause-filled.svg?react";
import { isManuallyPaused, isPaused } from "$state/index";
import clsx from "clsx";
import Styles from "$components/styles/PlayPause.module.css";

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
  const button = useRef()
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
	}, []);

	return (
		<div
      ref={button}
			onClick={handleClick}
			onKeyDown={(e) =>
				e.key === "Enter" && setStatus(isPlayStatus ? pauseStatus : playStatus)
			}
			onMouseEnter={() =>
				setStatus(isPlayStatus ? playHoverStatus : pauseHoverStatus)
			}
			onMouseLeave={() => setStatus(isPlayStatus ? playStatus : pauseStatus)}
			className={clsx([
        "mt-4 relative left-[-5px] w-auto flex flex-row cursor-pointer",
        "h-10 px-2 rounded-md justify-center border border-border",
        "[&_svg]:stroke-amethyst-300 [&_svg]:text-amethyst-300",
        "transition-all duration-150 ease-in [&_*]:leading-snug",
        isPlayStatus ? "opacity-0" : "opacity-100",
      ])}
		>
			{/* @ts-ignore */}
			<PauseFilled width={17} className="relative top-[-1px]" />
      <span data-state={isPlayStatus ? null : "paused"}
        class={clsx([
          "data-[state=paused]:animate-pingOnce animate-fill-forwards absolute",
          "inline-flex h-full w-full rounded-full bg-gray-200 opacity-66",
          Styles.ping,
        ])}></span>
      <div className="text-sm items-center flex">Paused</div>
		</div>
	);
};

export default PlayPause;
