//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
//var engine, world;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var quince;
var ghost, ghostGroup;
var batteryCharge = 5;

function preload(){

}

function setup() {
  createCanvas(600,600);
  //engine = Engine.create();
  //world = engine.world;
  //quince = new Quince(300, 300, 15, 25);
  //battery = new Battery();
   quince = createSprite(300, 300, 15, 25)
  
  
  batteryGroup = new Group();
  ghostGroup = new Group();
}

function draw() {
  background(0);
  //quince.display();
  //battery.display();
  text("Battery: " + batteryCharge, 500,50);
  if (gameState === PLAY){
  if (keyIsDown(UP_ARROW)) {
    quince.y = quince.y -5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    quince.y = quince.y +5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    quince.x = quince.x +5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    quince.x = quince.x -5;
  }

  if(batteryGroup.isTouching(quince)){
    batteryGroup.destroyEach();
    batteryCharge = batteryCharge+1;
  }

  if(ghostGroup.isTouching(quince)){
    ghostGroup.destroyEach();
    batteryCharge = batteryCharge-1;
  }

  spawnBattery();
  spawnGhosts();
  if(batteryGroup <= 0){
    gameState = END;
  }
}
if (gameState === END){
  text("Game Over", 270, 300);
}
  drawSprites();
}

function spawnBattery(){
  if (frameCount % 300 === 0){
    var battery = createSprite(Math.round(random(15,585)), Math.round(random(100,500)), 10, 10);
    //battery.shapeColor("yellow");

    batteryGroup.add(battery);
}
}

function spawnGhosts(){
  if (frameCount % 500 === 0){
    var ghost = createSprite(10, Math.round(random(100,500)), 20, 20);
    //ghost.shapeColor("red");
    ghost.velocityX=5;
    ghost.lifetime = 130;
    ghostGroup.add(ghost);
  }
}