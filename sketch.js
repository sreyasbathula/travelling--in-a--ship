var ship,sea;
var shipImg,seaImg; 

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-3.png",
                         "ship-2.png","ship-4.png");


}

function setup(){
  createCanvas(400,400);
  
  


//create a sea Sprite
sea=createSprite(400,200,900,10);
sea.addImage("sailing ",seaImg);
sea.velocityX=-3;
sea.scale=0.4;


// create a ship Sprite
ship=createSprite(200,200,10,10);
ship.addAnimation("moving",shipImg);
ship.scale=0.3;











}

function draw() {
  if (sea.x < 0) {
    sea.x = sea.width/8;
  }

  
  background("white");
 


drawSprites();
}