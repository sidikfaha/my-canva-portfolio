import { Canvas } from "./canvas";

export abstract class Shape {
    canvas: Canvas;
    props?: ShapeProps;

    constructor (canvas: Canvas, props?: ShapeProps) {
        this.canvas = canvas;
        this.props = props;
    }

    draw?(): void;
    wipe?(): void;
}

export interface ShapeStyle {
    color?: string;
    fill?: boolean;
    strokeWidth?: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface ShapeProps {
    position?: Point;
    style?: ShapeStyle;
}