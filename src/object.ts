import { toPath } from "./string";

/**
 * Gets the value of the given path in the given object.
 * @param obj The object to get the property from.
 * @param path The path to the property.
 * @param defaultValue The default value to return if the path is not found.
 *
 * @TODO: Fix auto-completion
 */
export function get<O extends object>(obj: O, path: string, defaultValue?: any): any {
  if (!obj) return defaultValue;
  const parsedPath = toPath(path as string);
  let value: {
    [key: string]: any;
  } = obj;

  parsedPath.forEach(key => (value = value[key]));

  return value ?? defaultValue;
}

/**
 * Gets the value of the given path in the given object.
 * @param obj The object to get the property from.
 * @param path The path to the property.
 */
export function has<O extends object>(obj: O, path: string): any {
  const parsedPath = toPath(path);
  
}

export function set<O = Object>(obj: O, path: string, value: string): any {
  const parsedPath = toPath(path);
}
