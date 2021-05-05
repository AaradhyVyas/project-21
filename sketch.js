var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "pink";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "yellow";
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY=2;
    ball.velocityX=-9;

}

function draw() {
    background("red");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "pink";
        music.play();
        ball.velocityY = -4;
        ball.velocityX = -4;
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
         ball.velocityY = 6;
        ball.velocityY = -6;
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }

    drawSprites();
}
