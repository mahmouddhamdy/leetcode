function hasZero(num: number): boolean {
  return num.toString().includes("0");
}

function getNoZeroIntegers(n: number): number[] {
  let i = 1,
    j = n - 1;
  while (i < n - 1 && j > 0) {
    if (hasZero(j) || hasZero(i)) {
      j--;
      i++;
    } else {
      return [i, j];
    }
  }
  return [i, j];
}
