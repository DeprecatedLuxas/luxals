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
 * Test a number to see if it is a negative
 * @param {number} value the number to test
 * @returns {boolean} either true or false
 */
export function negative(value: number): boolean {
  return value < 0;
}

/**
 * Test a number to see if it is a positive
 * @param {number} value the number to test
 * @returns {boolean} either true or false
 */
export function positive(value: number): boolean {
  return value > 0;
}
                                                                                                                                                                      