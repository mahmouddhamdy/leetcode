function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();
  for (const num of nums) {
    if (!frequencyMap.has(num)) {
      frequencyMap.set(num, 1);
    } else {
      frequencyMap.set(num, frequencyMap.get(num)! + 1);
    }
  }
  return [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((a) => a[0]);
}
