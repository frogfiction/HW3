What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;

What code makes the "lawnmower" come by? How often does it come by?

  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10; 
   
The lawnmower comes by randomly between the numbers of 1000 and 999

What's the point of the h variable?
The h variable indicates the height of the grass.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
The grass starts at -10 so that it looks short at the beginning.
