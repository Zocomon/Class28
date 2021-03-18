const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
function setup() {
  createCanvas(800,400);
  
  engine= Engine.create();
  world = engine.world;
box1= new Box(415,345,50,50);
 box2=new Box(535,345,50,50);
 box3= new Box(415,275,50,50);
 box4=new Box(535,275,50,50);
 box5= new Box(475,235,50,50);
 ground=new Ground(400,385,800,20);
 pig1= new Pig(475,345);
 pig2= new Pig(475,275);
log1=new Log(475,320,175,PI/2);
log2=new Log(475,255,175,PI/2);
log3=new Log(430,210,80,PI/7);
log4=new Log(530,210,80,-PI/7);
log5=new Log(150,150,50,PI/2)
bird=new Bird(100,100);
chain = new Chain(log5.body , bird.body)
}

function draw() {
  background("black")
  Engine.update(engine)
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
 ground.display();
pig1.display();
pig2.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 log5.display();
 bird.display();
 chain.display();
 text(mouseX + ',' + mouseY, mouseX, mouseY)

}
