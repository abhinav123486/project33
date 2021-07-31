var snowAnimation,snowFallObj;
function preload() {
  snowAnimation = loadAnimation("snowFall1.png","snowFall1.png","snowFall1.png","snowFall1.png","snowFall1.png","snowFall2.png","snowFall2.png","snowFall2.png","snowFall2.png","snowFall2.png","snowFall3.png","snowFall3.png","snowFall3.png","snowFall3.png","snowFall3.png");
}

function setup() {
  createCanvas(800,400);
  snowFallObj = createSprite(400, 200, 20, 20);
  snowFallObj.addAnimation("snow",snowAnimation);
}

function draw() {
  background(255, 255, 255);  
  drawSprites();
}