function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;
  const firstWordHashMap: Map<string, number> = new Map();
  const secondWordHashMap: Map<string, number> = new Map();
  for (const letter of s) {
    const preExistingValue = firstWordHashMap.get(letter);
    preExistingValue
      ? firstWordHashMap.set(letter, preExistingValue + 1)
      : firstWordHashMap.set(letter, 1);
  }
  for (const letter of t) {
    const preExistingValue = secondWordHashMap.get(letter);
    preExistingValue
      ? secondWordHashMap.set(letter, preExistingValue + 1)
      : secondWordHashMap.set(letter, 1);
  }

  for (const letter of s) {
    if (firstWordHashMap.get(letter) !== secondWordHashMap.get(letter))
      return false;
  }
  return true;
}
