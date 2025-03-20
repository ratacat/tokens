import { weatherpatterns } from '../content/weatherPatterns.js';
import { blank } from '../shared/blank.js';

/** A weather pattern, such as "Blizzard" or "Thunderstorm"
 * @example
 * ```ts
 * `The ${weatherPattern} lasted all day.`
 * // "The Blizzard lasted all day."
 * ```
 */
export const weatherPattern = blank(...weatherpatterns);
