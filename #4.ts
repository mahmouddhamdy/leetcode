function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => b - a);
  const median = mergedArray.length / 2;
  return Number.isInteger(median)
    ? (mergedArray[median] + mergedArray[median - 1]) / 2
    : mergedArray[Math.floor(median)];
}
