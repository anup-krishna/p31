const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;
var ground;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-10,width,20);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  }
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}
function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  for (var i=0;i<plinkos.length;i++){
    plinkos[i].display();
   }
  for (var i=0;i<divisions.length;i++){
    divisions[i].display();
   }
  ground.display();
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for (var i=0;i<particles.length;i++){
    particles[i].display();
   }
  noFill();
  stroke(255,0,0);
  strokeWeight(2);
  rect(width/2,height/2,width-2,height-2);
  drawSprites();
}