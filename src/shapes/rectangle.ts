import { Canvas } from "../base/canvas";
import { Shape, ShapeProps } from "../base/shape";

export class Rectangle extends Shape {
  private width: number;
  private height: number;
  private type: "fill" | "stroke";

  constructor(canvas: Canvas, rectProps: RectangleProps, props?: ShapeProps) {
    super(canvas, props);
    this.width = rectProps.width;
    this.height = rectProps.height;
    this.type = rectProps.type || "fill";
  }

  draw(): void {
    const ctx = this.canvas.$context;
    const { x, y } = this.props?.position || { x: 0, y: 0 };
    const { width: w, height: h } = this;

    // Drawing Rectangle
    ctx.fillStyle = this.props?.style?.color || "rgb(0,0,0)";
    if (this.type === "fill") {
      ctx.fillRect(x, y, w, h);
    }
    ctx.rect(x, y, w, h);
  }
  dispose?(): void {
    throw new Error("Method not implemented.");
  }
}

export interface RectangleProps {
  width: number;
  height: number;
  type?: "fill" | "stroke";
}
