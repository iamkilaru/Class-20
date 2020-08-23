var moving, fixed;

function setup() {
  createCanvas(1200,400);
  moving = createSprite(400, 200, 50, 80);
  fixed = createSprite(200, 200, 80, 50);

  fixed.debug = true;
  moving.debug = true;

  moving.velocityX = -5;
  fixed.velocityX = 5;
}

function draw() {
  background(0); 
  
  //moving.x = mouseX;
  //moving.y = mouseY;

  //DETECTING COLLISION
  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2){
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
  else {
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }
  //BOUNCING OFF
  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.x - moving.x <= moving.width/2 + fixed.width/2){
    moving.velocityX=moving.velocityX*(-1);
    fixed.velocityX=fixed.velocityX*(-1);
    }

  if(moving.y - fixed.y <= moving.height/2 + fixed.height/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2){
      moving.velocityY=moving.velocityY*(-1);
      fixed.velocityY=fixed.velocityY*(-1);
    }
  drawSprites();
}

/*
ALGORITHMS
- the actual logic to solve a problem
- pre-defined algorithms: - isTouching() 
                          - bounce()

DETECTING COLLISION

*/