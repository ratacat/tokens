import { everydayObjects } from '../content/everydayObjects.js';
import { blank } from '../shared/blank.js';

/** An everyday object, such as "Toothbrush" or "Coffee Mug"
 * @example
 * ```ts
 * `I can't find my ${everydayObject} anywhere.`
 * // "I can't find my Toothbrush anywhere."
 * ```
 */
export const everydayObject = blank(...everydayObjects);
