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

/**
 * Is the number negative
 * @param {number} value the number to test
 * @returns {boolean} either true or false
 */
export function isNegative(value: number): boolean {
  return value < 0;
}

/**
 * Is the number positive
 * @param {number} value the number to test
 * @returns {boolean} either true or false
 */
export function isPositive(value: number): boolean {
  return value > 0;
}
                                                                                                                                                                      