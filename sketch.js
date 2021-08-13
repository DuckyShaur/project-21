
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall1,wall2;
var ball


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,670,width,20)
wall1 = new Ground(1100,600,20,120)
wall2 = new Ground(1350,600,20,120)
	
	var ball_options = {
		restitution: 0.3,
		friction:0,
		density:1.2,
		isStatic:false,
	}
  ball = Bodies.circle(260,100,20,ball_options);
  World.add(world,ball)
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
 wall1.display()
 wall2.display()
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,40,40)
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

