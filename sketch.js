function setup() {
  createCanvas(800,400);
 spacecraft = createSprite(300,150,20,30)
 spacecraft.addImage(spacecraft1);
 spacecraft.scale=0.25;
 
 iss = createSprite(500,100,20,30)
 iss.addImage(spacestation);
 iss.scale=0.65;

}
var iss, spacecraft , hasDocked =false;

function preload(){
  spacecraft1=loadImage("spacecraft1.png");
  spacecraft2=loadImage("spacecraft2.png");
  spacecraft3=loadImage("spacecraft3.png");
  spacecraft4=loadImage("spacecraft4.png");
  spacebg=loadImage("spacebg.jpg");
  spacestation=loadImage("iss.png");

}

function draw() {
  background(spacebg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-3;
      spacecraft.addImage(spacecraft2);
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y=spacecraft.y+3;
      spacecraft.addImage(spacecraft2);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x=spacecraft.x-3;
      spacecraft.addImage(spacecraft3);
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x=spacecraft.x+3;
      spacecraft.addImage(spacecraft4);
    }
    
  }
  if(spacecraft.x<=iss.x-10 && spacecraft.y<=iss.y-10){
    textSize(34);
    text("Docking Successfull",500,300);
    hasDocked = true;
  }
  drawSprites();

}