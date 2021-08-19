const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var ground1,ground2,ground3;
var ball;
var button;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  button = createImg('click.png');
  button.position(750,200);
  button.size(50,50);
  button.mouseClicked(press);

  ground1 = new Ground(450,300,500,20);
  ground2 = new Box(550,245,20,150);
  ground3 = new Box(700,245,20,150);
  ball = new Ball(600,235,5,5);
  



  
  
  

}

function draw() {
  background("lightblue");
  Engine.update(engine);

  

  ground1.display();
  ground2.display();
  ground3.display();
  ball.display();

}


function press(){
  Matter.Body.applyForce(ball.body,{x:600,y:235},{x:0,y:-0.09});
}

