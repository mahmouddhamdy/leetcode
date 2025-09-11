function isVowel(s: string): boolean {
  return ["a", "e", "i", "o", "u"].includes(s.toLowerCase());
}
function sortVowels(s: string): string {
  const charactersArray = s.split("");
  const vowelIndexes = [];
  const vowels = [];

  for (let i = 0; i < charactersArray.length; i++) {
    if (isVowel(charactersArray[i])) {
      vowels.push(charactersArray[i]);
      vowelIndexes.push(i);
    }
  }

  if (!vowels.length) return s;

  vowels.sort();

  for (let i = 0; i < vowelIndexes.length; i++) {
    charactersArray[vowelIndexes[i]] = vowels[i];
  }

  return charactersArray.join("");
}
