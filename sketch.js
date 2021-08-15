var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1,wall2,wall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
  

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   
	 wall11=createSprite(500,600,20,100)
	 wall11.shapeColor="red"
	 wall1 = Bodies.rectangle(500,600,20,100)
	 World.add(world, wall1)
	
	 wall12=createSprite(300,600,20,100)
	 wall12.shapeColor="red"
	 wall2 = Bodies.rectangle(300,600,20,100)
	 World.add(world, wall2)
	

	 wall13=createSprite(400,650,220,20)
	 wall13.shapeColor="red"
	 wall3 = Bodies.rectangle(400,650,220,20)
	 World.add(world, wall3)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false)
    packageBody.restitution=0.1
  }
}



