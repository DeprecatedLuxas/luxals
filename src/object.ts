import { toPath } from "./string";
import type { Path } from "./types";

/**
 * Gets the value of the given path in the given object.
 * @param obj The object to get the property from.
 * @param path The path to the property.
 * @param defaultValue The default value to return if the path is not found.
 *
 * NOTE: When using an array, the auto-completion will break.
 * @TODO: @luxass - Fix auto-completion
 */
export function get<O = Object>(obj: O, path: Path<O>, defaultValue?: any) {
  if (!obj) return defaultValue;
  const parsedPath = toPath(path as string);
  const pathLength = 0;

  
  return defaultValue;
}

/**
 * Gets the value of the given path in the given object.
 * @param obj The object to get the property from.
 * @param path The path to the property.
 */
export function has<O extends Object>(obj: O, path: string) {}
