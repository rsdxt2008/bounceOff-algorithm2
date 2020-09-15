var fixedRect, movingRect;
var gameObj1, gameObj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(600, 300, 50, 80);
  gameObj1 .shapeColor = "green";
  gameObj1.debug = true;

  gameObj2 = createSprite(800, 300, 50, 80);
  gameObj2 .shapeColor = "green";
  gameObj2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObj1.velocityX = 7;
  gameObj2.velocityX = -8;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameObj1, gameObj2);

  drawSprites();
}

