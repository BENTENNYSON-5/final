import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import Konva from 'konva';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exp1app';
 width = window.innerWidth;
height = window.innerHeight;
check_draw = false;
shapes: any = [];
colour = 'black';
reshape = new Konva.Transformer();
stage = new Konva.Stage({
  container: "container",
  width: this.width,
  height: this.height
});
layer = new Konva.Layer();
not_draw()
{
    this.check_draw=false;
    this.stage.off("mousedown touchstart");
    this.stage.off("mouseup touchend");
    this.stage.off("mousemove touchmove");
}
 /*
document.getElementById("Circle").addEventListener(
  "click",
  function () {
    
  },
  false
);

document.getElementById("Rectangle").addEventListener(
  "click",
  function () {
    not_draw();
    var rect = new Konva.Rect({
      x: 400,
      y: 150,
      width: 125,
      height: 75,
      stroke: colour,
      type: "Rectangle",
      strokeWidth: 5,
      draggable: true,
      strokeScaleEnabled: false
    });
    layer.add(rect);
    shapes.push(rect);

    rect.addEventListener("click", function () {
      layer.add(reshape);
      reshape.nodes([rect]);
    });
    rect.addEventListener("dblclick", function () {
      reshape.detach();
    });
    console.log(shapes);
  },
  false
);

document.getElementById("Triangle").addEventListener(
  "click",
  function () {
    not_draw();
    var triangle = new Konva.RegularPolygon({
      x: 400,
      y: 150,
      sides: 3,
      radius: 50,
      type: "Triangle",
      draggable: "true",
      stroke: colour,
      strokeWidth: 5,
      strokeScaleEnabled: false
    });
    layer.add(triangle);
    shapes.push(triangle);

    triangle.addEventListener("click", function () {
      layer.add(reshape);
      reshape.nodes([triangle]);
    });
    triangle.addEventListener("dblclick", function () {
      reshape.detach();
    });
    console.log(shapes);
  },
  false
);

document.getElementById("Arrow").addEventListener(
  "click",
  function () {
    not_draw();
    var arrow = new Konva.Arrow({
      points: [400, 150, 500, 250],
      pointerLength: 10,
      pointerWidth: 10,
      fill: colour,
      stroke: colour,
      type: "Arrow",
      draggable: "true",
      strokeWidth: 5,
      strokeScaleEnabled: false,
      hitStrokeWidth: 50
    });
    layer.add(arrow);
    shapes.push(arrow);

    arrow.addEventListener("click", function () {
      layer.add(reshape);
      reshape.nodes([arrow]);
    });
    arrow.addEventListener("dblclick", function () {
      reshape.detach();
    });
    console.log(shapes);
  },
  false
);

document.getElementById("Draw").addEventListener(
  "click",
  function (e) {
    if (!check_draw) {
      check_draw = true;
      var isPaint = false;
      var Draw;
      stage.on("mousedown touchstart", function (e) {
        isPaint = true;
        var pos = stage.getPointerPosition();
        Draw = new Konva.Line({
          stroke: colour,
          strokeWidth: 5,
          type: "Draw",
          points: [pos.x, pos.y]
        });
        shapes.push(Draw);
        console.log(shapes);
        layer.add(Draw);
      });

      stage.on("mouseup touchend", function () {
        isPaint = false;
      });

      stage.on("mousemove touchmove", function () {
        if (!isPaint) {
          return;
        }
        const pos = stage.getPointerPosition();
        var newPoints = Draw.points().concat([pos.x, pos.y]);
        Draw.points(newPoints);
      });
    } else {
      not_draw();
      
    }
  },
  false
);

document.getElementById("Text").addEventListener("click", function () {
  
  not_draw();
  var text = new Konva.Text({
    text: "Some text here",
    x: 450,
    y: 150,
    fontSize: 20,
    type: "Text",
    draggable: true,
    fill: colour
  });
  layer.add(text);
  shapes.push(text);

  text.addEventListener("click", function () {
    layer.add(reshape);
    reshape.nodes([text]);
  });

  console.log(shapes);

  text.on("dblclick dbltap", () => {
    var textPosition = text.getAbsolutePosition();
    var stageBox = stage.container().getBoundingClientRect();

    var areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y
    };

    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);

    textarea.value = text.text();
    textarea.style.position = "absolute";
    textarea.style.top = areaPosition.y + "px";
    textarea.style.left = areaPosition.x + "px";
    textarea.style.width = text.width();

    textarea.focus();

    textarea.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        text.text(textarea.value);
        document.body.removeChild(textarea);
      }
    });
        reshape.detach();
  });
});




document.getElementById("Clean").addEventListener(
  "click",
  function () {
    not_draw();
    
    for (var i = 0; i < shapes.length; i++) {
      reshape.detach();
      shapes[i].destroy();
      shapes.splice(i, 1);
      i--;
    }
    console.log(shapes);
  },
  false
);

document.getElementById("Cleanshapes").addEventListener(
  "click",
  function () {
    not_draw();
    console.log("shapes", shapes);
    console.log(layer);
    for (var i = 0; i < shapes.length; i++) {
      if (
        shapes[i]["attrs"].type !== "Image" &&
        shapes[i]["attrs"].type !== "Text" &&
        shapes[i]["attrs"].type !== "Draw"
      ) {
        reshape.detach();
        shapes[i].destroy();
        shapes.splice(i, 1);
        i--;
      }
    }
    console.log(shapes);
  },
  false
);

document.getElementById("CleanCircle").addEventListener(
  "click",
  function () {
    not_draw();
    console.log(shapes);
    console.log(layer);
    for (var i = 0; i < shapes.length; i++) {
      if (shapes[i]["attrs"].type === "Circle") {
        reshape.detach();
        shapes[i].destroy();
        shapes.splice(i, 1);
        i--;
      }
    }
    console.log(shapes);
  },
  false
);

document.getElementById("CleanRectangle").addEventListener(
  "click",
  function () {
    not_draw();
    console.log(shapes.length);
    console.log(layer);
    for (var i = 0; i < shapes.length; i++) {
      if (shapes[i]["attrs"].type === "Rectangle") {
        reshape.detach();
        shapes[i].destroy();
        shapes.splice(i, 1);
        i--;
      }
    }
    console.log(shapes);
  },
  false
);

document.getElementById("Undo").addEventListener("click", function () {
  not_draw();
  var i = shapes.length - 1;
  if (i >= 0) {
    if (shapes[i]["attrs"].type !== "Image") {
     
      reshape.detach();
      shapes[i].destroy();
      shapes.splice(i, 1);
    }
  }
});


$("#file_input").change(function(e){
not_draw();
    var URL = window.webkitURL || window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;
    img.onload = function() {
      var theImg = new Konva.Image({
        image: img,
        x: 0,
        y: 0,
        type: "Image",
        width: width,
        height: height,
      });
      layer.removeChildren();
      arr = [];
      arr.push(theImg);
      layer.add(theImg);
      layer.draw();
      console.log(arr);
    }
});*/
circlefunc(){
  console.log("circle");
  this.not_draw();
    
    var circle = new Konva.Circle({
      x: 400,
      y: 150,
      radius: 70,
      stroke: this.colour,
      strokeWidth: 5,
      type: "Circle",
      draggable: true,
      strokeScaleEnabled: false
    });
    this.layer.add(circle);
    this.shapes.push(circle);

    /*circle.addEventListener("click", function () {
      this.layer.add(reshape);
      reshape.nodes([circle]);
    });
    circle.addEventListener("dblclick", function () {
      reshape.detach();
    });*/
    console.log(this.shapes);
}
rectanglefunc(){
  console.log("rectangle");
}
trianglefunc(){
  console.log("triangle");
}
arrowfunc(){
  console.log("arrow");
}
drawfunc(){
  console.log("draw");
}
textfunc(){
  console.log("text");
}
cleanfunc(){
  console.log("clean");
}
cleanshapesfunc(){
  console.log("cleanshapes");
}
cleancirclefunc(){
  console.log("cleancircle");
}
cleanrectanglefunc(){
  console.log("cleanrectangle");
}
undofunc(){
  console.log("undo");
}
}
