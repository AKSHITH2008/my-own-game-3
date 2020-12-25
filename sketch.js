

function preload(){
    copanime= loadAnimation("cop1.png","cop2.png")
    scneimg= loadImage ("night.jpeg")
}

function setup(){
    createCanvas(1200,1200)
    back= createSprite (200,200);
    back.addImage(scneimg)
    back.scale=3;
    cop=createSprite(200,200)
    cop.addAnimation("cop",copanime)
    cop.scale=0.5;

}

function draw(){

    drawSprites();

}