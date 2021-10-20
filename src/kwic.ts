export function computeKwicFor(input: string): string[] {
  const lines = input.split(/\r?\n/);

  var output: string[] = [];

  lines.forEach((line) => {
    line = line.trim();

    if (line.length === 0) return;

    let startIndex = 0;

    while (startIndex !== -1) {
      startIndex = line.indexOf(" ", startIndex + 1);

      const sentence =
        line.substring(startIndex, line.length) +
        " " +
        line.substring(0, startIndex);
      output.push(sentence.trim());
    }
  });

  return output.sort((a, b) => a.localeCompare(b));
}
