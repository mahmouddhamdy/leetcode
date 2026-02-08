function addSpaces(s: string, spaces: number[]): string {
  let result = "";
  let spaceIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === spaces[spaceIndex]) {
      result += " ";
      spaceIndex++;
    }

    result += s[i];
  }

  return result;
}
