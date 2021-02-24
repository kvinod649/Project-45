class Battery{
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
        
        if (frameCount % 20 === 0) {
            battery = createSprite(random(100, 500), (100, 500), 10, 10);
            //fruits.velocityY = 6;
            
            batteryGroup.add(battery);
        }
        
        if(batteryGroup.isTouching(quince)){
            batteryGroup.destroyEach();
        }

        rectMode(CENTER);
        strokeWeight(4);
        stroke(0);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();

      }
  }
  