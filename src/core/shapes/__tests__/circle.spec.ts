import { ObjectPositioDimension } from "../../@types/Object";
import { Circle } from "../circle";

const BASE_PARAM = {
  x: 10,
  y: 12,
  radius: 100,
  id: "BASE_PARAM",
};

function createCircle(
  data?: ObjectPositioDimension & { id: string; radius: number }
) {
  return new Circle(data ?? BASE_PARAM);
}

describe("Circle", () => {
  it("it should be defined class ", () => {
    const circle = createCircle();
    expect(circle).toBeDefined();
  });
});
