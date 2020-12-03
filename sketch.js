
var zenia, taurus, cyclap, wall1, wall2, wall3,carGroup;

function setup() {
  createCanvas(400,400);
  wall1 = createSprite(350, 10, 20, 30);
  wall2 = createSprite(350, 50, 20, 30);
  wall3 = createSprite(350, 100, 20, 30);
  zenia = createSprite(10,10,10,10);
  taurus = createSprite(10, 50, 10,10);
  cyclap = createSprite(10,100,10,10); 
  carGroup.add(zenia,taurus,cyclap);
  wallGroup.add(wall1,wall2,wall3);
}

function draw() {
  background(255,255,255);  
zenia.velocityX = 0.5 * 2260 * 60 * 60/22500;
taurus.velocityX = 0.5 * 1522 * 50 * 50/22500;
cyclap.velocityX = 0.5 * 3000 * 134 * 134/22500;
zenia.bounce(wall1);
taurus.bounce(wall2);
cyclap.bounce(wall3);
if(carGroup.velocityX > 180){
  wall1.shapeColor = "red";
}
if(carGroup.velocityX > 80 && < 180){
  wall2.shapeColor = "yellow";
}
if(carGroup.velocityX < 80){
  wall3.shapeColor = "green";
}
drawSprites();
}

