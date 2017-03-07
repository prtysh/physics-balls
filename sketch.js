
//module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var particles = [];
var boundaries = [];

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = Engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  //ground = new Boundary(200, height, width, 100);
  //World.add(engine.world, ground);
  boundaries.push(new Boundary(width/3, height, width, 20, 0.3));
  boundaries.push(new Boundary(3*width/4, height/2, width, 20, -0.5));
  //boxA = new Box(200, 100, 50, 50);
  }

function mouseDragged(){
  particles.push(new Particle(mouseX,mouseY,random(10,30)));
}

function draw() {
  background(51);
  text("click and drag mouse",140,50,325,125);
  Engine.update(engine);
  //console.log(ground);
  fill(155);
  //rect(0,300,400,300);
  for (var i=0; i < particles.length;i++){
    particles[i].show();
    if(particles[i].isOffScreen()){
      particles[i].removeFromWorld();
      particles.splice(i,1);
    }

  }
  for (var j=0; j < boundaries.length;j++){
    boundaries[j].show();
  }
  //ground.show();
  //rect(boxA.position.x,boxA.position.y,80,250);
}
