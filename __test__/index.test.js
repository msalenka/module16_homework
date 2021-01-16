import { getPercents } from "./index.js";

describe("test getProcents", () => {
  it("20 procents of 200 equals 40", () => {
    const result = getPercents(20, 200);
    expect(result).toBe(40);
  }),
    it("50 procents of 200 equals 100", () => {
    const result = getPercents(50, 200);
    expect(result).toBe(100);
    });
});