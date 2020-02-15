var ballX = 300;
var ballY = 200;
var ballSpeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100,200,220);
  
  noStroke ();
  fill (10,100);
  ellipse(ballY, ballX, 50);
  
  noStroke ();
  fill (10,100);
  ellipse(ballY, 100, 50);
  
    noStroke ();
  fill (10,100);
  ellipse(ballY, 50, 50);
  
      noStroke ();
  fill (10,100);
  ellipse(ballY, 150, 50);
  
      noStroke ();
  fill (10,100);
  ellipse(ballY, 200, 50);
  
      noStroke ();
  fill (10,100);
  ellipse(ballY, 250, 50);
  
   noStroke ();
  fill (10,100);
  ellipse(ballY, 350, 50);
  
        noStroke ();
  fill (10,100);
  ellipse(ballX, ballY, 50);
  
    noStroke ();
  fill (10,100);
  ellipse(100, ballY, 50);
  
      noStroke ();
  fill (10,100);
  ellipse(200, ballY, 50);
  
  noStroke ();
  fill (10,100);
  ellipse(50, ballY, 50);
  
  noStroke ();
  fill (10,100);
  ellipse(250, ballY, 50);
  
  noStroke ();
  fill (10,100);
  ellipse(150, ballY, 50);
  
  noStroke ();
  fill (10,100);
  ellipse(350, ballY, 50);
  

  ballY = ballY + ballSpeed;
  
  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY < 0) {
    ballSpeed = -ballSpeed;
  }
  
  
}
