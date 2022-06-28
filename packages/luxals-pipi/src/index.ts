/**
 * Generate a string from placeholders
 * @param {String} str The string to replace placeholders in
 * @param views
 * @returns
 */
export function pipi(str: string, placeholders: PipiPlaceholders): string {
  return str.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = placeholders[key];
    if (typeof value === "function") {
      return value();
    }
    return value;
  });
}

export type PipiPlaceholders = Record<string, string | (() => string)>;
