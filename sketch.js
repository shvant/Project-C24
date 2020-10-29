
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	r1=new Box(400, 650, 200, 20);
	r2=new Box(310, 610, 20, 100);
	r3=new Box(490, 610, 20, 100);


	ground = new Ground(width/2, 650, width, 10   );

	paper=new Paper(200,200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
 r1.display();
 r2.display();
 r3.display();

 paper.display();
 
}

function keyPressed(){
	if( keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:35, y:-35})
	}
}

