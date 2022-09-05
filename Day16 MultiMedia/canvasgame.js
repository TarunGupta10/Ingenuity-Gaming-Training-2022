// selectors
var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image1 = document.getElementById("source1");

// Animation
var circle = {
  w:40,
  h:40,
  x: 200,
  y: 200,
  size: 40,
  dx: 5,
  dy: 5,
};

// Draw Circle
function drawCircle() {
  ctx.beginPath();
  ctx.drawImage(image1,circle.x, circle.y, circle.w,circle.h);
}

function update1() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  circle.x += circle.dx;
  circle.y += circle.dy;

  // Detect Wall
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0)
    circle.dx *= -1;

  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0)
    circle.dy *= -1;
    
  requestAnimationFrame(update1);
}

update1();