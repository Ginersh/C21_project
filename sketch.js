const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var basketside1,basketside2;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1)
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground = new Ground(width/2,670,width,20);
	basketside1 = new Ground(600,1100,120,20);
	basketside2 = new Ground(1100,600,20,120);

	Matter.Bodies.circle(200,100,20,ball_options)
	World.add(world,ball);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();


  drawSprites();
 
}



