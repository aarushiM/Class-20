var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50,100);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(500,300,100,50);
  movingRect.shapeColor = "green"
}

function draw() {
  background(0,0,0); 
   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;
   console.log(fixedRect.width/2 + movingRect.width/2);
   console.log(movingRect.x - fixedRect.x);
   if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
   }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
   }
  drawSprites();
}