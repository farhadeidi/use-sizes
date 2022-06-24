export const getGreatestCommonDivisor = (width: number, height: number) => {
  let gcd: number;
  do {
    gcd = width % height;
    width = height;
    height = gcd;
  } while (gcd !== 0);

  return width;
};

export function getAspectRatio(w: number, h: number) {
  var gcd = getGreatestCommonDivisor(w, h);
  var width = w / gcd;
  var height = h / gcd;
  return [width, height];
}
