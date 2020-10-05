
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

	bob1 = new Bob(200, 550);
	bob2 = new Bob(300, 550);
	bob3 = new Bob(400, 550);
	bob4 = new Bob(500, 550);
	bob5 = new Bob(600, 550);
	roof = new Roof(400, 100);
	chain1 = new Chain(bob1.body, {x: 200, y:100});
	chain2 = new Chain(bob2.body, {x: 300, y:100});
	chain3 = new Chain(bob3.body, {x: 400, y:100});
	chain4 = new Chain(bob4.body, {x: 500, y:100});
	chain5 = new Chain(bob5.body, {x: 600, y:100});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	
	drawSprites();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,
			{
				x:225, y:325
			}
		);
	}
}