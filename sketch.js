var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1800,1800);

  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83)
  bullet=createSprite(50, 200, 50,10); 
  bullet.velocityX = speed; 
  bullet.shapeColor=color(0);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);

}

function draw() {
  background("yellow");
  
  if(Collided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
    {
      wall.shapeColor = "green";
    }
   
    if(damage<10)
    {
      wall.shapeColor = "blue";
    }

  }
  drawSprites();
}

function Collided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
return false
}