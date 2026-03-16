function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 1;
  let longestSubstring = new Set(s.charAt(left));
  let maxLength = longestSubstring.size;

  while (right < s.length) {
    if (!longestSubstring.has(s.charAt(right))) {
      longestSubstring.add(s.charAt(right));
      right++;
      maxLength = Math.max(maxLength, longestSubstring.size);
    } else {
      longestSubstring.delete(s.charAt(left));
      left++;
    }
  }
  return maxLength;
}
