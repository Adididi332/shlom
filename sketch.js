let noseStuck = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (!noseStuck) {
    let r = random(10);
    let bgR = map(mouseX, 0, width, 0, 255);
    let bgB = map(mouseY, 0, height, 0, 255);
    background(bgR, 201, bgB);
    face(250, 250, r);
  } else {
    face(250, 250, 0);
  }
}

function face(x, y, r) {
  drawHead(x, y);
  drawEars(x, y);
  drawEyes(x, y);
  drawNose(x, y);
  drawMouth(x, y);
  drawHat(x, y);
  drawBeard(x, y);
  drawEyebrows(x, y, r);
}

function drawHead(x, y) {
  fill(255, 219, 172);
  noStroke();
  ellipse(x, y, 150, 200); // Head
}

function drawEars(x, y) {
  fill(255, 219, 172);
  ellipse(x - 80, y - 30, 40, 60); // Left ear
  ellipse(x + 80, y - 30, 40, 60); // Right ear
}

function drawEyes(x, y) {
  fill(255);
  ellipse(x - 30, y - 40, 30, 20); // Left eye white
  ellipse(x + 30, y - 40, 30, 20); // Right eye white

  fill(0);
  let leftPupilX = constrain(mouseX, x - 40, x - 20);
  let leftPupilY = constrain(mouseY, y - 50, y - 30);
  let rightPupilX = constrain(mouseX, x + 20, x + 40);
  let rightPupilY = constrain(mouseY, y - 50, y - 30);

  // Ensure the pupils move within the eye circles
  let leftEyeCenter = createVector(x - 30, y - 40);
  let rightEyeCenter = createVector(x + 30, y - 40);

  let leftPupil = createVector(leftPupilX, leftPupilY);
  let rightPupil = createVector(rightPupilX, rightPupilY);

  if (leftPupil.dist(leftEyeCenter) > 10) {
    leftPupil = p5.Vector.sub(leftPupil, leftEyeCenter).setMag(10).add(leftEyeCenter);
  }

  if (rightPupil.dist(rightEyeCenter) > 10) {
    rightPupil = p5.Vector.sub(rightPupil, rightEyeCenter).setMag(10).add(rightEyeCenter);
  }

  ellipse(leftPupil.x, leftPupil.y, 10, 10); // Left pupil
  ellipse(rightPupil.x, rightPupil.y, 10, 10); // Right pupil
}

function drawNose(x, y) {
  fill(255, 192, 128);
  if (noseStuck) {
    ellipse(x, y, 20, 30); // Nose stuck in the center
  } else {
    ellipse(mouseX, y, 20, 30); // Nose follows mouse horizontally
  }
}

function drawMouth(x, y) {
  fill(0);
  arc(x, y + 50, 50, 30, 0, PI); // Mouth
}

function drawHat(x, y) {
  fill(255);
  rect(x - 50, y - 115, 100, 30); // Hat brim
  triangle(x - 50, y - 115, x + 50, y - 115, x, y - 180); // Hat top
}

function drawBeard(x, y) {
  fill(255);
  triangle(x - 30, y + 60, x, y + 100, x - 20, y + 80); // Left beard triangle
  triangle(x + 30, y + 60, x, y + 100, x + 20, y + 80); // Right beard triangle
  triangle(x - 15, y + 70, x + 15, y + 70, x, y + 100); // Center beard triangle
}

function drawEyebrows(x, y, r) {
  fill(0);
  rect(x - 45, y - 70, 30, 10); // Left eyebrow
  rect(x + 15, y - 70, 30, 10); // Right eyebrow
  triangle(x - 70 - r, y - 70, x - 15, y - 60, x - 55, y - 65); // Left eyebrow point
  triangle(x + 70 + r, y - 70, x + 15, y - 60, x + 55, y - 65); // Right eyebrow point
}

function mousePressed() {
  noseStuck = true;
}

function mouseReleased() {
  noseStuck = false;
}
