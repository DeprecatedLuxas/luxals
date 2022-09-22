type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T;

type Merge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? Merge<F[K], S[K]>
    : K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
}>;

export function merge<T extends object = object, S extends object = T>(
  target: T,
  source: S
): Merge<T, S> {
  if (!source) return target as any;

  if (isMergeableObject(target) && isMergeableObject(source)) {
    (Object.keys(source) as (keyof S & keyof T)[]).forEach((key) => {
      if (isMergeableObject(source[key])) {
        if (!target[key]) {
          target[key] = {} as any;
        }
        merge(target[key] as any, source[key] as any);
      } else {
        target[key] = source[key] as any;
      }
    });
  }
  return merge(target, source);
}

const toString = (v: any) => Object.prototype.toString.call(v);
const isPlainObject = (val: any): val is object =>
  toString(val) === '[object Object]' && (!val.constructor || val.constructor.name === 'Object');

function isMergeableObject(item: any): item is Object {
  return isPlainObject(item) && !Array.isArray(item);
}
