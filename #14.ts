function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  const arrLength = strs.length;
  const newArr = strs.sort();
  let first = newArr[0],
    last = newArr[arrLength - 1],
    result = "";

  let i = 0;
  while (first[i] && last[i]) {
    if (first[i] === last[i]) {
      result += first[i];
      i++;
    } else {
      break;
    }
  }
  return result;
}
