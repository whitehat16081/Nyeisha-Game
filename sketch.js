var backgroundImg;
var king,kingImg,princess,princessImg,wolf,wolfImg;
function preload(){
backgroundImg=loadImage("Images/Bg3.jpg")
kingImg=loadImage("Images/King.png")
princessImg=loadImage("Images/Princess.png")
wolfImg=loadImage("Images/wolf.png")
}
function setup(){
createCanvas(1350,800);
 king=createSprite(1200,700);
king.addImage(kingImg);
king.scale=0.4;
 princess=createSprite(75,165);
princess.addImage(princessImg);
princess.scale=0.20;

 /*wall1=createSprite(500,100,250,7);
 wall1.shapeColor="rgb(170,190,60)";
 wall2=createSprite(375,250,7,150);
 wall2.shapeColor="rgb(170,190,60)";
 wall3=createSprite(200,250,7,100);
 wall3.shapeColor="rgb(170,190,60)";*/
var wall = createSprite(800, 700,100,10);
wall.shapeColor="rgb(170,190,60)";
var wall1 = createSprite(1150, 180,10,200);
wall1.shapeColor="rgb(170,190,60)";
var wall2 = createSprite(800, 320,10,100);
wall2.shapeColor="rgb(170,190,60)";
var wall3 = createSprite(1080, 365,150,10);
wall3.shapeColor="rgb(170,190,60)";
var wall4 = createSprite(400, 680,300,10);
wall4.shapeColor="rgb(170,190,60)";
var wall5 = createSprite(970, 170,155,10);
wall5.shapeColor="rgb(170,190,60)";

var wall6 = createSprite(1150, 480,10,240);
wall6.shapeColor="rgb(170,190,60)";
var wall7 = createSprite(550, 260,100,10);
wall7.shapeColor="rgb(170,190,60)";
var wall8 = createSprite(500, 340,10,170);
wall8.shapeColor="rgb(170,190,60)";
var wall9 = createSprite(845, 655,10,100);
wall9.shapeColor="rgb(170,190,60)";
var wall10 = createSprite(720, 550,10,155);
wall10.shapeColor="rgb(170,190,60)";

var wall11 = createSprite(800, 500,50,10);
wall11.shapeColor="rgb(170,190,60)";
var wall12 = createSprite(120, 430,10,350);
wall12.shapeColor="rgb(170,190,60)";
var wall13 = createSprite(320, 100,300,10);
wall13.shapeColor="rgb(170,190,60)";
var wall14 = createSprite(500, 500,225,10);
wall14.shapeColor="rgb(170,190,60)";
var wall15 = createSprite(610, 545,10,100);
wall15.shapeColor="rgb(170,190,60)";

var wall16 = createSprite(190, 600,150,10);
wall16.shapeColor="rgb(170,190,60)";
var wall17 = createSprite(300,220 ,120,10);
wall17.shapeColor="rgb(170,190,60)";
var wall18 = createSprite(640, 400,120,10);
wall18.shapeColor="rgb(170,190,60)";


}
function draw(){
background(backgroundImg);
if(keyDown(UP_ARROW)){
    princess.y=princess.y-5;
}
if(keyDown(DOWN_ARROW)){
    princess.y=princess.y+5;
}
if(keyDown(RIGHT_ARROW)){
    princess.x=princess.x+5;
}
if(keyDown(LEFT_ARROW)){
    princess.x=princess.x-5;
}
drawSprites();
}