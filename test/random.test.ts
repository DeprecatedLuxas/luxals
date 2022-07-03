import { describe, expect, it } from "vitest";
import { MersenneTwister, timeSeed } from "../src";

describe("random test", () => {
  describe("seed test", () => {
    it("should return a number seed based on current time", () => {
      expect(timeSeed()).toBeTypeOf("number");
    });
  });

  describe("mersenne twister test", () => {
    const mersenne: MersenneTwister = new MersenneTwister();

    it("should return two different numbers", () => {
      const first = mersenne.int();
      const second = mersenne.int();
      expect(first).not.toBe(second);
    });
  });
});
