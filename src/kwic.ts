export function computeKwicFor(input: string): string[] {
  const lines = input.split(/\r?\n/);

  var output: string[] = [];

  lines.forEach((line) => {
    const words = line.split(" ");

    words.forEach((word) => output.push(word));
  });

  return output;
}
