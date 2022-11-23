import type { PredicateType } from './util/predicate';
/**
 * Predicate that stays true "on and after" `predicateForTrue` is successful.
 * Is false at the beginning, and become false again "on and after" `predicateForFalse` is successful.
 *
 * `switchTrueFalse` is able to switch multiple times.
 *
 * @example
 * ```ts
 * const trueBlocksOfNumbers = [2, 1, 0, 4, 9, -1, 7, 0, 3].filter(
 *   switchTrueFalse(
 *     (x: number) => x === 0,
 *     (x: number) => x === -1
 *   )
 * );
 * console.log(trueBlocksOfNumbers);
 * //=> [ 0, 4, 9, 0, 3 ]
 * ```
 *
 * @template T The type of input element.
 * @param predicateForTrue the predicate argument for switching the `switchTrueFalse` state to true, once fulfilled.
 * @param predicateForTrue the predicate argument for switching the `switchTrueFalse` state to false, once fulfilled.
 * @returns A Predicate that stays true "on and after" `predicateForTrue` is successful, and become false again "on and after" `predicateForFalse` is successful.
 *
 * @see {@link PredicateType}
 * @see {@link trueSince}
 */
export declare function switchTrueFalse<T>(predicateForTrue: PredicateType<T>, predicateForFalse: PredicateType<T>): PredicateType<T>;