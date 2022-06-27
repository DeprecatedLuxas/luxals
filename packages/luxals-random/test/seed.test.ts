import { describe, expect, it } from "vitest";
import { timeSeed } from "../src";

describe("seed test", () => {
  it("should return a number", () => {
    expect(timeSeed()).toBeTypeOf("number");
  });
});
