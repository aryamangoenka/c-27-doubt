var bob1,bob2,bob3,bob4,bob5;
var roof1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(400,450,40);
bob2=new bob(440,450,40);
bob3=new bob(480,450,40);
bob4=new bob(360,450,40);
bob5=new bob(320,450,40);
roof1=new roof(400,250,250,20);
Rope=new rope(roof1.body,bob1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  Rope.display();
  drawSprites();
 
}



