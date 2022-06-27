import { describe, expect, it } from "vitest";
import { isNegative, isPositive } from "../src";

describe("math test", () => {
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
});
