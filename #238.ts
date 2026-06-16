function productExceptSelf(nums: number[]): number[] {
  let arrayProduct = 1,
    zeroCount = 0;

  const resultArray = new Array(nums.length);
  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      arrayProduct = arrayProduct * num;
    }
  }

  if (zeroCount > 1) return Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount) {
      const valueToBeStored = nums[i] === 0 ? arrayProduct : 0;
      resultArray[i] = valueToBeStored;
    } else {
      resultArray[i] = arrayProduct / nums[i];
    }
  }
  return resultArray;
}
