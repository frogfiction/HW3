var ballX = 300;
var ballY = 200;
var ballSpeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 200, 220);

  noStroke();
  fill(10, 100);
  ellipse(ballY, ballX, 50);

  noStroke();
  fill(10, 100);
  ellipse(ballX, ballY, 50);

  noStroke();
  fill(10, 100);
  ellipse(100, ballY, 50);

  ballY = ballY + ballSpeed;

  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }

  if (ballY < 0) {
    ballSpeed = -ballSpeed;
  }

}
