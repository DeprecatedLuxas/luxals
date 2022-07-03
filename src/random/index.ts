export * from "./mersenne";

/**
 * Generates a random number seed based on the current time.
 * @returns {number} a random number seed
 */
export function timeSeed(): number {
  return new Date().getTime() % 1000000000;
}
