const reverseANumber = (num: number): number => {
  const inString = num.toString();
  return Number(inString.split("").reverse().join(""));
};
function sumOfNumberAndReverse(num: number): boolean {
  for (let i = 0; i < 50000; i++) {
    if (i + reverseANumber(i) === num) {
      return true;
    }
  }
  return false;
}
