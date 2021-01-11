
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log1=createSprite(700,650,180,10);
	log1.shapeColor="white";


	log2=createSprite(620,580,10,140);
	log2.shapeColor="white";

	log3=createSprite(780,580,10,140);
	log3.shapeColor="white";

	paper = new Paper(100,640,20)

	ground = new Ground(400,670,800,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  
  ground.display();
  drawSprites();
 
}

function keyPressed(){
 if (keyCode === UP_ARROW){
	matter.body.applyForce(paperObject.body,paperObject.body.position.{x:85,y:-85})

 }

}



