
var sea1;
var ship1;
var shipImg,SeaImg1;

function preload(){
ShipImg = loadAnimation("ship-1.png","ship-2.png");
SeaImg1 = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  

  
  sea1 = createSprite(200,200,400,400);
  sea1.velocityX = -1;
  sea1.scale = 0.25;
  sea1.addImage(SeaImg1);

  ship1 = createSprite(150,250,10,10);
  ship1.mirrorX(-1);
  ship1.scale = 0.25;
  ship1.addAnimation("Loading",ShipImg);
  

}

function draw() {
  background("black");
  
  if(sea1.x < 0){
    sea1.x = sea1.width/2;
  }


  drawSprites();
}