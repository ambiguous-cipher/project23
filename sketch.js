
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
	paper1 = new Paper();
	trashCan = new TrashSides(500, 540);
	groundBody = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
	World.add (world, groundBody);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	rect(groundBody.position.x, groundBody.position.y, canvas.width, 10);
	fill(255);

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 5, y: -90});
	}

	trashCan.display();
	paper1.display();
	drawSprites();
 
}
