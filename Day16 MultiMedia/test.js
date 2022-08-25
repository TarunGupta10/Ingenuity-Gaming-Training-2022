// selector
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const image = document.getElementById("source");
const image1 = document.getElementById("source1");

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

var circle = {
    w:40,
    h:40,
    x: 200,
    y: 200,
    size: 40,
    dx: 5,
    dy: 5,
  };

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function drawCircle() {
    ctx.beginPath();
    ctx.drawImage(image1,circle.x, circle.y, circle.w,circle.h);
  }

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function ballPos(){
    circle.x += circle.dx;
    circle.y += circle.dy;

    detectWalls1()
}

function detectWalls1(){
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0)
    circle.dx *= -1;

  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0)
    circle.dy *= -1;
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}


// Create Animation
function update() {
  clear();

  drawPlayer();
  drawCircle();

  newPos();
  ballPos();

  requestAnimationFrame(update);
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
