import { beforeEach, describe, expect, it } from "vitest";
import { MersenneTwister } from "../src";

let mersenne: MersenneTwister;

beforeEach(() => {
  mersenne = new MersenneTwister();
});

describe("mersenne twister test", () => {
  it("should return two different numbers", () => {
    const first = mersenne.int();
    const second = mersenne.int();
    expect(first).not.toBe(second);
  });
});
