/**
 * Deeply check if two objects are equals or not.
 *
 * @category Utils
 */
export function isEqual(x: unknown, y: unknown): boolean {
  // check the ref
  if (x === y) return true;
  // if both are object
  if (typeof x == 'object' && x != null && typeof y == 'object' && y != null) {
    // Check the number of properties
    if (Object.keys(x).length != Object.keys(y).length) return false;

    // for every props of x
    for (const prop in x) {
      // prop is missing in y, false
      if (!Object.hasOwn(y, prop)) return false;
      // prop in y is diff than the one in x, false
      if (!isEqual((x as { [key: string]: unknown })[prop], (y as { [key: string]: unknown })[prop])) return false;
    }

    return true;
  }

  return false;
}

/**
 * Debounce a function.
 *
 * @category Utils
 */
export function debounce<A = unknown, R = void>(fn: (args: A) => R, ms: number): (args: A) => Promise<Awaited<R>> {
  let timer: NodeJS.Timeout;

  const debouncedFunc = (args: A): Promise<Awaited<R>> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        resolve(fn(args) as Awaited<R>);
      }, ms);
    });

  return debouncedFunc;
}
