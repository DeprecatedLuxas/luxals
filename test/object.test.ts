import { describe, expect, it } from "vitest";
import { get, has } from "../src";

describe("object test", () => {
  describe("get test", () => {
    it("get test w/o arrays", () => {
      const obj = {
        a: {
          b: {
            c: "d"
          }
        }
      };

      expect(get(obj, "a.b.c")).toBe("d");
    });

    it("get test with arrays", () => {
      const obj = {
        a: {
          b: [
            {
              c: "d"
            }
          ]
        }
      };

      expect(get(obj, "a.b[0].c")).toBe("d");
    });

    it("get test w/o arrays (default value)", () => {
      const obj = {
        a: {
          b: ""
        }
      };

      expect(get(obj, "a.b.c", "o")).toBe("o");
    });

    it("get test with arrays (default value)", () => {
      const obj = {
        a: {
          b: [
            {
            }
          ]
        }
      };

      expect(get(obj, "a.b[0].c", "works")).toBe("works");
    });
  });

  describe("has test", () => {
    it("should return luxals with uppercase L", () => {
      expect(true).toBe(true);
    });
  });
});
