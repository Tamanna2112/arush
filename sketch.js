
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drone,boss,tree,mars,jupiter,sun,man,fan,bird,ring,ringimg,invisibleGround,ring2,ring3,ring4,backgr,tower,backgroundimg,canvas;
var droneimg,bossimg,treeimg,marsimg,jupiterimg,sunimg,manimg,fanimg,birdimg,towerimg;
//var gameState=PLAY;

function preload()
{
	droneimg=loadImage("whitehat/drone without background.png");
	bossimg=loadImage("whitehat/robot boss obstacle.png");
	treeimg=loadImage("whitehat/tree_obstacle-removebg-preview.png");
	marsimg=loadImage("whitehat/mars.obstacle-removebg-preview.png");
	jupiterimg=loadImage("whitehat/jupiter.png");
	sunimg=loadImage("whitehat/sun-removebg-preview.png");
	manimg=loadImage("whitehat/parachute_obstacle-removebg-preview.png");
	fanimg=loadImage("whitehat/obstacle_fan1-removebg-preview.png");
	birdimg=loadImage("whitehat/eagle_obstacle-removebg-preview.png");
	ringimg=loadImage("whitehat/ring.png")
	towerimg=loadImage("whitehat/tower2.png")
    backgroundimg=loadImage("whitehat/background1.png");
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	createCanvas(1200,800);
	rectMode(CENTER);


   
	backgr=createSprite(0,0,1200,800);
  backgr.addImage(backgroundimg);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
	
	
	
    drone=createSprite(200,150,50,50);
	drone.addImage("drone",droneimg);
	drone.scale=0.5

    invisibleGround=createSprite(200,800,50,50);
	invisibleGround.visible=false;

	tower=createSprite(100,500);
    tower.addImage("TOWER2",towerimg)
	tower.scale=0.5;

	ring=createSprite(500,100);
	ring.addImage("ring",ringimg);
	
	ring2=createSprite(1000,550);
	ring2.addImage("ring2",ringimg)
}


function draw() {
	background(backgroundimg);
	if(backgr.x<0){
		backgr.x=backgr.width/2;
	  }
  if(keyDown(UP_ARROW)){

	drone.velocityY=-5;

  }
  if(keyDown(DOWN_ARROW)){
	  drone.velocityY=5;
  }

  if(keyDown(RIGHT_ARROW)){
	drone.velocityX=5;
}

if(keyDown(LEFT_ARROW)){
	drone.velocityX=-5;
}

drone.velocityY = drone.velocityY + 0.8
drone.collide(invisibleGround)
	//}



invisibleGround.display();
drone.display();
ring.display();
ring2.display();
tower.display();

  drawSprites();
 
}

// function keyPressed() {
//  if (keyCode === LEFT_ARROW) {
// 	helicopterSprite.x=helicopterSprite.x-20
// 	translation={x:-20,y:0};
// 	Matter.Body.translate(packageBody,translation)
//  }
//  else if(keyCode===RIGHT_ARROW){
// 	helicopterSprite.x=helicopterSprite.x+20
// 	translation={x:+20,y:0};
// 	Matter.Body.translate(packageBody,translation)
//  }
// else if(keyCode===DOWN_ARROW){
// 	Matter.Body.setStatic(packageBody,false);

// }	

//   }




