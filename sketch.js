var box1,box2,box3,box4,box5,box6,box7;


function setup() {
  createCanvas(800,400);
 box1=createSprite(400,299,100,200);
 box2=createSprite(295,299,100,250);
 box3=createSprite(505,299,100,250);
 box4=createSprite(215,299,50,300);
 box5=createSprite(585,299,50,300);
 box6=createSprite(635,299,20,500);
 box7=createSprite(165,299,20,500);

}

function draw() {
  background(0);  
tri = triangle(400,100,350,195,450,195);
tri2 = triangle(585,100,553,147,614,147);
tri2 = triangle(215,100,183,147,244,147);
  drawSprites();
}