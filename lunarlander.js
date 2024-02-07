function setup() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

function scenery() {
  // sky
  fill(190, 230, 255);
  rect(0, 0, 600, height);

  // grass
  fill(106, 168, 79);
  rect(0, 250, 600, 100);

  // sun
  fill(255, 245, 105);
  ellipse(75, 50, 40);
}

// trees
function trees() {
  fill(106, 168, 79);
  triangle(60, 205, 35, 250, 85, 250);
  triangle(60, 190, 40, 230, 80, 230);
  triangle(60, 175, 45, 210, 75, 210);
}

function parachute() {
  // parachute
  push();
  // scale();

  translate(-250, -50);

  stroke(1);
  strokeWeight(0.5);

  line(305, 90, 280, 50);
  line(335, 90, 360, 50);

  fill(255, 168, 200);
  arc(320, 50, 80, 60, PI, 0, PIE);
  pop();
}

function bear(x, y) {
  stroke(1);
  strokeWeight(1);
  translate(x, y);
  push();
  scale(0.2);

  fill(92, 64, 51);
  // ears
  ellipse(x + 40, y + 20, 50, 50);
  ellipse(x + 160, y + 20, 50, 50);

  // arms
  ellipse(x + 190, y + 170, 50, 50);
  ellipse(x + 10, y + 170, 50, 50);

  // legs
  ellipse(x + 30, y + 280, 50, 50);
  ellipse(x + 170, y + 280, 50, 50);

  // body
  ellipse(x + 100, y + 200, 190, 200);
  ellipse(x + 100, y + 70, 150, 150);

  // light color accents
  fill(112, 84, 71);
  ellipse(x + 100, y + 210, 120, 130);
  ellipse(x + 100, y + 100, 60, 40);

  // eyes
  fill(0, 0, 0);
  ellipse(x + 60, y + 80, 10, 10);
  ellipse(x + 140, y + 80, 10, 10);

  // nose
  ellipse(x + 100, y + 90, 20, 10);
  line(x + 100, y + 95, x + 90, y + 105);
  line(x + 100, y + 95, x + 110, y + 105);
  pop();

  parachute();
}

let bearY = 50;
let velocity = 0.5;
const acceleration = 0.1;

function draw() {
  noStroke();
  scenery();
  trees();

  push();
  translate(70, 75);
  scale(0.7);
  trees();
  pop();

  push();
  translate(450, 0);
  trees();
  pop();

  push();
  bear(250, bearY);
  //rachute(250, bearY);
  pop();

  bearY = bearY + velocity;
  velocity = velocity + acceleration;

  if (mouseIsPressed) {
    velocity = velocity - 0.2;
  }
}
