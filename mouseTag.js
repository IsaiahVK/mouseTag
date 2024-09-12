let x = window.innerWidth
let y = window.innerHeight
let ball = new Ball(x/2, y/2, 4, 4, 100)

let score = 0

let mouseDistance

function setup()
{
	createCanvas(x, y)
	background(0)
	textAlign(CENTER)
}

function draw()
{
	if(score <= 25)
	{
		startGame()
	}

	else if(score > 25){
		winScreen()
	}

}

function startGame()
{
	background(0)
	fill(ball.colorR, ball.colorG, ball.colorB)
	ellipse(ball.xPos, ball.yPos, ball.diameter, ball.diameter)
	fill(255)
	textSize(32)
	text("Your score is: " + score + '!', x/12, y/12)

	mouseDistance = dist(mouseX, mouseY, ball.xPos, ball.yPos)

	if(ball.xPos >= x - ball.diameter/2 || ball.xPos <= ball.diameter/2)
	{
		ball.accelerationX *= -1
	}

	if(ball.yPos >= y - ball.diameter/2 || ball.yPos <= ball.diameter/2)
	{
		ball.accelerationY *= -1
	}
	ball.xPos += ball.accelerationX
	ball.yPos += ball.accelerationY

	if(mouseDistance < ball.diameter/2)
	{
		score++
		ball.xPos = random((ball.diameter/2) + 1, x)
		ball.yPos = random((ball.diameter/2) + 1, y)
		ball.accelerationX += 4
		ball.accelerationY += 4
		ball.diameter -= 2
		ball.colorR = random(255)
		ball.colorG = random(255)
		ball.colorB = random(255)
	}
}

function winScreen()
{
	background(109, 165, 255)
	fill(255)
	textSize(50)
	text("You won!", x/2, y/2)
}

function Ball(x, y, accX, accY, d, colorR, colorG, colorB)
{
	this.xPos = x 
	this.yPos = y
	this.accelerationX = accX
	this.accelerationY = accY
	this.diameter = d
	this.colorR = colorR
	this.colorG = colorG
	this.colorB = colorB
}

function windowResized()
{
	x = window.innerWidth
	y = window.innerHeight
	setup()
}