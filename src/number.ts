/**
 * Clamp a value between a min and max value.
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} the clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
