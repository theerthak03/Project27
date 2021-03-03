
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof=new Roof(500,100,500,20)
 ball1=new Ball(300,300);
 ball2=new Ball(400,300);
 ball3=new Ball(500,300);
 ball4=new Ball(600,300);
 ball5=new Ball(700,300);
 rope1=new Rope(ball1.body,{x:300,y:100});
 rope2=new Rope(ball2.body,{x:400,y:100});
 rope3=new Rope(ball3.body,{x:500,y:100});
 rope4=new Rope(ball4.body,{x:600,y:100});
 rope5=new Rope(ball5.body,{x:700,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45} )
  }


}


