import { Canvas } from "./base/canvas";
import { Square } from "./shapes/square";

(() => {
  const canvas = Canvas.getInstance();
  const square1 = new Square(canvas, 80, {
    style: {
      color: "rgba(255,0,0,.5)",
    },
    position: {
      x: 50,
      y: 100,
    }
  });

  square1.draw();

  console.log(canvas.$context);
})();
