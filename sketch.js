var player, target;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7;
var mWall1, mWall2, mWall3, mWall4, mWall5, mWall6, mWall7, mWall8;


function setup() {
  createCanvas(400, 400);
  player = createSprite(20, 20, 20, 20);
  target = createSprite(370, 30, 40, 40);
  
  player.shapeColor = color(0, 0, 255);
  target.shapeColor = color(0, 0, 0);
  
  wall1 = createSprite(50, 50, 100, 10);
  wall2 = createSprite(150, 25, 10, 50); 
  wall4 = createSprite(250, 50, 10, 100); 
  
  wall3 = createSprite(200, 105, 300, 10);
  
  wall5 = createSprite(100, 230, 10, 240); 
  wall6 = createSprite(200, 280, 10, 240);
  wall7 = createSprite(300, 230, 10, 240);
  
  wall1.shapeColor = color(0, 255, 0); 
  
  wall2.shapeColor = color(0, 255, 0);
  wall3.shapeColor = color(0, 255, 0);
  
  wall4.shapeColor = color(0, 255, 0);
  wall5.shapeColor = color(0, 255, 0);
  
  wall6.shapeColor = color(0, 255, 0);
  wall7.shapeColor = color(0, 255, 0);
  
  
  mWall1 = createSprite(125, 50, 60, 10);
  
  mWall2 = createSprite(30, 105, 60, 10);
  mWall3 = createSprite(370, 105, 60, 10);
  
  mWall4 = createSprite(100, 350, 210, 10);
  mWall5 = createSprite(100, 160, 210, 10);
  
  mWall6 = createSprite(100, 375, 10, 50);
  mWall7 = createSprite(200, 135, 10, 50);
  mWall8 = createSprite(300, 375, 10, 50);
 
  
  mWall1.shapeColor = color(255, 0, 0); 
  
  mWall2.shapeColor = color(255, 0, 0);
  mWall3.shapeColor = color(255, 0, 0);
  
  mWall4.shapeColor = color(255, 0, 0);
  mWall5.shapeColor = color(255, 0, 0);
  
  mWall6.shapeColor = color(255, 0, 0);
  mWall7.shapeColor = color(255, 0, 0);
  mWall8.shapeColor = color(255, 0, 0);
}

function draw() {
  //background(random(0, 255), random(0, 255), random(0, 255));
  //console.log(player.velocityX, player.velocityY);
  background(255)
  
  if (keyCode === 37){
    player.velocityX = random(-1, -5);
    player.velocityY = 0;
  }
  if (keyCode === 38){
    player.velocityX = 0;
    player.velocityY = random(-1, -5);
  }
  if (keyCode === 39){
    player.velocityX = random(1, 5);
    player.velocityY = 0;
  }
  if (keyCode === 40){
    player.velocityX = 0;
    player.velocityY = random(1, 5);
  }
  
  if (player.y > 400 || player.y < 0 ||
      player.x > 400 || player.x < 0 ||
      player.isTouching(wall1) ||
      player.isTouching(wall2) ||
      player.isTouching(wall3) ||
      player.isTouching(wall4) ||
      player.isTouching(wall5) ||
      player.isTouching(wall6) ||
      player.isTouching(wall7) ||
      
      player.isTouching(mWall1) ||
      player.isTouching(mWall2) ||
      player.isTouching(mWall3) ||
      player.isTouching(mWall4) ||
      player.isTouching(mWall5) ||
      player.isTouching(mWall6) ||
      player.isTouching(mWall7) ||
      player.isTouching(mWall8)
     ){
    player.x = 20;
    player.y = 20;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  
  if (mWall1.x === 125){
    mWall1.velocityX = -1
  }else if (mWall1.x === 70){
   mWall1.velocityX = 1;
  }
  
  if (mWall2.x === 30){
    mWall2.velocityX = 1
  }else if (mWall2.x === 80){
   mWall2.velocityX = -1;
  }
  
  if (mWall3.x === 370){
    mWall3.velocityX = -1
  }else if (mWall3.x === 320){
    mWall3.velocityX = 1;
  }
  
  if (mWall4.x === 100){
    mWall4.velocityX = 2
  }else if (mWall4.x === 300){
    mWall4.velocityX = -2;
  }
  
  if (mWall5.x === 100){
    mWall5.velocityX = 2
  }else if (mWall5.x === 300){
    mWall5.velocityX = -2;
  }
  
  if (mWall6.y === 375){
    mWall6.velocityY = -1
  }else if (mWall6.y === 325){
    mWall6.velocityY = 1;
  }
  
  if (mWall7.y === 135){
    mWall7.velocityY = -1
  }else if (mWall7.y === 75){
    mWall7.velocityY = 1;
  }
  
  if (mWall8.y === 375){
    mWall8.velocityY = -1
  }else if (mWall8.y === 325){
    mWall8.velocityY = 1;
  }
  
  if (keyCode === 68 || player.isTouching(target)){
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    
    mWall1.destroy();
    mWall2.destroy();
    mWall3.destroy();
    mWall4.destroy();
    mWall5.destroy();
    mWall6.destroy();
    mWall7.destroy();
    mWall8.destroy();
    
    player.destroy();
    target.destroy();
    text("YOU WIN!!!", 160, 200)
  }
  
  drawSprites();
}