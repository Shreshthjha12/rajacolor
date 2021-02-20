var box1,box2



function setup() {
  createCanvas(800,400);
  box1=createSprite(100,100,50,50)
  box1.shapeColor="blue"

  box2=createSprite(200,60,50,50)
  box2.shapeColor="blue"
}

function draw() {
  background("yellow");  
  box2.y=mouseY
  box2.x=mouseX

  if(box2.x-box1.x<50 && box1.x-box2.x<50 && box2.y-box1.y<50 && box1.y-box2.y<50){
    box1.shapeColor="green"
    box2.shapeColor="green"
  }
  else{
    box2.shapeColor="blue"
    box2.shapeColor="blue"
  }

  console.log(box2.y-box1.y)

  drawSprites();
}