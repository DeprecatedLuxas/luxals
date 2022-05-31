/**
 * Concat strings conditionally together.
 * @param {any[]} args The strings to concat.
 * @returns {string} The concatenated string.
 */
export function concat(...args: any[]): string {
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
        for (var key in arg) {
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
