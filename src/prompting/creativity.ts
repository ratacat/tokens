import {
  appliance,
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

const kinds = [
  exercise,
  mammal,
  emotion,
  plant,
  vehicle,
  appliance,
  shape,
  literaryForm,
  profession,
  landscape,
  humanStruggle,
  everydayObject,
  computerActivity,
  weatherPattern,
];

/** Provides random inspiration for a model to consider when generating a response
 * @example
 * ```ts
 * const prompt = "Tell me a joke." + creativity;
 * // "Tell me a joke. Use 'toaster' for creative inspiration."
 * ```
 */
export const creativity = wrap(() => {
  const index = Math.floor(Math.random() * kinds.length);
  const topic = kinds[index]();
  const content = ` Use '${topic}' for creative inspiration.`;
  return content;
});
