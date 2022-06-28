import { describe, expect, it } from "vitest";
import { clamp } from "../src";

describe("clamp test", () => {
  it("should return 230 & 100", () => {
    expect(clamp(250, 100, 230)).toEqual(230);
    expect(clamp(50, 100, 230)).toEqual(100);
  });
});
