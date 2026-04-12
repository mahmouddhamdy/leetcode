function search(nums: number[], target: number, offset = 0): number {
  const midIndex = Math.floor((nums.length - 1) / 2);

  if (target === nums[midIndex]) {
    return offset + midIndex;
  } else if (target > nums[midIndex]) {
    const newNums = nums.slice(midIndex + 1);
    return search(newNums, target, offset + midIndex + 1);
  } else if (target < nums[midIndex]) {
    const newNums = nums.slice(0, midIndex);
    return search(newNums, target, offset);
  }

  return -1;
}
