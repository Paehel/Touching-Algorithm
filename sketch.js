var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;

}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width/ 2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 ) {
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";

  }else{
    movingRect.shapeColor = "yellow";
     fixedRect.shapeColor = "yellow";

  }
  

  drawSprites();
}