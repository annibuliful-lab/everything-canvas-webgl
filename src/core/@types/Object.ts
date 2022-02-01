export interface I2dPosition {
  x: number;
  y: number;
}

export interface I3dPosition extends I2dPosition {
  y: number;
  w?: number;
}

export interface I2dDimension {
  width: number;
  height: number;
}

export interface I3dDimension extends I2dDimension {
  depth: number;
}

export type ObjectPositioDimension = I2dPosition & I2dDimension;

export interface I2dObject {
  x: number;
  y: number;
  width: number;
  height: number;
  draw(ctx: CanvasRenderingContext2D): void;
  contains(position: I2dPosition): boolean;
  toObject(): Object;
}
