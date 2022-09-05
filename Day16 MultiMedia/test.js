// selector

var myAudio = document.getElementById("myAudio")
var btn = document.getElementById("img2")
btn.onclick = performanceTasks
function performanceTasks(){
    myAudio.play()
    myAudio.load()
    myAudio.autoplay = true
    if(myAudio.muted == true){
        myAudio.muted = false
        document.getElementById("img2").style.display = "none"
        document.getElementById("img1").style.display = "inline-flex"
    }
    else{
        myAudio.muted = true
        document.getElementById("img2").style.display = "inline-flex"
        document.getElementById("img1").style.display = "none"
    }
}



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
  size: 50,
  dx: 0,
  dy: 0,
};

var circle = {
  w: 30,
  h: 30,
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
  ctx.drawImage(image1, circle.x, circle.y, circle.w, circle.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function collide(cir1, cir2) {
    var dx1 = (cir1.x - cir2.x) / cir1.size;
    var dy1 = (cir1.y - cir2.y) / cir1.size;
    cir2.dx = -dx1;
    cir2.dy = -dy1;
    cir1.dx = dx1;
    cir1.dy = dy1;
  }
  function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

function playerball_Collision() {
    var player_circle_distance = getDistance(player.x, player.y, circle.x, circle.y) -player.size -circle.size;
    if (player_circle_distance < 0) {
      collide(circle, player);
    }
  }


function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function ballPos() {
  circle.x += circle.dx;
  circle.y += circle.dy;

  detectWalls1();
}

function detectWalls1() {
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

  //   playerball_Collision()
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

// function collide(cir1, cir2) {
//     var dx1 = (cir1.x - cir2.x) / cir1.size;
//     var dy1 = (cir1.y - cir2.y) / cir1.size;
//     cir2.dx = -dx1;
//     cir2.dy = -dy1;
//     cir1.dx = dx1;
//     cir1.dy = dy1;
//   }
//   function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
//   }

// function playerball_Collision() {
//     var player_circle_distance = getDistance(player.x, player.y, circle.x, circle.y) -player.size -circle.size;
//     if (player_circle_distance < 0) {
//       collide(circle, player);
//     }
//   }
