var fighter,zombies,name;
var gamestate="instructions";

function preload(){
    fighterKilling=loadAnimation("Akshit-game-main/cop1.png","Akshit-game-main/cop2.png","Akshit-game-main/cop3.png","Akshit-game-main/cop4.png");
    zombieImage=loadImage("zombiecropped.png");
}

function setup(){
    createCanvas(1200,600);
    fighter=createSprite(50,530,10,10);
    form = new Form();
    fighter.addAnimation("fighter",fighterKilling);
    fighter.scale=0.3;
    fighter.pause()
    
}

function draw(){
   

if(gamestate=="instructions"){
    background("lightgreen");
    
    textSize(50);
    fill ("red");
    text("ZOMBIEGAME",displayWidth/2-200,100);

    textSize(30);
    fill ("black");
    text("Game rules",displayWidth/8,150);

    text("1.press right arrow to start",displayWidth/8,200);
    text("2.press enter to shoot",displayWidth/8,250);
    text("3.kill the zombies to score runs",displayWidth/8,300);

    form.display(); 

if(keyDown("right")){
    gamestate="begin";
}

}

if(gamestate=="begin"){
    background("yellow");
    
        
    
  
    
  

    if(keyDown("space")){
        gamestate="play"
    }
    textSize(20);
    fill (0);
    text("Press space to move into the game",50,50);
    //hide the enter box
    //hide the play box
    //rectify the greeting 
}

if(gamestate=="play"){
    background("black");

    if(keyWentDown("k")){
        fighter.play()
    }
   
    if(keyWentUp("k")){
        fighter.pause()
    }

    spawnZombies()
    drawSprites(); 
}

  
}

function spawnZombies(){
    if(frameCount % 150==0){
        var zombie=createSprite(random(100,1000),random(100,300),10,10);
        zombie.velocityX=-4;
        zombie.addImage(zombieImage);
        zombie.scale=0.5
    }
}


















