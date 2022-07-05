import { describe, expect, it } from "vitest";
import { capitalize, concat, toPath } from "../src";

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

  // describe("toPath test", () => {
  //   it("object path", () => {
  //     const path = "a.b.c";
  //     expect(toPath(path)).toBe(["a", "b", "c"]);
  //   });

  //   it("object with arrays", () => {
  //     const path = "users[0].friends[3].name";
  //     expect(toPath(path)).toBe(["users", 0, "friends", 3, "name"]);
  //   });

  //   it("array path", () => {
  //     const path = "[0].name";
  //     expect(toPath(path)).toBe([0, "name"]);
  //   });
  // });
});
