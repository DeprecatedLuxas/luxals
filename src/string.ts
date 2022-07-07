import memoize from "fast-memoize";

// prettier-ignore - will break eslitn operator linebreak
const PATH_REGEX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

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

/**
 * Converts a string to a string path.
 * @param {string} path The string to convert.
 * @returns {string[]} The string path.
 *
 * @example
 * toPath("a.b.c"); // ["a", "b", "c"]
 * toPath("a[0].b[1].c"); // ["a", "0", "b", "1", "c"]
 */
export const toPath = memoize((path: string): string[] => {
  const parsedPath: string[] = [];
  path.replace(PATH_REGEX, (match: string, ...args) => {
    const number = args[0];
    parsedPath.push(number || match);
    return match;
  });

  return parsedPath;
});
