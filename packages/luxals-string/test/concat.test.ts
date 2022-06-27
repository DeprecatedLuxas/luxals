import { describe, expect, it } from "vitest";
import { concat } from "../src";

describe("concat test", () => {
  it("should return a b c", () => {
    expect(concat("a", "b", "c")).toEqual("a b c");
    expect(
      concat("a", { b: true }, "c", undefined, null, { d: false })
    ).toEqual("a b c");
  });
});
