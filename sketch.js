
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3, paper, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var paper_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}

	paper = Bodies.circle(100,400,20,paper_options);
	World.add(world,paper);

	dustbin1 = Bodies.rectangle(600,600,200,20,{isStatic:true} );
	World.add(world,dustbin1);

	dustbin2 = Bodies.rectangle(490,560,20,100,{isStatic:true});
	World.add(world,dustbin2);

	dustbin3 = Bodies.rectangle(710,560,20,100,{isStatic:true});
	World.add(world,dustbin3);

	ground = Bodies.rectangle(400,620,width,20,{isStatic:true});
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
  rectMode(CENTER);
  rect(dustbin1.position.x,dustbin1.position.y,200,20);
  rect(ground.position.x,ground.position.y,800,20);
  rect(dustbin2.position.x,dustbin2.position.y,20,100);
  rect(dustbin3.position.x,dustbin3.position.y,20,100);
	keyPressed();
	
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper,paper.position,{x:2.5,y:-4.8})
	}
}



