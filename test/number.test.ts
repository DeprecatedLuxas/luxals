import { describe, expect, it } from "vitest";
import { clamp, negative, positive } from "../src";

describe("clamp test", () => {
  it("should return 230 & 100", () => {
    expect(clamp(250, 100, 230)).toEqual(230);
    expect(clamp(50, 100, 230)).toEqual(100);
  });
});

describe("negative", () => {
  it("should return [true, false, false]", () => {
    expect(negative(-1)).toEqual(true);
    expect(negative(0)).toEqual(false);
    expect(negative(1)).toEqual(false);
  });
});

describe("positive", () => {
  it("should return [true, false, true]", () => {
    expect(positive(999999999)).toEqual(true);
    expect(positive(0)).toEqual(false);
    expect(positive(1)).toEqual(true);
  });
});
