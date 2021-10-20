/**
 * Compute the Key word in Context (KWIC) index for a text block.
 *
 * @see https://en.wikipedia.org/wiki/Key_Word_in_Context
 *
 * @param text the text block containing sentences
 * @returns the KWIC index, i.e. an alphabetically ordered list of permutated sentences derived from the input
 */
export function computeKwicFor(text: string): string[] {
  const lines = text.split(/\r?\n/);

  let kwic: string[] = [];

  lines.forEach((line) => {
    line = line.trim();

    if (isEmpty(line)) return;

    kwic.push(line);

    if (isOnlyOneWord(line)) {
      return;
    }

    let splitIndex = 0;
    while ((splitIndex = line.indexOf(" ", splitIndex + 1)) !== -1) {
      const [firstPart, secondPart] = [
        line.substring(0, splitIndex),
        line.substring(splitIndex + 1, line.length),
      ];

      const permutation = `${secondPart} ${firstPart}`;
      kwic.push(permutation);
    }
  });

  return kwic.sort((a, b) => a.localeCompare(b));

  function isOnlyOneWord(line: string) {
    return line.indexOf(" ") === -1;
  }

  function isEmpty(line: string) {
    return line.length === 0;
  }
}
