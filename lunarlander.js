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

function bear(x, y) {
  push();
  stroke(1);
  fill(92, 64, 51);
  // ears
  ellipse(140, 120, 50, 50);
  ellipse(260, 120, 50, 50);

  // arms
  ellipse(290, 270, 50, 50);
  ellipse(110, 270, 50, 50);

  // legs
  ellipse(130, 380, 50, 50);
  ellipse(270, 380, 50, 50);

  // body
  ellipse(200, 300, 190, 200);
  ellipse(200, 170, 150, 150);

  // light color accents
  fill(112, 84, 71);
  ellipse(200, 310, 120, 130);
  ellipse(200, 200, 60, 40);

  // eyes
  fill(0, 0, 0);
  ellipse(160, 180, 10, 10);
  ellipse(240, 180, 10, 10);

  // nose
  ellipse(200, 190, 20, 10);
  line(200, 195, 190, 205);
  line(200, 195, 210, 205);
  pop();
}

function draw() {
  noStroke();
  scenery();
  trees(60, 210);

  push();
  scale(0.2);
  translate(1300, 300);
  bear(0, 0);
  pop();

  push();
  translate(70, 75);
  scale(0.7);
  trees(0, 0);
  pop();

  push();
  translate(450, 0);
  trees(0, 0);
  pop();
}
