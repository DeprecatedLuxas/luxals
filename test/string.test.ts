import { describe, expect, it } from "vitest";
import { capitalize, concat } from "../src";

describe("string test", () => {
  describe("concat test", () => {
    it("should return a b c", () => {
      expect(concat("a", "b", "c")).toEqual("a b c");
      expect(concat("a", { b: true }, "c", undefined, null, { d: false })).toEqual("a b c");
    });
  });

  describe("capitalize test", () => {
    it("should return luxals with uppercase L", () => {
      expect(capitalize("luxals")).toEqual("Luxals");
    });

    it("should return luxals with uppercase L", () => {
      expect(capitalize("LUXALS")).toEqual("Luxals");
    });
  });
});
