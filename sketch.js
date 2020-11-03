
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var log1,log2,log3;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,15);
	paper = new Paper(50,610,15);
    log1 = new Log(700, 610,150,90);
	log2 = new Log(690, 590,150,180);
	log3 = new Log(710, 590,150,180);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
 log1.display();
 log2.display();
 log3.display();
}



