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
  get left(): number;
  get right(): number;
  get top(): number;

  get bottom(): number;
  get topLeft(): I2dPosition;
  get topRight(): I2dPosition;
  get bottomLeft(): I2dPosition;
  get bottomRight(): I2dPosition;
  draw(ctx: CanvasRenderingContext2D): void;
  contains(position: I2dPosition): boolean;
  toObject(): Object;
}
