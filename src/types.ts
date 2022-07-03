/**
 * Matches any primitive type.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Primitive}
 */
export type Primitive = string | number | bigint | boolean | undefined | symbol | null;

/**
 * Makes a type nullable
 */
export type Nullable<T> = T | null;

/**
 * Makes a type optional
 */
export type Optional<T> = T | undefined;

/**
 * Makes a type null and undefined
 */
export type Nullish<T> = T | null | undefined;

/**
 * All characters in uppercase
 */
export type UpperCaseCharacters =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

/**
 * All characters in lowercase
 */
export type LowerCaseCharacters = Lowercase<UpperCaseCharacters>;

/**
 * All characters in uppercase and lowercase
 */
export type AllCharacters = UpperCaseCharacters | LowerCaseCharacters;

/**
 * Combine a primitive type and a literal type into a union type.
 *
 * Keeps IDE auto-completion
 *
 * {@link https://github.com/Microsoft/TypeScript/issues/29729}
 */
export type UnionLiteral<T extends Primitive, L> = L | (T & Record<never, never>);

/**
 * Adds interface auto-completion with dot notation
 * @TODO: Write a better description for this.
 */
export type Path<T> = ChildPath<T, keyof T> | keyof T;

type ChildPath<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ?
      | `${K}.${ChildPath<T[K], Exclude<keyof T[K], keyof any[]>> & string}`
      | `${K}.${Exclude<keyof T[K], keyof any[]> & string}`
    : never
  : never;

