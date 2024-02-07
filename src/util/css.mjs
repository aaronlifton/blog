/* eslint-disable @typescript-eslint/no-var-requires */
export function hexToRgb(hex) {
  const [, rr, gg, bb] = hex.match(
    /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i
  )

  return `${parseInt(rr, 16)} ${parseInt(gg, 16)} ${parseInt(bb, 16)}`
}
