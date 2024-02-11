// eslint-disable-next-line @typescript-eslint/no-explicit-any

// type CartesianProduct<T, U> = T extends T
//     ? U extends U
//     ? [T, U]
//     : never
//     : never;
export function cartesianProduct<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, cur) => {
    return acc.flatMap((arr) => cur.map((item) => [arr, item].flat()))
  })
}
