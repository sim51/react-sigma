export function getUniqueKey(): string {
  return Math.random().toString(36).slice(2);
}

export function isEqual(x: unknown, y: unknown): boolean {
  // check the ref
  if (x === y) return true;
  // if both are object
  if (typeof x == "object" && x != null && typeof y == "object" && y != null) {
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
