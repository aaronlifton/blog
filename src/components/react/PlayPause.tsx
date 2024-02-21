import React, { useState, useCallback, useEffect, useMemo, type PropsWithChildren } from "react";
import Styles from "$components/styles/PlayPause.module.css"
// @ts-ignore
import Play from "$/icons/tabler/play.svg?react"
// @ts-ignore
import PlayFilled from "$/icons/tabler/play-filled.svg?react"
// @ts-ignore
import Pause from "$/icons/tabler/pause.svg?react"
// @ts-ignore
import PauseFilled from "$/icons/tabler/pause-filled.svg?react"
import { isPaused, isManuallyPaused } from "$state/LatestCodeListState"

interface Props extends PropsWithChildren {
  className: string
  onClick?: () => void;
}

const playStatus = Symbol("play");
const playHoverStatus = Symbol("playHover");
const pauseStatus = Symbol("pause");
const pauseHoverStatus = Symbol("pauseHover");

type IconState = typeof playStatus | typeof playHoverStatus | typeof pauseStatus | typeof pauseHoverStatus 

const PlayPause: React.FC<Props> = ({className: _className, onClick}) => {
  const [status, setStatus] = useState<IconState>(pauseStatus);
  const isPlayStatus = useMemo(() => status === playStatus || status === playHoverStatus, [status])

  const iconLookup = {
    [playStatus]: Play,
    [playHoverStatus]: PlayFilled,
    [pauseStatus]: Pause,
    [pauseHoverStatus]: PauseFilled
  }
  const IconComponent = iconLookup[status]

  const handleClick = useCallback(() => {
    isManuallyPaused.set(!isPlayStatus)
    isPaused.set(!isPlayStatus)
    setStatus(isPlayStatus ? pauseStatus : playStatus)
    onClick?.()
  }, [onClick, isPlayStatus])

  useEffect(() => {
    isPaused.subscribe((paused) => {
      setStatus(paused ? pauseStatus : playStatus )
    })
  }, [])

  return (
    <div onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && setStatus(isPlayStatus ? pauseStatus : playStatus)}
      onMouseEnter={() => setStatus( isPlayStatus ? playHoverStatus : pauseHoverStatus)}
      onMouseLeave={() => setStatus(isPlayStatus ? playStatus : pauseStatus)} className={Styles.iconContainer}>
      {/* @ts-ignore */}
      <IconComponent width={30} />
    </div>
  )
}

export default PlayPause
