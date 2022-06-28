import { describe, expect, it } from "vitest";
import { pipi } from "../src";

describe("pipi test", () => {
  it("placeholder with string", () => {
    const str = "luxals is {word}";
    const views = { word: "cool" };
    expect(pipi(str, views)).toEqual("luxals is cool");
  });

  it("placeholder with function", () => {
    const str = "luxals is {word}";
    const views = { word: () => "cool" };
    expect(pipi(str, views)).toEqual("luxals is cool");
  });
});
