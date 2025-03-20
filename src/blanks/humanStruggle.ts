import { humanStruggles } from '../content/humanStruggles.js';
import { blank } from '../shared/blank.js';

/** A human struggle, such as "Loneliness" or "Depression"
 * @example
 * ```ts
 * `Many people deal with ${humanStruggle} at some point in their lives.`
 * // "Many people deal with Loneliness at some point in their lives."
 * ```
 */
export const humanStruggle = blank(...humanStruggles);
