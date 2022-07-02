import { describe, expect, it } from "vitest";
import { capitalize } from "../src";

describe("capitalize test", () => {
  it("should return luxals with uppercase L", () => {
    expect(capitalize("luxals")).toEqual("Luxals");
  });

  it("should return luxals with uppercase L", () => {
    expect(capitalize("LUXALS")).toEqual("Luxals");
  });
});
