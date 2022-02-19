import { angleToRadian, radianToAngle } from "../../core/math/trigometry";

describe("trigometry", () => {
  it("it should convert angle to radian", () => {
    expect(angleToRadian(45)).toBe(0.7853981633974483);
  });

  it("it should convert radian to angle", () => {
    expect(radianToAngle(0.79)).toEqual(45.26366581533504);
  });
});
