var h,m,s
var hangle,mangle,sangle
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
  
}

function draw() {
  background(0); 
  
  translate(250,250);
  rotate(-90)
  h = hour()
  m = minute()
  s = second()
  
  mangle = map (m,0,60,0,360)
  sangle = map (s,0,60,0,360)
  hangle = map (h % 12,0,12,0,360)
  
  push()
  rotate(mangle)
  stroke("blue")
  strokeWeight(3)
  line(0,0,85,0)
  pop()

  push()
  rotate(sangle)
  stroke("green")
  strokeWeight(2.5)
  line(0,0,60,0)
  pop()

  push()
  rotate(hangle)
  stroke("red")
  strokeWeight(5)
  line(0,0,45,0)
  pop()
  

  noFill()
  strokeWeight(3)
  stroke("blue")
  arc(0,0,310,310,0,mangle)
  
  
  stroke("green")
  strokeWeight(2.5)
  arc(0,0,300,300,0,sangle)

  stroke("red")
  strokeWeight(5)
  arc(0,0,350,350,hangle)
}
