
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, stoneImg, ground, ground1 ;
var backgroundImg;
//var score;
var count=0;
var chain;

function preload() {
  //getBG();
   getbg();
}


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	stone  = new Stone(160,500,20);

  //level one - ground one
	mango1 = new Mango(395,470,40,40);
	mango2 = new Mango(435,470,40,40);
	mango3 = new Mango(475,470,40,40);
	mango4 = new Mango(515,470,40,40);
	mango5 = new Mango(555,470,40,40);
	mango6 = new Mango(595,470,40,40);
  //level one - ground two
  mango7 = new Mango(730,395,40,40);
  mango8 = new Mango(770,395,40,40);
  mango9 = new Mango(810,395,40,40);
  mango10= new Mango(850,395,40,40);
  mango11= new Mango(890,395,40,40);
  mango12= new Mango(930,395,40,40);
  //level two - ground one
  mango13= new Mango(435,430,40,40);
  mango14= new Mango(475,430,40,40);
  mango15= new Mango(515,430,40,40);
  mango16= new Mango(555,430,40,40);
  //level two - ground two
  mango17= new Mango(770,355,40,40);
  mango18= new Mango(810,355,40,40);
  mango19= new Mango(850,355,40,40);
  mango20= new Mango(890,355,40,40);
  //level three - ground one
  mango21= new Mango(475,390,40,40);
  mango22= new Mango(515,390,40,40);
  //level three - ground two
  mango23= new Mango(810,315,40,40);
  mango24= new Mango(850,315,40,40);
  //level four - ground one
  mango25= new Mango(495,350,40,40);
  //level four - ground two
  mango26= new Mango(830,275,40,40);


  
  ground = new Ground(495,500,242,20);
  ground1 = new Ground(830,425,242,20);


	chain = new Chain(stone.body,{x:160, y:220});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // background(500);
 Engine.update(engine);
 if(backgroundImg)
    background(backgroundImg);

  //background("black")
  fill('pink');
  textSize(30);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 10,30 );
 

  noStroke();
  textSize(35);
  fill("white");
  text("SCORE: "+count, 300, 80);
 
  ground.display();
  ground1.display();
 
  stone.display();

  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
  mango26.display();
 

  chain.display();



  //detectCollision(stone, mango1);
  //detectCollision(stone, mango2);
  //detectCollision(stone, mango3);
 // detectCollision(stone, mango4);
  //detectCollision(stone, mango5);
 // detectCollision(stone, mango6);
 // detectCollision(stone, mango7);
 // detectCollision(stone, mango8);
 // detectCollision(stone, mango9);
 // detectCollision(stone, mango10);
//  detectCollision(stone, mango11);
 // detectCollision(stone, mango12);
//  detectCollision(stone, mango13);
 // detectCollision(stone, mango14);
//  detectCollision(stone, mango15);
//  detectCollision(stone, mango16);
 // detectCollision(stone, mango17);
 // detectCollision(stone, mango18);
 // detectCollision(stone, mango19);
 // detectCollision(stone, mango20);
 // detectCollision(stone, mango21);
 // detectCollision(stone, mango22);
 // detectCollision(stone, mango23);
//  detectCollision(stone, mango24);
//  detectCollision(stone, mango25);
//  detectCollision(stone, mango26);//


  
  mango1.score();
  mango2.score();
  mango3.score();
  mango4.score();
  mango5.score();
  mango6.score();
  mango7.score();
  mango8.score();
  mango9.score();
  mango10.score();
  mango11.score();
  mango12.score();
  mango13.score();
  mango14.score();
  mango15.score();
  mango16.score();
  mango17.score();
  mango18.score();
  mango19.score();
  mango20.score();
  mango21.score();
  mango22.score();
  mango23.score();
  mango24.score();
  mango25.score();
  mango26.score();
 


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}

//function detectCollision(lstone,lmango){
 // stoneBodyPosition = lstone.body.position;
 //  mangoBodyPosition = lmango.body.position;

  


  


//}

/*var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
       Matter.Body.setStatic(lmango.body, false);
 }*/



async function getbg(){
  var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var respJSON = await resp.json();
  var dtime = respJSON.datetime;
  var hour = dtime.slice(11,13);
  //console.log(hour);

 if(hour>=06 && hour<=18){
     bg = "day bg.jpg";

 }

 else{
     bg = "night bg.jpg";
 }

 backgroundImg = loadImage(bg);
 //console.log(backgroundImg);
}
