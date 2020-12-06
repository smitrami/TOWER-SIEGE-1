const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//create variables.
var engine, world;
var stand1, stand2;
var ground;
var stone, stone_img, chain;
var rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8, rect9, rect10, rect11, rect12;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9, blocks10, blocks11;
var rectangle1, rectangle2, rectangle3, rectangle4, rectangle5, rectangle6, rectangle7;
var rectangle8, rectangle9, rectangle10, rectangle11, rectangle12, rectangle13, rectangle14;
var rectangle15, rectangle16, rectangle17, rectangle18, rectangle19, rectangle20, rectangle21, rectangle22;
function preload() {
    //load stone img.
    stone_img = loadImage("polygon.png");
}
function setup() {
    var canvas = createCanvas(3000, 450);
    engine = Engine.create();
    world = engine.world;
    //create ground.
    ground = new Ground(750, 445, 3000, 8);
    //create stand1 & stand2.
    stand1 = new Ground(500, 250, 300, 10);
    stand2 = new Ground(1000, 200, 250, 10);
    //create stone.
    stone = new Polygon(100, 100, 50);
    //create chain.
    chain = new Sling(stone.body, { x: 100, y: 100 });
    //stand1's level three.
    rect1 = new Box(360, 100, 20, 50);
    rect2 = new Box(385, 100, 20, 50);
    rect3 = new Box(410, 100, 20, 50);
    rect4 = new Box(435, 100, 20, 50);
    rect5 = new Box(460, 100, 20, 50);
    rect6 = new Box(485, 100, 20, 50);
    rect7 = new Box(510, 100, 20, 50);
    rect8 = new Box(535, 100, 20, 50);
    rect9 = new Box(560, 100, 20, 50);
    rect10 = new Box(585, 100, 20, 50);
    rect11 = new Box(610, 100, 20, 50);
    rect12 = new Box(635, 100, 20, 50);
    //level two.
    block1 = new Box(370, 50, 20, 50);
    block2 = new Box(390, 50, 20, 50);
    block3 = new Box(410, 50, 20, 50);
    block4 = new Box(430, 50, 20, 50);
    block5 = new Box(450, 50, 20, 50);
    block6 = new Box(470, 50, 20, 50);
    block7 = new Box(490, 50, 20, 50);
    block8 = new Box(510, 50, 20, 50);
    block9 = new Box(530, 50, 20, 50);
    block10 = new Box(550, 50, 20, 50);
    block11 = new Box(570, 50, 20, 50);
    block12 = new Box(590, 50, 20, 50);
    block13 = new Box(610, 50, 20, 50);
    //top.
    blocks1 = new Box(380, 10, 20, 50);
    blocks2 = new Box(400, 10, 20, 50);
    blocks3 = new Box(420, 10, 20, 50);
    blocks4 = new Box(440, 10, 20, 50);
    blocks5 = new Box(460, 10, 20, 50);
    blocks6 = new Box(480, 10, 20, 50);
    blocks7 = new Box(500, 10, 20, 50);
    blocks8 = new Box(520, 10, 20, 50);
    blocks9 = new Box(540, 10, 20, 50);
    blocks10 = new Box(560, 10, 20, 50);
    blocks11 = new Box(580, 10, 20, 50);
    //stand2's level three.
    rectangle1 = new Box(900, 150, 30, 40);
    rectangle2 = new Box(930, 150, 30, 40)
    rectangle3 = new Box(960, 150, 30, 40);
    rectangle4 = new Box(990, 150, 30, 40)
    rectangle5 = new Box(1020, 150, 30, 40);
    rectangle6 = new Box(1050, 150, 30, 40);
    rectangle7 = new Box(1080, 150, 30, 40);
    //level two.
    rectangle8 = new Box(900, 100, 25, 40);
    rectangle9 = new Box(930, 100, 30, 40);
    rectangle10 = new Box(960, 100, 30, 40);
    rectangle11 = new Box(990, 100, 30, 40);
    rectangle12 = new Box(1020, 100, 30, 40);
    rectangle13 = new Box(1050, 100, 30, 40);
    rectangle14 = new Box(1080, 100, 30, 40);
    //top.
    rectangle15 = new Box(930, 50, 30, 40);
    rectangle16 = new Box(960, 50, 30, 40);
    rectangle17 = new Box(990, 50, 30, 40);
    rectangle18 = new Box(1020, 50, 30, 40);
    rectangle19 = new Box(1050, 50, 30, 40);
    Engine.run(engine);
}
function draw() {
    background("#7241BE");
    Engine.update(engine);
    //text.
    push();
    fill("cyan");
    stroke("black");
    strokeWeight(2);
    textSize(35);
    text("Press space to get a second chance to play ", 180, 40);
    pop();
    chain.display();
    fill("black");
    ground.display();
    fill("#F74473")
    stand1.display();
    stand2.display();
    stone.display();
    //display stand1's level 3.
    fill("cyan");
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    rect10.display();
    rect11.display();
    rect12.display();
    //display level2.
    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    //display top.
    fill("purple");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();
    blocks10.display();
    blocks11.display();
    //dispaly stand2's level 3.
    fill("cyan");
    rectangle1.display();
    rectangle2.display();
    rectangle3.display();
    rectangle4.display();
    rectangle5.display();
    rectangle6.display();
    rectangle7.display();
    //display level 2.
    fill("pink");
    rectangle8.display();
    rectangle9.display();
    rectangle10.display();
    rectangle11.display();
    rectangle12.display();
    rectangle13.display();
    rectangle14.display();
    //display top level.
    fill("purple");
    rectangle15.display();
    rectangle16.display();
    rectangle17.display();
    rectangle18.display();
    rectangle19.display();
    drawSprites();
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
    chain.fly();

}
function keyPressed() {
    if (keyCode === 32) {
        chain.attach(stone.body);
    }

}