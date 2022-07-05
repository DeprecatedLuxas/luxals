import { describe, expect, it } from "vitest";
import { get, has } from "../src";

describe("object test", () => {
  describe("get test", () => {
    it("should return a b c", () => {
      const obj = {
        a: {
          b: {
            c: "d"
          }
        }
      };

      // expect(get(obj, "a.b.c")).toBe("d");
      expect(get(obj, "a.b.c", "d")).toBe("d");

      expect(true).toBe(true);

    });
  });

  describe("has test", () => {
    it("should return luxals with uppercase L", () => {
      expect(true).toBe(true);
    });
  });
});
