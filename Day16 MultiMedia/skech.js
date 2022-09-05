var player,
  target,
  obs1,
  obs2,
  obs3,
  obs4,
  obs5,
  obs6,
  obs7,
  obs8,
  edge,
  worm,
  score,
  wormgroup,
  background,
  wormImage,
  swampImage,
  playerImage,
  backImage;

function preload() {
  wormImage = loadImage("image/m1.png");
  swampImage = loadImage("image/m2.png");
  playerImage = loadImage("image/m3.png");
  backImage = loadImage("image/pngegg.png");
  ballImage = loadImage("image/pngeg.png");
  playImage = loadImage("image/deffen.png");
  goal = loadImage("image/goal.png");
  pan = loadImage("image/pg.png");
  pack = loadImage("image/www.png");
}

function setup() {
  createCanvas(1250, 1000);
  swamp = createSprite(625, 280);
  swamp.scale = 2.5;
  swamp.addImage(backImage);

  edge = createEdgeSprites();
  player = createSprite(620, 960, 30, 30);
  player.addImage(ballImage);
  player.scale = 0.1;
  target = createSprite(620, 100, 10, 10);
  // target.shapeColor = "blue";
  target.addImage(pack);
  target.scale = 0.3;
  obs1 = createSprite(250, 230, 100, 30);
  // obs1.shapeColor = "red";
  obs1.addImage(playImage);
  obs1.scale = 0.2;
  obs2 = createSprite(350, 550, 100, 30);
  obs2.shapeColor = "red";
  obs2.addImage(playImage);
  obs2.scale = 0.2;
  obs3 = createSprite(450, 390, 100, 30);
  obs3.shapeColor = "red";
  obs3.addImage(playImage);
  obs3.scale = 0.2;
  obs4 = createSprite(550, 700, 100, 30);
  obs4.shapeColor = "red";
  obs4.addImage(playImage);
  obs4.scale = 0.2;
  obs5 = createSprite(650, 230, 100, 30);
  obs5.shapeColor = "red";
  obs5.addImage(playImage);
  obs5.scale = 0.2;
  obs6 = createSprite(750, 550, 100, 30);
  obs6.shapeColor = "red";
  obs6.addImage(playImage);
  obs6.scale = 0.2;
  obs7 = createSprite(850, 390, 100, 30);
  obs7.shapeColor = "red";
  obs7.addImage(playImage);
  obs7.scale = 0.2;
  obs8 = createSprite(950, 700, 100, 30);
  obs8.shapeColor = "red";
  obs8.addImage(playImage);
  obs8.scale = 0.2;

  // wormGroup= new Group();

  obs1.velocityX = -20;
  obs2.velocityX = -20;
  obs3.velocityX = -20;
  obs4.velocityX = -20;
  obs5.velocityX = 20;
  obs6.velocityX = 20;
  obs7.velocityX = 20;
  obs8.velocityX = 20;
}

function draw() {
  background("black");
  drawSprites();

  if (keyDown("up")) {
    player.y = player.y - 20;
  }
  if (keyDown("down")) {
    player.y = player.y + 20;
  }
  if (keyDown("left")) {
    player.x = player.x - 20;
  }
  if (keyDown("right")) {
    player.x = player.x + 20;
  }
  player.bounceOff(edge[0]);
  player.bounceOff(edge[1]);
  player.bounceOff(edge[2]);
  player.bounceOff(edge[3]);
  obs1.bounceOff(edge[0]);
  obs1.bounceOff(edge[1]);
  obs2.bounceOff(edge[0]);
  obs2.bounceOff(edge[1]);
  obs3.bounceOff(edge[0]);
  obs3.bounceOff(edge[1]);
  obs4.bounceOff(edge[0]);
  obs4.bounceOff(edge[1]);
  obs5.bounceOff(edge[0]);
  obs5.bounceOff(edge[1]);
  obs6.bounceOff(edge[0]);
  obs6.bounceOff(edge[1]);
  obs7.bounceOff(edge[0]);
  obs7.bounceOff(edge[1]);
  obs8.bounceOff(edge[0]);
  obs8.bounceOff(edge[1]);

  if (player.isTouching(obs1)) {
    obs1.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }
  // text("You loose", 200, 300);

  if (player.isTouching(obs1)) {
    obs1.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs2)) {
    obs2.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs3)) {
    obs3.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs4)) {
    obs4.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs5)) {
    obs5.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs6)) {
    obs6.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs7)) {
    obs7.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(obs8)) {
    obs8.velocityX = 0;
    textSize(30);
    text("You Loss", 580, 490);
  }

  if (player.isTouching(target)) {
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
    obs5.velocityX = 0;
    obs6.velocityX = 0;
    obs7.velocityX = 0;
    obs8.velocityX = 0;
    textSize(40);
    text("You Win", 580, 490);
    stroke("transparent");
  }

  // stroke("black")
  // noFill();
  // ellipse(600,280,40,30);
  // player.x= mouseX;
  // player.y= mouseY;

  // if(player.x<640 && player.x>570 && player.y<300 && player.y>250 ){
  //   text("NO CHEATING!!",230,150);
  //   player.x=625;
  //   player.y=260;
  // }

  // generateWorms();

  // for(var i = 0 ; i< (wormGroup).length ;i++){
  //   var temp = (wormGroup).get(i) ;
  //   if (player.isTouching(temp)) {
  //     score++;
  //     temp.destroy();
  //     temp=null;
  //     }
  //   }

  // drawSprites();
  // textSize(30);
  // text("Worms destroyed:"+score,350,50);
}

// function generateWorms(){
// if(frameCount % 50===0){
//   console.log(frameCount);
//   var worm = createSprite(220,280,60,8);
//   worm.shapeColor="skyblue"
//   // worm.addImage("wormImage")
//   worm.scale = 0.5;
//   worm.velocityX=random(-10,10);
//   worm.velocityY=random(-10,10);
//   wormGroup.add(worm);
//   }
// }