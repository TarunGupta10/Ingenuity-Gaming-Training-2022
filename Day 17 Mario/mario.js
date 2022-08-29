// Global Scope
var bg, bgImage;
var mario, mario_running;
var ground;
var brickImage, bricksGroup;
var coinsImage, coinsGroup;
var mushImage, turtleImage, obstaclesGroup;
var coinScore = 0;
var coinSound;
var jumpSound;
var bgSound;
var restartImg;
var dieSound;
var mario_collided;
var gameState = "PLAY";

var restartImg;

// Load Assets
function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png",
    "images/mar7.png"
  );

  brickImage = loadImage("images/brick.png");
  coinsImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png",
    "images/con6.png"
  );
  mushImage = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  turtleImage = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  mario_collided = loadAnimation("./images/dead.png");

  dieSound = loadSound("./sounds/dieSound.mp3");

  restartImg = loadImage("./images/restart.png");
  
  coinSound = loadSound("./sounds/coinSound.mp3");
  jumpSound = loadSound("./sounds/jump.mp3");
  bgSound = loadSound("./sounds/mario-bg.mp3");
}

// create basic Scaleton with their required credentials
function setup() {
  // Create Canvas
  createCanvas(1200, 700);
  bgSound.play();
  bgSound.loop();

  // create Objects
  bg = createSprite(600, 300, 150, 50);
  mario = createSprite(200, 520, 150, 50);

  // Add pictures on Objects
  bg.addImage(bgImage);
  mario.addAnimation("running", mario_running);

  // Scale Objects
  bg.scale = 0.5;
  mario.scale = 0.2;

  // create Ground
  ground = createSprite(200, 580, 400, 10);

  bricksGroup = new Group();
  coinsGroup = new Group();
  obstaclesGroup = new Group();

  mario.addAnimation("collided", mario_collided);

  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;
}

// Used to redraw the Objects on the canvas
function draw() {

    // Redraw Objects
    drawSprites();

  if (gameState == "PLAY") {
  // Make background move and repeate
  bg.velocityX = -5;
  if (bg.x < 100) {
    bg.x = bg.width / 4;
  }

  // mario Fly
  if (keyDown("space")) 
  {mario.velocityY = -10;
  jumpSound.play();
  }

  // add Gravity
  mario.velocityY = mario.velocityY + 0.5;

  // mario stuck on ground
  mario.collide(ground);
  ground.visible = false;

  // call GenerateBricks
  generateBricks();

  for (var i = 0; i < bricksGroup.length; i++) {
    var temp = bricksGroup.get(i);
    if (mario.isTouching(temp)) {
      mario.collide(temp);
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

  generateCoins();

  for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);
    if (mario.isTouching(temp)) {
      temp.destroy();
      coinSound.play();
      coinScore++;
      temp = null;
      // mario.collide(temp)
    }
  }
  generateObstacles();
    if (obstaclesGroup.isTouching(mario)) {
      dieSound.play();
      bgSound.stop();
      gameState = "END";
    }
  } 
  
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);

    brickGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }

  // display score
  textSize(20)
  fill("brown")
  text("Coins Collected = " + coinScore, 500, 50)
}

function generateBricks() {
  if (frameCount % 80 == 0) {
    console.log(frameCount);

    var brick = createSprite(1200, 100, 40, 10);
    // 50-450 ke bich range karega
    brick.y = random(100, 430);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;
    brick.lifetime = 250;
    bricksGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 50 == 0) {
    // console.log(frameCount);

    var coin = createSprite(1200, 100, 40, 10);
    // 50-450 ke bich range karega
    coin.y = random(150, 430);
    coin.addAnimation("rotate", coinsImage);
    coin.scale = 0.1;
    coin.velocityX = -5;
    coin.lifetime = 250;
    coinsGroup.add(coin);
  }
}

function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 555, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    var rand = Math.floor(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushImage);
        break;
      case 2:
        obstacle.addAnimation("turtle", turtleImage);
        break;
      default:
        break;
    }
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}

function restartGame() {
  gameState = "PLAY";

  obstaclesGroup.destroyEach();
  brickGroup.destroyEach();
  coinsGroup.destroyEach();

  mario.changeAnimation("running", mario_running);
  mario.scale = 0.2;

  coinScore = 0;

  restart.visible = false;
}


