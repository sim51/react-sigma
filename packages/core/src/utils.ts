export function getUniqueKey(): string {
  return Math.random()
    .toString(36)
    .slice(2);
}
