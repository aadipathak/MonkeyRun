var gameState = "PLAY";
var monkey , monkey_running, monkey_collided, monkeyJ;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, rockGroup;
var sscore = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkey_collided = loadImage("sprite_3.png");
 
 
}



function setup() {
  createCanvas(800, 800);
  
 foodGroup = new Group();
 rockGroup = new Group();
  
  monkey = createSprite(100, 700, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.2;
   
  ground = createSprite(400, 760, 800, 10);
 
  
}


function draw() {
  background("white");
  if (gameState === "PLAY"){
   rock();
   food();
    
    sscore = sscore +Math.round(getFrameRate()/60);
    
    if(keyDown("space") && monkey.y >= 693.6){
      monkey.velocityY = -22;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();
      score = score+3;
    }
      if(rockGroup.isTouching(monkey)){
        gamestate = "OUT" ;
        sscore = 0; 
        score = 0;
     
        
      }
      
    
    
   
  }
       monkey.collide(ground);
  
  if(gameState === "OUT"){
    rockGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    banana.setLifetime = (-1);
    obstacle.setLifetime = (-1);
    fill("red");
    textSize(20);
    text("Monkey is Triggered", 400, 400);
    fill("blue");
    textSize(20);
    text("Press 'R' to restart", 450, 400);
  monkey.changeAnimation("sprite_0.png");
    
  }
  monkey.debug = true;
  console.log(monkey.y);
  drawSprites();

    
    if(keyDown("m") && gameState === OUT){
      gameState = PLAY;
      foodGroup.destroyEach();
      rockGroup.destroyEach();
      score = 0;
      sscore = 0;
    }
   text("Survival Time: "+sscore, 400, 20);
  text("Score:" + score, 700, 30)
}

function rock(){
  if(frameCount % 150 === 0){
    obstacle = createSprite(800, 720, 50, 50);
    obstacle.addImage("rock", obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = (-12);
    rockGroup.add(obstacle);
    
  }
  
}

function food(){
  if (frameCount% 180 == 0) {
    
    banana = createSprite(620,120, 50, 50 )
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -8;           
    banana.lifetime = 220;
    foodGroup.add(banana);
    banana.y = Math.round(random(300 , 600));
  }
}
switch(score){
    case 10: monkey.scale=0.10;
       break;
    case 20: monkey.scale=0.12;
       break;
    case 30: monkey.scale=0.14;
       break;
    case 40:monkey.scale=0.16;
       break; 
    case 50:monkey.scale=0.18;
       break;
    case 60:monkey.scale=0.20;  
       break;
    case 70:monkey.scale=0.22;
       break;
    case 80:monkey.scale=0.24;
       break;
         }






