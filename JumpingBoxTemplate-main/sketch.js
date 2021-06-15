var canvas;
var music;
var platformB, platformG, platformR, platformY;
var box
var edges 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    platformB = createSprite(100, 550, 150, 10);
    platformG = createSprite(300, 550, 150, 10)
    platformR = createSprite(500, 550, 150, 10);
    platformY = createSprite(700, 550, 150, 10);
    box = createSprite((random(20, 750)), 200, 30, 30);
    platformB.shapeColor = "blue";
    platformG.shapeColor = "green";
    platformR.shapeColor = "red";
    platformY.shapeColor = "yellow";
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 2;
}


function draw() {
    background(rgb(220,150,255));
    if (box.isTouching(platformB)) {
        colorswap(box,platformB);

    }
    if (box.isTouching(platformG)) {
        colorswap(box,platformG);
    }
    if (box.isTouching(platformR)) {
        colorswap(box,platformR);
    }
    if (box.isTouching(platformY)) {
        colorswap(box,platformY);
    }
    edges = createEdgeSprites();
    box.bounceOff(edges);
    

    drawSprites();  
}


function colorswap(box, colorbox) {
    box.shapeColor = colorbox.shapeColor;
    box.bounceOff(colorbox);
}