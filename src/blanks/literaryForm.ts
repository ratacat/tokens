import { literaryForms } from '../content/literaryForms.js';
import { blank } from '../shared/blank.js';

/** A literary form, such as "Sonnet" or "Haiku"
 * @example
 * ```ts
 * `She wrote a beautiful ${literaryForm}.`
 * // "She wrote a beautiful Sonnet."
 * ```
 */
export const literaryForm = blank(...literaryForms);
