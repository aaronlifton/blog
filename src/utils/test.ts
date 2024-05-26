// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function cartesianProduct<T>(...arrays: Array<T>[]) {
//   return arrays.reduce((acc, cur) => {
//     return acc.flatMap((arr) => cur.map((item) => [arr, item].flat()))
//   })
// }

/** `ReadonlyArray` of `ReadonlyArray`s. */
export type ROArrayArray<T> = ReadonlyArray<ReadonlyArray<T>>;
/** `ReadonlyArray` of `ReadonlyArray`s of `ReadonlyArray`s. */
export type ROArrayArrayArray<T> = ReadonlyArray<
	ReadonlyArray<ReadonlyArray<T>>
>;

/** @returns the cross of an array with the intermediate result of cartesianProduct
 *
 * @param elements array of values to cross with the intermediate result of
 *                 cartesianProduct
 * @param intermediate arrays of values representing the partial result of
 *                     cartesianProduct
 */
export function cartesianProductImpl<T>(
	elements: readonly T[],
	intermediate: ROArrayArray<T>,
): ROArrayArray<T> {
	const result: T[][] = [];
	for (const e of elements) {
		if (intermediate.length > 0) {
			for (const i of intermediate) {
				result.push([...i, e]);
			}
		} else {
			result.push([e]);
		}
	}
	return result;
}
