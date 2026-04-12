function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }
  return -1;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  const result = search(matrix.flat(), target);

  return result === -1 ? false : true;
}
