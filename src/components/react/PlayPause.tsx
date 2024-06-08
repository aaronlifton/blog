import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { type PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from "react";
import PauseFilled from "~/icons/tabler/pause-filled.svg?react";
import Styles from "~components/styles/PlayPause.module.css";
import { isManuallyPaused, isPaused } from "~state";

interface Props extends PropsWithChildren {
  className: string;
  onClick?: () => void;
}

const PlayPause: React.FC<Props> = ({ className: _className, onClick }) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const isPausedValue = useStore(isPaused);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);
  }, []);

  return (
    <div
      className={clsx([
        "relative left-[-5px] mt-4 flex w-auto cursor-pointer flex-row",
        "border-border h-10 justify-center rounded-md border px-2",
        "[&_svg]:stroke-amethyst-300 [&_svg]:text-amethyst-300",
        "transition-all duration-150 ease-in [&_*]:leading-snug",
        isPausedValue ? (pageLoaded ? "opacity-100" : "opacity-0") : "opacity-0",
      ])}
    >
      <PauseFilled width={17} className="relative top-[-1px]" />
      <span
        data-state={isPausedValue ? "paused" : null}
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
