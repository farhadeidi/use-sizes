/**
 * Returns the greatest common divisor of two numbers using the Euclidean
 * algorithm. Inputs are rounded to integers so fractional pixel values
 * (e.g. `390.5`) produce a sensible result instead of a noisy float.
 */
export function getGreatestCommonDivisor(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));

  while (y !== 0) {
    const remainder = x % y;
    x = y;
    y = remainder;
  }

  return x;
}

/**
 * Reduces a width/height pair to its simplest aspect ratio, e.g.
 * `getAspectRatio(1080, 1920)` returns `[9, 16]`.
 */
export function getAspectRatio(
  width: number,
  height: number
): [number, number] {
  const gcd = getGreatestCommonDivisor(width, height);

  if (gcd === 0) {
    return [width, height];
  }

  return [Math.round(width) / gcd, Math.round(height) / gcd];
}
