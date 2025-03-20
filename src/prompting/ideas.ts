import {
  appliance,
  color,
  computerActivity,
  emotion,
  everydayObject,
  exercise,
  humanStruggle,
  landscape,
  literaryForm,
  mammal,
  plant,
  profession,
  shape,
  vehicle,
  weatherPattern,
} from '../index.js';
import { wrap } from '../shared/wrap.js';

/** Provides a variety of ideas for a model to consider when generating a response
 *
 * @remarks
 * The results of using `ideas` will vary greatly depending on your model, settings, and other prompt content.
 * Expect to iterate on your prompt and settings to get the desired results.
 *
 * @example
 * ```ts
 * const prompt = "Write me a story. Here are some ideas to get started: ${ideas}";
 * // "Write me a story. Here are some ideas to get started: running, bunny, the color blue..."
 * ```
 */
export const ideas = wrap(
  () =>
    `${exercise}, ${mammal}, the color ${color}, feeling ${emotion}, ${plant}, ${vehicle}, ${appliance}, ${shape}, a ${literaryForm}, ${profession}, a ${landscape}, overcoming ${humanStruggle}, ${everydayObject}, ${computerActivity}, and ${weatherPattern}.`,
);
