import type { TPredicate } from './util/predicate';
/**
 * Returns predicate(value, index) `P`, that:
 * - returns _true_ if its `parentPredicate` has succeeded at element `offset` number of elements before. *
 * @template T The type of input element
 * @param offset the number of elements to go after the `parentPredicate` succeeded.
 * @param parentPredicate predicate
 * @returns `predicate(value, index)`, that returns _true_ if its `parentPredicate` has succeeded at element `offset` number of elements before.
 *
 * @example
 *
 * ```ts
const isThree = (x: number) => x === 3;
const secondElemsAfter3 = [2, 3, 0, 7, 4, 3, 5, -8].filter(
  nthElementAfter(2, isThree)
);
console.log(secondElemsAfter3);
//=> [ 7, -8 ]
 * ```
 *
 * - `P` is **greedy**: enters "offset countdown" mode when its `parentPredicate` matches an element. While in "offset countdown" mode, does not detect elements for any match.
 * - `P` is **repeatable**: is ready to detect elements again as soon as it is at least `offset` elements after its last detected element.
 *
 * @see {@link TPredicate}
 */
export declare function nthElementAfter<T>(offset: number, parentPredicate: TPredicate<T>): TPredicate<T>;