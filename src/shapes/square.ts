import { Canvas } from "../base/canvas";
import { ShapeProps } from "../base/shape";
import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
  constructor(canvas: Canvas, size: number, props?: ShapeProps) {
    super(canvas, { width: size, height: size }, props);
  }
}

