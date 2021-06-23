import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ShapeService } from './shape.service';
import Konva from 'konva';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exp1app';
  layer: any;
  stage: any;
  transformers: any;
  constructor(
    private shapeService: ShapeService,
  ) { }
  ngOnInit() {
    let width = window.innerWidth * 0.9;
    let height = window.innerHeight;
    this.stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
  }


  shapes : any = [];
  check_draw = false;
  not_draw(){
    this.check_draw = false;
    this.stage.off("mousedown touchstart");
    this.stage.off("mouseup touchend");
    this.stage.off("mousemove touchmove");
  }

stagefunc(){
    console.log("hi");
}



circlefunc(){
  console.log("circle");
  this.not_draw();
  const circle = this.shapeService.circle();
  this.shapes.push(circle);
  this.layer.add(circle);
  this.stage.add(this.layer);
  this.addTransformerListeners()
}



rectanglefunc(){
  console.log("rectangle");
  this.not_draw();
  const rectangle = this.shapeService.rectangle();
    this.shapes.push(rectangle);
    this.layer.add(rectangle);
    this.stage.add(this.layer);
    this.addTransformerListeners()
}



trianglefunc(){
  console.log("triangle");
  this.not_draw();
  const triangle = this.shapeService.triangle();
  this.shapes.push(triangle);
  this.layer.add(triangle);
  this.stage.add(this.layer);
  this.addTransformerListeners()
}



arrowfunc(){
  console.log("arrow");
  this.not_draw();
  const arro = this.shapeService.arroww();
  this.shapes.push(arro);
  this.layer.add(arro);
  this.stage.add(this.layer);
  this.addTransformerListeners()
}



tickfunc(){
  console.log("tick");
  this.not_draw();
  const tick = this.shapeService.tick();
  this.shapes.push(tick);
  this.layer.add(tick);
  this.stage.add(this.layer);
  this.addTransformerListeners()
}



drawfunc(){
  console.log("draw");
}



textfunc(){
  console.log("text");
}



cleanfunc(){
  this.not_draw();
  for (var i = 0; i < this.shapes.length; i++) {
    if (this.shapes[i]["attrs"].type !== "Image") {
      // reshape.detach();
      this.shapes[i].destroy();
      this.shapes.splice(i, 1);
      i--;
    }
  }
  console.log('clean',this.shapes);
}



cleanshapesfunc(){
  this.not_draw();
  for (var i = 0; i < this.shapes.length; i++) {
    if (
      this.shapes[i]["attrs"].type !== "Image" &&
      this.shapes[i]["attrs"].type !== "Text" &&
      this.shapes[i]["attrs"].type !== "Draw"
    ) {
      // reshape.detach();
      this.shapes[i].destroy();
      this.shapes.splice(i, 1);
      i--;
    }
  }
  console.log('cleanshape',this.shapes);
}



cleancirclefunc(){
  this.not_draw();
  for (var i = 0; i < this.shapes.length; i++) {
    if (this.shapes[i]["attrs"].type === "Circle") {
      // reshape.detach();
      this.shapes[i].destroy();
      this.shapes.splice(i, 1);
      i--;
    }
  }
  console.log('cleancircle',this.shapes);
}


cleanrectanglefunc(){
  this.not_draw();
  for (var i = 0; i < this.shapes.length; i++) {
    if (this.shapes[i]["attrs"].type === "Rectangle") {
      // reshape.detach();
      this.shapes[i].destroy();
      this.shapes.splice(i, 1);
      i--;
    }
  }
  console.log('cleanrectangle',this.shapes);
}


undofunc(){
  this.not_draw();
  var i = this.shapes.length - 1;
  if (i >= 0) {
    if (this.shapes[i]["attrs"].type !== "Image") {
      // reshape.detach();
      this.shapes[i].destroy();
      this.shapes.splice(i, 1);
    }
  }
  console.log('undo',this.shapes);
}
downloadfunc(){
  console.log("Downloaded")
}
/*downloadURI(uri: any, name: any) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}*/
addTransformerListeners() {
  // const component = this;
  // const tr = new Konva.Transformer();
  // this.stage.on('click', function (e: any) {
  //   if (e.target._id) {
  //     component.addDeleteListener(e.target);
  //     component.layer.add(tr);
  //     tr.attachTo(e.target);
  //     component.transformers.push(tr);
  //     component.layer.draw();
  //   }
  //   else {
  //     tr.detach();
  //     component.layer.draw();
  //   }
  // });
  
}
// addDeleteListener(shape: any) {
//   const component = this;
//   window.addEventListener('keydown', function (e) {
//     if (e.keyCode === 46) {
//       shape.remove();
//       component.transformers.forEach((t: { detach: () => void; }) => {
//         t.detach();
//       });
//       const selectedShape = component.shapes.find((s: any) => s._id == shape._id);
//       selectedShape.remove();
//       e.preventDefault();
//     }
//     component.layer.batchDraw();
//   });
// }
}
