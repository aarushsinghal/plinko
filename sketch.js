const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,ground;
var divi=[];
var plink=[];
var ball1=[];

function setup() {
  createCanvas(600,900);
  engine=Engine.create();
  world=engine.world;
  for(var i = 0; i<=600;i=i+60){
    divi.push(new Divisions(i,750,15,300))
  }
  ground=new Ground (300,895,600,15)

  for( i = 50; i<=600;i=i+80){
    plink.push(new Plinko(i,200))
  }

  
  for( i = 20; i<=600;i=i+80){
    plink.push(new Plinko(i,250))
  }

  
  for( i = 50; i<=600;i=i+80){
    plink.push(new Plinko(i,300))
  }

  
  for( i = 20; i<=600;i=i+80){
    plink.push(new Plinko(i,350))
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  for( i = 0; i<divi.length;i=i+1){
    divi[i].display();
  }
  ground.display();

  for( i = 0; i<plink.length;i=i+1){
    plink[i].display();
  }
  if(frameCount%60===0){
   ball1.push(new Ball(random(20,480),0));
  }
  for( i = 0; i<ball1.length;i=i+1){
    ball1[i].display();
  }
}