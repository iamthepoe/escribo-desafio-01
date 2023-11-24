import { it, describe } from "node:test";
import assert from "node:assert";
import createSumOfDivisibles from "../src/sum.js";

describe("createSumOfDivisibles", () => {
  it("should be defined", () => assert.ok(createSumOfDivisibles));

  it("should throw an error, if number is negative", () => {
    assert.throws(() => createSumOfDivisibles(-1), Error);
  });

  it("should return 23, if number is 10", () => {
    assert.strictEqual(createSumOfDivisibles(10), 23);
  });

  it("should return 33, if number is 11", () => {
    assert.strictEqual(createSumOfDivisibles(11), 33);
  });
});
