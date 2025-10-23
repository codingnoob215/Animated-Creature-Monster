let a = 0;
let mouth = 60;
let eyes = 30;
let espeed = 1;
let speed = 1;
let rotation =45;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(101, 111, 49);
  
  // neck
  push();
  translate(180,370);
  
  rotate(radians(rotation));
  ellipse(0, 0, 260, 195);
  
  rotation = rotation +2;
  pop();
  //hair
  fill(228, 8, 10);
  ellipse(90, 240, 90,  80);
  ellipse(270, 240, 90, 80);
  //head
  fill(255);
  ellipse(180, 300, 200);
  // eyes
  stroke(204, 108, 231);
  strokeWeight(7);
  line(200, 260, 250, 250);
  line(100, 250, 150, 260);

  strokeWeight(0);
  fill(6, 2, 112);
    
  triangle(140,210,140,340,120,310);
  triangle(240,210,240,340,220,310);
  //eyes
  fill(0)
  ellipse(130, 280, 70,  eyes);
  ellipse(230, 280, 70,  eyes);
  fill(255, 222, 89);
  ellipse(130, 280, 20,  eyes);
  ellipse(230, 280, 20,  eyes);
  
  eyes=eyes-espeed;
  
  if (eyes<0)
    espeed= -espeed;
  if (eyes > 30)
    espeed = -espeed;
  
  fill(169, 1, 2);
  ellipse(180, 340, 160, 105);
  // teeth
  //fill(255, 222, 89);
  //triangle(180,310,180,340,150,300);
  // mouth
  fill(0)
  ellipse(180, 340, 120, mouth);
  
  mouth=mouth-speed;
  
  if (mouth<0)
    speed= -speed;
  if (mouth > 80)
    speed = -speed;
  
  
  // nose
  fill(228, 6, 6)
  ellipse(180, 300, 50,  50);
  
  
  
  
  drawGrid();
}
function drawGrid() {
  textSize(10);
  stroke(200);
  fill(120);
  for (let x = -width; x < width; x += 40) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (let y = -height; y < height; y += 40) {
    line(-width, y, width, y);
    fill(255, 100, 0);
    text(y, 1, y + 12);
  }
}