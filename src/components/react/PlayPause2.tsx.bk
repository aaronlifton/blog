import React, { useState, useCallback, useEffect, type PropsWithChildren, useRef } from "react";
import Styles from "$components/styles/PlayPause.module.css"
// @ts-ignore
import Play from "$/icons/tabler/play.svg?react"
// @ts-ignore
import PlayFilled from "$/icons/tabler/play-filled.svg?react"
// @ts-ignore
import Pause from "$/icons/tabler/pause.svg?react"
// @ts-ignore
import PauseFilled from "$/icons/tabler/pause-filled.svg?react"

interface Props extends PropsWithChildren {
  className: string
  onClick?: () => void;
}

const playStatus = Symbol("play");
const playHoverStatus = Symbol("playHover");
const pauseStatus = Symbol("pause");
const pauseHoverStatus = Symbol("pauseHover");

type IconState = typeof playStatus | typeof playHoverStatus | typeof pauseStatus | typeof pauseHoverStatus 

const mouseEventWithinRect = (event: MouseEvent, rect: DOMRect): boolean => {
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
};

const PlayPause: React.FC<Props> = ({className, onClick}) => {
  const [status, setStatus] = useState<IconState>(pauseStatus);
  const isPlayStatus = status === playStatus || status === playHoverStatus
  const interval = useRef()
  const codesContainer = useRef<Element | null>(null)
  const codes = useRef<NodeListOf<HTMLDivElement>>()
  const [currentIndex, setCurrentIndex] = useState(0)

  const iconLookup = {
    [playStatus]: Play,
    [playHoverStatus]: PlayFilled,
    [pauseStatus]: Pause,
    [pauseHoverStatus]: PauseFilled
  }
  const IconComponent = iconLookup[status]

  const handleClick = useCallback(() => {
    setStatus(isPlayStatus ? pauseStatus : playStatus)
    onClick?.()
  }, [onClick, isPlayStatus])

  useEffect(() => {
    codesContainer.current = document.querySelector(".codes-container");
    codes.current = document.querySelectorAll(
      ".codes-container .code",
    );

  let currentIndex = 0;
  let isPaused = false;
  const intervalTime = 5000;

  const scrollNext = () => {
    if (!codesContainer) return;

    if (!isPaused) {
      if (currentIndex >= codes.length) {
        currentIndex = 0;
      }

      codesContainer.scrollLeft = codes[currentIndex].offsetLeft;
      // codes.forEach((code) => code.classList.remove("active"));
      // codes[(currentIndex + 1) % codes.length].classList.add("active");
      currentIndex++;
    }
  };
  }, [])


  return (
    <div onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && setStatus(isPlayStatus ? pauseStatus : playStatus)}
      onMouseEnter={() => setStatus( isPlayStatus ? playHoverStatus : pauseHoverStatus)}
      onMouseLeave={() => setStatus(isPlayStatus ? playStatus : pauseStatus)} className={Styles.iconContainer}>
      {/* @ts-ignore */}
      {/* <IconComponent width={30} /> */}
      <PlayFilled />
    </div>
  )
}

export default PlayPause
