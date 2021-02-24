class Quince{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false, 
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
  
          if (keyIsDown(UP_ARROW)) {
            pos.y = pos.y -5;
          }
          if (keyIsDown(DOWN_ARROW)) {
            pos.y = pos.y +5;
          }
          if (keyIsDown(RIGHT_ARROW)) {
            pos.x = pos.x +5;
          }
          if (keyIsDown(LEFT_ARROW)) {
            pos.x = pos.x -5;
          }

        rectMode(CENTER);
        strokeWeight(4);
        stroke(0);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();
      }
  }
  