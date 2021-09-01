var path,invisiblepath,pathImg;
var boy,boy_running,boy_collided;


function preload (){
  //pre-load images
  boy_running = loadAnimation("runner-1.png","runner-2.png"); 
  boy_collided = loadImage("power.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(200,200);
  boy.addAnimation("running", boy_running);
  edges = createEdgeSprites();

  invisiblepath=createSprite(200,200);
  invisiblepath.visible=false;



}


function draw() {
    background(0);
    if(path.y > 400){
    path.y = height/2;
  }
  boy.mouseX;

  boy.collide(invisiblepath);
  drawSprite();

}