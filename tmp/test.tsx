import React, { useState } from "react"

interface Props {
  bad: true // type-safe, so this component can never be 'good'.
}
const BadComponent = ({bad = true}: Props) => {
  const [renderCount, setRenderCount] = useState(0)

  const thisShouldHaveBeenMemoized = () => {
    return {content: `There are ${renderCount} renders already!`}
  }
  const textValue = thisShouldHaveBeenMemoized()

  return (
    <div>
      /* The value of onChange is always a new function! *facepalm*
      / Every render, the component has a new "memory" unless you use
      / useCallback or useMemo, etc. */
      <input onChange={() => setRenderCount(renderCount + 1)}
      /* textValue is always a new object! *facepalm* */
      <Text value={textValue} />
    </div>
  )
}
