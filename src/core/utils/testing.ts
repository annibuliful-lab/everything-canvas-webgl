import { ObjectPositioDimension } from "../@types/Object";
import { Circle } from "../shapes/circle";
import { Rectangle } from "../shapes/rectangle";

const BASE_PARAM = {
  x: 10,
  y: 12,
  radius: 100,
  id: "BASE_PARAM",
};

export function createRect(data?: ObjectPositioDimension & { id: string }) {
  return new Rectangle(data ?? BASE_PARAM);
}

const BASE_PARAM_CIRCLE = {
  x: 10,
  y: 12,
  radius: 100,
  id: "BASE_PARAM",
};

export function createCircle(
  data?: ObjectPositioDimension & { id: string; radius: number }
) {
  return new Circle(data ?? BASE_PARAM_CIRCLE);
}
