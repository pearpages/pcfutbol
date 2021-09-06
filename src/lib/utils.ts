export function generateRandom(maxDiff: number, minValue = 0): number {
  return minValue + Math.ceil(Math.random() * maxDiff);
}
