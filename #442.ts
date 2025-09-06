function findDuplicates(nums: number[]): number[] {
  const freqMap = new Map<number, number>();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }

  const uniqueDuplicates = new Set<number>();

  for (const key of freqMap.keys()) {
    const count = freqMap.get(key);
    if (count !== undefined && count > 1) {
      uniqueDuplicates.add(key);
    }
  }
  return Array.from(uniqueDuplicates);
}
