function groupAnagrams(strs: string[]): string[][] {
  const hashMap = new Map<string, string[]>();
  for (const str of strs) {
    const ASCIIArray = new Array(26).fill(0);
    for (const char of str) {
      ASCIIArray[char.charCodeAt(0) - 97]++;
    }
    const key = ASCIIArray.join(",");

    if (!hashMap.get(key)) hashMap.set(key, []);
    hashMap.get(key)!.push(str);
  }
  return [...hashMap.values()];
}
