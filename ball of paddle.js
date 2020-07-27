var ball,paddle;
var ballImage;

function preload() {
  ballImage= loadImage("ball.png");

  /* preload your images here of the ball and the paddle */
  
}
function setup() {
  createCanvas(400, 400);
  
  ball= createSprite(222,344,10,10);
  paddle= createSprite(34,200,10,100);
  ball.addImage("ball.png",ballImage);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball.scale = 0.15;
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background("white");
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[1]);
  
  if(keyDown("space")){
    ball.velocityX=-7;
    ball.velocityY=7;
  }
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
    text("Press Space to start",200,10);
   
    if(ball.x<20){
      text("LOSE",200,200);
    }
  
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW)){
    paddle.velocityY=-20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.velocityY=20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}