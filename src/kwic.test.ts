import { computeKwicFor } from "./kwic";

describe("The KWIC algorithm", () => {
  it("splits exactly one sentence with n words into n sentences ordered alphabetically", () => {
    expect(computeKwicFor("This is a test")).toEqual([
      "a test This is",
      "is a test This",
      "test This is a",
      "This is a test",
    ]);
  });

  it("splits a multi-line text block correctly", () => {
    const text = `This is a first line
Another line is also there
Of course there is another one`;

    expect(computeKwicFor(text)).toEqual([
      "a first line This is",
      "also there Another line is",
      "Another line is also there",
      "another one Of course there is",
      "course there is another one Of",
      "first line This is a",
      "is a first line This",
      "is also there Another line",
      "is another one Of course there",
      "line is also there Another",
      "line This is a first",
      "Of course there is another one",
      "one Of course there is another",
      "there Another line is also",
      "there is another one Of course",
      "This is a first line",
    ]);
  });

  const specialCases: { input: string; output: string[] }[] = [
    { input: "", output: [] },
    { input: " ", output: [] },
    { input: "AdditionalSpace ", output: ["AdditionalSpace"] },
    { input: " AdditionalSpace", output: ["AdditionalSpace"] },
    { input: "\r\n", output: [] },
  ];

  specialCases.forEach((testCase) => {
    it(`correctly re-produces special case output='${testCase.output}' for input='${testCase.input}'`, () => {
      expect(computeKwicFor(testCase.input)).toEqual(testCase.output);
    });
  });
});
