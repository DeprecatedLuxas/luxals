/**
 * Concat strings conditionally together.
 * @param {any[]} args The strings to concat.
 * @returns {string} The concatenated string.
 */
function concat(...args: any[]): string {
  const classes: string[] = [];
  const hasOwn = {}.hasOwnProperty;
  args.forEach((arg) => {
    if (!arg) return;
    const argumentType = typeof arg;

    if (argumentType === "string" || argumentType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(...arg);
    } else if (argumentType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  });

  return classes.join(" ");
}

export { concat, concat as cx };

/**
 * Capitalizes the first letter of the given string.
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(str: string): string {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}
