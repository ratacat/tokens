import { landscapes } from '../content/landscapes.js';
import { blank } from '../shared/blank.js';

/** A landscape feature, such as "Valley" or "Mountain Peak"
 * @example
 * ```ts
 * `We hiked through the ${landscape}.`
 * // "We hiked through the Valley."
 * ```
 */
export const landscape = blank(...landscapes);
