function findMaxConsecutiveOnes(nums: number[]): number {
  let windowCount = 0;
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      windowCount++;
    } else {
      maxSum = Math.max(windowCount, maxSum);
      windowCount = 0;
    }
  }
  return Math.max(windowCount, maxSum);
}
