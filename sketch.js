const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var obstacle;
 
function preload(){
 groundImg = loadImage("groundImg.jpg");
 
}
function setup() {
  createCanvas(2000,600);
  engine = Engine.create();
    world = engine.world;
   
 ground1 = new Ground(1000,590,2000,10);
 
 //ground2 = new Ground(300,450,200,30);
 //ground3 = new Ground(550,310,200,30);

 box1 = new Box(30,500,50,50);
 console.log(box1);

 
 //camera.position.x = box1.body.position.x+200;
 //camera.position.y = box1.body.position.y;
 
 
}

function draw() {
  background(groundImg);
  Engine.update(engine);
  
  ground1.display();
  
  box1.display();
  if (keyWentDown(UP_ARROW)) {

	 //Matter.Body.applyForce(box1.body,box1.body.position,{x:0.150,y:-0.2});
   Matter.Body.setVelocity(box1.body, {x:3,y:-10});
	}
 if (keyDown(LEFT_ARROW)){
  Matter.Body.setVelocity(box1.body, {x:-5,y:0});
 }
 if (keyDown(RIGHT_ARROW)){
  Matter.Body.setVelocity(box1.body, {x:5,y:0});
 }
 if (keyWentDown(DOWN_ARROW)){
  Matter.Body.setVelocity(box1.body, {x:0,y:5});
 }
 randomX = random(300,2000);
 obstacle = new Obstacle(randomX,580,50,100);
 //spawnObstacles();
 obstacle.display();
 console.log(obstacle);
  drawSprites();
}

function spawnObstacles(){
  if (frameCount%60 == 0){
    randomX = random(300,2000);
    obstacle = new Obstacle(randomX,580,50,100);
    
  }
}
