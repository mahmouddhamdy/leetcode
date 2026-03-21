function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
    right = 1;
  while (left < numbers.length) {
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
    else {
      right++;
    }
    if (right === numbers.length) {
      left++;
      right = left + 1;
    }
  }
  return [];
}
