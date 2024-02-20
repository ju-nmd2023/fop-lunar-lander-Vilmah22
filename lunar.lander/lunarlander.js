function setup() {
  createCanvas(550, 300);
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

  translate(-300, -60);

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
  ellipse(40, 20, 50, 50);
  ellipse(160, 20, 50, 50);

  // arms
  ellipse(190, 170, 50, 50);
  ellipse(10, 170, 50, 50);

  // legs
  ellipse(30, 280, 50, 50);
  ellipse(170, 280, 50, 50);

  // body
  ellipse(100, 200, 190, 200);
  ellipse(100, 70, 150, 150);

  // light color accents
  fill(112, 84, 71);
  ellipse(100, 210, 120, 130);
  ellipse(100, 100, 60, 40);

  // eyes
  fill(0, 0, 0);
  ellipse(60, 80, 10, 10);
  ellipse(140, 80, 10, 10);

  // nose
  ellipse(100, 90, 20, 10);
  line(100, 95, 90, 105);
  line(100, 95, 110, 105);
  pop();
}

function startScreen() {
  if (state === "start") {
    background(190, 230, 255);
    textSize(50);
    text("Bear Parachute", 120, 50);

    fill(0, 0, 0);
    noStroke();
    textSize(11);
    text(
      "Use the up ↑ and down ↓\nkeys to help land Beary\nsafely on the ground!",
      90,
      160
    );
    startButton();
    bear(260, 220);
  }
}

function startButton() {
  fill(255, 255, 255);
  stroke(1);
  strokeWeight(2);
  rect(226, 150, 110, 40, 7);
  fill(255, 168, 200);
  textSize(20);
  text("S T A R T", 237, 177);
}

function retryButton() {
  fill(255, 255, 255);
  stroke(1);
  strokeWeight(2);
  rect(350, 95, 100, 40, 7);
  textSize(17);
  fill(255, 168, 200);
  text("R E T R Y", 362, 122);
}

function resultScreen() {
  if (state === "result") {
    background(190, 230, 255);
    retryButton();
    text("You win!", 200, 100);
  }
}

function gameScreen() {
  if (state === "game") noStroke();
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
  parachute();
  pop();
}

let bearY = 50;
let velocity = 0.5;
let acceleration = 0.04;

let gameIsRunning = false;
let state = "start";

// retry button
/* function mousePressed() {
  if (
    mouseIsPressed &&
    mouseX > 350 &&
    mouseX < 350 + 100 &&
    mouseY > 100 &&
    mouseY < 100 + 40
  ) {
    gameIsRunning = true;
    bearY = 50;
    velocity = 0.5;
    retryButtonVisible = false;
    loop();
  }
} */

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }

  /*if (
    mouseIsPressed &&
    mouseX > 220 &&
    mouseX < 220 + 100 &&
    mouseY > 150 &&
    mouseY < 150 + 40
  ) {
    startScreenVisible = false;
    gameIsRunning = true;
    buttonVisible = false;
  } */

  if (keyIsDown(UP_ARROW)) {
    velocity -= 0.5;
  } else if (keyIsDown(DOWN_ARROW)) {
    velocity += 0.5;
  }

  if (gameIsRunning === true) {
    bearY += velocity;
    velocity += acceleration;
  }

  if (bearY > 195) {
    gameIsRunning = false;
    if (velocity <= 0.6) {
      fill(252, 126, 173);
      textSize(20);
      noStroke();
      text("You win!", 235, 120);
      console.log("Win!");
    } else {
      fill(252, 126, 173);
      textSize(20);
      noStroke();
      text("You lose :(", 225, 120);
      console.log("Game over");
    }
    noLoop();
  }
}

function mousePressed() {
  if (state === "start") {
    if (
      mouseIsPressed &&
      mouseX > 220 &&
      mouseX < 220 + 100 &&
      mouseY > 150 &&
      mouseY < 150 + 40
    ) {
      state = "game";
      gameIsRunning = true;
    } else if (state === "game") {
      state = "result";
    } else if (state === "result") {
      state = "game";
      gameIsRunning = true;
      bearY = 50;
      velocity = 0.5;
      loop();
    }
  }
}
