var backgroundImg;
var king,kingImg,princess,princessImg,wolf,wolfImg;
var gameState=1;

function preload(){
backgroundImg=loadImage("Images/Bg3.jpg")
kingImg=loadImage("Images/King.png")
princessImg=loadImage("Images/Princess.png")
wolfImg=loadImage("Images/wolf1.png");

}


function setup(){
createCanvas(1350,800);
 king=createSprite(1200,700);
king.addImage(kingImg);
king.scale=0.4;
//king.debug=true;
king.setCollider("circle",0,0,200);

princess=createSprite(75,165);
princess.addImage(princessImg);
princess.scale=0.20;
//princess.debug=true;
princess.setCollider("rectangle",0,0,380,400); 

wolf=createSprite(650,550,50,50);
wolf.addImage(wolfImg);
wolf.scale=0.3;
//wolf.debug=true;
wolf.setCollider("rectangle",0,0,280,300); 

wolf1=createSprite(1060,430,50,50);
wolf1.addImage(wolfImg);
wolf1.scale=0.4;
//wolf1.debug=true;
wolf1.setCollider("rectangle",0,0,280,300); 


edges=createEdgeSprites();
}
function draw(){
background(backgroundImg);
drawSprites();
princess.collide(edges);
//bouncing();
if(keyDown(UP_ARROW)){
    princess.y=princess.y-20;
}
if(keyDown(DOWN_ARROW)){
    princess.y=princess.y+20;
}
if(keyDown(RIGHT_ARROW)){
    princess.x=princess.x+20;
}
if(keyDown(LEFT_ARROW)){
    princess.x=princess.x-20;
}
if(princess.isTouching(wolf)||princess.isTouching(wolf1)){
    princess.x=75;
    princess.y=175;
}
if(gameState===1){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 1",550,100);
    drawWalls1();
    if(princess.isTouching(king)){
        textSize(50);
        textFont("Comic Sans MS");
        stroke("white");
        fill("white");
        text("Congratulations!",500,300);
        text("You completed Level 1!",450,400);
        text("Press Enter to continue!",450,500);
        if(keyDown("enter")){
            gameState=2;
            princess.x=75;
            princess.y=175;
        }
        
}
}
else if(gameState===2){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 2",550,100);
    
    drawWalls2();
    if(princess.isTouching(king)){
        textSize(50);
        textFont("Comic Sans MS");
        stroke("white");
        fill("white");
        text("Congratulations!",500,300);
        text("You completed Level 2!",450,400);
        text("Press Enter to continue!",450,500);
        if(keyDown("enter")){
            gameState=3;
            princess.x=75;
            princess.y=175;
        }
    }
    
}
else if(gameState===3){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 3",550,100);
    
    drawWalls3();
    if(princess.isTouching(king)){
        textSize(50);
        textFont("Comic Sans MS");
        stroke("white");
        fill("white");
        text("Congratulations!",500,300);
        text("You completed Level 3!",450,400);
        text("Press Enter to continue!",450,500);
        if(keyDown("enter")){
            gameState=4;
            princess.x=75;
            princess.y=175;
        }
    }
}
else if(gameState===4){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 4",550,100)
    
    drawWalls4();
    if(princess.isTouching(king)){
        textSize(50);
        textFont("Comic Sans MS");
        stroke("white");
        fill("white");
        text("Congratulations!",500,300);
        text("You won the game!",450,500);
        
    }
}


}
function drawWalls1(){
   wall = createSprite(650, 500,100,10);
   wall.shapeColor="rgb(170,190,60)";

   wall1 = createSprite(1150, 180,10,200);
   wall1.shapeColor="rgb(170,190,60)";
   wall2 = createSprite(850, 320,10,250);
   wall2.shapeColor="rgb(170,190,60)";
   wall3 = createSprite(1080, 365,150,10);
   wall3.shapeColor="rgb(170,190,60)";
   wall4 = createSprite(400, 680,300,10);
   wall4.shapeColor="rgb(170,190,60)";
   wall5 = createSprite(900, 600,155,10);
   wall5.shapeColor="rgb(170,190,60)";
   
   wall6 = createSprite(1150, 480,10,240);
   wall6.shapeColor="rgb(170,190,60)";
   wall7 = createSprite(550, 260,100,10);
   wall7.shapeColor="rgb(170,190,60)";
   wall8 = createSprite(500, 340,10,270);
   wall8.shapeColor="rgb(170,190,60)";
   wall9 = createSprite(700, 525,10,280);
   wall9.shapeColor="rgb(170,190,60)";
   wall10 = createSprite(300, 450,10,200);
   wall10.shapeColor="rgb(170,190,60)";
   
   wall11 = createSprite(300, 150,150,10);
   wall11.shapeColor="rgb(170,190,60)";
   wall12 = createSprite(120, 430,10,350);
   wall12.shapeColor="rgb(170,190,60)";
   
    princess.collide(wall);
    princess.collide(wall1);
    princess.collide(wall2);
    princess.collide(wall3);
    princess.collide(wall4);
    princess.collide(wall5);
    princess.collide(wall6);
    princess.collide(wall7);
    princess.collide(wall8);
    princess.collide(wall9);
    princess.collide(wall10);
    princess.collide(wall11);
    princess.collide(wall12);
   
}

