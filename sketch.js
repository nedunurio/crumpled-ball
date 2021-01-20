
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bock1,block2,block3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new paper(700,320,70,70);


	block1=createSprite(350,650,200,20);
	block1.shapeColor="red"

	block2=createSprite(250,610,20,100);
	block2.shapeColor="red"

	block3=createSprite(459,610,20,100);
	block3.shapeColor="red"

	Engine.run(engine);
  

	function keyPreseed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{*:85,y:-85})
	}
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();
  drawSprites();

}



