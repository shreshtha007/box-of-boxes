const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;
var box4;
var box5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(50,100,50,50);
    ground= new Ground(150,380,400,20);
    box2= new Box(200,50,50,50);
    box3=new Box(220,150,50,50);
    box4=new Box(250,200,50,50);
    box5=new Box(300,250,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}