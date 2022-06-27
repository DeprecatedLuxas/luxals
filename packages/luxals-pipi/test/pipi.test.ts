import { describe, expect, it } from "vitest";
import { pipi } from "../src";

describe("pipi test", () => {
  it("should return luxals is cool", () => {
    const str = "luxals is {word}";
    const views = { word: "cool" };
    expect(pipi(str, views)).toEqual("luxals is cool");
  });
});
