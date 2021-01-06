const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var paperBall, ground;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(50,height,1520,30);
	
	paperBall = new Garbage(100,100);
	leftBin = new Dustbin(450, 635, 20, 100);
	downBin = new Dustbin(535, 675, 150, 20);
	rightBin = new Dustbin(620, 635, 20, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  leftBin.display();
  rightBin.display();
  downBin.display();
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:53,y:-57})
	}
}