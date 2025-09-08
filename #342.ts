function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;
  const x = Math.log10(n) / Math.log10(4);
  return Number.isInteger(x);
}
