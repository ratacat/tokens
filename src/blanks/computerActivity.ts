import { computerActivities } from '../content/computerActivities.js';
import { blank } from '../shared/blank.js';

/** A computer activity, such as "Checking Email" or "Programming"
 * @example
 * ```ts
 * `I spend too much time ${computerActivity}.`
 * // "I spend too much time Checking Email."
 * ```
 */
export const computerActivity = blank(...computerActivities);
