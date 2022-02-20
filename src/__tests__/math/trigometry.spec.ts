import { I2dPosition } from "../../core/@types/Object";
import {
  angleToRadian,
  radianToAngle,
  calculateRotatePoint,
  getBoundingBoxByRotate,
} from "../../core/math/trigometry";

describe("trigometry", () => {
  it("it should convert angle to radian", () => {
    expect(angleToRadian(45)).toEqual(0.7853981633974483);
  });

  it("it should convert radian to angle", () => {
    expect(radianToAngle(0.79)).toEqual(45.26366581533504);
  });

  it("it should get new rotated point by 30 degree with origin = (10,10) and point (10,10)", () => {
    expect(
      calculateRotatePoint({
        origin: { x: 10, y: 10 },
        point: { x: 10, y: 10 },
        angle: 30,
      })
    ).toMatchSnapshot();
  });

  it("it should get new rotated point by 30 degree with origin = (1,1) and point (10,10)", () => {
    expect(
      calculateRotatePoint({
        origin: { x: 1, y: 1 },
        point: { x: 10, y: 10 },
        angle: 30,
      })
    ).toMatchSnapshot();
  });

  it("it should get new bounding box by 40 degree with origin = (1,1) and point[(10,10),(30,10),(10,30),(30,30)]", () => {
    const points: [I2dPosition, I2dPosition, I2dPosition, I2dPosition] = [
      { x: 10, y: 10 },
      { x: 30, y: 10 },
      { x: 10, y: 30 },
      { x: 30, y: 30 },
    ];

    expect(
      getBoundingBoxByRotate({ origin: { x: 1, y: 1 }, points, angle: 30 })
    ).toMatchSnapshot();
  });
});
