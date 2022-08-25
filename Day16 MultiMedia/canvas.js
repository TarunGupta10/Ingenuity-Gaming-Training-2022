// selectors
var canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');


// ctx.fillRect(x,y,width,height)
canvas.width = window.innerWidth

// filled rectangle
ctx.fillStyle = "green"
ctx.fillRect(50, 50, 150, 150)

// stroke Rectangle
ctx.lineWidth= 5;
ctx.strokeStyle='blue';
ctx.strokeRect(450, 50, 100, 100 )

// Round Rectangle
ctx.fillStyle = "orange"
ctx.roundRect(700, 50, 100, 100, [10] )
ctx.fill()

// clear canvas
// ctx.clearRect(0, 50, 100, 200);

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.font = "30px Arial"
ctx.fillStyle = "red"
ctx.fillText("Hello World..." , 200, 200)


ctx.lineWidth=1
ctx.strokeStyle = "purple"
ctx.strokeText("Hello World..." , 200, 300)

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.strokeStyle = "purple"
ctx,moveTo(50,50)
ctx.lineTo(150,50)
ctx.lineTo(100,50)
ctx.lineTo(50,50)
// ctx.closePath();

ctx.fillStyle = "coral"
// ctx.stroke()
ctx.fill()



ctx.beginPath();
ctx,moveTo(250,50)
ctx.lineTo(150,200)
ctx.lineTo(250,200)
ctx.closePath();

ctx.stroke()



ctx.beginPath()
ctx.fillStyle = "teal"
ctx.arc(300,300, 100, 0, Math.PI*2)
ctx.stroke()


// radian = (Math.PI/180) degree
// radian = (Math.PI)*2    =   Full Circle
// radian = (Math.PI)    =   Half Circle
