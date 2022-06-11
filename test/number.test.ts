import { describe, expect, it } from "vitest";
import { clamp, isNegative, isPositive } from "../src";

describe("clamp test", () => {
  it("should return 230 & 100", () => {
    expect(clamp(250, 100, 230)).toEqual(230);
    expect(clamp(50, 100, 230)).toEqual(100);
  });
});

describe("negative", () => {
  it("should return [true, false, false]", () => {
    expect(isNegative(-1)).toEqual(true);
    expect(isNegative(0)).toEqual(false);
    expect(isNegative(1)).toEqual(false);
  });
});

describe("positive", () => {
  it("should return [true, false, true]", () => {
    expect(isPositive(999999999)).toEqual(true);
    expect(isPositive(0)).toEqual(false);
    expect(isPositive(1)).toEqual(true);
  });
});
