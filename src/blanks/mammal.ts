import { mammals } from '../content/mammals.js';
import { blank } from '../shared/blank.js';

/** A mammal, such as "Black Bear" or "Grizzly Bear"
 * @example
 * ```ts
 * `We spotted a ${mammal} in the woods.`
 * // "We spotted a Black Bear in the woods."
 * ```
 */
export const mammal = blank(...mammals);
