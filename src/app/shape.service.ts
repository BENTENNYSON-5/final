import { Injectable } from '@angular/core';
import Konva from 'konva';
@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor() { }
  circle() {
    return new Konva.Circle({
      x: 400,
      y: 150,
      radius: 70,
      stroke: 'black',
      strokeWidth: 5,
      type: "Circle",
      draggable: true,
      strokeScaleEnabled: false
    });
  }
  rectangle(){
    return new Konva.Rect({
      x: 400,
      y: 150,
      width: 125,
      height: 75,
      stroke: 'black',
      type: "Rectangle",
      strokeWidth: 5,
      draggable: true,
      strokeScaleEnabled: false
    })
  }
  triangle(){
    return new Konva.RegularPolygon({
      x: 400,
      y: 150,
      sides: 3,
      radius: 50,
      type: "Triangle",
      draggable: true,
      stroke: 'black',
      strokeWidth: 5,
      strokeScaleEnabled: false
  })
}
  arroww(){
    return new Konva.Arrow({
      x: 400,
      y: 150,
      points: [0, 0, 100, 100],
      pointerLength: 10,
      pointerWidth: 10,
      fill: 'black',
      stroke: 'black',
      type: "Arrow",
      draggable: true,
      strokeWidth: 5,
      strokeScaleEnabled: false,
      hitStrokeWidth: 50
    })
  }
  tick(){
    return new Konva.Shape({
      x: 300,
      y: 100,
      type: "Tick",
      draggable: true,
      strokeScaleEnabled: false,
      sceneFunc: function (context, shape) {
        context.beginPath();
        context.moveTo(15, 75);
        context.lineTo(30, 90);
        context.lineTo(60, 60);
        context.fillStrokeShape(shape);
      },
      hitFunc: function (context, shape) {
        context.beginPath();
        context.rect(15, 60, 45, 30);
        context.fillStrokeShape(shape);
      },
      stroke: 'black',
      strokeWidth: 5
    });
    /*this.getSelfRect = function () {
      return {
        x: 15,
        y: 60,
        width: 45,
        height: 30
      };
    };*/
  }
}