function drawWalls2() {
   
   wall13 = createSprite(820, 120,300,10);
   wall13.shapeColor="rgb(170,190,60)";
   //wall14 = createSprite(500, 500,225,10);
  // wall14.shapeColor="red";
   wall15 = createSprite(410, 400,120,10);
   wall15.shapeColor="rgb(170,190,60)";
   wall16 = createSprite(865, 730,100,10);
   wall16.shapeColor="rgb(170,190,60)";
   wall17 = createSprite(1000,520 ,80,10);
   wall17.shapeColor="rgb(170,190,60)";
  // wall18 = createSprite(640, 400,120,10);
  // wall18.shapeColor="yellow";
    princess.collide(wall);
    princess.collide(wall1);
    princess.collide(wall2);
    princess.collide(wall3);
    princess.collide(wall4);
    princess.collide(wall5);
    princess.collide(wall6);
    princess.collide(wall7);
    princess.collide(wall8);
    princess.collide(wall9);
    princess.collide(wall10);
    princess.collide(wall11);
    princess.collide(wall12);
   princess.collide(wall13);
  
   princess.collide(wall15);
   princess.collide(wall16);
   princess.collide(wall17);
}

function drawWalls3(){
   wall18 = createSprite(700,380,120,10);
   wall18.shapeColor="rgb(170,190,60)";
   wall19 = createSprite(450,630,10,100);
   wall19.shapeColor="rgb(170,190,60)";
   wall20 = createSprite(1000,200,100,10);
   wall20.shapeColor="rgb(170,190,60)";
   
   princess.collide(wall);
   princess.collide(wall1);
   princess.collide(wall2);
   princess.collide(wall3);
   princess.collide(wall4);
   princess.collide(wall5);
   princess.collide(wall6);
   princess.collide(wall7);
   princess.collide(wall8);
   princess.collide(wall9);
   princess.collide(wall10);
   princess.collide(wall11);
   princess.collide(wall12);
    princess.collide(wall13);
    
    princess.collide(wall15);
    princess.collide(wall16);
    princess.collide(wall17);
    
   princess.collide(wall18);
   princess.collide(wall19);
   princess.collide(wall20);
   
}

function drawWalls4(){
    wall21 = createSprite(260,550,90,10);
    wall21.shapeColor="rgb(170,190,60)";
    wall22 = createSprite(825,600,10,100);
    wall22.shapeColor="rgb(170,190,60)";

    princess.collide(wall);
    princess.collide(wall1);
    princess.collide(wall2);
    princess.collide(wall3);
    princess.collide(wall4);
    princess.collide(wall5);
    princess.collide(wall6);
    princess.collide(wall7);
    princess.collide(wall8);
    princess.collide(wall9);
    princess.collide(wall10);
    princess.collide(wall11);
    princess.collide(wall12);
    princess.collide(wall13);
    
    princess.collide(wall15);
    princess.collide(wall16);
    princess.collide(wall17);
    
   princess.collide(wall18);
   princess.collide(wall19);
   princess.collide(wall20);
   princess.collide(wall21);
   princess.collide(wall22);
}


