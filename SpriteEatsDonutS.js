let spriteX = 0;
let spriteY = 0;
let itemX = 0
let itemY = 0
let itemDiam = 100
let notEaten;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
let d = dist(spriteX, spriteY, itemX, itemY)
itemX = random(300)
itemY = random(300)
notEaten = true

}

function draw() {
  background("turquoise");
let d = dist(spriteX-50, spriteY-30, itemX, itemY)
  addItem(itemX, itemY, 1);
  addSprite(spriteX, spriteY, 0.8);
  
if (d < 30){
  addSprite2(spriteX, spriteY, 0.8)
  notEaten = false
 for(let eatenDonuts = 0; eatenDonuts < 5; eatenDonuts++){addItem(itemX, itemY, 1);}
}

  
  //console.log("distance is" + d)
}

function addItem(x, y, size) {
 if (notEaten == true){
  push();
  translate(x, y);
  scale(size);
  fill(245, 189, 5);
  ellipse(100, 100, 40, 40);
  fill("turquoise");
  ellipse(100, 100, 20, 20);
  pop();
 }
}

function addSprite(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //legs
  fill(37, 46, 82);
  rect(40, 100, 15, 50);
  rect(60, 100, 15, 50);
  //body
  fill("red");
  rect(50, 70, 50, 50, 15, 15, 0, 0);
  //head
  fill(237, 163, 66);
  ellipse(50, 30, 40, 40);
  //eyes
  fill("black");
  ellipse(42, 25, 8, 8);
  ellipse(56, 25, 8, 8);
  rect(50, 40, 20, 10, 10, 10);
  
  //movement
  if (keyIsDown(LEFT_ARROW)) {
    spriteX -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spriteX += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    spriteY -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spriteY += 3;
  }
 
  pop();
}
function addSprite2(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //legs
  fill(37, 46, 82);
  rect(40, 100, 15, 50);
  rect(60, 100, 15, 50);
  //body
  fill("red");
  rect(50, 70, 50, 50, 15, 15, 0, 0);
  //head
  fill(237, 163, 66);
  ellipse(50, 30, 40, 40);
  //eyes
  fill("black");
  ellipse(42, 25, 8, 8);
  ellipse(56, 25, 8, 8);
  rect(50, 40, 20, 10, 10, 10);
  //arms
  fill("red")
  rect(14,60,25,10)
  rect(86,60,25,10)
  pop()
}

